import { compile } from "https://cdn.jsdelivr.net/npm/browsercc@0.1.1/dist/index.js";
import { WASI, File, OpenFile, ConsoleStdout } from "https://esm.sh/@bjorn3/browser_wasi_shim@0.4.2";

const QUEUE_CAPACITY = 65536;

class SharedQueueStdin extends OpenFile {
  constructor(sharedBuffer) {
    super(new File(new Uint8Array(0)));
    this.header = new Int32Array(sharedBuffer, 0, 4);
    this.queue = new Uint8Array(sharedBuffer, 16);
  }

  fd_read(size) {
    if (size <= 0) return { ret: 0, data: new Uint8Array(0) };
    while (true) {
      const write = Atomics.load(this.header, 0);
      const read = Atomics.load(this.header, 1);
      const available = write - read;

      if (available > 0) {
        const count = Math.min(size, available);
        const result = new Uint8Array(count);
        for (let i = 0; i < count; i++) {
          result[i] = this.queue[(read + i) & (QUEUE_CAPACITY - 1)];
        }
        Atomics.store(this.header, 1, read + count);
        Atomics.notify(this.header, 1);
        return { ret: 0, data: result };
      }

      if (Atomics.load(this.header, 2) !== 0) {
        return { ret: 0, data: new Uint8Array(0) };
      }

      // Signal the UI that stdin is empty, then sleep until the terminal supplies a line.
      self.postMessage({ type: "waiting-input" });
      Atomics.wait(this.header, 0, write);
    }
  }
}

self.onmessage = async (event) => {
  const { source, input = "", standard = "c++17", sharedInput = null, testCases = null } = event.data || {};
  let compileOutput = "";
  let runtimeOutput = "";
  let sharedHeader = sharedInput ? new Int32Array(sharedInput, 0, 4) : null;
  const stdoutDecoder = new TextDecoder("utf-8");
  const stderrDecoder = new TextDecoder("utf-8");

  const emit = (decoder, bytes) => {
    const text = decoder.decode(bytes, { stream: true });
    if (!text) return;
    runtimeOutput += text;
    self.postMessage({ type: "output", text });
  };

  try {
    self.postMessage({ type: "status", message: "Compiler dimuat; sedang mengompilasi kode…" });
    const flags = [
      "-O0",
      "-Wall",
      "-Wextra",
      "-std=" + standard,
      "-fdiagnostics-color=never",
      "-fno-exceptions"
    ];
    const result = await compile({ source, fileName: "main.cpp", flags });
    compileOutput = result.compileOutput || "";

    if (!result.module) {
      self.postMessage({
        type: "result",
        ok: false,
        compileOutput: compileOutput || "Kompilasi gagal. Tidak ada modul WebAssembly yang dihasilkan.",
        runtimeOutput: "",
        error: ""
      });
      return;
    }

    if (Array.isArray(testCases)) {
      const normalizeOutput = (value) => String(value ?? "")
        .replace(/\r\n/g, "\n")
        .trim()
        .replace(/[ \t]+/g, " ")
        .replace(/\n+/g, "\n");
      const testResults = [];

      for (let index = 0; index < testCases.length; index++) {
        const testCase = testCases[index];
        self.postMessage({
          type: "test-case-start",
          index,
          total: testCases.length,
          message: "Menjalankan test case " + (index + 1) + " dari " + testCases.length + "…"
        });

        const encoder = new TextEncoder();
        const inputText = testCase.input && !testCase.input.endsWith("\n")
          ? testCase.input + "\n"
          : (testCase.input || "");
        const stdoutParts = [];
        const stderrParts = [];
        const stdoutDecoder = new TextDecoder("utf-8");
        const stderrDecoder = new TextDecoder("utf-8");
        const fds = [
          new OpenFile(new File(encoder.encode(inputText))),
          new ConsoleStdout((bytes) => stdoutParts.push(stdoutDecoder.decode(bytes, { stream: true }))),
          new ConsoleStdout((bytes) => stderrParts.push(stderrDecoder.decode(bytes, { stream: true }))
        ];
        const wasi = new WASI([], [], fds);
        const instance = await WebAssembly.instantiate(result.module, {
          wasi_snapshot_preview1: wasi.wasiImport
        });

        let runtimeError = "";
        try {
          wasi.start(instance);
        } catch (error) {
          runtimeError = error && (error.message || String(error));
        }
        stdoutParts.push(stdoutDecoder.decode());
        stderrParts.push(stderrDecoder.decode());

        const actual = stdoutParts.join("");
        const stderr = stderrParts.join("");
        const expected = String(testCase.expected ?? "");
        const passed = !runtimeError && normalizeOutput(actual) === normalizeOutput(expected);

        testResults.push({
          index,
          input: testCase.input || "",
          expected,
          actual,
          stderr,
          runtimeError,
          passed
        });
      }

      self.postMessage({
        type: "challenge-result",
        ok: true,
        compileOutput,
        tests: testResults
      });
      return;
    }

    self.postMessage({
      type: "status",
      message: "Kode berhasil dikompilasi; menyiapkan terminal…"
    });

    const encoder = new TextEncoder();
    const inputText = input.length && !input.endsWith("\n") ? input + "\n" : input;
    const stdin = sharedInput
      ? new SharedQueueStdin(sharedInput)
      : new OpenFile(new File(encoder.encode(inputText)));
    const fds = [
      stdin,
      new ConsoleStdout((bytes) => emit(stdoutDecoder, bytes)),
      new ConsoleStdout((bytes) => emit(stderrDecoder, bytes))
    ];
    const wasi = new WASI([], [], fds);
    const instance = await WebAssembly.instantiate(result.module, {
      wasi_snapshot_preview1: wasi.wasiImport
    });

    self.postMessage({
      type: "started",
      message: sharedInput
        ? "Program berjalan. Ketik input langsung di terminal saat diperlukan."
        : "Program berjalan dengan input stdin yang disiapkan sebelum Run."
    });

    wasi.start(instance);

    const stdoutTail = stdoutDecoder.decode();
    const stderrTail = stderrDecoder.decode();
    if (stdoutTail) {
      runtimeOutput += stdoutTail;
      self.postMessage({ type: "output", text: stdoutTail });
    }
    if (stderrTail) {
      runtimeOutput += stderrTail;
      self.postMessage({ type: "output", text: stderrTail });
    }
    if (sharedHeader) {
      Atomics.store(sharedHeader, 2, 1);
      Atomics.notify(sharedHeader, 0);
    }

    self.postMessage({ type: "result", ok: true, compileOutput, runtimeOutput, error: "" });
  } catch (error) {
    if (sharedHeader) {
      Atomics.store(sharedHeader, 2, 1);
      Atomics.notify(sharedHeader, 0);
    }
    const message = error && (error.stack || error.message)
      ? (error.stack || error.message)
      : String(error);
    self.postMessage({ type: "result", ok: false, compileOutput, runtimeOutput, error: message });
  }
};
