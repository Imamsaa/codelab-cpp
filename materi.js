const STORAGE_KEY = "cpp-playground-lesson-progress-v1";
const CODE_KEY_PREFIX = "cpp-playground-lesson-code-";
const CHALLENGE_STORAGE_KEY = "cpp-playground-completed-challenges-v1";
const INPUT_KEY_PREFIX = "cpp-playground-lesson-input-";
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
,
  {
    id: "comments", title: "Komentar dalam C++", category: "Dasar C++", level: "Pemula", duration: "8 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_comments.asp", sourceLabel: "W3Schools — C++ Comments",
    summary: "Komentar adalah catatan di dalam kode yang diabaikan compiler. Komentar membantu menjelaskan maksud kode, memberi pengingat, dan memudahkan orang lain membaca program.",
    concepts: [
      { title: "Komentar satu baris", body: "Gunakan <code>//</code> untuk menulis komentar sampai akhir baris. Contohnya <code>// Menampilkan salam</code>. Komentar tidak ikut tampil sebagai output program." },
      { title: "Komentar beberapa baris", body: "Gunakan <code>/*</code> untuk memulai komentar blok dan <code>*/</code> untuk mengakhirinya. Komentar ini dapat mencakup beberapa baris, tetapi harus ditutup dengan benar." },
      { title: "Kapan menggunakan komentar?", body: "Tulis komentar untuk menjelaskan tujuan atau logika yang tidak langsung terlihat. Hindari komentar yang hanya mengulang sesuatu yang sudah jelas. Komentar bukan instruksi yang dijalankan program." }
    ],
    example: { input: "(tidak ada input)", output: "Halo C++" },
    task: "Tambahkan komentar satu baris yang menjelaskan bahwa program akan menampilkan salam, lalu tampilkan Halo C++.",
    requirements: ["Gunakan komentar yang dimulai dengan //.", "Tampilkan Halo C++ menggunakan cout.", "Komentar tidak boleh menjadi bagian dari output."],
    starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: tulis komentar tentang salam", "    cout << \"Halo C++\";", "    return 0;", "}"].join("\n"),
    tests: [{ input: "", expected: "Halo C++", visible: true }]
  },
  {
    id: "variables", title: "Variabel dalam C++", category: "Variabel", level: "Pemula", duration: "10 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_variables.asp", sourceLabel: "W3Schools — C++ Variables",
    summary: "Variabel adalah tempat bernama untuk menyimpan nilai. Setiap variabel memiliki tipe data, nama, dan dapat diberi nilai yang kemudian digunakan kembali di dalam program.",
    concepts: [
      { title: "Deklarasi variabel", body: "Tulis tipe data lalu nama variabel, misalnya <code>int umur;</code>. Baris ini membuat variabel bernama <code>umur</code> yang menyimpan bilangan bulat." },
      { title: "Memberikan nilai", body: "Tanda <code>=</code> digunakan untuk memberi nilai, misalnya <code>int umur = 13;</code>. Pemberian nilai saat deklarasi disebut inisialisasi." },
      { title: "Tipe data umum", body: "<code>int</code> menyimpan bilangan bulat, <code>double</code> menyimpan bilangan desimal, <code>char</code> menyimpan satu karakter, dan <code>string</code> menyimpan teks. Gunakan <code>#include &lt;string&gt;</code> saat memakai string." },
      { title: "Menggunakan variabel", body: "Setelah dibuat, nilai variabel dapat digunakan dalam perhitungan atau ditampilkan dengan <code>cout</code>. Nama variabel membedakan nilai tersebut dari teks biasa." }
    ],
    example: { input: "(tidak ada input)", output: "Alya 13" },
    task: "Buat variabel string bernama nama dengan nilai Alya dan variabel int bernama umur dengan nilai 13. Tampilkan keduanya dipisahkan satu spasi.",
    requirements: ["Deklarasikan string nama dan int umur.", "Gunakan variabel di dalam cout, bukan menulis nilainya sebagai teks.", "Output harus tepat: Alya 13."],
    starter: ["#include <iostream>", "#include <string>", "using namespace std;", "", "int main() {", "    // TODO: deklarasikan nama dan umur", "    // TODO: tampilkan kedua variabel", "    return 0;", "}"].join("\n"),
    tests: [{ input: "", expected: "Alya 13", visible: true }]
  },
  {
    id: "variables-multiple", title: "Membuat Beberapa Variabel", category: "Variabel", level: "Pemula", duration: "8 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_variables_multiple.asp", sourceLabel: "W3Schools — Multiple Variables",
    summary: "Program dapat memiliki banyak variabel. Variabel dengan tipe data sama bisa dideklarasikan pada satu baris menggunakan koma, atau ditulis pada baris terpisah agar lebih mudah dibaca.",
    concepts: [
      { title: "Deklarasi pada satu baris", body: "Contoh <code>int x = 5, y = 10, z = 15;</code> membuat tiga variabel bertipe <code>int</code>. Setiap nama memiliki nilai masing-masing." },
      { title: "Deklarasi terpisah", body: "Kamu juga dapat menulis <code>int x = 5;</code> lalu <code>int y = 10;</code>. Pilih format yang paling mudah dipahami untuk kode yang sedang dibuat." },
      { title: "Nilai yang sama", body: "Beberapa variabel dapat diberi nilai yang sama dalam satu pernyataan, contohnya <code>int a, b, c; a = b = c = 7;</code>. Semua variabel tersebut akan menyimpan nilai 7." }
    ],
    example: { input: "(tidak ada input)", output: "5 10 15" },
    task: "Deklarasikan tiga variabel bertipe int dalam satu baris: x bernilai 5, y bernilai 10, dan z bernilai 15. Tampilkan ketiganya dengan satu spasi sebagai pemisah.",
    requirements: ["Gunakan satu deklarasi int untuk x, y, dan z.", "Tampilkan nilai variabel sesuai urutan x, y, z.", "Output harus tepat: 5 10 15."],
    starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: deklarasikan x, y, z dalam satu baris", "    // TODO: tampilkan x, y, z", "    return 0;", "}"].join("\n"),
    tests: [{ input: "", expected: "5 10 15", visible: true }]
  },
  {
    id: "identifiers", title: "Nama Variabel (Identifiers)", category: "Variabel", level: "Pemula", duration: "8 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_variables_identifiers.asp", sourceLabel: "W3Schools — C++ Identifiers",
    summary: "Identifier adalah nama yang digunakan untuk variabel dan elemen program lain. Nama yang jelas membuat kode lebih mudah dibaca, dan aturan penamaan harus dipatuhi agar program dapat dikompilasi.",
    concepts: [
      { title: "Aturan nama identifier", body: "Nama dapat berisi huruf, angka, dan garis bawah (<code>_</code>), tetapi tidak boleh diawali angka. Contoh valid: <code>nilaiSiswa</code>, <code>nilai_akhir</code>, dan <code>kelas7</code>." },
      { title: "Hindari spasi dan simbol", body: "Nama seperti <code>nama siswa</code> tidak valid karena mengandung spasi. Tanda seperti <code>@</code> dan <code>-</code> juga tidak dapat digunakan sebagai bagian identifier biasa." },
      { title: "Peka huruf besar-kecil", body: "<code>nilai</code>, <code>Nilai</code>, dan <code>NILAI</code> dianggap nama yang berbeda. Nama identifier juga tidak boleh memakai kata kunci C++ seperti <code>int</code> atau <code>return</code>." }
    ],
    example: { input: "(tidak ada input)", output: "Nilai akhir: 95" },
    task: "Buat variabel nilai_awal bernilai 80 dan bonus bernilai 15. Simpan jumlahnya ke variabel nilai_akhir, lalu tampilkan dengan format Nilai akhir: 95.",
    requirements: ["Gunakan nama variabel nilai_awal, bonus, dan nilai_akhir persis seperti instruksi.", "Hitung nilai_akhir dari dua variabel sebelumnya.", "Tampilkan label dan nilai akhir menggunakan cout."],
    starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: buat variabel dengan identifier yang diminta", "    // TODO: hitung dan tampilkan nilai akhir", "    return 0;", "}"].join("\n"),
    tests: [{ input: "", expected: "Nilai akhir: 95", visible: true }]
  },
  {
    id: "constants", title: "Konstanta dalam C++", category: "Variabel", level: "Pemula", duration: "8 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_variables_constants.asp", sourceLabel: "W3Schools — C++ Constants",
    summary: "Konstanta mirip variabel, tetapi nilainya tidak boleh diubah setelah diinisialisasi. Kata kunci const membantu menjaga nilai yang seharusnya tetap, seperti jumlah hari dalam seminggu atau harga tetap.",
    concepts: [
      { title: "Menggunakan const", body: "Tambahkan kata kunci <code>const</code> saat deklarasi, contohnya <code>const int hari = 7;</code>. Variabel konstanta harus diberi nilai saat dibuat." },
      { title: "Nilai tidak dapat diubah", body: "Setelah deklarasi <code>const</code>, mencoba memberi nilai baru akan menyebabkan error kompilasi. Ini mencegah nilai penting berubah tanpa sengaja." },
      { title: "Konstanta dalam perhitungan", body: "Nilai konstanta dapat digunakan seperti variabel biasa untuk menghitung total atau hasil lainnya. Gunakan nama yang menjelaskan tujuan nilai tersebut." }
    ],
    example: { input: "(tidak ada input)", output: "Total: 15000" },
    task: "Buat konstanta biaya bernilai 5000 dan konstanta jumlah bernilai 3. Hitung total biaya dan tampilkan dengan format Total: 15000.",
    requirements: ["Gunakan const int untuk biaya dan jumlah.", "Hitung total dengan mengalikan biaya dan jumlah.", "Jangan mengubah nilai konstanta setelah deklarasi."],
    starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: buat dua konstanta", "    // TODO: hitung dan tampilkan total biaya", "    return 0;", "}"].join("\n"),
    tests: [{ input: "", expected: "Total: 15000", visible: true }]
  },
  {
    id: "user-input", title: "Input Pengguna dengan cin", category: "Input", level: "Pemula", duration: "10 menit",
    sourceUrl: "https://www.w3schools.com/cpp/cpp_user_input.asp", sourceLabel: "W3Schools — C++ User Input",
    summary: "Program interaktif dapat menerima data dari pengguna. Di C++, cin digunakan bersama operator >> untuk membaca nilai dari input standar, lalu nilai tersebut dapat diproses atau ditampilkan kembali.",
    concepts: [
      { title: "Membaca input dengan cin", body: "Contoh <code>int umur;</code> lalu <code>cin &gt;&gt; umur;</code> membaca sebuah bilangan bulat yang diketik pengguna. Operator <code>&gt;&gt;</code> memasukkan nilai input ke variabel." },
      { title: "Input harus sesuai tipe data", body: "Jika variabel bertipe <code>int</code>, masukkan bilangan bulat. Untuk teks satu kata, gunakan <code>string</code> dan sertakan <code>#include &lt;string&gt;</code>. <code>cin &gt;&gt; nama</code> berhenti membaca teks saat bertemu spasi." },
      { title: "Membaca beberapa nilai", body: "Kamu dapat menulis <code>cin &gt;&gt; nama &gt;&gt; umur;</code> untuk membaca lebih dari satu nilai secara berurutan. Data dapat dipisahkan spasi atau baris baru." },
      { title: "Mengolah input", body: "Nilai yang dibaca dapat digunakan dalam operasi matematika dan ditampilkan dengan <code>cout</code>. Program yang baik tidak menganggap input pengguna selalu sama." }
    ],
    example: { input: "Alya 13", output: "Nama: Alya, umur: 13" },
    task: "Baca satu kata nama dan satu bilangan umur dari pengguna. Tampilkan dengan format Nama: Alya, umur: 13 sesuai data input.",
    requirements: ["Baca nama dan umur menggunakan cin.", "Gunakan variabel string nama dan int umur.", "Output harus mengikuti format Nama: [nama], umur: [umur]."],
    starter: ["#include <iostream>", "#include <string>", "using namespace std;", "", "int main() {", "    string nama;", "    int umur;", "    // TODO: baca nama dan umur menggunakan cin", "    // TODO: tampilkan kedua nilai sesuai format", "    return 0;", "}"].join("\n"),
    tests: [
      { input: "Alya 13", expected: "Nama: Alya, umur: 13", visible: true },
      { input: "Bima 14", expected: "Nama: Bima, umur: 14", visible: true },
      { input: "Nisa 12", expected: "Nama: Nisa, umur: 12", visible: true }
    ]
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
  ],
  comments: [
    {
      id: "comments-2", title: "Latihan 2 · Komentar blok", difficulty: "Mudah",
      task: "Gunakan komentar blok /* ... */ untuk menjelaskan bahwa program menampilkan pesan, lalu tampilkan Komentar tidak tampil.",
      requirements: ["Tambahkan komentar blok yang ditutup dengan */.", "Gunakan cout untuk menampilkan pesan.", "Output tidak boleh berisi teks komentar."],
      example: { input: "(tidak ada input)", output: "Komentar tidak tampil" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    /* TODO: tulis komentar blok */", "    cout << \"Komentar tidak tampil\";", "    return 0;", "}"].join("\n"),
      tests: [{ input: "", expected: "Komentar tidak tampil", visible: true }]
    },
    {
      id: "comments-3", title: "Latihan 3 · Dokumentasikan perhitungan", difficulty: "Tantangan",
      task: "Gunakan komentar untuk menjelaskan perhitungan total dari harga 10 dan ongkir 5. Tampilkan dengan format Total: 15.",
      requirements: ["Gunakan variabel harga dan ongkir yang sudah disediakan.", "Tambahkan komentar yang menjelaskan perhitungan.", "Hitung dan tampilkan total dengan cout."],
      example: { input: "(tidak ada input)", output: "Total: 15" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    int harga = 10;", "    int ongkir = 5;", "    // TODO: jelaskan dan tampilkan total harga + ongkir", "    return 0;", "}"].join("\n"),
      tests: [{ input: "", expected: "Total: 15", visible: true }]
    }
  ],
  variables: [
    {
      id: "variables-2", title: "Latihan 2 · Simpan skor", difficulty: "Mudah",
      task: "Buat variabel int bernama skor bernilai 95, lalu tampilkan nilainya.",
      requirements: ["Deklarasikan int skor = 95.", "Tampilkan nilai dari variabel skor.", "Jangan menulis 95 sebagai teks literal di cout."],
      example: { input: "(tidak ada input)", output: "95" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: deklarasikan skor dan tampilkan nilainya", "    return 0;", "}"].join("\n"),
      tests: [{ input: "", expected: "95", visible: true }]
    },
    {
      id: "variables-3", title: "Latihan 3 · Hitung luas persegi panjang", difficulty: "Tantangan",
      task: "Buat variabel int panjang bernilai 8 dan lebar bernilai 4. Hitung luas dengan mengalikan kedua variabel dan tampilkan hasilnya.",
      requirements: ["Gunakan variabel panjang dan lebar bertipe int.", "Simpan hasil perkalian pada variabel luas.", "Output harus tepat: 32."],
      example: { input: "(tidak ada input)", output: "32" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: deklarasikan panjang dan lebar", "    // TODO: hitung serta tampilkan luas", "    return 0;", "}"].join("\n"),
      tests: [{ input: "", expected: "32", visible: true }]
    }
  ],
  "variables-multiple": [
    {
      id: "variables-multiple-2", title: "Latihan 2 · Nilai variabel sama", difficulty: "Mudah",
      task: "Deklarasikan variabel a, b, dan c bertipe int. Beri ketiganya nilai 7 dalam satu pernyataan assignment, lalu tampilkan dengan pemisah spasi.",
      requirements: ["Deklarasikan a, b, dan c sebagai int.", "Gunakan assignment berantai a = b = c = 7.", "Output harus tepat: 7 7 7."],
      example: { input: "(tidak ada input)", output: "7 7 7" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    int a, b, c;", "    // TODO: beri nilai yang sama lalu tampilkan semuanya", "    return 0;", "}"].join("\n"),
      tests: [{ input: "", expected: "7 7 7", visible: true }]
    },
    {
      id: "variables-multiple-3", title: "Latihan 3 · Total barang", difficulty: "Tantangan",
      task: "Deklarasikan buku = 2 dan pensil = 3 pada satu baris bertipe int. Hitung total jumlah barang dan tampilkan dengan format Total barang: 5.",
      requirements: ["Deklarasikan buku dan pensil dalam satu baris.", "Hitung total dari kedua variabel.", "Tampilkan sesuai format yang diminta."],
      example: { input: "(tidak ada input)", output: "Total barang: 5" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: deklarasikan buku dan pensil bersama-sama", "    // TODO: hitung dan tampilkan total barang", "    return 0;", "}"].join("\n"),
      tests: [{ input: "", expected: "Total barang: 5", visible: true }]
    }
  ],
  identifiers: [
    {
      id: "identifiers-2", title: "Latihan 2 · Identifier dengan garis bawah", difficulty: "Mudah",
      task: "Buat variabel jumlah_buku bernilai 4. Tampilkan dengan format Jumlah buku: 4.",
      requirements: ["Gunakan nama variabel jumlah_buku dengan garis bawah.", "Simpan nilai 4 sebagai int.", "Tampilkan nilai melalui variabel."],
      example: { input: "(tidak ada input)", output: "Jumlah buku: 4" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: gunakan identifier jumlah_buku", "    return 0;", "}"].join("\n"),
      tests: [{ input: "", expected: "Jumlah buku: 4", visible: true }]
    },
    {
      id: "identifiers-3", title: "Latihan 3 · Identifier dengan angka", difficulty: "Tantangan",
      task: "Buat variabel nilai1 = 70 dan nilai2 = 85. Tampilkan keduanya dengan format Nilai 1: 70, Nilai 2: 85.",
      requirements: ["Gunakan nama nilai1 dan nilai2; nama diawali huruf, bukan angka.", "Deklarasikan keduanya bertipe int.", "Tampilkan nilai sesuai format."],
      example: { input: "(tidak ada input)", output: "Nilai 1: 70, Nilai 2: 85" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: deklarasikan nilai1 dan nilai2", "    // TODO: tampilkan kedua nilai", "    return 0;", "}"].join("\n"),
      tests: [{ input: "", expected: "Nilai 1: 70, Nilai 2: 85", visible: true }]
    }
  ],
  constants: [
    {
      id: "constants-2", title: "Latihan 2 · Konstanta hari", difficulty: "Mudah",
      task: "Buat konstanta int bernama hariDalamMinggu bernilai 7, lalu tampilkan nilainya.",
      requirements: ["Gunakan const int hariDalamMinggu = 7.", "Tampilkan konstanta tersebut menggunakan cout.", "Output harus tepat: 7."],
      example: { input: "(tidak ada input)", output: "7" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: deklarasikan dan tampilkan konstanta", "    return 0;", "}"].join("\n"),
      tests: [{ input: "", expected: "7", visible: true }]
    },
    {
      id: "constants-3", title: "Latihan 3 · Total harga tetap", difficulty: "Tantangan",
      task: "Gunakan konstanta harga = 7000 dan jumlah = 2 untuk menghitung total. Tampilkan hasilnya dengan format Total: 14000.",
      requirements: ["Deklarasikan kedua nilai menggunakan const int.", "Hitung total dengan mengalikan harga dan jumlah.", "Jangan mengubah nilai konstanta setelah deklarasi."],
      example: { input: "(tidak ada input)", output: "Total: 14000" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    // TODO: deklarasikan konstanta harga dan jumlah", "    // TODO: hitung dan tampilkan total", "    return 0;", "}"].join("\n"),
      tests: [{ input: "", expected: "Total: 14000", visible: true }]
    }
  ],
  "user-input": [
    {
      id: "user-input-2", title: "Latihan 2 · Input nama dan kelas", difficulty: "Mudah",
      task: "Baca satu kata nama dan angka kelas menggunakan cin. Tampilkan dengan format Alya kelas 7 sesuai input.",
      requirements: ["Gunakan variabel string nama dan int kelas.", "Baca kedua nilai melalui cin.", "Output mengikuti format [nama] kelas [kelas]."],
      example: { input: "Alya 7", output: "Alya kelas 7" },
      starter: ["#include <iostream>", "#include <string>", "using namespace std;", "", "int main() {", "    string nama;", "    int kelas;", "    // TODO: baca nama dan kelas", "    // TODO: tampilkan nama dan kelas", "    return 0;", "}"].join("\n"),
      tests: [
        { input: "Alya 7", expected: "Alya kelas 7", visible: true },
        { input: "Bima 8", expected: "Bima kelas 8", visible: true }
      ]
    },
    {
      id: "user-input-3", title: "Latihan 3 · Jumlahkan input", difficulty: "Tantangan",
      task: "Baca dua bilangan bulat dari input, hitung jumlahnya, lalu tampilkan hasil penjumlahan saja.",
      requirements: ["Baca dua bilangan menggunakan cin.", "Simpan keduanya di variabel int.", "Hitung dan tampilkan jumlahnya; uji juga dengan input lain."],
      example: { input: "12 8", output: "20" },
      starter: ["#include <iostream>", "using namespace std;", "", "int main() {", "    int a, b;", "    // TODO: baca dua bilangan, jumlahkan, lalu tampilkan hasilnya", "    return 0;", "}"].join("\n"),
      tests: [
        { input: "12 8", expected: "20", visible: true },
        { input: "45 55", expected: "100", visible: true },
        { input: "-3 10", expected: "7", visible: true }
      ]
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
const runProgramBtn = document.getElementById("runProgramBtn");
const terminalInput = document.getElementById("terminalInput");
const terminalForm = document.getElementById("terminalForm");
const sendInputBtn = document.getElementById("sendInputBtn");
const endInputBtn = document.getElementById("endInputBtn");
const terminalMode = document.getElementById("terminalMode");
const fallbackNotice = document.getElementById("fallbackNotice");
const fallbackStdin = document.getElementById("fallbackStdin");
const clearProgramOutputBtn = document.getElementById("clearProgramOutputBtn");
const programOutput = document.getElementById("programOutput");
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
const challengePicker = document.getElementById("challengePicker");
const challengeButtons = document.getElementById("challengeButtons");
const challengeCountLabel = document.getElementById("challengeCountLabel");
const challengeHeading = document.getElementById("challengeHeading");

let currentLesson = lessons[0];
let currentChallengeIndex = 0;
let completedChallenges = new Set();
let cmEditor = null;
let fallbackCode = null;
let activeWorker = null;
let challengeTimeout = null;
let completedLessons = new Set();
let savedCodes = {};
let savedInputs = {};
let lastRunSignature = "";
let sharedInput = null;
let sharedHeader = null;
let sharedBytes = null;
let interactiveSupported = typeof SharedArrayBuffer === "function" && window.crossOriginIsolated;
let programActive = false;
let programWaitingForInput = false;
let programOutputReceived = false;
let fallbackEdited = false;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function challengeKey(lesson = currentLesson, challenge = getCurrentChallenge()) {
  return challenge ? lesson.id + "::" + challenge.id : lesson.id;
}

function getCurrentChallenge() {
  return currentLesson.challenges?.[currentChallengeIndex] || null;
}

function getRunSignature() {
  const challenge = getCurrentChallenge();
  if (!challenge) return "";
  return JSON.stringify({
    key: challengeKey(currentLesson, challenge),
    source: getCode(),
    input: interactiveSupported ? "" : fallbackStdin.value,
    standard: standardSelect.value
  });
}

function hasMatchingRun() {
  return Boolean(lastRunSignature) && lastRunSignature === getRunSignature();
}

function updateCheckButtonState() {
  if (checkAnswerBtn) checkAnswerBtn.disabled = Boolean(activeWorker) || !hasMatchingRun();
}

function saveProgramInput() {
  const challenge = getCurrentChallenge();
  if (!challenge) return;
  const key = challengeKey(currentLesson, challenge);
  savedInputs[key] = fallbackStdin.value;
  try { localStorage.setItem(INPUT_KEY_PREFIX + key, fallbackStdin.value); } catch { /* Storage is optional. */ }
  updateCheckButtonState();
}

function appendProgramOutput(text) {
  if (!text) return;
  programOutput.textContent += text;
  programOutput.scrollTop = programOutput.scrollHeight;
}

function showProgramOutput(text) {
  programOutput.textContent = text || "";
  programOutput.scrollTop = programOutput.scrollHeight;
}

function setTerminalInputEnabled(enabled) {
  const canType = enabled && interactiveSupported && programActive;
  terminalInput.disabled = !canType;
  sendInputBtn.disabled = !canType;
  endInputBtn.disabled = !canType || !sharedHeader;
}

function createSharedInputQueue() {
  sharedInput = new SharedArrayBuffer(16 + 65536);
  sharedHeader = new Int32Array(sharedInput, 0, 4);
  sharedBytes = new Uint8Array(sharedInput, 16);
}

function closeSharedInput() {
  if (!sharedHeader) return;
  Atomics.store(sharedHeader, 2, 1);
  Atomics.notify(sharedHeader, 0);
}

function enqueueProgramInput(line) {
  if (!sharedHeader || !sharedBytes) return false;
  const capacity = sharedBytes.length;
  const bytes = new TextEncoder().encode(line);
  const write = Atomics.load(sharedHeader, 0);
  const read = Atomics.load(sharedHeader, 1);
  const used = write - read;
  if (bytes.length > capacity - used) return false;
  for (let index = 0; index < bytes.length; index++) {
    sharedBytes[(write + index) & (capacity - 1)] = bytes[index];
  }
  Atomics.store(sharedHeader, 0, write + bytes.length);
  Atomics.notify(sharedHeader, 0);
  return true;
}

function clearProgramWatchdog() {
  if (challengeTimeout !== null) clearTimeout(challengeTimeout);
  challengeTimeout = null;
}

function armProgramWatchdog() {
  clearProgramWatchdog();
  if (!activeWorker || programWaitingForInput) return;
  challengeTimeout = setTimeout(() => {
    if (!activeWorker) return;
    stopChallenge("Batas waktu tercapai. Periksa kemungkinan perulangan tanpa akhir.");
    appendProgramOutput("\n\n[Program dihentikan: batas waktu 90 detik tercapai.]");
    judgeState.textContent = "Waktu habis";
    resultsList.innerHTML = '<div class="result-item failed"><div class="result-top"><span>Program dihentikan</span><span class="failed-text">✕ Waktu habis</span></div><div class="result-detail">Periksa kemungkinan perulangan tanpa akhir, lalu jalankan ulang.</div></div>';
  }, 90000);
}

function isLessonComplete(lesson) {
  if (lesson.kind === "reading") return completedLessons.has(lesson.id);
  const challenges = lesson.challenges || [];
  return challenges.length > 0 && challenges.every((challenge) => completedChallenges.has(challengeKey(lesson, challenge)));
}

function completedChallengeCount(lesson) {
  return (lesson.challenges || []).filter((challenge) => completedChallenges.has(challengeKey(lesson, challenge))).length;
}

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (Array.isArray(saved)) completedLessons = new Set(saved);
    const savedChallenges = JSON.parse(localStorage.getItem(CHALLENGE_STORAGE_KEY) || "[]");
    if (Array.isArray(savedChallenges)) completedChallenges = new Set(savedChallenges);

    for (const lesson of lessons) {
      const legacyValue = localStorage.getItem(CODE_KEY_PREFIX + lesson.id);
      if (legacyValue !== null) savedCodes[lesson.id] = legacyValue;
      for (const challenge of lesson.challenges || []) {
        const key = challengeKey(lesson, challenge);
        const value = localStorage.getItem(CODE_KEY_PREFIX + key);
        if (value !== null) savedCodes[key] = value;
        else if (challenge === lesson.challenges[0] && legacyValue !== null) savedCodes[key] = legacyValue;
        const savedInput = localStorage.getItem(INPUT_KEY_PREFIX + key);
        if (savedInput !== null) savedInputs[key] = savedInput;
      }
    }
  } catch (error) {
    console.warn("Tidak dapat membaca progres lokal:", error);
  }
}

function getCode() {
  return cmEditor ? cmEditor.state.doc.toString() : (fallbackCode ? fallbackCode.value : "");
}

function saveCode() {
  const challenge = getCurrentChallenge();
  const code = getCode();
  const key = challengeKey(currentLesson, challenge);
  savedCodes[key] = code;
  try { localStorage.setItem(CODE_KEY_PREFIX + key, code); } catch { /* Storage is optional. */ }
  updateLineInfo();
}

function setCode(code) {
  if (cmEditor) {
    cmEditor.dispatch({ changes: { from: 0, to: cmEditor.state.doc.length, insert: code } });
  } else if (fallbackCode) {
    fallbackCode.value = code;
    updateLineInfo();
    const key = challengeKey(currentLesson, getCurrentChallenge());
    savedCodes[key] = code;
    try { localStorage.setItem(CODE_KEY_PREFIX + key, code); } catch { /* Storage is optional. */ }
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
  runProgramBtn.disabled = busy;
  checkAnswerBtn.disabled = busy || !hasMatchingRun();
  stopChallengeBtn.disabled = !busy;
  resetCodeBtn.disabled = busy;
  fallbackStdin.disabled = busy;
  setTerminalInputEnabled(!busy && programActive);
}

function updateProgress() {
  const count = lessons.filter(isLessonComplete).length;
  progressCount.textContent = count + "/" + lessons.length + " topik selesai";
  progressFill.style.width = (count / lessons.length * 100) + "%";
  renderLessonList();
}

function renderLessonList() {
  lessonList.innerHTML = lessons.map((lesson, index) => {
    const active = lesson.id === currentLesson.id;
    const complete = isLessonComplete(lesson);
    const practiceCount = (lesson.challenges || []).length;
    const doneCount = completedChallengeCount(lesson);
    const subtitle = lesson.kind === "reading"
      ? lesson.category + " · " + lesson.duration
      : lesson.category + " · " + doneCount + "/" + practiceCount + " latihan";
    return '<button type="button" class="lesson-nav-btn' + (active ? " active" : "") + '" data-lesson-id="' + lesson.id + '" aria-current="' + (active ? "page" : "false") + '">' +
      '<span class="lesson-number">' + (complete ? "✓" : String(index + 1).padStart(2, "0")) + '</span>' +
      '<span class="lesson-nav-copy"><strong>' + escapeHtml(lesson.title) + '</strong><small>' + escapeHtml(subtitle) + '</small></span>' +
      (complete ? '<span class="lesson-check" aria-label="Selesai">✓</span>' : "") + '</button>';
  }).join("");
}

function renderLesson(lesson) {
  const isReading = lesson.kind === "reading";
  currentChallengeIndex = 0;
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

  challengePicker.hidden = isReading;
  challengePanel.hidden = isReading;
  readingActions.hidden = !isReading;
  lessonExample.hidden = true;
  document.querySelector(".statement").hidden = true;

  markReadBtn.textContent = completedLessons.has(lesson.id) ? "✓ Materi sudah dipelajari" : "Tandai selesai membaca";
  markReadBtn.disabled = completedLessons.has(lesson.id);

  if (isReading) {
    challengeButtons.innerHTML = "";
    challengeCountLabel.textContent = "Materi baca";
    caseCount.textContent = "—";
    judgeState.textContent = completedLessons.has(lesson.id) ? "Sudah dibaca" : "Materi baca";
    compileDiagnostics.classList.remove("show");
    compileDiagnostics.textContent = "";
    resultsList.innerHTML = '<div class="empty-results">Materi ini tidak memerlukan editor latihan. Baca penjelasan, lalu tandai selesai.</div>';
    return;
  }

  renderChallenge();
}

function renderChallengeButtonsOnly() {
  const buttons = challengeButtons.querySelectorAll("[data-challenge-index]");
  buttons.forEach((button) => {
    const index = Number(button.dataset.challengeIndex);
    const challenge = currentLesson.challenges[index];
    const done = completedChallenges.has(challengeKey(currentLesson, challenge));
    button.classList.toggle("complete", done);
    const number = button.querySelector(".challenge-chip-number");
    if (number) number.textContent = done ? "✓" : String(index + 1).padStart(2, "0");
  });
}

function renderChallenge() {
  const challenges = currentLesson.challenges || [];
  const challenge = getCurrentChallenge();
  if (!challenge) return;

  challengeCountLabel.textContent = "Latihan " + (currentChallengeIndex + 1) + " dari " + challenges.length;
  challengeButtons.innerHTML = challenges.map((item, index) => {
    const key = challengeKey(currentLesson, item);
    const isActive = index === currentChallengeIndex;
    const isComplete = completedChallenges.has(key);
    return '<button class="challenge-chip' + (isActive ? " active" : "") + (isComplete ? " complete" : "") + '" type="button" data-challenge-index="' + index + '" aria-pressed="' + isActive + '">' +
      '<span class="challenge-chip-number">' + (isComplete ? "✓" : String(index + 1).padStart(2, "0")) + '</span>' +
      '<span class="challenge-chip-copy"><strong>' + escapeHtml(item.title.replace(/^Latihan \d+ · /, "")) + '</strong><small>' + escapeHtml(item.difficulty || "Latihan") + '</small></span>' +
      '</button>';
  }).join("");

  challengeHeading.textContent = challenge.title;
  document.querySelector(".statement").hidden = !challenge.task;
  lessonTask.textContent = challenge.task || "";
  taskRequirements.innerHTML = (challenge.requirements || []).map((requirement) => "<li>" + escapeHtml(requirement) + "</li>").join("");

  const example = challenge.example || currentLesson.example;
  lessonExample.hidden = !example;
  if (example) {
    lessonExample.innerHTML = '<h3>Contoh input dan output</h3><div class="example-grid">' +
      '<div><span class="example-label">Input</span><pre>' + escapeHtml(example.input) + '</pre></div>' +
      '<div><span class="example-label">Output</span><pre>' + escapeHtml(example.output) + '</pre></div></div>';
  }

  const key = challengeKey(currentLesson, challenge);
  const sampleInput = example && example.input && example.input !== "(tidak ada input)" ? example.input : "";
  fallbackStdin.value = Object.prototype.hasOwnProperty.call(savedInputs, key) ? savedInputs[key] : sampleInput;
  terminalInput.value = "";
  setTerminalInputEnabled(false);
  terminalMode.textContent = interactiveSupported ? "Interaktif" : "Mode stdin";
  fallbackNotice.hidden = interactiveSupported;
  fallbackStdin.hidden = interactiveSupported;
  lastRunSignature = "";
  caseCount.textContent = "— / " + challenge.tests.length;
  judgeState.textContent = completedChallenges.has(key) ? "Latihan selesai" : "Belum diuji";
  compileDiagnostics.classList.remove("show");
  compileDiagnostics.textContent = "";
  resultsList.innerHTML = '<div class="empty-results">Jalankan program terlebih dahulu. Setelah mencoba kode dan melihat outputnya, tekan <b>Periksa Jawaban</b> untuk penilaian otomatis.</div>';
  showProgramOutput("Terminal siap. Tekan Jalankan Program untuk memulai.");
  setCode(savedCodes[key] ?? challenge.starter);
  updateCheckButtonState();
}

function selectChallenge(indexValue) {
  const index = Number(indexValue);
  if (!Number.isInteger(index) || index < 0 || index >= (currentLesson.challenges || []).length || index === currentChallengeIndex) return;
  if (activeWorker) stopChallenge("Pemeriksaan dihentikan karena latihan diganti.");
  saveCode();
  currentChallengeIndex = index;
  renderChallenge();
  setStatus("Latihan " + (currentChallengeIndex + 1) + " siap dikerjakan.", "idle");
  if (cmEditor) cmEditor.focus();
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
  fallbackEdited = false;
  setStatus(currentLesson.kind === "reading" ? "Materi pengantar siap dibaca." : "Pilih latihan dan tulis solusi terbaikmu.", "idle");
  if (cmEditor && currentLesson.kind !== "reading") {
    cmEditor.requestMeasure();
    cmEditor.focus();
  }
}

function showResults(tests) {
  const challenge = getCurrentChallenge();
  const key = challengeKey(currentLesson, challenge);
  const passedCount = tests.filter((test) => test.passed).length;
  caseCount.textContent = passedCount + " / " + tests.length;
  judgeState.textContent = passedCount === tests.length ? "Latihan lolos" : "Perlu diperbaiki";
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

  if (passedCount === tests.length && tests.length > 0) {
    completedChallenges.add(key);
    try { localStorage.setItem(CHALLENGE_STORAGE_KEY, JSON.stringify([...completedChallenges])); } catch { /* Storage is optional. */ }
    updateProgress();
    const done = completedChallengeCount(currentLesson);
    const total = currentLesson.challenges.length;
    if (isLessonComplete(currentLesson)) {
      setStatus("Keren! Semua " + total + " latihan pada materi ini sudah selesai.", "ok");
    } else {
      setStatus("Latihan ini berhasil! Progres materi: " + done + "/" + total + ". Lanjut ke latihan berikutnya.", "ok");
    }
    renderChallengeButtonsOnly();
  } else {
    completedChallenges.delete(key);
    try { localStorage.setItem(CHALLENGE_STORAGE_KEY, JSON.stringify([...completedChallenges])); } catch { /* Storage is optional. */ }
    updateProgress();
    renderChallengeButtonsOnly();
    setStatus(passedCount + " dari " + tests.length + " test case lolos. Periksa kembali logika program.", "error");
  }
}

function finishChallenge() {
  clearProgramWatchdog();
  closeSharedInput();
  sharedInput = null; sharedHeader = null; sharedBytes = null;
  programActive = false;
  programWaitingForInput = false;
  setTerminalInputEnabled(false);
  if (activeWorker) { activeWorker.terminate(); activeWorker = null; }
  setBusy(false);
}

function stopChallenge(message = "Program dihentikan.") {
  clearProgramWatchdog();
  closeSharedInput();
  if (activeWorker) activeWorker.terminate();
  activeWorker = null;
  sharedInput = null; sharedHeader = null; sharedBytes = null;
  programActive = false;
  programWaitingForInput = false;
  lastRunSignature = "";
  setTerminalInputEnabled(false);
  setBusy(false);
  setStatus(message, "error");
  judgeState.textContent = "Dihentikan";
}

function runProgram() {
  if (currentLesson.kind === "reading") return;
  if (activeWorker) stopChallenge("Proses sebelumnya dihentikan.");
  const source = getCode();
  if (!source.trim()) {
    setStatus("Editor masih kosong.", "error");
    showProgramOutput("Tidak ada kode untuk dijalankan.");
    return;
  }
  interactiveSupported = typeof SharedArrayBuffer === "function" && window.crossOriginIsolated;
  if (interactiveSupported) {
    try { createSharedInputQueue(); }
    catch (error) {
      interactiveSupported = false;
      sharedInput = null; sharedHeader = null; sharedBytes = null;
      console.warn("Terminal interaktif tidak tersedia; memakai stdin sebelum Run.", error);
    }
  }
  terminalMode.textContent = interactiveSupported ? "Interaktif" : "Mode stdin";
  fallbackNotice.hidden = interactiveSupported;
  fallbackStdin.hidden = interactiveSupported;
  saveCode();
  saveProgramInput();
  lastRunSignature = "";
  const runSignature = getRunSignature();
  updateCheckButtonState();
  setBusy(true);
  setStatus("Menyiapkan compiler untuk menjalankan program…", "busy");
  judgeState.textContent = "Menjalankan program";
  caseCount.textContent = "— / —";
  compileDiagnostics.classList.remove("show");
  compileDiagnostics.textContent = "";
  showProgramOutput("Menyiapkan compiler WebAssembly…\n");
  programActive = false;
  programWaitingForInput = false;
  programOutputReceived = false;
  terminalInput.value = "";
  terminalInput.placeholder = "Program menunggu input… ketik lalu tekan Enter";
  setTerminalInputEnabled(false);
  resultsList.innerHTML = '<div class="empty-results">Coba program dan lihat output terminal terlebih dahulu. Setelah selesai, tekan <b>Periksa Jawaban</b> untuk menjalankan test otomatis.</div>';
  try { activeWorker = new Worker(new URL("./compiler-worker.js", import.meta.url), { type: "module" }); }
  catch (error) {
    setBusy(false);
    setStatus("Tidak dapat memulai compiler worker.", "error");
    compileDiagnostics.textContent = error?.message || String(error);
    compileDiagnostics.classList.add("show");
    showProgramOutput("Tidak dapat memulai compiler worker.");
    return;
  }
  armProgramWatchdog();
  activeWorker.onmessage = (event) => {
    const data = event.data || {};
    if (data.type === "status") {
      setStatus(data.message || "Memproses…", "busy");
      return;
    }
    if (data.type === "started") {
      programActive = true;
      programWaitingForInput = false;
      setTerminalInputEnabled(interactiveSupported);
      if (interactiveSupported) {
        terminalInput.placeholder = "Ketik input untuk cin, lalu tekan Enter…";
        terminalInput.focus();
      }
      setStatus(data.message || "Program berjalan.", "busy");
      armProgramWatchdog();
      return;
    }
    if (data.type === "waiting-input") {
      programWaitingForInput = true;
      clearProgramWatchdog();
      if (interactiveSupported) {
        terminalInput.placeholder = "Program menunggu input… ketik lalu tekan Enter";
        setTerminalInputEnabled(true);
        terminalInput.focus();
      }
      setStatus("Program menunggu input dari terminal…", "busy");
      return;
    }
    if (data.type === "output") {
      programOutputReceived = true;
      appendProgramOutput(data.text || "");
      if (interactiveSupported && programActive && terminalInput.disabled) setTerminalInputEnabled(true);
      return;
    }
    if (data.type === "result") {
      const outputWasReceived = programOutputReceived;
      finishChallenge();
      if (data.compileOutput && data.compileOutput.trim()) {
        compileDiagnostics.textContent = data.compileOutput.trim();
        compileDiagnostics.classList.add("show");
        appendProgramOutput("\n[Compiler]\n" + data.compileOutput.trim());
      }
      if (!outputWasReceived && data.ok) appendProgramOutput("(Program selesai tanpa menghasilkan output.)\n");
      if (data.error) appendProgramOutput("\n[Runtime error]\n" + data.error);
      if (data.ok) {
        lastRunSignature = runSignature;
        judgeState.textContent = "Sudah dijalankan";
        resultsList.innerHTML = '<div class="empty-results">Program berhasil dijalankan. Tinjau output terminal, lalu tekan <b>Periksa Jawaban</b> untuk menguji jawaban otomatis.</div>';
        setStatus("Program selesai. Tinjau terminal, lalu periksa jawaban.", "ok");
      } else {
        lastRunSignature = "";
        judgeState.textContent = "Program gagal";
        const errorText = data.compileOutput || data.error || "Periksa sintaks dan coba jalankan kembali.";
        resultsList.innerHTML = '<div class="result-item failed"><div class="result-top"><span>Jalankan program</span><span class="failed-text">✕ Gagal</span></div><div class="result-detail">' + escapeHtml(errorText) + '</div></div>';
        setStatus("Program gagal dijalankan. Perbaiki error lalu coba kembali.", "error");
      }
      updateCheckButtonState();
      return;
    }
  };
  activeWorker.onerror = (event) => {
    finishChallenge();
    lastRunSignature = "";
    compileDiagnostics.textContent = event?.message || "Terjadi kesalahan pada compiler worker.";
    compileDiagnostics.classList.add("show");
    judgeState.textContent = "Terjadi error";
    appendProgramOutput("\n[Kesalahan worker]\n" + (event?.message || "Kesalahan tidak diketahui."));
    setStatus("Compiler gagal berjalan.", "error");
    updateCheckButtonState();
  };
  activeWorker.postMessage({
    source,
    standard: standardSelect.value,
    input: interactiveSupported ? "" : fallbackStdin.value,
    sharedInput
  });
}

function runChallenge() {
  if (currentLesson.kind === "reading") return;
  if (!hasMatchingRun()) {
    setStatus("Jalankan program terlebih dahulu. Jika kode atau input berubah, jalankan lagi sebelum memeriksa.", "error");
    updateCheckButtonState();
    return;
  }
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
  caseCount.textContent = "0 / " + getCurrentChallenge().tests.length;
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
      caseCount.textContent = "0 / " + getCurrentChallenge().tests.length;
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
    testCases: getCurrentChallenge().tests
  });
}

async function initializeEditor() {
  fallbackCode = document.createElement("textarea");
  fallbackCode.id = "fallbackCode";
  fallbackCode.spellcheck = false;
  fallbackCode.autocapitalize = "off";
  fallbackCode.setAttribute("aria-label", "Editor kode untuk latihan C++");
  fallbackCode.value = savedCodes[challengeKey(currentLesson, getCurrentChallenge())] ?? currentLesson.starter ?? "";
  lessonEditorHost.replaceChildren(fallbackCode);
  fallbackCode.addEventListener("input", () => {
    fallbackEdited = true;
    saveCode();
    updateCheckButtonState();
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
          if (update.docChanged) {
            saveCode();
            updateCheckButtonState();
          }
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
challengeButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-challenge-index]");
  if (button) selectChallenge(button.dataset.challengeIndex);
});
runProgramBtn.addEventListener("click", runProgram);
checkAnswerBtn.addEventListener("click", runChallenge);
fallbackStdin.addEventListener("input", saveProgramInput);
standardSelect.addEventListener("change", updateCheckButtonState);
terminalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!programActive || !interactiveSupported) return;
  const line = terminalInput.value;
  if (!enqueueProgramInput(line + "\n")) {
    setStatus("Buffer input penuh. Tunggu program membaca input lalu coba lagi.", "error");
    return;
  }
  appendProgramOutput(line + "\n");
  terminalInput.value = "";
  programWaitingForInput = false;
  terminalInput.placeholder = "Ketik input berikutnya, lalu tekan Enter…";
  setTerminalInputEnabled(true);
  terminalInput.focus();
  setStatus("Input dikirim ke program.", "busy");
  armProgramWatchdog();
});
endInputBtn.addEventListener("click", () => {
  if (!sharedHeader || !programActive) return;
  closeSharedInput();
  endInputBtn.disabled = true;
  terminalInput.disabled = true;
  sendInputBtn.disabled = true;
  appendProgramOutput("^D\n");
  setStatus("Input ditutup (EOF dikirim).", "busy");
});
clearProgramOutputBtn.addEventListener("click", () => showProgramOutput(""));
markReadBtn.addEventListener("click", markReadingComplete);
stopChallengeBtn.addEventListener("click", () => stopChallenge("Pemeriksaan dihentikan oleh pengguna."));
resetCodeBtn.addEventListener("click", () => {
  const challenge = getCurrentChallenge();
  setCode(challenge.starter);
  saveCode();
  compileDiagnostics.classList.remove("show");
  resultsList.innerHTML = '<div class="empty-results">Kode latihan direset. Tulis solusi, lalu periksa jawaban.</div>';
  caseCount.textContent = "— / " + challenge.tests.length;
  judgeState.textContent = completedChallenges.has(challengeKey(currentLesson, challenge)) ? "Latihan selesai" : "Belum diuji";
  lastRunSignature = "";
  programOutput.textContent = "Kode direset. Jalankan program untuk melihat output, lalu periksa jawaban.";
  updateCheckButtonState();
  setStatus("Kode latihan dikembalikan ke template awal.", "idle");
});
window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    runProgram();
  }
});

loadSavedState();
renderLesson(currentLesson);
renderLessonList();
initializeEditor();
updateProgress();
