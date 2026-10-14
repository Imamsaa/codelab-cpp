import { basicSetup, EditorView } from "codemirror";
import { cpp } from "https://esm.sh/@codemirror/lang-cpp@6.0.3";
import { oneDark } from "https://esm.sh/@codemirror/theme-one-dark@6.1.2";

const STORAGE_KEY = "codelab-cpp-source-v1";
const starterCode = `#include <iostream>
#include <string>
using namespace std;

int main() {
    string nama;
    int umur;

    cout << "Masukkan nama: ";
    cin >> nama;
    cout << "Masukkan umur: ";
    cin >> umur;

    cout << "Halo, " << nama << "!\\n";
    cout << "Tahun depan umurmu " << umur + 1 << " tahun.\\n";

    return 0;
}`;

const statusText = document.getElementById("statusText");
const statusDot = document.getElementById("statusDot");
const runBtn = document.getElementById("runBtn");
const runLabel = document.getElementById("runLabel");
const stopBtn = document.getElementById("stopBtn");
const output = document.getElementById("output");
const stdin = document.getElementById("stdin");
const loadNote = document.getElementById("loadNote");
const lineInfo = document.getElementById("lineInfo");
let activeWorker = null;
let timeoutId = null;
let runStartedAt = 0;
let runFinished = false;

let savedCode = "";
try { savedCode = localStorage.getItem(STORAGE_KEY) || ""; } catch { /* Storage may be disabled. */ }

const editor = new EditorView({
  doc: savedCode || starterCode,
  parent: document.getElementById("editor"),
  extensions: [
    basicSetup,
    cpp(),
    oneDark,
    EditorView.theme({
      "&": { height: "100%", fontSize: "13px" },
      ".cm-scroller": { overflow: "auto", fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", monospace' },
      ".cm-content": { padding: "14px 0" },
      ".cm-line": { padding: "0 12px" },
      ".cm-gutters": { minWidth: "40px" }
    }),
    EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        try { localStorage.setItem(STORAGE_KEY, update.state.doc.toString()); } catch { /* Keep editing without persistence. */ }
        updateLineInfo();
      }
    })
  ]
});

function updateLineInfo() {
  const lines = editor.state.doc.lines;
  lineInfo.textContent = `Baris ${lines}`;
}
function setStatus(message, kind = "idle") {
  statusText.textContent = message;
  statusDot.className = "status-indicator" + (kind === "busy" ? " busy" : kind === "ok" ? " ok" : kind === "error" ? " error" : "");
}
function setRunning(running) {
  runBtn.disabled = running;
  stopBtn.disabled = !running;
  runLabel.textContent = running ? "Menjalankan…" : "Jalankan";
}
function showOutput(text) {
  output.textContent = text || "Program selesai tanpa menghasilkan output.";
}
function resetRunState() {
  if (timeoutId !== null) clearTimeout(timeoutId);
  timeoutId = null;
  if (activeWorker) {
    activeWorker.terminate();
    activeWorker = null;
  }
  setRunning(false);
  loadNote.classList.remove("show");
}

function runProgram() {
  if (activeWorker) resetRunState();
  const source = editor.state.doc.toString();
  if (!source.trim()) {
    setStatus("Editor masih kosong.", "error");
    showOutput("Tidak ada kode untuk dikompilasi.");
    return;
  }

  output.textContent = "Menyiapkan compiler WebAssembly…\n\nUntuk penggunaan pertama, proses ini mungkin membutuhkan waktu karena toolchain compiler diunduh dari CDN.";
  setStatus("Menyiapkan compiler dan mengompilasi kode…", "busy");
  setRunning(true);
  loadNote.classList.add("show");
  runStartedAt = performance.now();
  runFinished = false;

  try {
    activeWorker = new Worker(new URL("./compiler-worker.js", import.meta.url), { type: "module" });
  } catch (error) {
    resetRunState();
    setStatus("Browser tidak dapat memulai Web Worker.", "error");
    showOutput(`Gagal memulai compiler worker.\n${error?.message || error}`);
    return;
  }

  timeoutId = setTimeout(() => {
    if (!activeWorker || runFinished) return;
    resetRunState();
    setStatus("Proses dihentikan karena melewati batas waktu 90 detik.", "error");
    showOutput("Batas waktu tercapai (90 detik).\n\nKemungkinan penyebab: compiler masih memuat file awal, koneksi lambat, atau program mengalami infinite loop. Coba jalankan lagi setelah compiler selesai dimuat.");
  }, 90000);

  activeWorker.onmessage = (event) => {
    const data = event.data || {};
    if (data.type === "status") {
      setStatus(data.message || "Memproses…", "busy");
      return;
    }
    if (data.type === "result") {
      runFinished = true;
      const elapsed = ((performance.now() - runStartedAt) / 1000).toFixed(2);
      resetRunState();
      const parts = [];
      if (data.compileOutput && data.compileOutput.trim()) parts.push("[Compiler]\n" + data.compileOutput.trim());
      if (data.runtimeOutput && data.runtimeOutput.trim()) parts.push("[Program output]\n" + data.runtimeOutput.replace(/\n+$/, ""));
      if (!parts.length) parts.push("Program selesai tanpa menghasilkan output.");
      if (data.error) parts.push("[Runtime error]\n" + data.error);
      showOutput(parts.join("\n\n"));
      if (data.ok) setStatus(`Selesai dalam ${elapsed} detik.`, "ok");
      else setStatus(`Kompilasi atau eksekusi gagal (${elapsed} detik). Periksa pesan di output.`, "error");
      return;
    }
  };

  activeWorker.onerror = (event) => {
    runFinished = true;
    const message = event?.message || "Kesalahan worker tidak diketahui.";
    resetRunState();
    setStatus("Compiler gagal dimuat atau terjadi kesalahan worker.", "error");
    showOutput(`${message}\n\nPastikan internet aktif dan CDN dapat diakses. Jika kamu membuka halaman dari file://, unggah ke GitHub Pages atau gunakan server lokal.`);
  };

  activeWorker.postMessage({
    source,
    input: stdin.value,
    standard: document.getElementById("standard").value
  });
}

runBtn.addEventListener("click", runProgram);
stopBtn.addEventListener("click", () => {
  resetRunState();
  setStatus("Program dihentikan oleh pengguna.", "error");
  showOutput("Eksekusi dihentikan.");
});
document.getElementById("clearBtn").addEventListener("click", () => {
  output.textContent = "";
  setStatus("Output dibersihkan.");
});
document.getElementById("downloadBtn").addEventListener("click", () => {
  const blob = new Blob([editor.state.doc.toString()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "main.cpp";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  setStatus("Kode diunduh sebagai main.cpp.", "ok");
});
document.getElementById("uploadBtn").addEventListener("click", () => document.getElementById("filePicker").click());
document.getElementById("filePicker").addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    editor.dispatch({ changes: { from: 0, to: editor.state.doc.length, insert: text } });
    setStatus(`File ${file.name} berhasil dibuka.`, "ok");
  } catch (error) {
    setStatus(`Gagal membaca file: ${error?.message || error}`, "error");
  } finally {
    event.target.value = "";
  }
});
window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    runProgram();
  }
});
// Keep Tab indentation intuitive in the stdin textarea.
stdin.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    const start = stdin.selectionStart;
    const end = stdin.selectionEnd;
    stdin.setRangeText("    ", start, end, "end");
  }
});
updateLineInfo();
