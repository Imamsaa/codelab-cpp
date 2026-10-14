const STORAGE_KEY = "cpp-playground-lesson-progress-v1";
const CODE_KEY_PREFIX = "cpp-playground-lesson-code-";
const lessons = [
  {
    id: "intro", kind: "reading", title: "Pengenalan C++", category: "Pengantar", level: "Pemula", duration: "5 menit",
    summary: "Sebelum menulis program, kenali dahulu apa itu C++, alasan bahasa ini banyak digunakan, dan hal yang membedakannya dari bahasa C. Materi ini berfokus pada pemahaman konsep, belum pada penulisan kode.",
    concepts: [
      { title: "Apa itu C++?", body: "C++ adalah bahasa pemrograman lintas platform yang dapat digunakan untuk membangun aplikasi berkinerja tinggi. Bahasa ini dikembangkan oleh <strong>Bjarne Stroustrup</strong> sebagai pengembangan dari bahasa C. C++ memberi programmer kendali yang cukup besar terhadap sumber daya sistem dan memori." },
      { title: "Mengapa menggunakan C++?", body: "C++ banyak digunakan karena kinerjanya, fleksibilitasnya, dan kemampuannya berjalan di berbagai platform. Bahasa ini dipakai dalam pengembangan sistem operasi, antarmuka grafis (GUI), perangkat embedded, serta aplikasi yang membutuhkan pengolahan cepat." },
      { title: "Pemrograman berorientasi objek", body: "C++ mendukung <strong>object-oriented programming (OOP)</strong>, yaitu cara menyusun program dengan class dan object. Pendekatan ini membantu program memiliki struktur yang jelas dan memungkinkan kode digunakan kembali." },
      { title: "Perbedaan C dan C++", body: "C dan C++ memiliki banyak kemiripan sintaks. Namun, C++ mendukung fitur class dan object, sedangkan C tidak memiliki fitur OOP berbasis class seperti C++. C++ juga tetap dapat digunakan untuk pemrograman prosedural." },
      { title: "Versi standar C++", body: "C++ terus berkembang. Beberapa standar pentingnya adalah <strong>C++11, C++14, C++17, C++20, C++23,</strong> dan <strong>C++26</strong>. Setiap versi dapat membawa fitur dan penyempurnaan baru. Playground ini menggunakan C++20 sebagai pilihan awal, tetapi standar lain juga tersedia." },
      { title: "Apa yang akan dipelajari?", body: "Kamu tidak harus memiliki pengalaman pemrograman sebelumnya. Kita akan belajar secara bertahap: mengenal struktur program, menampilkan output, menerima input, memakai variabel dan tipe data, membuat keputusan, menggunakan perulangan, lalu memecahkan masalah dengan logika." }
    ],
    tests: []
  },
];

const lessonList = document.getElementById("lessonList");
const lessonTitle = document.getElementById("lessonTitle");
const lessonCategory = document.getElementById("lessonCategory");
const lessonLevel = document.getElementById("lessonLevel");
const lessonDuration = document.getElementById("lessonDuration");
const lessonSummary = document.getElementById("lessonSummary");
const conceptBlocks = document.getElementById("conceptBlocks");
const lessonExample = document.getElementById("lessonExample");
const lessonTask = document.getElementById("lessonTask");
const taskRequirements = document.getElementById("taskRequirements");
const lessonEditorHost = document.getElementById("lessonEditor");
const standardSelect = document.getElementById("lessonStandard");
const checkAnswerBtn = document.getElementById("checkAnswerBtn");
const stopChallengeBtn = document.getElementById("stopChallengeBtn");
const resetCodeBtn = document.getElementById("resetCodeBtn");
const statusText = document.getElementById("statusText");
const statusDot = document.getElementById("statusDot");
const lineInfo = document.getElementById("lineInfo");
const caseCount = document.getElementById("caseCount");
const judgeState = document.getElementById("judgeState");
const resultsList = document.getElementById("resultsList");
const compileDiagnostics = document.getElementById("compileDiagnostics");
const progressCount = document.getElementById("progressCount");
const progressFill = document.getElementById("progressFill");
const challengePanel = document.querySelector(".challenge");
const readingActions = document.getElementById("readingActions");
const markReadBtn = document.getElementById("markReadBtn");

let currentLesson = lessons[0];
let cmEditor = null;
let fallbackCode = null;
let activeWorker = null;
let challengeTimeout = null;
let completedLessons = new Set();
let savedCodes = {};
let fallbackEdited = false;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (Array.isArray(saved)) completedLessons = new Set(saved);
    for (const lesson of lessons) {
      const value = localStorage.getItem(CODE_KEY_PREFIX + lesson.id);
      if (value !== null) savedCodes[lesson.id] = value;
    }
  } catch (error) {
    console.warn("Tidak dapat membaca progres lokal:", error);
  }
}

function getCode() {
  return cmEditor ? cmEditor.state.doc.toString() : (fallbackCode ? fallbackCode.value : "");
}

function saveCode() {
  const code = getCode();
  savedCodes[currentLesson.id] = code;
  try { localStorage.setItem(CODE_KEY_PREFIX + currentLesson.id, code); } catch { /* Storage is optional. */ }
  updateLineInfo();
}

function setCode(code) {
  if (cmEditor) {
    cmEditor.dispatch({ changes: { from: 0, to: cmEditor.state.doc.length, insert: code } });
  } else if (fallbackCode) {
    fallbackCode.value = code;
    updateLineInfo();
    try { localStorage.setItem(CODE_KEY_PREFIX + currentLesson.id, code); } catch { /* Storage is optional. */ }
  }
}

function updateLineInfo() {
  const lines = cmEditor ? cmEditor.state.doc.lines : (fallbackCode ? fallbackCode.value.split("\n").length : 1);
  lineInfo.textContent = "Baris " + lines;
}

function setStatus(message, kind = "idle") {
  statusText.textContent = message;
  statusDot.className = kind === "busy" ? "busy" : kind === "ok" ? "ok" : kind === "error" ? "error" : "";
}

function setBusy(busy) {
  checkAnswerBtn.disabled = busy;
  stopChallengeBtn.disabled = !busy;
  resetCodeBtn.disabled = busy;
}

function updateProgress() {
  const count = lessons.filter((lesson) => completedLessons.has(lesson.id)).length;
  progressCount.textContent = count + "/" + lessons.length + " selesai";
  progressFill.style.width = (count / lessons.length * 100) + "%";
  renderLessonList();
}

function renderLessonList() {
  lessonList.innerHTML = lessons.map((lesson, index) => {
    const active = lesson.id === currentLesson.id;
    const complete = completedLessons.has(lesson.id);
    return '<button type="button" class="lesson-nav-btn' + (active ? " active" : "") + '" data-lesson-id="' + lesson.id + '" aria-current="' + (active ? "page" : "false") + '">' +
      '<span class="lesson-number">' + (complete ? "✓" : String(index + 1).padStart(2, "0")) + '</span>' +
      '<span class="lesson-nav-copy"><strong>' + escapeHtml(lesson.title) + '</strong><small>' + escapeHtml(lesson.category) + ' · ' + escapeHtml(lesson.duration) + '</small></span>' +
      (complete ? '<span class="lesson-check" aria-label="Selesai">✓</span>' : "") + '</button>';
  }).join("");
}

function renderLesson(lesson) {
  const isReading = lesson.kind === "reading";
  lessonCategory.textContent = lesson.category;
  lessonLevel.textContent = lesson.level;
  lessonDuration.textContent = lesson.duration;
  lessonTitle.textContent = lesson.title;
  lessonSummary.textContent = lesson.summary;
  conceptBlocks.innerHTML = lesson.concepts.map((concept) =>
    '<section class="concept"><h3>' + escapeHtml(concept.title) + '</h3><p>' + concept.body + '</p></section>'
  ).join("");

  lessonExample.hidden = isReading || !lesson.example;
  if (!isReading && lesson.example) {
    lessonExample.innerHTML = '<h3>Contoh input dan output</h3><div class="example-grid">' +
      '<div><span class="example-label">Input</span><pre>' + escapeHtml(lesson.example.input) + '</pre></div>' +
      '<div><span class="example-label">Output</span><pre>' + escapeHtml(lesson.example.output) + '</pre></div></div>';
  }

  document.querySelector(".statement").hidden = isReading || !lesson.task;
  if (!isReading && lesson.task) {
    lessonTask.textContent = lesson.task;
    taskRequirements.innerHTML = (lesson.requirements || []).map((requirement) => "<li>" + escapeHtml(requirement) + "</li>").join("");
  }

  challengePanel.hidden = isReading;
  readingActions.hidden = !isReading;
  markReadBtn.textContent = completedLessons.has(lesson.id) ? "✓ Materi sudah dipelajari" : "Tandai selesai membaca";
  markReadBtn.disabled = completedLessons.has(lesson.id);

  caseCount.textContent = isReading ? "—" : "— / " + lesson.tests.length;
  judgeState.textContent = isReading
    ? (completedLessons.has(lesson.id) ? "Sudah dibaca" : "Materi baca")
    : (completedLessons.has(lesson.id) ? "Selesai sebelumnya" : "Belum diuji");
  compileDiagnostics.classList.remove("show");
  compileDiagnostics.textContent = "";
  resultsList.innerHTML = '<div class="empty-results">Hasil tes akan muncul di sini.<br>Tekan <b>Periksa Jawaban</b> setelah kode siap.</div>';
}

function markReadingComplete() {
  if (currentLesson.kind !== "reading" || completedLessons.has(currentLesson.id)) return;
  completedLessons.add(currentLesson.id);
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedLessons])); } catch { /* Storage is optional. */ }
  markReadBtn.textContent = "✓ Materi sudah dipelajari";
  markReadBtn.disabled = true;
  judgeState.textContent = "Sudah dibaca";
  setStatus("Materi pengantar selesai dibaca. Kamu bisa lanjut ke topik berikutnya.", "ok");
  updateProgress();
}

function selectLesson(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson || lesson.id === currentLesson.id) return;
  if (activeWorker) stopChallenge("Pemeriksaan dihentikan karena materi diganti.");
  if (currentLesson.kind !== "reading") saveCode();
  currentLesson = lesson;
  renderLesson(currentLesson);
  renderLessonList();
  if (currentLesson.kind !== "reading") setCode(savedCodes[currentLesson.id] ?? currentLesson.starter);
  fallbackEdited = false;
  setStatus(currentLesson.kind === "reading" ? "Materi pengantar siap dibaca." : "Materi siap. Baca tantangan lalu tulis kode.", "idle");
  if (cmEditor && currentLesson.kind !== "reading") {
    cmEditor.requestMeasure();
    cmEditor.focus();
  }
}

function showResults(tests) {
  const passedCount = tests.filter((test) => test.passed).length;
  caseCount.textContent = passedCount + " / " + tests.length;
  judgeState.textContent = passedCount === tests.length ? "Semua lolos" : "Perlu diperbaiki";
  resultsList.innerHTML = tests.map((test) => {
    const resultClass = test.passed ? "passed" : "failed";
    const status = test.passed ? "✓ Lolos" : "✕ Belum lolos";
    const top = '<div class="result-top"><span>Test ' + (test.index + 1) + '</span><span class="' + (test.passed ? "passed-text" : "failed-text") + '">' + status + '</span></div>';
    if (!test.visible) {
      return '<div class="result-item ' + resultClass + '">' + top + '<div class="result-detail">Test case tersembunyi · ' + (test.passed ? "output sesuai" : "output belum sesuai") + '</div></div>';
    }
    const extra = test.runtimeError ? "\nError: " + test.runtimeError : "";
    const detail = "Input:\n" + (test.input || "(stdin kosong)") + "\n\nDiharapkan:\n" + test.expected + "\n\nOutput kamu:\n" + (test.actual || "(tidak ada output)") + extra;
    return '<div class="result-item ' + resultClass + '">' + top + '<div class="result-detail">' + escapeHtml(detail) + '</div></div>';
  }).join("");

  if (passedCount === tests.length) {
    completedLessons.add(currentLesson.id);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedLessons])); } catch { /* Storage is optional. */ }
    updateProgress();
    setStatus("Mantap! Semua test case berhasil dilewati.", "ok");
  } else {
    setStatus(passedCount + " dari " + tests.length + " test case lolos. Periksa kembali logika program.", "error");
  }
}

function finishChallenge() {
  if (challengeTimeout !== null) clearTimeout(challengeTimeout);
  challengeTimeout = null;
  if (activeWorker) {
    activeWorker.terminate();
    activeWorker = null;
  }
  setBusy(false);
}

function stopChallenge(message = "Program dihentikan.") {
  if (challengeTimeout !== null) clearTimeout(challengeTimeout);
  challengeTimeout = null;
  if (activeWorker) activeWorker.terminate();
  activeWorker = null;
  setBusy(false);
  setStatus(message, "error");
  judgeState.textContent = "Dihentikan";
}

function runChallenge() {
  if (currentLesson.kind === "reading") return;
  if (activeWorker) stopChallenge("Pemeriksaan sebelumnya dihentikan.");
  const source = getCode();
  if (!source.trim()) {
    setStatus("Editor masih kosong.", "error");
    return;
  }
  saveCode();
  setBusy(true);
  setStatus("Menyiapkan compiler…", "busy");
  judgeState.textContent = "Menjalankan";
  caseCount.textContent = "0 / " + currentLesson.tests.length;
  compileDiagnostics.classList.remove("show");
  compileDiagnostics.textContent = "";
  resultsList.innerHTML = '<div class="empty-results">Kode sedang dikompilasi dan diuji pada beberapa input…</div>';

  try {
    activeWorker = new Worker(new URL("./compiler-worker.js", import.meta.url), { type: "module" });
  } catch (error) {
    setBusy(false);
    setStatus("Tidak dapat memulai compiler worker.", "error");
    compileDiagnostics.textContent = error?.message || String(error);
    compileDiagnostics.classList.add("show");
    return;
  }

  challengeTimeout = setTimeout(() => {
    if (!activeWorker) return;
    stopChallenge("Batas waktu tercapai. Periksa kemungkinan perulangan tanpa akhir.");
    resultsList.innerHTML = '<div class="result-item failed"><div class="result-top"><span>Waktu habis</span><span class="failed-text">✕ Dihentikan</span></div><div class="result-detail">Program dihentikan setelah 90 detik agar halaman tetap responsif.</div></div>';
  }, 90000);

  activeWorker.onmessage = (event) => {
    const data = event.data || {};
    if (data.type === "status") {
      setStatus(data.message || "Sedang memproses…", "busy");
      return;
    }
    if (data.type === "test-case-start") {
      caseCount.textContent = data.index + " / " + data.total;
      setStatus(data.message || "Menguji kode…", "busy");
      return;
    }
    if (data.type === "challenge-result") {
      finishChallenge();
      if (data.compileOutput && data.compileOutput.trim()) {
        compileDiagnostics.textContent = data.compileOutput.trim();
        compileDiagnostics.classList.add("show");
      }
      showResults(data.tests || []);
      return;
    }
    if (data.type === "result") {
      finishChallenge();
      judgeState.textContent = "Kompilasi gagal";
      caseCount.textContent = "0 / " + currentLesson.tests.length;
      compileDiagnostics.textContent = data.compileOutput || data.error || "Kompilasi gagal tanpa pesan tambahan.";
      compileDiagnostics.classList.add("show");
      resultsList.innerHTML = '<div class="result-item failed"><div class="result-top"><span>Compiler</span><span class="failed-text">✕ Gagal</span></div><div class="result-detail">Perbaiki error kompilasi, lalu periksa jawaban kembali.</div></div>';
      setStatus("Kompilasi gagal. Periksa pesan error.", "error");
    }
  };

  activeWorker.onerror = (event) => {
    finishChallenge();
    compileDiagnostics.textContent = event?.message || "Terjadi kesalahan pada compiler worker.";
    compileDiagnostics.classList.add("show");
    judgeState.textContent = "Terjadi error";
    setStatus("Compiler gagal berjalan.", "error");
  };

  activeWorker.postMessage({
    source: source,
    standard: standardSelect.value,
    testCases: currentLesson.tests
  });
}

async function initializeEditor() {
  fallbackCode = document.createElement("textarea");
  fallbackCode.id = "fallbackCode";
  fallbackCode.spellcheck = false;
  fallbackCode.autocapitalize = "off";
  fallbackCode.setAttribute("aria-label", "Editor kode untuk latihan C++");
  fallbackCode.value = savedCodes[currentLesson.id] ?? currentLesson.starter ?? "";
  lessonEditorHost.replaceChildren(fallbackCode);
  fallbackCode.addEventListener("input", () => {
    fallbackEdited = true;
    saveCode();
  });
  fallbackCode.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    event.preventDefault();
    const start = fallbackCode.selectionStart;
    const end = fallbackCode.selectionEnd;
    if (event.shiftKey) {
      const lineStart = fallbackCode.value.lastIndexOf("\n", Math.max(0, start - 1)) + 1;
      const count = fallbackCode.value.slice(lineStart, lineStart + 4) === "    " ? 4 : fallbackCode.value[lineStart] === "\t" ? 1 : 0;
      if (count) fallbackCode.setRangeText("", lineStart, lineStart + count, "preserve");
    } else {
      fallbackCode.setRangeText("    ", start, end, "end");
    }
    fallbackCode.dispatchEvent(new Event("input", { bubbles: true }));
  });

  try {
    const modules = await Promise.all([
      import("codemirror"),
      import("@codemirror/lang-cpp"),
      import("@codemirror/theme-one-dark"),
      import("@codemirror/autocomplete"),
      import("@codemirror/commands")
    ]);
    if (fallbackEdited) return;

    const { basicSetup, EditorView } = modules[0];
    const { cpp } = modules[1];
    const { oneDark } = modules[2];
    const { autocompletion, completeFromList, snippetCompletion } = modules[3];
    const { indentMore, indentLess } = modules[4];
    const savedFallback = fallbackCode;
    const initialText = savedFallback.value;
    savedFallback.remove();

    const completions = [
      { label: "cout", type: "variable", info: "Menampilkan output" },
      { label: "cin", type: "variable", info: "Membaca input" },
      { label: "int", type: "type" },
      { label: "string", type: "type" },
      { label: "if", type: "keyword" },
      { label: "else", type: "keyword" },
      { label: "for", type: "keyword" },
      { label: "while", type: "keyword" },
      { label: "return", type: "keyword" },
      { label: "endl", type: "constant" },
      { label: "#include <iostream>", type: "keyword", apply: "#include <iostream>" },
      { label: "using namespace std;", type: "keyword", apply: "using namespace std;" }
    ];
    const snippets = [
      snippetCompletion("int main() {\n    $0\n    return 0;\n}", { label: "main", detail: "Kerangka program C++" }),
      snippetCompletion("for (int i = 0; i < $1; ++i) {\n    $0\n}", { label: "for loop", detail: "Kerangka perulangan for" }),
      snippetCompletion("if ($1) {\n    $0\n} else {\n    \n}", { label: "if else", detail: "Kerangka if-else" })
    ];

    cmEditor = new EditorView({
      doc: initialText,
      parent: lessonEditorHost,
      extensions: [
        basicSetup,
        cpp(),
        oneDark,
        autocompletion({ activateOnTyping: true, override: [completeFromList([...snippets, ...completions])] }),
        EditorView.domEventHandlers({
          keydown(event, view) {
            if (event.key !== "Tab") return false;
            event.preventDefault();
            if (event.shiftKey) indentLess(view);
            else indentMore(view);
            return true;
          }
        }),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) saveCode();
        }),
        EditorView.theme({
          "&": { height: "100%", fontSize: "12px" },
          ".cm-scroller": { fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace" },
          ".cm-content": { padding: "12px 0" },
          ".cm-line": { padding: "0 10px" },
          ".cm-gutters": { minWidth: "39px" }
        })
      ]
    });
    fallbackCode = null;
    updateLineInfo();
  } catch (error) {
    console.warn("CodeMirror materi tidak dapat dimuat; editor teks digunakan.", error);
    setStatus("Editor teks siap. Syntax highlighting tidak tersedia.", "error");
  }
}

lessonList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson-id]");
  if (button) selectLesson(button.dataset.lessonId);
});
checkAnswerBtn.addEventListener("click", runChallenge);
markReadBtn.addEventListener("click", markReadingComplete);
stopChallengeBtn.addEventListener("click", () => stopChallenge("Pemeriksaan dihentikan oleh pengguna."));
resetCodeBtn.addEventListener("click", () => {
  setCode(currentLesson.starter);
  saveCode();
  compileDiagnostics.classList.remove("show");
  resultsList.innerHTML = '<div class="empty-results">Kode direset. Tulis solusi, lalu periksa jawaban.</div>';
  caseCount.textContent = "— / " + currentLesson.tests.length;
  judgeState.textContent = "Belum diuji";
  setStatus("Kode dikembalikan ke template awal.", "idle");
});
window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    runChallenge();
  }
});

loadSavedState();
renderLesson(currentLesson);
renderLessonList();
initializeEditor();
updateProgress();
