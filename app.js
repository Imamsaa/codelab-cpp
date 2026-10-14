const STORAGE_KEY = "codelab-cpp-source-v1";
const QUEUE_CAPACITY = 65536;
const starterCode = [
  "#include <iostream>",
  "#include <string>",
  "using namespace std;",
  "",
  "int main() {",
  "    string nama;",
  "    int umur;",
  "",
  "    cout << \"Masukkan nama: \";",
  "    cin >> nama;",
  "    cout << \"Masukkan umur: \";",
  "    cin >> umur;",
  "",
  "    cout << \"Halo, \" << nama << \"!\\n\";",
  "    cout << \"Tahun depan umurmu \" << umur + 1 << \" tahun.\\n\";",
  "",
  "    return 0;",
  "}"
].join("\n");

const statusText = document.getElementById("statusText");
const statusDot = document.getElementById("statusDot");
const runBtn = document.getElementById("runBtn");
const runLabel = document.getElementById("runLabel");
const stopBtn = document.getElementById("stopBtn");
const output = document.getElementById("output");
const terminalInput = document.getElementById("terminalInput");
const terminalForm = document.getElementById("terminalForm");
const sendInputBtn = document.getElementById("sendInputBtn");
const endInputBtn = document.getElementById("endInputBtn");
const terminalMode = document.getElementById("terminalMode");
const fallbackNotice = document.getElementById("fallbackNotice");
const fallbackStdin = document.getElementById("fallbackStdin");
const loadNote = document.getElementById("loadNote");
const lineInfo = document.getElementById("lineInfo");
const editorRoot = document.getElementById("editor");
const compilerDownloadBtn = document.getElementById("compilerDownloadBtn");
const compilerProgressFill = document.getElementById("compilerProgressFill");
const compilerProgressBar = document.getElementById("compilerProgressBar");
const compilerProgressLabel = document.getElementById("compilerProgressLabel");
const compilerProgressPercent = document.getElementById("compilerProgressPercent");
const compilerDownloadStatus = document.getElementById("compilerDownloadStatus");
const compilerCacheBadge = document.getElementById("compilerCacheBadge");

const COMPILER_CACHE_NAME = "codelab-compiler-assets-v1";
const COMPILER_ASSETS = [
  { name: "index.js", url: "https://cdn.jsdelivr.net/npm/browsercc@0.1.1/dist/index.js", size: 5_000, type: "text/javascript" },
  { name: "clang.js", url: "https://cdn.jsdelivr.net/npm/browsercc@0.1.1/dist/clang.js", size: 70_000, type: "text/javascript" },
  { name: "lld.js", url: "https://cdn.jsdelivr.net/npm/browsercc@0.1.1/dist/lld.js", size: 70_000, type: "text/javascript" },
  { name: "clang.wasm", url: "https://cdn.jsdelivr.net/npm/browsercc@0.1.1/dist/clang.wasm", size: 43_000_000, type: "application/wasm" },
  { name: "lld.wasm", url: "https://cdn.jsdelivr.net/npm/browsercc@0.1.1/dist/lld.wasm", size: 23_000_000, type: "application/wasm" },
  { name: "sysroot.tar", url: "https://cdn.jsdelivr.net/npm/browsercc@0.1.1/dist/sysroot.tar", size: 29_000_000, type: "application/x-tar" }
];
const EXPECTED_COMPILER_BYTES = COMPILER_ASSETS.reduce((sum, asset) => sum + asset.size, 0);
let compilerDownloadInProgress = false;

let cmEditor = null;
let plainEditor = null;
let activeWorker = null;
let timeoutId = null;
let runStartedAt = 0;
let runFinished = false;
let programActive = false;
let waitingForInput = false;
let sharedInput = null;
let sharedHeader = null;
let sharedBytes = null;
let interactiveSupported = typeof SharedArrayBuffer === "function" && window.crossOriginIsolated;

function setStatus(message, kind = "idle") {
  statusText.textContent = message;
  statusDot.className = "status-indicator" +
    (kind === "busy" ? " busy" : kind === "ok" ? " ok" : kind === "error" ? " error" : "");
}
function setRunning(running) {
  runBtn.disabled = running;
  stopBtn.disabled = !running;
  runLabel.textContent = running ? "Menjalankan…" : "Jalankan";
}
function appendOutput(text) {
  if (!text) return;
  output.textContent += text;
  output.scrollTop = output.scrollHeight;
}
function showOutput(text) {
  output.textContent = text || "";
  output.scrollTop = output.scrollHeight;
}
function sourceText() {
  return cmEditor ? cmEditor.state.doc.toString() : (plainEditor ? plainEditor.value : "");
}
function persistSource() {
  try { localStorage.setItem(STORAGE_KEY, sourceText()); } catch { /* Storage can be disabled. */ }
  updateLineInfo();
}
function updateLineInfo() {
  const lines = cmEditor ? cmEditor.state.doc.lines : (plainEditor ? plainEditor.value.split("\n").length : 1);
  lineInfo.textContent = "Baris " + lines;
}
function setSource(text) {
  if (cmEditor) {
    cmEditor.dispatch({ changes: { from: 0, to: cmEditor.state.doc.length, insert: text } });
  } else if (plainEditor) {
    plainEditor.value = text;
    persistSource();
  }
}
function setTerminalInputEnabled(enabled) {
  const canType = enabled && interactiveSupported;
  terminalInput.disabled = !canType;
  sendInputBtn.disabled = !canType;
  endInputBtn.disabled = !canType || !sharedHeader;
}
function createSharedInputQueue() {
  sharedInput = new SharedArrayBuffer(16 + QUEUE_CAPACITY);
  sharedHeader = new Int32Array(sharedInput, 0, 4);
  sharedBytes = new Uint8Array(sharedInput, 16);
}
function closeSharedInput() {
  if (!sharedHeader) return;
  Atomics.store(sharedHeader, 2, 1);
  Atomics.notify(sharedHeader, 0);
}
function enqueueInput(line) {
  if (!sharedHeader || !sharedBytes) return false;
  const bytes = new TextEncoder().encode(line);
  const write = Atomics.load(sharedHeader, 0);
  const read = Atomics.load(sharedHeader, 1);
  const used = write - read;
  if (bytes.length > QUEUE_CAPACITY - used) return false;
  for (let i = 0; i < bytes.length; i++) {
    sharedBytes[(write + i) & (QUEUE_CAPACITY - 1)] = bytes[i];
  }
  Atomics.store(sharedHeader, 0, write + bytes.length);
  Atomics.notify(sharedHeader, 0);
  return true;
}
function clearWatchdog() {
  if (timeoutId !== null) clearTimeout(timeoutId);
  timeoutId = null;
}
function armWatchdog() {
  clearWatchdog();
  if (waitingForInput || !activeWorker) return;
  timeoutId = setTimeout(() => {
    if (!activeWorker || runFinished) return;
    closeSharedInput();
    activeWorker.terminate();
    activeWorker = null;
    programActive = false;
    setTerminalInputEnabled(false);
    setRunning(false);
    loadNote.classList.remove("show");
    setStatus("Program dihentikan karena melewati batas waktu 90 detik.", "error");
    appendOutput("\n\n[Program dihentikan: batas waktu 90 detik tercapai.]");
  }, 90000);
}
function resetRunState() {
  clearWatchdog();
  closeSharedInput();
  if (activeWorker) {
    activeWorker.terminate();
    activeWorker = null;
  }
  programActive = false;
  waitingForInput = false;
  setTerminalInputEnabled(false);
  setRunning(false);
  loadNote.classList.remove("show");
}
function finishRun(data) {
  runFinished = true;
  const elapsed = ((performance.now() - runStartedAt) / 1000).toFixed(2);
  if (data.compileOutput && data.compileOutput.trim()) {
    appendOutput("\n\n[Compiler]\n" + data.compileOutput.trim());
  }
  if (data.runtimeOutput && output.textContent.trim() === "") {
    appendOutput(data.runtimeOutput);
  }
  if (data.error) appendOutput("\n\n[Runtime error]\n" + data.error);
  resetRunState();
  if (data.ok) {
    setStatus("Program selesai dalam " + elapsed + " detik.", "ok");
    appendOutput("\n\n[Program selesai dalam " + elapsed + " detik.]");
  } else {
    setStatus("Kompilasi atau eksekusi gagal (" + elapsed + " detik). Periksa terminal.", "error");
  }
}


function formatBytes(value) {
  if (!Number.isFinite(value) || value < 0) return "0 B";
  if (value < 1024) return value + " B";
  const units = ["KB", "MB", "GB"];
  let size = value / 1024;
  let unit = units[0];
  for (let i = 1; size >= 1024 && i < units.length; i++) {
    size /= 1024;
    unit = units[i];
  }
  return size.toFixed(size >= 100 ? 0 : 1) + " " + unit;
}

function setCompilerProgress(percent, label, status) {
  const safePercent = Math.max(0, Math.min(100, percent));
  compilerProgressFill.style.width = safePercent + "%";
  compilerProgressBar.setAttribute("aria-valuenow", String(Math.round(safePercent)));
  compilerProgressPercent.textContent = Math.round(safePercent) + "%";
  compilerProgressLabel.textContent = label;
  if (status !== undefined) compilerDownloadStatus.textContent = status;
}

async function getCompilerCacheStatus() {
  if (!("caches" in window)) {
    return { count: 0, cachedBytes: 0, cache: null, available: false };
  }
  const cache = await caches.open(COMPILER_CACHE_NAME);
  let count = 0;
  let cachedBytes = 0;
  for (const asset of COMPILER_ASSETS) {
    if (await cache.match(asset.url)) {
      count++;
      cachedBytes += asset.size;
    }
  }
  return { count, cachedBytes, cache, available: true };
}

async function refreshCompilerCacheState() {
  try {
    const state = await getCompilerCacheStatus();
    if (!state.available) {
      compilerCacheBadge.textContent = "Cache tidak didukung";
      setCompilerProgress(0, "Progress tidak tersedia", "Browser ini tidak mendukung Cache Storage. Compiler tetap dapat diunduh otomatis saat Run.");
      return;
    }
    const percent = Math.round((state.cachedBytes / EXPECTED_COMPILER_BYTES) * 100);
    compilerCacheBadge.textContent = state.count === COMPILER_ASSETS.length
      ? "Tersimpan di browser"
      : state.count
        ? state.count + "/" + COMPILER_ASSETS.length + " aset tersimpan"
        : "Belum disiapkan";
    compilerDownloadBtn.disabled = state.count === COMPILER_ASSETS.length || compilerDownloadInProgress;
    compilerDownloadBtn.textContent = state.count === COMPILER_ASSETS.length
      ? "Compiler tersimpan ✓"
      : state.count
        ? "Lanjutkan unduhan compiler"
        : "Unduh compiler (±95 MB)";
    if (state.count === COMPILER_ASSETS.length) {
      setCompilerProgress(100, "Compiler siap digunakan", "Semua aset compiler sudah tersimpan di cache browser. Browser dapat menghapus cache sewaktu-waktu dari pengaturan situs.");
    } else {
      setCompilerProgress(
        percent,
        state.count ? "Tersimpan " + state.count + " dari " + COMPILER_ASSETS.length + " aset" : "Belum ada pengunduhan",
        state.count
          ? formatBytes(state.cachedBytes) + " dari sekitar " + formatBytes(EXPECTED_COMPILER_BYTES) + " sudah tersimpan. Aset yang ada akan dilewati saat melanjutkan."
          : "Klik tombol Unduh compiler untuk menyimpan aset compiler besar ke cache browser."
      );
    }
  } catch (error) {
    compilerCacheBadge.textContent = "Status belum diketahui";
    compilerDownloadStatus.textContent = "Tidak dapat membaca cache browser: " + (error?.message || error);
  }
}

async function downloadAssetToCache(cache, asset, onProgress) {
  const response = await fetch(asset.url, { mode: "cors", cache: "no-cache" });
  if (!response.ok) {
    throw new Error(asset.name + " gagal diunduh (HTTP " + response.status + ").");
  }

  const chunks = [];
  let actualBytes = 0;
  if (response.body && response.body.getReader) {
    const reader = response.body.getReader();
    while (true) {
      const result = await reader.read();
      if (result.done) break;
      chunks.push(result.value);
      actualBytes += result.value.byteLength;
      onProgress(actualBytes);
    }
  } else {
    const buffer = await response.arrayBuffer();
    chunks.push(new Uint8Array(buffer));
    actualBytes = buffer.byteLength;
    onProgress(actualBytes);
  }

  const body = new Blob(chunks, { type: asset.type });
  const cachedResponse = new Response(body, {
    status: 200,
    headers: {
      "Content-Type": asset.type,
      "Access-Control-Allow-Origin": "*",
      "Cross-Origin-Resource-Policy": "cross-origin",
      "Cache-Control": "public, max-age=31536000"
    }
  });

  // Keep the original CDN URL as the key: the service worker can then intercept
  // browsercc's own fetch() calls and return the saved file instead of redownloading.
  await cache.put(asset.url, cachedResponse);
  return actualBytes;
}

async function downloadCompilerAssets() {
  if (compilerDownloadInProgress) return;
  if (!("caches" in window) || !window.fetch) {
    setCompilerProgress(0, "Unduhan tidak didukung", "Browser ini tidak menyediakan Fetch API atau Cache Storage yang diperlukan.");
    return;
  }

  compilerDownloadInProgress = true;
  compilerDownloadBtn.disabled = true;
  compilerDownloadBtn.textContent = "Sedang mengunduh…";
  compilerProgressFill.classList.remove("indeterminate");
  let transferredThisSession = 0;

  try {
    const cache = await caches.open(COMPILER_CACHE_NAME);
    const existing = new Set();
    let completedExpected = 0;
    for (const asset of COMPILER_ASSETS) {
      if (await cache.match(asset.url)) {
        existing.add(asset.url);
        completedExpected += asset.size;
      }
    }
    const missing = COMPILER_ASSETS.filter((asset) => !existing.has(asset.url));
    setCompilerProgress(
      (completedExpected / EXPECTED_COMPILER_BYTES) * 100,
      missing.length ? "Menyiapkan " + missing.length + " aset…" : "Compiler sudah siap",
      existing.size ? existing.size + " dari " + COMPILER_ASSETS.length + " aset sudah tersimpan. " : "Menyiapkan pengunduhan compiler…"
    );

    if (!missing.length) {
      setCompilerProgress(100, "Compiler sudah tersimpan", "Semua aset sudah tersedia di cache browser; tidak ada file besar yang perlu diunduh ulang.");
      compilerCacheBadge.textContent = "Tersimpan di browser";
      return;
    }

    for (let index = 0; index < missing.length; index++) {
      const asset = missing[index];
      compilerProgressFill.classList.add("indeterminate");
      compilerProgressLabel.textContent = "Mengunduh " + asset.name + "…";
      compilerDownloadStatus.textContent = "File " + (index + 1) + " dari " + missing.length + ". Aset besar dapat memerlukan waktu beberapa menit.";
      const actualBytes = await downloadAssetToCache(cache, asset, (loaded) => {
        const fileFraction = Math.min(loaded / asset.size, 0.995);
        const finishedExpected = completedExpected;
        const progress = ((finishedExpected + asset.size * fileFraction) / EXPECTED_COMPILER_BYTES) * 100;
        compilerProgressFill.classList.remove("indeterminate");
        setCompilerProgress(
          progress,
          "Mengunduh " + asset.name + " · " + formatBytes(loaded),
          "Progres keseluruhan merupakan estimasi ukuran file asli. Diterima pada file ini: " + formatBytes(loaded) + "."
        );
      });
      transferredThisSession += actualBytes;
      completedExpected += asset.size;
      existing.add(asset.url);
      setCompilerProgress(
        (completedExpected / EXPECTED_COMPILER_BYTES) * 100,
        "Selesai " + (index + 1) + " dari " + missing.length + " file",
        asset.name + " tersimpan. Data diterima sesi ini: " + formatBytes(transferredThisSession) + "."
      );
    }

    setCompilerProgress(100, "Compiler berhasil diunduh", "Semua " + COMPILER_ASSETS.length + " aset tersimpan di cache browser (" + formatBytes(transferredThisSession) + " diterima pada sesi ini). Kamu dapat mulai menjalankan C++.");
    compilerCacheBadge.textContent = "Tersimpan di browser";
    compilerDownloadBtn.textContent = "Compiler tersimpan ✓";
  } catch (error) {
    compilerCacheBadge.textContent = "Unduhan belum selesai";
    setCompilerProgress(
      parseInt(compilerProgressBar.getAttribute("aria-valuenow") || "0", 10),
      "Pengunduhan terhenti",
      (error?.message || String(error)) + " Aset yang berhasil diunduh tetap tersimpan; tekan tombol lagi untuk melanjutkan."
    );
    console.error("Compiler asset download failed:", error);
  } finally {
    compilerDownloadInProgress = false;
    compilerDownloadBtn.disabled = false;
    if (compilerDownloadBtn.textContent === "Sedang mengunduh…") {
      compilerDownloadBtn.textContent = "Lanjutkan unduhan compiler";
    }
    await refreshCompilerCacheState();
  }
}

async function initializeEditor() {
  let savedCode = "";
  try { savedCode = localStorage.getItem(STORAGE_KEY) || ""; } catch { /* Storage can be disabled. */ }

  // Render a normal textarea immediately so the editor is usable even while CDNs load.
  plainEditor = document.createElement("textarea");
  plainEditor.id = "plainEditor";
  plainEditor.spellcheck = false;
  plainEditor.autocapitalize = "off";
  plainEditor.value = savedCode || starterCode;
  plainEditor.setAttribute("aria-label", "Editor kode C++");
  editorRoot.replaceChildren(plainEditor);
  let editedBeforeEnhancement = false;
  plainEditor.addEventListener("input", () => {
    editedBeforeEnhancement = true;
    persistSource();
  });
  plainEditor.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const start = plainEditor.selectionStart;
      const end = plainEditor.selectionEnd;
      plainEditor.setRangeText("    ", start, end, "end");
    }
  });
  updateLineInfo();

  try {
    // Resolve every CodeMirror package through the same import map to avoid duplicate state/view modules.
    const modules = await Promise.all([
      import("codemirror"),
      import("@codemirror/lang-cpp"),
      import("@codemirror/theme-one-dark")
    ]);

    // Do not replace the textarea if the user has already started typing while the CDN loaded.
    if (editedBeforeEnhancement) {
      setStatus("Editor teks siap. Kode tetap bisa diketik; editor visual tidak menggangu penulisan.");
      return;
    }

    const basicSetup = modules[0].basicSetup;
    const EditorView = modules[0].EditorView;
    const cpp = modules[1].cpp;
    const oneDark = modules[2].oneDark;
    const fallback = plainEditor;
    const initialText = fallback.value;
    fallback.remove();

    try {
      cmEditor = new EditorView({
        doc: initialText,
        parent: editorRoot,
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
            if (update.docChanged) persistSource();
          })
        ]
      });
      plainEditor = null;
      setStatus("Editor siap. Tulis kode lalu tekan Jalankan.");
    } catch (error) {
      cmEditor = null;
      plainEditor = fallback;
      editorRoot.replaceChildren(fallback);
      throw error;
    }
  } catch (error) {
    // Leave the textarea in place if the syntax-highlighting CDN is unavailable or imports conflict.
    setStatus("Editor teks siap; syntax highlighting tidak tersedia.", "error");
    console.warn("CodeMirror failed to initialize; plain editor remains active.", error);
  }
  updateLineInfo();
}
function runProgram() {
  if (activeWorker) resetRunState();
  const source = sourceText();
  if (!source.trim()) {
    setStatus("Editor masih kosong.", "error");
    showOutput("Tidak ada kode untuk dikompilasi.");
    return;
  }

  interactiveSupported = typeof SharedArrayBuffer === "function" && window.crossOriginIsolated;
  if (interactiveSupported) {
    createSharedInputQueue();
    terminalMode.textContent = "Interaktif";
    fallbackNotice.classList.remove("show");
    fallbackStdin.hidden = true;
  } else {
    sharedInput = null;
    sharedHeader = null;
    sharedBytes = null;
    terminalMode.textContent = "Mode stdin";
    fallbackNotice.classList.add("show");
    fallbackStdin.hidden = false;
  }

  showOutput("Menyiapkan compiler WebAssembly…\n");
  setStatus("Menyiapkan compiler dan mengompilasi kode…", "busy");
  setRunning(true);
  loadNote.classList.add("show");
  runStartedAt = performance.now();
  runFinished = false;
  waitingForInput = false;
  programActive = false;

  try {
    activeWorker = new Worker(new URL("./compiler-worker.js", import.meta.url), { type: "module" });
  } catch (error) {
    resetRunState();
    setStatus("Browser tidak dapat memulai Web Worker.", "error");
    appendOutput("\nGagal memulai compiler worker.\n" + (error?.message || error));
    return;
  }

  armWatchdog();
  activeWorker.onmessage = (event) => {
    const data = event.data || {};
    if (data.type === "status") {
      setStatus(data.message || "Memproses…", "busy");
      return;
    }
    if (data.type === "started") {
      programActive = true;
      waitingForInput = false;
      if (interactiveSupported) {
        setTerminalInputEnabled(true);
        terminalInput.placeholder = "Ketik input untuk cin, lalu tekan Enter…";
        terminalInput.focus();
      }
      setStatus(data.message || "Program berjalan.", "busy");
      armWatchdog();
      return;
    }
    if (data.type === "waiting-input") {
      waitingForInput = true;
      clearWatchdog();
      if (interactiveSupported) {
        setTerminalInputEnabled(true);
        terminalInput.placeholder = "Program menunggu input… ketik lalu tekan Enter";
      }
      setStatus("Program menunggu input dari terminal…", "busy");
      return;
    }
    if (data.type === "output") {
      appendOutput(data.text || "");
      if (interactiveSupported && programActive && terminalInput.disabled) {
        setTerminalInputEnabled(true);
      }
      return;
    }
    if (data.type === "result") finishRun(data);
  };

  activeWorker.onerror = (event) => {
    runFinished = true;
    resetRunState();
    setStatus("Compiler gagal dimuat atau terjadi kesalahan worker.", "error");
    appendOutput("\n\n[Kesalahan worker]\n" + (event?.message || "Kesalahan tidak diketahui.") + "\nPeriksa koneksi CDN dan Console browser.");
  };

  activeWorker.postMessage({
    source,
    standard: document.getElementById("standard").value,
    input: fallbackStdin.value,
    sharedInput
  });
}

terminalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!programActive || !interactiveSupported) return;
  const line = terminalInput.value;
  if (!enqueueInput(line + "\n")) {
    setStatus("Buffer input penuh. Tunggu program membaca input lalu coba lagi.", "error");
    return;
  }
  appendOutput(line + "\n");
  terminalInput.value = "";
  waitingForInput = false;
  terminalInput.placeholder = "Ketik input berikutnya, lalu tekan Enter…";
  setTerminalInputEnabled(true);
  terminalInput.focus();
  setStatus("Input dikirim ke program.", "busy");
  armWatchdog();
});
endInputBtn.addEventListener("click", () => {
  if (!sharedHeader || !programActive) return;
  closeSharedInput();
  endInputBtn.disabled = true;
  terminalInput.disabled = true;
  sendInputBtn.disabled = true;
  appendOutput("^D\n");
  setStatus("Input ditutup (EOF dikirim).", "busy");
});

runBtn.addEventListener("click", runProgram);
stopBtn.addEventListener("click", () => {
  if (!activeWorker) return;
  resetRunState();
  setStatus("Program dihentikan oleh pengguna.", "error");
  appendOutput("\n\n[Program dihentikan.]");
});
document.getElementById("clearBtn").addEventListener("click", () => {
  showOutput("");
  setStatus("Terminal dibersihkan.");
});
document.getElementById("downloadBtn").addEventListener("click", () => {
  const blob = new Blob([sourceText()], { type: "text/plain;charset=utf-8" });
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
    setSource(await file.text());
    setStatus("File " + file.name + " berhasil dibuka.", "ok");
  } catch (error) {
    setStatus("Gagal membaca file: " + (error?.message || error), "error");
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

if (!interactiveSupported) {
  terminalMode.textContent = "Mode stdin";
  fallbackNotice.classList.add("show");
  fallbackStdin.hidden = false;
  setStatus("Terminal siap. Mode stdin cadangan aktif; isi input sebelum Run.", "idle");
}
compilerDownloadBtn.addEventListener("click", downloadCompilerAssets);
refreshCompilerCacheState();
initializeEditor();
