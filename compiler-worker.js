import { compile } from "https://cdn.jsdelivr.net/npm/browsercc@0.1.1/dist/index.js";
import { WASI, File, OpenFile, ConsoleStdout } from "https://esm.sh/@bjorn3/browser_wasi_shim@0.4.2";

self.onmessage = async (event) => {
  const { source, input = "", standard = "c++17" } = event.data || {};
  let runtimeOutput = "";
  let compileOutput = "";
  try {
    self.postMessage({ type: "status", message: "Compiler dimuat; sedang mengompilasi kode…" });
    const flags = ["-O0", "-Wall", "-Wextra", `-std=${standard}`, "-fdiagnostics-color=never", "-fno-exceptions"];
    const result = await compile({ source, fileName: "main.cpp", flags });
    compileOutput = result.compileOutput || "";

    if (!result.module) {
      self.postMessage({ type: "result", ok: false, compileOutput: compileOutput || "Kompilasi gagal. Tidak ada modul WebAssembly yang dihasilkan.", runtimeOutput: "", error: "" });
      return;
    }

    self.postMessage({ type: "status", message: "Kode berhasil dikompilasi; sedang menjalankan program…" });
    const encoder = new TextEncoder();
    const inputText = input.length && !input.endsWith("\n") ? input + "\n" : input;
    const stdin = encoder.encode(inputText);
    const decoder = new TextDecoder("utf-8");
    const printOutput = (data) => { runtimeOutput += decoder.decode(data); };
    const fds = [
      new OpenFile(new File(stdin)),
      new ConsoleStdout(printOutput),
      new ConsoleStdout(printOutput)
    ];
    const wasi = new WASI([], [], fds);
    const instance = await WebAssembly.instantiate(result.module, {
      wasi_snapshot_preview1: wasi.wasiImport
    });
    wasi.start(instance);
    self.postMessage({ type: "result", ok: true, compileOutput, runtimeOutput, error: "" });
  } catch (error) {
    const message = error && (error.stack || error.message) ? (error.stack || error.message) : String(error);
    self.postMessage({ type: "result", ok: false, compileOutput, runtimeOutput, error: message });
  }
};
