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
const formatCodeBtn = document.getElementById("formatCodeBtn");
const formatCodeLabel = document.getElementById("formatCodeLabel");
let clangFormatPromise = null;
const focusModeBtn = document.getElementById("focusModeBtn");
const focusModeLabel = document.getElementById("focusModeLabel");
const appShell = document.querySelector(".shell");
let focusModeFallback = false;
const compilerDownloadBtn = document.getElementById("compilerDownloadBtn");
const compilerProgressBar = document.getElementById("compilerProgressBar") || document.querySelector('[role="progressbar"]');
const compilerProgressFill = document.getElementById("compilerProgressFill") || (() => {
  const fill = document.createElement("div");
  fill.id = "compilerProgressFill";
  if (compilerProgressBar) compilerProgressBar.appendChild(fill);
  return fill;
})();
const compilerProgressLabel = document.getElementById("compilerProgressLabel");
const compilerProgressPercent = document.getElementById("compilerProgressPercent");
const compilerDownloadStatus = document.getElementById("compilerDownloadStatus");
const compilerCacheBadge = document.getElementById("compilerCacheBadge");
const compilerDownloadSection = document.getElementById("compilerDownloadSection") || document.querySelector(".compiler-download");

const COMPILER_CACHE_NAME = "codelab-compiler-assets-v1";
const RUNTIME_CACHE_NAME = "codelab-runtime-assets-v7";
const APP_CACHE_NAME = "codelab-offline-shell-v7";
const APP_SHELL_FILES = ["index.html", "app.js", "compiler-worker.js", "coi-serviceworker.min.js"];
const OFFLINE_PROGRESS_WEIGHT = 82;
const FORMATTER_BASE_URL = "https://cdn.jsdelivr.net/npm/@wasm-fmt/clang-format@23.1.0/";
const FORMATTER_JS_URL = FORMATTER_BASE_URL + "clang-format-web.js";
const FORMATTER_WASM_URL = FORMATTER_BASE_URL + "clang-format.wasm";
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

const cppCompletionItems = [
  { label: "cout", type: "variable", info: "Menampilkan output ke terminal", apply: "cout" },
  { label: "cin", type: "variable", info: "Membaca input dari terminal", apply: "cin" },
  { label: "endl", type: "constant", info: "Baris baru dan flush output", apply: "endl" },
  { label: "getline", type: "function", info: "Membaca satu baris input", apply: "getline(cin, nama);" },
  { label: "string", type: "type", info: "Tipe data teks", apply: "string" },
  { label: "int", type: "type", info: "Bilangan bulat", apply: "int" },
  { label: "double", type: "type", info: "Bilangan pecahan presisi ganda", apply: "double" },
  { label: "float", type: "type", info: "Bilangan pecahan", apply: "float" },
  { label: "char", type: "type", info: "Satu karakter", apply: "char" },
  { label: "bool", type: "type", info: "Nilai true atau false", apply: "bool" },
  { label: "void", type: "type", info: "Fungsi tanpa nilai balik", apply: "void" },
  { label: "auto", type: "keyword", apply: "auto" },
  { label: "const", type: "keyword", apply: "const" },
  { label: "if", type: "keyword", info: "Percabangan if", apply: "if" },
  { label: "else", type: "keyword", apply: "else" },
  { label: "switch", type: "keyword", apply: "switch" },
  { label: "case", type: "keyword", apply: "case" },
  { label: "for", type: "keyword", info: "Perulangan for", apply: "for" },
  { label: "while", type: "keyword", info: "Perulangan while", apply: "while" },
  { label: "do", type: "keyword", info: "Perulangan do-while", apply: "do" },
  { label: "break", type: "keyword", apply: "break" },
  { label: "continue", type: "keyword", apply: "continue" },
  { label: "return", type: "keyword", apply: "return" },
  { label: "true", type: "constant", apply: "true" },
  { label: "false", type: "constant", apply: "false" },
  { label: "nullptr", type: "constant", apply: "nullptr" },
  { label: "std", type: "namespace", apply: "std" },
  { label: "vector", type: "type", info: "Container dinamis", apply: "vector" },
  { label: "array", type: "type", info: "Array berukuran tetap", apply: "array" },
  { label: "sort", type: "function", info: "Mengurutkan rentang", apply: "sort" },
  { label: "max", type: "function", apply: "max" },
  { label: "min", type: "function", apply: "min" },
  { label: "push_back", type: "method", apply: "push_back" },
  { label: "size", type: "method", apply: "size" },
  { label: "length", type: "method", apply: "length" },
  { label: "#include <iostream>", type: "keyword", info: "Library input/output", apply: "#include <iostream>" },
  { label: "#include <string>", type: "keyword", info: "Library std::string", apply: "#include <string>" },
  { label: "#include <vector>", type: "keyword", info: "Library vector", apply: "#include <vector>" },
  { label: "using namespace std;", type: "keyword", info: "Mengakses nama std tanpa awalan std::", apply: "using namespace std;" }
];

function cppCompletionSource(snippetCompletion) {
  const snippets = [
    snippetCompletion("int main() {\n    $0\n    return 0;\n}", {
      label: "main",
      detail: "Kerangka program C++",
      type: "snippet"
    }),
    snippetCompletion("if ($1) {\n    $0\n}", {
      label: "if block",
      detail: "Kerangka percabangan if",
      type: "snippet"
    }),
    snippetCompletion("if ($1) {\n    $2\n} else {\n    $0\n}", {
      label: "if else",
      detail: "Kerangka percabangan if-else",
      type: "snippet"
    }),
    snippetCompletion("for (int i = 0; i < $1; ++i) {\n    $0\n}", {
      label: "for loop",
      detail: "Kerangka perulangan for",
      type: "snippet"
    }),
    snippetCompletion("while ($1) {\n    $0\n}", {
      label: "while loop",
      detail: "Kerangka perulangan while",
      type: "snippet"
    }),
    snippetCompletion("cout << $0 << endl;", {
      label: "cout line",
      detail: "Menampilkan teks lalu baris baru",
      type: "snippet"
    }),
    snippetCompletion("cin >> $0;", {
      label: "cin input",
      detail: "Membaca input",
      type: "snippet"
    })
  ];
  const items = [...snippets, ...cppCompletionItems];
  return (context) => {
    const word = context.matchBefore(/[\w:#]+/);
    if (!word && !context.explicit) return null;
    if (word && word.from === word.to && !context.explicit) return null;
    const from = word ? word.from : context.pos;
    const query = word ? word.text.toLowerCase() : "";
    const options = items
      .filter((item) => !query || item.label.toLowerCase().includes(query))
      .slice(0, 30);
    return options.length ? { from, options, validFor: /^[\w:#]*$/ } : null;
  };
}

function handlePlainEditorTab(event) {
  if (!plainEditor || event.key !== "Tab") return;
  event.preventDefault();
  const start = plainEditor.selectionStart;
  const end = plainEditor.selectionEnd;
  const value = plainEditor.value;
  if (event.shiftKey) {
    const lineStart = value.lastIndexOf("\n", Math.max(0, start - 1)) + 1;
    if (value.slice(lineStart, lineStart + 4) === "    ") {
      plainEditor.setRangeText("", lineStart, lineStart + 4, "preserve");
    } else if (value[lineStart] === "\t") {
      plainEditor.setRangeText("", lineStart, lineStart + 1, "preserve");
    }
  } else {
    plainEditor.setRangeText("    ", start, end, "end");
  }
  plainEditor.dispatchEvent(new Event("input", { bubbles: true }));
}



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
  compilerProgressFill.style.width = compilerProgressFill?.classList.contains("indeterminate")
    ? "35%"
    : safePercent + "%";
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

async function getOfflineReadiness() {
  const compiler = await getCompilerCacheStatus();
  if (!compiler.available) {
    return { ready: false, reasons: ["Cache Storage tidak didukung browser."], compiler, shell: [], modules: [] };
  }

  const appCache = await caches.open(APP_CACHE_NAME);
  const shell = [];
  for (const file of APP_SHELL_FILES) {
    const url = new URL(file, location.href).href;
    if (!(await appCache.match(url, { ignoreSearch: true }))) shell.push(file);
  }

  const runtimeCache = await caches.open(RUNTIME_CACHE_NAME);
  const runtimeUrls = (await runtimeCache.keys()).map((request) => request.url);
  const requiredModules = [
    { name: "CodeMirror", test: (url) => /codemirror/i.test(url) && !/lang-cpp|theme-one-dark/i.test(url) },
    { name: "bahasa C++ untuk editor", test: (url) => /lang-cpp/i.test(url) },
    { name: "tema editor", test: (url) => /theme-one-dark/i.test(url) },
    { name: "autocomplete", test: (url) => /codemirror.*autocomplete|@codemirror\/autocomplete/i.test(url) },
    { name: "perintah indentasi", test: (url) => /codemirror.*commands|@codemirror\/commands/i.test(url) },
    { name: "runtime WASI", test: (url) => /browser_wasi_shim/i.test(url) }
  ];
  const modules = requiredModules.filter((module) => !runtimeUrls.some(module.test)).map((module) => module.name);
  if (!(await runtimeCache.match(FORMATTER_JS_URL))) modules.push("formatter C++");
  if (!(await runtimeCache.match(FORMATTER_WASM_URL))) modules.push("mesin formatter C++ (WASM)");
  const controlled = Boolean(navigator.serviceWorker && navigator.serviceWorker.controller);
  const reasons = [];
  if (compiler.count !== COMPILER_ASSETS.length) reasons.push("Compiler tersimpan " + compiler.count + "/" + COMPILER_ASSETS.length + " aset.");
  if (shell.length) reasons.push("File aplikasi belum ada di cache: " + shell.join(", ") + ".");
  if (modules.length) reasons.push("Dependensi belum tercache: " + modules.join(", ") + ".");
  if (!controlled) reasons.push("Service Worker belum mengendalikan halaman ini; muat ulang halaman setelah terdaftar.");

  return {
    ready: reasons.length === 0,
    reasons,
    compiler,
    shell,
    modules,
    runtimeAssetCount: runtimeUrls.length,
    controlled
  };
}

async function waitForServiceWorkerControl() {
  if (navigator.serviceWorker && navigator.serviceWorker.controller) return true;
  if (!("serviceWorker" in navigator)) return false;
  return await new Promise((resolve) => {
    let done = false;
    const finish = (value) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      navigator.serviceWorker.removeEventListener("controllerchange", onChange);
      resolve(value);
    };
    const onChange = () => finish(Boolean(navigator.serviceWorker.controller));
    const timer = setTimeout(() => finish(Boolean(navigator.serviceWorker.controller)), 8000);
    navigator.serviceWorker.addEventListener("controllerchange", onChange);
  });
}

async function cacheRuntimeAsset(url, label) {
  const cache = await caches.open(RUNTIME_CACHE_NAME);
  const existing = await cache.match(url);
  if (existing && existing.ok) return;

  setCompilerProgress(
    93,
    "Mengunduh " + label + "…",
    "Menyimpan aset formatter secara langsung ke Cache Storage: " + url
  );
  const response = await fetch(url, { mode: "cors" });
  if (!response.ok) {
    throw new Error(label + " gagal diunduh (HTTP " + response.status + ").");
  }
  await cache.put(url, response.clone());
}

async function warmupOfflineDependencies() {
  setCompilerProgress(84, "Menyimpan editor…", "Memuat CodeMirror, mode C++, dan tema editor. Browser menyimpan modul yang diperlukan ke cache offline.");
  await Promise.all([
    import("codemirror"),
    import("@codemirror/lang-cpp"),
    import("@codemirror/theme-one-dark")
  ]);

  setCompilerProgress(88, "Menyimpan runtime WASI…", "Memuat runtime yang menghubungkan input/output C++ dengan browser.");
  await import("https://esm.sh/@bjorn3/browser_wasi_shim@0.4.2");

  setCompilerProgress(91, "Menyiapkan modul compiler…", "Memastikan modul JavaScript Clang/LLD juga tersedia offline.");
  await import("https://cdn.jsdelivr.net/npm/browsercc@0.1.1/dist/index.js");

  // Save the formatter's wrapper and WASM by exact URL. Relying only on the
  // Service Worker's module-fetch interception did not make readiness checks reliable.
  setCompilerProgress(92, "Menyiapkan formatter C++…", "Menyimpan JavaScript clang-format dan binary WebAssembly secara eksplisit.");
  await cacheRuntimeAsset(FORMATTER_JS_URL, "formatter C++");
  await cacheRuntimeAsset(FORMATTER_WASM_URL, "mesin formatter C++ (WASM)");

  const clangFormatter = await import(FORMATTER_JS_URL);
  await clangFormatter.default();
}

async function refreshCompilerCacheState() {
  try {
    const readiness = await getOfflineReadiness();
    const compiler = readiness.compiler;
    if (!compiler.available) {
      compilerCacheBadge.textContent = "Cache tidak didukung";
      compilerDownloadBtn.disabled = true;
      setCompilerProgress(0, "Mode offline tidak tersedia", "Browser ini tidak mendukung Cache Storage yang diperlukan untuk menyimpan aset secara offline.");
      return;
    }

    const assetPercent = Math.round((compiler.cachedBytes / EXPECTED_COMPILER_BYTES) * OFFLINE_PROGRESS_WEIGHT);
    if (readiness.ready) {
      compilerDownloadSection?.classList.add("ready");
      compilerCacheBadge.textContent = "Siap offline";
      compilerDownloadBtn.disabled = true;
      compilerDownloadBtn.textContent = "Siap offline ✓";
      setCompilerProgress(100, "Siap digunakan offline", "Compiler, editor, runtime, dan file aplikasi sudah tersedia di cache browser. Matikan internet untuk menguji mode offline.");
      return;
    }

    compilerDownloadSection?.classList.remove("ready");
    compilerDownloadBtn.disabled = compilerDownloadInProgress;
    compilerDownloadBtn.textContent = compiler.count
      ? "Lanjutkan persiapan offline"
      : "Siapkan untuk Offline";
    if (compiler.count === COMPILER_ASSETS.length) {
      compilerCacheBadge.textContent = "Compiler tersimpan";
      setCompilerProgress(
        Math.max(assetPercent, 82),
        "Compiler sudah tersimpan; dependensi offline belum lengkap",
        readiness.reasons.join(" ") || "Klik Siapkan untuk Offline untuk menyiapkan komponen lain."
      );
    } else {
      compilerCacheBadge.textContent = compiler.count
        ? compiler.count + "/" + COMPILER_ASSETS.length + " aset compiler"
        : "Belum disiapkan";
      setCompilerProgress(
        assetPercent,
        compiler.count ? "Compiler tersimpan sebagian" : "Belum disiapkan untuk offline",
        compiler.count
          ? formatBytes(compiler.cachedBytes) + " dari sekitar " + formatBytes(EXPECTED_COMPILER_BYTES) + " aset compiler tersimpan. " + readiness.reasons.join(" ")
          : "Klik Siapkan untuk Offline. Compiler, editor, runtime, dan file aplikasi akan disimpan ke cache browser."
      );
    }
  } catch (error) {
    compilerCacheBadge.textContent = "Status belum diketahui";
    compilerDownloadBtn.disabled = false;
    compilerDownloadStatus.textContent = "Tidak dapat memeriksa cache offline: " + (error?.message || error);
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

  const cachedResponse = new Response(new Blob(chunks, { type: asset.type }), {
    status: 200,
    headers: {
      "Content-Type": asset.type,
      "Access-Control-Allow-Origin": "*",
      "Cross-Origin-Resource-Policy": "cross-origin",
      "Cache-Control": "public, max-age=31536000"
    }
  });
  await cache.put(asset.url, cachedResponse);
  return actualBytes;
}

async function prepareCodeLabOffline() {
  if (compilerDownloadInProgress) return;
  if (!("caches" in window) || !window.fetch) {
    setCompilerProgress(0, "Unduhan tidak didukung", "Browser ini tidak menyediakan Fetch API atau Cache Storage yang diperlukan.");
    return;
  }

  compilerDownloadInProgress = true;
  compilerDownloadSection?.classList.remove("ready");
  compilerDownloadBtn.disabled = true;
  compilerDownloadBtn.textContent = "Menyiapkan offline…";
  compilerCacheBadge.textContent = "Sedang menyiapkan";
  compilerProgressFill?.classList.add("indeterminate");
  setCompilerProgress(
    0,
    "Menyiapkan unduhan offline…",
    "Memastikan Service Worker aktif dan membuka cache. Setelah terhubung ke CDN, progres download akan muncul."
  );
  let transferredThisSession = 0;
  let downloadError = null;

  try {
    const controlled = await waitForServiceWorkerControl();
    if (!controlled) {
      throw new Error("Service Worker belum aktif. Pastikan halaman dibuka melalui GitHub Pages, tunggu beberapa detik, lalu muat ulang halaman.");
    }

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
    compilerProgressFill?.classList.remove("indeterminate");
    setCompilerProgress(
      Math.round((completedExpected / EXPECTED_COMPILER_BYTES) * OFFLINE_PROGRESS_WEIGHT),
      missing.length ? "Menyiapkan " + missing.length + " aset compiler…" : "Compiler sudah tersimpan",
      existing.size
        ? existing.size + " dari " + COMPILER_ASSETS.length + " aset compiler sudah tersimpan; menyiapkan dependensi aplikasi berikutnya."
        : "Sedang mengunduh compiler, linker, dan pustaka standar C++."
    );

    for (let index = 0; index < missing.length; index++) {
      const asset = missing[index];
      compilerProgressFill?.classList.add("indeterminate");
      compilerProgressLabel.textContent = "Menghubungi CDN untuk " + asset.name + "…";
      compilerDownloadStatus.textContent = "File " + (index + 1) + " dari " + missing.length + ". URL: " + asset.url;

      const actualBytes = await downloadAssetToCache(cache, asset, (loaded) => {
        const fileFraction = Math.min(loaded / asset.size, 0.995);
        const progress = ((completedExpected + asset.size * fileFraction) / EXPECTED_COMPILER_BYTES) * OFFLINE_PROGRESS_WEIGHT;
        compilerProgressFill?.classList.remove("indeterminate");
        setCompilerProgress(
          progress,
          "Mengunduh " + asset.name + " · " + formatBytes(loaded),
          "Progres keseluruhan menghitung aset compiler (82% tahap persiapan). Diterima pada file ini: " + formatBytes(loaded) + "."
        );
      });
      transferredThisSession += actualBytes;
      completedExpected += asset.size;
      existing.add(asset.url);
      compilerProgressFill?.classList.remove("indeterminate");
      setCompilerProgress(
        (completedExpected / EXPECTED_COMPILER_BYTES) * OFFLINE_PROGRESS_WEIGHT,
        "Aset compiler " + (index + 1) + " dari " + missing.length + " selesai",
        asset.name + " tersimpan. Data diterima sesi ini: " + formatBytes(transferredThisSession) + "."
      );
    }

    compilerProgressFill?.classList.remove("indeterminate");
    setCompilerProgress(83, "Compiler tersimpan; menyiapkan dependensi…", "Sekarang memuat editor, runtime WASI, dan modul browsercc agar permintaan CDN bisa disimpan untuk penggunaan offline.");
    await warmupOfflineDependencies();

    setCompilerProgress(95, "Memverifikasi kesiapan offline…", "Memeriksa file aplikasi, editor, runtime WASI, dan seluruh aset compiler yang tersimpan.");
    const readiness = await getOfflineReadiness();
    if (!readiness.ready) {
      throw new Error("Persiapan belum lengkap. " + readiness.reasons.join(" ") + " Periksa apakah Cache Storage dapat digunakan dan Service Worker masih mengendalikan halaman.");
    }

    compilerCacheBadge.textContent = "Siap offline";
    compilerDownloadBtn.textContent = "Siap offline ✓";
    setCompilerProgress(
      100,
      "Siap digunakan offline",
      "Semua aset utama tersedia di cache browser. Aset compiler yang diunduh pada sesi ini: " + formatBytes(transferredThisSession) + ". Uji dengan mematikan koneksi internet lalu memuat ulang halaman."
    );
  } catch (error) {
    downloadError = error?.message || String(error);
    compilerDownloadSection?.classList.remove("ready");
    compilerCacheBadge.textContent = "Belum siap offline";
    compilerProgressFill?.classList.remove("indeterminate");
    compilerDownloadBtn.textContent = "Coba lagi / lanjutkan";
    const detail = /Failed to fetch|NetworkError|Load failed/i.test(downloadError)
      ? "Browser gagal membaca respons CDN. Periksa koneksi internet atau pemblokir konten."
      : /quota|storage|storage space/i.test(downloadError)
        ? "Penyimpanan browser mungkin tidak cukup. Hapus cache situs lain atau lanjutkan di browser dengan ruang tersedia."
        : "Aset yang sudah tersimpan tetap dipertahankan. Setelah memperbaiki penyebabnya, klik Coba lagi / lanjutkan.";
    setCompilerProgress(
      parseInt(compilerProgressBar.getAttribute("aria-valuenow") || "0", 10),
      "Persiapan offline belum selesai",
      downloadError + " " + detail
    );
    console.error("C++ Playground offline preparation failed:", error);
  } finally {
    compilerDownloadInProgress = false;
    compilerDownloadBtn.disabled = false;
    if (downloadError) {
      try {
        const compiler = await getCompilerCacheStatus();
        compilerCacheBadge.textContent = compiler.count
          ? compiler.count + "/" + COMPILER_ASSETS.length + " aset compiler tersimpan"
          : "Belum siap offline";
        compilerDownloadBtn.textContent = "Coba lagi / lanjutkan";
      } catch { /* Preserve the visible error. */ }
    } else {
      await refreshCompilerCacheState();
    }
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
  plainEditor.addEventListener("keydown", handlePlainEditorTab);
  updateLineInfo();

  // Wait for the Service Worker to control module requests before loading CDN dependencies.
  // This ensures the dependencies fetched during editor startup are actually written to offline cache.
  await waitForServiceWorkerControl();

  try {
    // Resolve every CodeMirror package through the same import map to avoid duplicate state/view modules.
    const modules = await Promise.all([
      import("codemirror"),
      import("@codemirror/lang-cpp"),
      import("@codemirror/theme-one-dark"),
      import("@codemirror/autocomplete"),
      import("@codemirror/commands")
    ]);

    // Do not replace the textarea if the user has already started typing while the CDN loaded.
    if (editedBeforeEnhancement) {
      setStatus("Editor teks siap. Kode tetap bisa diketik; editor visual tidak menggangu penulisan.");
      if (!compilerDownloadInProgress) await refreshCompilerCacheState();
      return;
    }

    const basicSetup = modules[0].basicSetup;
    const EditorView = modules[0].EditorView;
    const cpp = modules[1].cpp;
    const oneDark = modules[2].oneDark;
    const { autocompletion, snippetCompletion } = modules[3];
    const { indentMore, indentLess } = modules[4];
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
          autocompletion({
            activateOnTyping: true,
            maxRenderedOptions: 16,
            icons: true,
            override: [cppCompletionSource(snippetCompletion)]
          }),
          EditorView.domEventHandlers({
            keydown(event, view) {
              if (event.key !== "Tab") return false;
              event.preventDefault();
              if (event.shiftKey) indentLess(view);
              else indentMore(view);
              return true;
            }
          }),
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
  if (!compilerDownloadInProgress) await refreshCompilerCacheState();
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

formatCodeBtn.addEventListener("click", formatCppCode);
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
  if (event.shiftKey && event.altKey && event.key.toLowerCase() === "f") {
    event.preventDefault();
    formatCppCode();
  }
});

if (!interactiveSupported) {
  terminalMode.textContent = "Mode stdin";
  fallbackNotice.classList.add("show");
  fallbackStdin.hidden = false;
  setStatus("Terminal siap. Mode stdin cadangan aktif; isi input sebelum Run.", "idle");
}

async function getClangFormatter() {
  if (!clangFormatPromise) {
    clangFormatPromise = (async () => {
      const module = await import(FORMATTER_JS_URL);
      await module.default();
      return module.format;
    })().catch((error) => {
      clangFormatPromise = null;
      throw error;
    });
  }
  return clangFormatPromise;
}

async function formatCppCode() {
  if (formatCodeBtn.disabled) return;
  const source = sourceText();
  if (!source.trim()) {
    setStatus("Editor masih kosong.", "error");
    return;
  }
  const previousLabel = formatCodeLabel.textContent;
  formatCodeBtn.disabled = true;
  formatCodeLabel.textContent = "Memuat…";
  setStatus("Menyiapkan clang-format untuk merapikan kode C++…", "busy");
  try {
    const format = await getClangFormatter();
    formatCodeLabel.textContent = "Format…";
    const config = JSON.stringify({
      BasedOnStyle: "Google",
      IndentWidth: 4,
      TabWidth: 4,
      UseTab: "Never",
      ColumnLimit: 100,
      SortIncludes: false,
      AllowShortFunctionsOnASingleLine: "Empty",
      AllowShortIfStatementsOnASingleLine: "Never",
      BreakBeforeBraces: "Attach"
    });
    const formatted = format(source, "main.cpp", config);
    if (typeof formatted !== "string" || !formatted.trim()) {
      throw new Error("Formatter tidak menghasilkan kode yang valid.");
    }
    setSource(formatted);
    setStatus("Kode berhasil dirapikan dengan clang-format.", "ok");
  } catch (error) {
    setStatus("Gagal memformat kode: " + (error?.message || error), "error");
    console.error("clang-format failed:", error);
  } finally {
    formatCodeBtn.disabled = false;
    formatCodeLabel.textContent = previousLabel === "Memuat…" || previousLabel === "Format…" ? "Format" : previousLabel;
  }
}

function updateFocusMode(enabled) {
  document.body.classList.toggle("focus-mode", enabled);
  focusModeBtn.setAttribute("aria-pressed", String(enabled));
  focusModeLabel.textContent = enabled ? "Keluar fokus" : "Fokus";
  focusModeBtn.title = enabled ? "Keluar dari mode fokus (Esc)" : "Fokus coding layar penuh";
}

async function toggleFocusMode() {
  const isActive = document.body.classList.contains("focus-mode");
  if (isActive) {
    focusModeFallback = false;
    if (document.fullscreenElement && document.exitFullscreen) {
      try { await document.exitFullscreen(); } catch { /* CSS focus mode can still be closed. */ }
    }
    updateFocusMode(false);
    return;
  }

  updateFocusMode(true);
  if (appShell && appShell.requestFullscreen) {
    try {
      focusModeFallback = false;
      await appShell.requestFullscreen();
    } catch (error) {
      // Embedded or restricted browsers may refuse Fullscreen API; keep a CSS focus layout.
      focusModeFallback = true;
      console.info("Native fullscreen unavailable; using focus layout.", error);
    }
  } else {
    focusModeFallback = true;
  }
}

focusModeBtn.addEventListener("click", toggleFocusMode);
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement === appShell) {
    updateFocusMode(true);
  } else if (!focusModeFallback) {
    updateFocusMode(false);
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("focus-mode") && !document.fullscreenElement) {
    focusModeFallback = false;
    updateFocusMode(false);
  }
});

compilerDownloadBtn.addEventListener("click", prepareCodeLabOffline);
refreshCompilerCacheState();
initializeEditor();
