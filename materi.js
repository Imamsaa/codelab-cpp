const STORAGE_KEY = "cpp-playground-lesson-progress-v1";
const CODE_KEY_PREFIX = "cpp-playground-lesson-code-";
const lessons = [
  {
    id: "intro", kind: "reading", title: "Pengenalan C++", category: "Pengantar", level: "Pemula", duration: "5 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_intro.asp", sourceLabel: "W3Schools — C++ Introduction",
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
  {
    id: "syntax", title: "Sintaks Dasar C++", category: "Dasar C++", level: "Pemula", duration: "10 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_syntax.asp", sourceLabel: "W3Schools — C++ Syntax",
    summary: "Setiap program C++ memiliki struktur. Beberapa bagian yang sering ditemukan adalah library, fungsi main(), kurung kurawal, statement, dan return 0.",
    concepts: [
      { title: "#include <iostream>", body: "Baris ini menyertakan library untuk input dan output, misalnya <code>cout</code>. Library menyediakan fungsi atau objek yang dapat digunakan program." },
      { title: "Fungsi main()", body: "<code>int main()</code> adalah titik awal program. Instruksi di dalam kurung kurawal <code>{ }</code> akan dijalankan ketika program dimulai." },
      { title: "Statement dan titik koma", body: "Sebagian besar statement C++ diakhiri titik koma <code>;</code>. Kata kunci C++ juga peka huruf besar-kecil, sehingga <code>cout</code> berbeda dari <code>Cout</code>." },
      { title: "return 0;", body: "Baris <code>return 0;</code> mengakhiri fungsi <code>main()</code> dan biasanya menandakan program selesai dengan sukses. Baris kosong dan indentasi membantu kode lebih mudah dibaca." }
    ],
    example: { input: "(tidak ada input)", output: "Struktur C++" },
    task: "Lengkapi program C++ agar menampilkan tepat teks: Struktur C++.",
    requirements: ["Pertahankan struktur #include, main(), kurung kurawal, dan return 0.", "Statement output harus diakhiri titik koma.", "Output harus persis: Struktur C++."],
    starter: [
      "#include <iostream>", "using namespace std;", "", "int main() {",
      "    // TODO: tampilkan teks Struktur C++",
      "    return 0;", "}"
    ].join("\n"),
    tests: [{ input: "", expected: "Struktur C++", visible: true }]
  },
  {
    id: "statements", title: "Statement dalam C++", category: "Dasar C++", level: "Pemula", duration: "8 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_statements.asp", sourceLabel: "W3Schools — C++ Statements",
    summary: "Statement adalah instruksi yang dijalankan program. Program biasanya menjalankan statement secara berurutan dari atas ke bawah, kecuali ada struktur yang mengubah alur program.",
    concepts: [
      { title: "Satu instruksi disebut statement", body: "Contohnya <code>cout &lt;&lt; \"Halo\";</code> adalah instruksi untuk menampilkan teks. Setiap statement sederhana tersebut diakhiri dengan titik koma <code>;</code>." },
      { title: "Urutan eksekusi", body: "Jika beberapa statement ditulis berurutan, statement pertama dijalankan terlebih dahulu, lalu dilanjutkan statement berikutnya." },
      { title: "Kesalahan titik koma", body: "Lupa menuliskan <code>;</code> dapat menyebabkan error kompilasi. Perhatikan akhir setiap instruksi, bukan hanya isi instruksinya." },
      { title: "Whitespace dan kerapian", body: "Spasi, baris baru, dan indentasi umumnya membantu keterbacaan kode. Compiler mengabaikan banyak whitespace, tetapi tidak berarti tanda baca sintaks dapat dihilangkan." }
    ],
    example: { input: "(tidak ada input)", output: "Mulai-Belajar-Selesai" },
    task: "Gunakan tiga statement cout yang berjalan secara berurutan untuk menghasilkan teks Mulai-Belajar-Selesai.",
    requirements: ["Gunakan tiga statement cout terpisah.", "Akhiri setiap statement dengan titik koma.", "Jangan menambahkan spasi atau baris baru pada output."],
    starter: [
      "#include <iostream>", "using namespace std;", "", "int main() {",
      "    cout << \"Mulai\";",
      "    // TODO: tampilkan tanda hubung dan kata Belajar",
      "    // TODO: tampilkan tanda hubung dan kata Selesai",
      "    return 0;", "}"
    ].join("\n"),
    tests: [{ input: "", expected: "Mulai-Belajar-Selesai", visible: true }]
  },
  {
    id: "output", title: "Menampilkan Teks dengan cout", category: "Output", level: "Pemula", duration: "8 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_output.asp", sourceLabel: "W3Schools — C++ Output",
    summary: "cout digunakan untuk menampilkan teks atau nilai ke terminal. Teks literal ditulis di antara tanda petik dua dan operator << mengirimkannya ke output.",
    concepts: [
      { title: "Teks menggunakan tanda petik", body: "Teks harus diapit tanda petik dua, misalnya <code>\"Halo dunia\"</code>. Tanpa tanda petik, compiler akan menganggap kata tersebut sebagai nama identifier." },
      { title: "Operator <<", body: "Operator <code>&lt;&lt;</code> mengalirkan nilai menuju <code>cout</code>. Kamu bisa menggunakan beberapa operator <code>&lt;&lt;</code> dalam satu statement." },
      { title: "Beberapa cout", body: "Kamu dapat menulis beberapa statement <code>cout</code>. Namun, <code>cout</code> tidak otomatis membuat baris baru. Output berikutnya akan langsung menyambung kecuali kamu menambahkan pemisah." }
    ],
    example: { input: "(tidak ada input)", output: "Halo, siswa!" },
    task: "Lengkapi dua statement cout untuk menghasilkan teks Halo, siswa! tanpa menambahkan baris baru.",
    requirements: ["Cetak teks menggunakan tanda petik dua.", "Gunakan dua statement cout.", "Pastikan tanda koma, spasi, dan tanda seru tepat."],
    starter: [
      "#include <iostream>", "using namespace std;", "", "int main() {",
      "    cout << \"Halo, \";",
      "    // TODO: tampilkan siswa!",
      "    return 0;", "}"
    ].join("\n"),
    tests: [{ input: "", expected: "Halo, siswa!", visible: true }]
  },
  {
    id: "output-numbers", title: "Menampilkan Angka", category: "Output", level: "Pemula", duration: "8 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_output_numbers.asp", sourceLabel: "W3Schools — C++ Output Numbers",
    summary: "cout tidak hanya menampilkan teks, tetapi juga angka dan hasil perhitungan. Perhatikan perbedaan angka sebagai nilai dan angka yang ditulis sebagai teks.",
    concepts: [
      { title: "Angka tanpa tanda petik", body: "Tulis <code>cout &lt;&lt; 100;</code> untuk menampilkan nilai angka 100. Jika ditulis <code>cout &lt;&lt; \"100\";</code>, yang dikirim adalah teks berisi karakter 1, 0, 0." },
      { title: "Perhitungan langsung", body: "C++ dapat menghitung ekspresi sebelum hasilnya ditampilkan. Contohnya, <code>cout &lt;&lt; 3 + 4;</code> menampilkan <code>7</code>, bukan teks <code>3 + 4</code>." },
      { title: "Operator matematika", body: "Kamu dapat memakai <code>+</code> untuk penjumlahan, <code>-</code> untuk pengurangan, <code>*</code> untuk perkalian, dan <code>/</code> untuk pembagian. Hasil pembagian bilangan bulat dapat membuang bagian pecahan." }
    ],
    example: { input: "(tidak ada input)", output: "10 20" },
    task: "Tampilkan hasil 6 + 4, satu spasi, lalu hasil 5 * 4. Jangan cetak rumusnya sebagai teks.",
    requirements: ["Gunakan cout untuk menampilkan hasil perhitungan.", "Hasil pertama adalah 10 dan hasil kedua 20.", "Output harus persis: 10 20."],
    starter: [
      "#include <iostream>", "using namespace std;", "", "int main() {",
      "    // TODO: tampilkan hasil 6 + 4",
      "    cout << \" \";",
      "    // TODO: tampilkan hasil 5 * 4",
      "    return 0;", "}"
    ].join("\n"),
    tests: [{ input: "", expected: "10 20", visible: true }]
  },
  {
    id: "new-lines", title: "Membuat Baris Baru", category: "Output", level: "Pemula", duration: "8 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_new_lines.asp", sourceLabel: "W3Schools — C++ New Lines",
    summary: "Secara default, beberapa output cout bisa menyambung pada baris yang sama. Gunakan karakter escape \\n atau manipulator endl untuk memulai baris baru.",
    concepts: [
      { title: "Karakter escape \\n", body: "<code>\\n</code> memindahkan posisi output ke awal baris berikutnya. Dua karakter <code>\\n\\n</code> akan membuat satu baris kosong di antara teks." },
      { title: "Manipulator endl", body: "<code>endl</code> juga membuat baris baru. Berbeda dengan <code>\\n</code>, <code>endl</code> juga meminta buffer output untuk di-flush. Untuk kebutuhan baris baru biasa, <code>\\n</code> sering sudah cukup." },
      { title: "Memilih cara yang sesuai", body: "Kamu bisa menggunakan <code>cout &lt;&lt; \"Baris satu\\nBaris dua\";</code> atau menulis dua statement cout dengan <code>endl</code>. Keduanya menghasilkan dua baris." },
      { title: "Escape sequence lain", body: "<code>\\t</code> menambahkan tab horizontal, <code>\\\\</code> menampilkan garis miring terbalik, dan <code>\\\"</code> menampilkan tanda petik dua di dalam teks." }
    ],
    example: { input: "(tidak ada input)", output: "Halo!\nSaya belajar C++." },
    task: "Tampilkan Halo! pada baris pertama dan Saya belajar C++. pada baris kedua.",
    requirements: ["Gunakan \\n atau endl untuk membuat baris baru.", "Jangan menampilkan karakter \\n secara literal.", "Pastikan kedua kalimat berada di baris terpisah."],
    starter: [
      "#include <iostream>", "using namespace std;", "", "int main() {",
      "    cout << \"Halo!\";",
      "    // TODO: pindah ke baris baru, lalu tampilkan Saya belajar C++.",
      "    return 0;", "}"
    ].join("\n"),
    tests: [{ input: "", expected: "Halo!\nSaya belajar C++.", visible: true }]
  }
];


const EXTRA_CHALLENGES = {
  syntax: [
    {
      id: "syntax-2", title: "Latihan 2 · Struktur dan dua baris", difficulty: "Mudah",
      task: "Buat program yang menampilkan dua baris: Saya belajar C++. lalu Program pertama saya.",
      requirements: ["Gunakan struktur program C++ lengkap.", "Tampilkan teks di dua baris terpisah.", "Jangan menambah teks lain."],
      example: { input: "(tidak ada input)", output: "Saya belajar C++.\nProgram pertama saya." },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: tampilkan dua baris sesuai instruksi", "    return 0;", "}"].join("\n"),
      tests: [{input:"",expected:"Saya belajar C++.\nProgram pertama saya.",visible:true}]
    },
    {
      id: "syntax-3", title: "Latihan 3 · Pesan dan tahun", difficulty: "Tantangan",
      task: "Buat program lengkap yang menampilkan dua baris: C++20 dan Siap belajar!",
      requirements: ["Gunakan #include <iostream> dan int main().", "Setiap statement diakhiri titik koma.", "Output harus tepat dua baris."],
      example: { input: "(tidak ada input)", output: "C++20\nSiap belajar!" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: tampilkan C++20 dan Siap belajar! dalam dua baris", "    return 0;", "}"].join("\n"),
      tests: [{input:"",expected:"C++20\nSiap belajar!",visible:true}]
    }
  ],
  statements: [
    {
      id: "statements-2", title: "Latihan 2 · Urutan instruksi", difficulty: "Mudah",
      task: "Tampilkan tiga kata sesuai urutan: MULAI, PROSES, SELESAI. Pisahkan dengan tanda | tanpa spasi.",
      requirements: ["Gunakan tiga statement cout terpisah.", "Pastikan urutan output benar.", "Output tepat: MULAI|PROSES|SELESAI."],
      example: {input:"(tidak ada input)",output:"MULAI|PROSES|SELESAI"},
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: susun tiga statement cout sesuai urutan", "    return 0;", "}"].join("\n"),
      tests:[{input:"",expected:"MULAI|PROSES|SELESAI",visible:true}]
    },
    {
      id: "statements-3", title: "Latihan 3 · Variabel dan statement", difficulty: "Tantangan",
      task: "Buat variabel int skor bernilai 85, lalu tampilkan Skor: 85 menggunakan statement yang tepat.",
      requirements: ["Deklarasikan variabel int bernama skor dengan nilai 85.", "Gunakan cout untuk menampilkan label dan nilai variabel.", "Akhiri semua statement dengan titik koma."],
      example:{input:"(tidak ada input)",output:"Skor: 85"},
      starter:["#include <iostream>","using namespace std;","","int main() {","    // TODO: buat variabel skor dan tampilkan nilainya","    return 0;","}"].join("\n"),
      tests:[{input:"",expected:"Skor: 85",visible:true}]
    }
  ],
  output: [
    {
      id: "output-2", title: "Latihan 2 · Gabungkan beberapa teks", difficulty: "Mudah",
      task: "Gunakan cout untuk menampilkan: Nama: Alya, Kelas: 7. Kamu boleh memakai satu atau beberapa operator <<.",
      requirements: ["Perhatikan spasi dan tanda baca.", "Output tidak boleh memiliki baris tambahan."],
      example:{input:"(tidak ada input)",output:"Nama: Alya, Kelas: 7"},
      starter:["#include <iostream>","using namespace std;","","int main() {","    // TODO: tampilkan nama dan kelas","    return 0;","}"].join("\n"),
      tests:[{input:"",expected:"Nama: Alya, Kelas: 7",visible:true}]
    },
    {
      id: "output-3", title: "Latihan 3 · Kartu informasi", difficulty: "Tantangan",
      task: "Tampilkan kartu informasi dua baris: Nama: Bima pada baris pertama, Hobi: Coding pada baris kedua.",
      requirements:["Gunakan cout untuk menyusun teks.","Pastikan kedua label dan nilainya tepat.","Output berisi dua baris."],
      example:{input:"(tidak ada input)",output:"Nama: Bima\nHobi: Coding"},
      starter:["#include <iostream>","using namespace std;","","int main() {","    // TODO: tampilkan kartu informasi dalam dua baris","    return 0;","}"].join("\n"),
      tests:[{input:"",expected:"Nama: Bima\nHobi: Coding",visible:true}]
    }
  ],
  "output-numbers": [
    {
      id: "numbers-2", title: "Latihan 2 · Empat operasi", difficulty: "Mudah",
      task: "Tampilkan hasil 12 + 8, hasil 12 - 8, lalu hasil 3 * 4. Pisahkan ketiganya dengan satu spasi.",
      requirements:["Tampilkan hasil perhitungan, bukan rumus sebagai teks.","Urutan output: penjumlahan, pengurangan, perkalian.","Output tepat: 20 4 12."],
      example:{input:"(tidak ada input)",output:"20 4 12"},
      starter:["#include <iostream>","using namespace std;","","int main() {","    // TODO: hitung dan tampilkan tiga operasi","    return 0;","}"].join("\n"),
      tests:[{input:"",expected:"20 4 12",visible:true}]
    },
    {
      id: "numbers-3", title: "Latihan 3 · Hitung total belanja", difficulty: "Tantangan",
      task: "Satu buku berharga 7000 dan satu pensil berharga 3000. Tampilkan total harga dalam bentuk angka saja.",
      requirements:["Gunakan operasi matematika untuk menghitung total.","Jangan tulis simbol mata uang atau kalimat tambahan.","Output yang benar adalah 10000."],
      example:{input:"(tidak ada input)",output:"10000"},
      starter:["#include <iostream>","using namespace std;","","int main() {","    int buku = 7000;","    int pensil = 3000;","    // TODO: tampilkan total harga","    return 0;","}"].join("\n"),
      tests:[{input:"",expected:"10000",visible:true}]
    }
  ],
  "new-lines": [
    {
      id: "newlines-2", title: "Latihan 2 · Tiga baris", difficulty: "Mudah",
      task: "Tampilkan tiga baris: C++, itu mudah dipelajari, dan Terus berlatih!",
      requirements:["Setiap teks berada pada barisnya masing-masing.","Gunakan \\n atau endl.","Jangan menambah baris kosong."],
      example:{input:"(tidak ada input)",output:"C++\nitu mudah dipelajari\nTerus berlatih!"},
      starter:["#include <iostream>","using namespace std;","","int main() {","    // TODO: tampilkan tiga baris","    return 0;","}"].join("\n"),
      tests:[{input:"",expected:"C++\nitu mudah dipelajari\nTerus berlatih!",visible:true}]
    },
    {
      id: "newlines-3", title: "Latihan 3 · Beri satu baris kosong", difficulty: "Tantangan",
      task: "Tampilkan Baris pertama, satu baris kosong, lalu Baris kedua.",
      requirements:["Output terdiri dari dua kalimat dan satu baris kosong di antaranya.","Gunakan \\n atau endl.","Output harus tepat tanpa spasi tambahan."],
      example:{input:"(tidak ada input)",output:"Baris pertama\n\nBaris kedua"},
      starter:["#include <iostream>","using namespace std;","","int main() {","    // TODO: tampilkan dua kalimat dengan satu baris kosong","    return 0;","}"].join("\n"),
      tests:[{input:"",expected:"Baris pertama\n\nBaris kedua",visible:true}]
    }
  ]
};

for (const lesson of lessons) {
  if (lesson.kind === "reading") continue;
  const firstChallenge = {
    id: lesson.id + "-1",
    title: "Latihan 1 · " + lesson.title,
    difficulty: "Dasar",
    task: lesson.task,
    requirements: lesson.requirements,
    starter: lesson.starter,
    tests: lesson.tests,
    example: lesson.example
  };
  lesson.challenges = [firstChallenge, ...(EXTRA_CHALLENGES[lesson.id] || [])];
}


const lessonList = document.getElementById("lessonList");
const lessonTitle = document.getElementById("lessonTitle");
const lessonCategory = document.getElementById("lessonCategory");
const lessonLevel = document.getElementById("lessonLevel");
const lessonDuration = document.getElementById("lessonDuration");
const lessonSummary = document.getElementById("lessonSummary");
const conceptBlocks = document.getElementById("conceptBlocks");
const lessonSource = document.getElementById("lessonSource");
const lessonSourceLink = document.getElementById("lessonSourceLink");
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
  lessonSource.hidden = !lesson.sourceUrl;
  if (lesson.sourceUrl) {
    lessonSourceLink.href = lesson.sourceUrl;
    lessonSourceLink.textContent = lesson.sourceLabel || "Buka referensi";
  }
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
