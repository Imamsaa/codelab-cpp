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
,
  {
    "id": "data-types",
    "title": "Tipe Data dalam C++",
    "category": "Tipe Data",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_data_types.asp",
    "sourceLabel": "W3Schools — C++ Data Types",
    "summary": "Tipe data menentukan jenis nilai yang disimpan variabel. Pilih tipe yang sesuai: bilangan bulat, desimal, satu karakter, benar/salah, atau teks.",
    "concepts": [
      {
        "title": "Bilangan bulat",
        "body": "Gunakan <code>int</code> untuk umur, jumlah barang, atau skor yang berupa bilangan bulat."
      },
      {
        "title": "Bilangan desimal",
        "body": "Gunakan <code>float</code> atau <code>double</code> untuk nilai pecahan, misalnya tinggi badan atau suhu. <code>double</code> umumnya menyediakan presisi lebih tinggi."
      },
      {
        "title": "Karakter dan logika",
        "body": "<code>char</code> menyimpan satu karakter seperti <code>'A'</code>, sedangkan <code>bool</code> menyimpan <code>true</code> atau <code>false</code>."
      },
      {
        "title": "Teks",
        "body": "Gunakan <code>string</code> untuk teks. Sertakan <code>#include &lt;string&gt;</code> saat memakai string."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "13 3.5 A true Alya"
    },
    "task": "Deklarasikan variabel bertipe int, double, char, bool, dan string. Gunakan nilai 13, 3.5, 'A', true, dan \"Alya\". Tampilkan semuanya dengan satu spasi.",
    "requirements": [
      "Gunakan tipe data yang sesuai.",
      "Gunakan boolalpha agar bool tampil sebagai true.",
      "Output harus tepat: 13 3.5 A true Alya."
    ],
    "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan int, double, char, bool, dan string\n    // TODO: tampilkan semua nilai sesuai urutan\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "13 3.5 A true Alya",
        "visible": true
      }
    ]
  },
  {
    "id": "numeric-types",
    "title": "Tipe Data Numerik",
    "category": "Tipe Data",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_data_types_numeric.asp",
    "sourceLabel": "W3Schools — Numeric Data Types",
    "summary": "Tipe data numerik menyimpan bilangan. C++ menyediakan pilihan seperti int untuk bilangan bulat dan float atau double untuk bilangan desimal.",
    "concepts": [
      {
        "title": "int",
        "body": "Gunakan <code>int</code> untuk nilai bulat positif atau negatif, misalnya <code>int skor = 95;</code>."
      },
      {
        "title": "float dan double",
        "body": "Keduanya menyimpan nilai pecahan. Contoh: <code>float tinggi = 1.65f;</code> dan <code>double berat = 52.75;</code>. Huruf <code>f</code> menandai literal float."
      },
      {
        "title": "Operasi matematika",
        "body": "Nilai numerik bisa dijumlahkan, dikurangi, dikalikan, atau dibagi. Dua nilai int yang dibagi menghasilkan pembagian bilangan bulat."
      },
      {
        "title": "Tampilan desimal",
        "body": "Library <code>&lt;iomanip&gt;</code> menyediakan <code>fixed</code> dan <code>setprecision()</code> untuk mengatur tampilan angka."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "120 36.5"
    },
    "task": "Buat variabel int jarak bernilai 120 dan double suhu bernilai 36.5. Tampilkan kedua nilai dengan satu spasi.",
    "requirements": [
      "Gunakan int untuk jarak dan double untuk suhu.",
      "Tampilkan nilai melalui variabel.",
      "Output harus tepat: 120 36.5."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: buat variabel jarak dan suhu\n    // TODO: tampilkan keduanya\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "120 36.5",
        "visible": true
      }
    ]
  },
  {
    "id": "bool-types",
    "title": "Tipe Data Boolean",
    "category": "Tipe Data",
    "level": "Pemula",
    "duration": "8 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_data_types_bool.asp",
    "sourceLabel": "W3Schools — Boolean Data Types",
    "summary": "Tipe data bool memiliki dua nilai, true dan false. Boolean digunakan untuk menyatakan keadaan atau hasil kondisi.",
    "concepts": [
      {
        "title": "Nilai true dan false",
        "body": "Contoh deklarasi: <code>bool lampuMenyala = true;</code> dan <code>bool sudahLogin = false;</code>."
      },
      {
        "title": "Output boolean",
        "body": "Secara default cout menampilkan bool sebagai 1 atau 0. Agar tampil sebagai <code>true</code> atau <code>false</code>, gunakan manipulator <code>boolalpha</code> langsung di aliran output, misalnya <code>cout &lt;&lt; boolalpha &lt;&lt; sudahLogin;</code>. Jangan membuat variabel seperti <code>int boolalpha</code>, karena itu hanya nama variabel biasa."
      },
      {
        "title": "Hasil perbandingan",
        "body": "Ekspresi seperti <code>umur &gt;= 13</code> menghasilkan nilai boolean yang dapat digunakan untuk percabangan."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "true"
    },
    "task": "Deklarasikan bool lampuMenyala bernilai true, lalu tampilkan sebagai teks true dengan cout << boolalpha << lampuMenyala. boolalpha adalah manipulator cout, bukan variabel.",
    "requirements": [
      "Gunakan variabel bool bernama lampuMenyala.",
      "Gunakan cout << boolalpha << lampuMenyala; — jangan mendeklarasikan variabel bernama boolalpha.",
      "Output harus tepat: true."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    bool lampuMenyala = true;\n    // TODO: tampilkan sebagai true dengan cout << boolalpha << lampuMenyala\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "true",
        "visible": true
      }
    ]
  },
  {
    "id": "char-types",
    "title": "Tipe Data Character (char)",
    "category": "Tipe Data",
    "level": "Pemula",
    "duration": "8 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_data_types_char.asp",
    "sourceLabel": "W3Schools — Character Data Types",
    "summary": "Tipe data char menyimpan satu karakter, seperti huruf, angka sebagai karakter, atau simbol. Nilai karakter ditulis di antara tanda petik satu.",
    "concepts": [
      {
        "title": "Deklarasi char",
        "body": "Contoh: <code>char nilai = 'A';</code>. Nilai char memakai tanda petik satu, bukan tanda petik dua."
      },
      {
        "title": "Karakter bukan angka",
        "body": "<code>char kode = '7';</code> menyimpan karakter 7, berbeda dengan <code>int jumlah = 7;</code> yang menyimpan bilangan untuk perhitungan."
      },
      {
        "title": "Membandingkan karakter",
        "body": "Karakter dapat dibandingkan, misalnya <code>jawaban == 'B'</code>. Hasil perbandingan tersebut berupa nilai bool."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "A"
    },
    "task": "Deklarasikan variabel char bernama nilaiHuruf dengan nilai 'A', kemudian tampilkan karakter tersebut.",
    "requirements": [
      "Gunakan tipe data char.",
      "Gunakan tanda petik satu untuk nilai karakter.",
      "Output harus tepat: A."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan char nilaiHuruf\n    // TODO: tampilkan karakternya\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "A",
        "visible": true
      }
    ]
  },
  {
    "id": "string-types",
    "title": "Tipe Data String",
    "category": "Tipe Data",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_data_types_string.asp",
    "sourceLabel": "W3Schools — String Data Types",
    "summary": "String digunakan untuk menyimpan teks satu atau banyak karakter. Dalam C++, std::string tersedia melalui library string dan dapat digabungkan dengan teks lain.",
    "concepts": [
      {
        "title": "Membuat string",
        "body": "Sertakan <code>#include &lt;string&gt;</code>, lalu deklarasikan misalnya <code>string nama = \"Alya\";</code>."
      },
      {
        "title": "Menggabungkan teks",
        "body": "Operator <code>&lt;&lt;</code> pada cout dapat menampilkan teks dan variabel berurutan. Operator <code>+</code> juga dapat menggabungkan string."
      },
      {
        "title": "Membaca string",
        "body": "<code>cin &gt;&gt; nama;</code> membaca satu kata. Untuk membaca satu baris lengkap yang mungkin berisi spasi, gunakan <code>getline(cin, nama);</code>."
      }
    ],
    "example": {
      "input": "Alya",
      "output": "Halo, Alya!"
    },
    "task": "Baca satu kata nama menggunakan cin, lalu tampilkan salam dengan format Halo, [nama]!",
    "requirements": [
      "Gunakan variabel string bernama nama.",
      "Baca nama dari input menggunakan cin.",
      "Output mengikuti nama yang diberikan, misalnya Halo, Alya!."
    ],
    "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string nama;\n    // TODO: baca nama dan tampilkan salam\n    return 0;\n}",
    "tests": [
      {
        "input": "Alya",
        "expected": "Halo, Alya!",
        "visible": true
      },
      {
        "input": "Bima",
        "expected": "Halo, Bima!",
        "visible": true
      },
      {
        "input": "Nisa",
        "expected": "Halo, Nisa!",
        "visible": true
      }
    ]
  },
  {
    "id": "auto-types",
    "title": "Deklarasi Variabel dengan auto",
    "category": "Tipe Data",
    "level": "Pemula",
    "duration": "8 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_auto.asp",
    "sourceLabel": "W3Schools — C++ auto Keyword",
    "summary": "Kata kunci auto meminta compiler menentukan tipe variabel berdasarkan nilai awalnya. Tipe tetap ditentukan saat kompilasi; auto bukan berarti variabel bebas berganti tipe.",
    "concepts": [
      {
        "title": "Tipe dari nilai awal",
        "body": "Contoh <code>auto umur = 13;</code> membuat umur bertipe int, sedangkan <code>auto harga = 12.5;</code> membuat harga bertipe double."
      },
      {
        "title": "Nilai awal diperlukan",
        "body": "Compiler perlu nilai awal untuk menentukan tipe. Gunakan <code>auto skor = 95;</code>, bukan hanya <code>auto skor;</code>."
      },
      {
        "title": "Kapan menggunakan auto?",
        "body": "Auto berguna ketika tipe mudah disimpulkan dari nilai awal atau ketika nama tipe sebenarnya panjang. Tetap pahami tipe yang disimpulkan compiler."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "13 12.5"
    },
    "task": "Gunakan auto untuk membuat variabel umur bernilai 13 dan harga bernilai 12.5. Tampilkan kedua nilainya dipisahkan satu spasi.",
    "requirements": [
      "Gunakan auto untuk kedua variabel.",
      "Berikan nilai awal pada setiap deklarasi.",
      "Output harus tepat: 13 12.5."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan umur dan harga menggunakan auto\n    // TODO: tampilkan kedua nilai\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "13 12.5",
        "visible": true
      }
    ]
  },
  {
    "id": "operators",
    "title": "Operator dalam C++",
    "category": "Operator",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_operators.asp",
    "sourceLabel": "W3Schools — C++ Operators",
    "summary": "Operator adalah simbol yang menjalankan operasi pada nilai atau variabel. Operator digunakan untuk menghitung, memberi nilai, membandingkan, menggabungkan kondisi, dan menentukan urutan perhitungan.",
    "concepts": [
      {
        "title": "Kelompok operator",
        "body": "Operator aritmetika seperti <code>+</code> dan <code>*</code> melakukan perhitungan. Operator assignment seperti <code>=</code> dan <code>+=</code> memberi atau memperbarui nilai variabel."
      },
      {
        "title": "Perbandingan dan logika",
        "body": "Operator perbandingan seperti <code>&gt;</code> dan <code>==</code> menghasilkan nilai bool. Operator logika seperti <code>&amp;&amp;</code>, <code>||</code>, dan <code>!</code> menggabungkan atau membalik kondisi."
      },
      {
        "title": "Pilih operator yang sesuai",
        "body": "Tentukan dulu tujuan operasi: menghitung nilai, memperbarui variabel, membandingkan dua nilai, atau memeriksa beberapa kondisi."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "13 7 true"
    },
    "task": "Buat int a = 10 dan b = 3. Tampilkan hasil a + b, a - b, dan apakah a lebih besar dari b. Pisahkan hasil dengan satu spasi.",
    "requirements": [
      "Gunakan operator aritmetika + dan -.",
      "Gunakan operator perbandingan >.",
      "Gunakan boolalpha agar hasil perbandingan tampil true atau false."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10;\n    int b = 3;\n    // TODO: tampilkan a+b, a-b, dan a>b dengan boolalpha\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "13 7 true",
        "visible": true
      }
    ]
  },
  {
    "id": "arithmetic-operators",
    "title": "Operator Aritmetika",
    "category": "Operator",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_operators_arithmetic.asp",
    "sourceLabel": "W3Schools — Arithmetic Operators",
    "summary": "Operator aritmetika digunakan untuk melakukan perhitungan matematika seperti penjumlahan, pengurangan, perkalian, pembagian, dan sisa pembagian.",
    "concepts": [
      {
        "title": "Operasi dasar",
        "body": "Gunakan <code>+</code> untuk penjumlahan, <code>-</code> untuk pengurangan, <code>*</code> untuk perkalian, dan <code>/</code> untuk pembagian."
      },
      {
        "title": "Sisa pembagian (%)",
        "body": "Operator <code>%</code> menghasilkan sisa pembagian bilangan bulat. Contohnya, <code>17 % 5</code> menghasilkan <code>2</code>."
      },
      {
        "title": "Pembagian bilangan bulat",
        "body": "Jika kedua operand bertipe int, <code>17 / 5</code> menghasilkan <code>3</code>, bukan <code>3.4</code>. Gunakan tipe desimal atau operand seperti <code>17.0 / 5</code> jika membutuhkan pecahan."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "22 12 85 3 2"
    },
    "task": "Gunakan int a = 17 dan b = 5. Tampilkan hasil a+b, a-b, a*b, a/b, dan a%b secara berurutan, dipisahkan satu spasi.",
    "requirements": [
      "Gunakan kelima operator +, -, *, /, dan %.",
      "Pahami bahwa a/b memakai pembagian bilangan bulat karena a dan b bertipe int.",
      "Output harus tepat: 22 12 85 3 2."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 17;\n    int b = 5;\n    // TODO: tampilkan hasil +, -, *, /, dan %\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "22 12 85 3 2",
        "visible": true
      }
    ]
  },
  {
    "id": "assignment-operators",
    "title": "Operator Assignment",
    "category": "Operator",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_operators_assignment.asp",
    "sourceLabel": "W3Schools — Assignment Operators",
    "summary": "Operator assignment memberikan nilai ke variabel atau memperbarui nilainya. Selain =, ada operator gabungan seperti +=, -=, *=, /=, dan %=.",
    "concepts": [
      {
        "title": "Assignment dasar",
        "body": "Operator <code>=</code> memberi nilai ke variabel, misalnya <code>int skor = 10;</code>. Tanda = pada assignment bukan operator untuk menguji kesamaan."
      },
      {
        "title": "Assignment gabungan",
        "body": "<code>skor += 5</code> setara dengan <code>skor = skor + 5</code>. Begitu juga <code>-=</code>, <code>*=</code>, <code>/=</code>, dan <code>%=</code>."
      },
      {
        "title": "Urutan perubahan nilai",
        "body": "Setiap operasi assignment memperbarui nilai yang tersimpan. Karena itu, hasil akhir bergantung pada urutan pernyataan yang dijalankan."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "30"
    },
    "task": "Mulai dengan int skor = 10. Tambahkan 5 menggunakan +=, kemudian kalikan skor dengan 2 menggunakan *=. Tampilkan nilai akhirnya.",
    "requirements": [
      "Gunakan operator += untuk menambah 5.",
      "Gunakan operator *= untuk mengalikan nilai terbaru dengan 2.",
      "Output harus tepat: 30."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int skor = 10;\n    // TODO: gunakan += dan *=, lalu tampilkan skor\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "30",
        "visible": true
      }
    ]
  },
  {
    "id": "comparison-operators",
    "title": "Operator Perbandingan",
    "category": "Operator",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_operators_comparison.asp",
    "sourceLabel": "W3Schools — Comparison Operators",
    "summary": "Operator perbandingan membandingkan dua nilai dan menghasilkan true atau false. Hasilnya sering digunakan sebagai syarat di dalam if dan perulangan.",
    "concepts": [
      {
        "title": "Sama dengan dan tidak sama dengan",
        "body": "Gunakan <code>==</code> untuk menguji kesamaan nilai dan <code>!=</code> untuk menguji apakah nilainya berbeda. Jangan tertukar dengan <code>=</code> yang digunakan untuk assignment."
      },
      {
        "title": "Lebih besar atau lebih kecil",
        "body": "Operator <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, dan <code>&lt;=</code> membandingkan besar-kecilnya dua nilai."
      },
      {
        "title": "Output boolean",
        "body": "Hasil perbandingan bertipe bool. Gunakan <code>cout &lt;&lt; boolalpha</code> jika ingin menampilkan kata <code>true</code> atau <code>false</code>, bukan <code>1</code> atau <code>0</code>."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "true false true"
    },
    "task": "Buat int a = 10 dan b = 7. Tampilkan hasil a > b, a == b, dan a != b menggunakan boolalpha, dipisahkan satu spasi.",
    "requirements": [
      "Gunakan operator >, ==, dan !=.",
      "Gunakan boolalpha pada cout.",
      "Output harus tepat: true false true."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10;\n    int b = 7;\n    // TODO: tampilkan a>b, a==b, dan a!=b menggunakan boolalpha\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "true false true",
        "visible": true
      }
    ]
  },
  {
    "id": "logical-operators",
    "title": "Operator Logika",
    "category": "Operator",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_operators_logical.asp",
    "sourceLabel": "W3Schools — Logical Operators",
    "summary": "Operator logika menggabungkan atau membalik nilai boolean. Operator ini sering digunakan ketika sebuah keputusan memiliki satu atau beberapa syarat.",
    "concepts": [
      {
        "title": "AND (&&)",
        "body": "<code>A &amp;&amp; B</code> bernilai true hanya jika A dan B sama-sama true."
      },
      {
        "title": "OR (||)",
        "body": "<code>A || B</code> bernilai true jika setidaknya salah satu kondisi bernilai true."
      },
      {
        "title": "NOT (!)",
        "body": "<code>!A</code> membalik nilai boolean: true menjadi false, dan false menjadi true. Gunakan tanda kurung untuk memperjelas ekspresi yang lebih panjang."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "true"
    },
    "task": "Buat int umur = 14 dan bool punyaKartu = true. Tentukan bolehMasuk dengan kondisi umur >= 13 && punyaKartu, lalu tampilkan bolehMasuk menggunakan boolalpha.",
    "requirements": [
      "Gunakan variabel umur dan punyaKartu sesuai instruksi.",
      "Gabungkan kondisi dengan operator &&.",
      "Gunakan boolalpha agar output tepat: true."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int umur = 14;\n    bool punyaKartu = true;\n    // TODO: tentukan bolehMasuk dan tampilkan dengan boolalpha\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "true",
        "visible": true
      }
    ]
  },
  {
    "id": "operator-precedence",
    "title": "Prioritas Operator",
    "category": "Operator",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_operators_precedence.asp",
    "sourceLabel": "W3Schools — Operator Precedence",
    "summary": "Prioritas operator menentukan operasi mana yang dikerjakan lebih dahulu ketika sebuah ekspresi berisi beberapa operator. Tanda kurung dapat digunakan untuk menegaskan urutan yang diinginkan.",
    "concepts": [
      {
        "title": "Perkalian lebih dahulu daripada penjumlahan",
        "body": "Dalam <code>2 + 3 * 4</code>, perkalian dikerjakan lebih dahulu sehingga hasilnya <code>14</code>, bukan <code>20</code>."
      },
      {
        "title": "Gunakan tanda kurung",
        "body": "Ekspresi <code>(2 + 3) * 4</code> menghitung isi tanda kurung lebih dahulu, sehingga hasilnya <code>20</code>."
      },
      {
        "title": "Urutan umum",
        "body": "Secara umum, tanda kurung dikerjakan lebih dahulu, kemudian operator perkalian/pembagian sebelum penjumlahan/pengurangan, lalu perbandingan dan operator logika. Untuk ekspresi kompleks, tambahkan tanda kurung agar maksud kode jelas."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "14 20"
    },
    "task": "Hitung dua ekspresi: hasil1 = 2 + 3 * 4 dan hasil2 = (2 + 3) * 4. Tampilkan kedua hasil dengan satu spasi.",
    "requirements": [
      "Buat dua variabel hasil1 dan hasil2.",
      "Pertahankan tanda kurung pada ekspresi kedua.",
      "Output harus tepat: 14 20."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: hitung 2 + 3 * 4\n    // TODO: hitung (2 + 3) * 4\n    // TODO: tampilkan kedua hasil\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "14 20",
        "visible": true
      }
    ]
  },
  {
    "id": "strings",
    "title": "String dalam C++",
    "category": "String",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_strings.asp",
    "sourceLabel": "W3Schools — C++ Strings",
    "summary": "String digunakan untuk menyimpan teks seperti nama, pesan, atau nama program. Di C++, tipe std::string tersedia melalui header string dan bisa diberi nilai teks menggunakan tanda petik dua.",
    "concepts": [
      {
        "title": "Membuat string",
        "body": "Tambahkan <code>#include &lt;string&gt;</code> lalu buat contoh <code>string nama = \"Alya\";</code>. Teks string memakai tanda petik dua, berbeda dengan char yang memakai tanda petik satu."
      },
      {
        "title": "Menampilkan string",
        "body": "Gunakan <code>cout</code> untuk menampilkan nilai string. Kamu dapat menggabungkan teks literal dan isi variabel dalam satu perintah output."
      },
      {
        "title": "String bisa diubah",
        "body": "Nilai string dapat diisi ulang atau digabungkan dengan teks lain. Pilih nama variabel yang jelas agar kode mudah dibaca."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "Halo, C++"
    },
    "task": "Buat variabel string bernama bahasa dengan nilai \"C++\", lalu tampilkan teks Halo, C++ menggunakan variabel tersebut.",
    "requirements": [
      "Sertakan header <string>.",
      "Gunakan variabel string bernama bahasa.",
      "Tampilkan teks Halo, diikuti nilai variabel bahasa."
    ],
    "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan string bahasa\n    // TODO: tampilkan Halo, C++ dengan variabel bahasa\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "Halo, C++",
        "visible": true
      }
    ]
  },
  {
    "id": "string-concat",
    "title": "Menggabungkan String",
    "category": "String",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_strings_concat.asp",
    "sourceLabel": "W3Schools — String Concatenation",
    "summary": "String concatenation adalah proses menggabungkan dua atau lebih teks. Kamu dapat menampilkannya berdampingan menggunakan cout atau menggabungkan nilainya dengan operator +.",
    "concepts": [
      {
        "title": "Menggabungkan dengan +",
        "body": "Contoh <code>string nama = \"Alya\" + string(\" Putri\");</code> menggabungkan dua bagian teks. Saat menggabungkan string dengan string, operator <code>+</code> menghasilkan string baru."
      },
      {
        "title": "Spasi tidak otomatis ditambahkan",
        "body": "Jika ingin ada spasi di antara nama depan dan nama belakang, tambahkan <code>\" \"</code> secara eksplisit."
      },
      {
        "title": "Menggabungkan dalam output",
        "body": "Kamu juga bisa menulis <code>cout &lt;&lt; depan &lt;&lt; \" \" &lt;&lt; belakang;</code> tanpa membuat string gabungan terlebih dahulu."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "Hello World"
    },
    "task": "Buat string depan bernilai \"Hello\" dan belakang bernilai \"World\". Gabungkan keduanya dengan satu spasi dan tampilkan Hello World.",
    "requirements": [
      "Gunakan dua variabel string, depan dan belakang.",
      "Gunakan operator + untuk menggabungkan string, termasuk satu spasi.",
      "Output harus tepat: Hello World."
    ],
    "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string depan = \"Hello\";\n    string belakang = \"World\";\n    // TODO: gabungkan kedua string dengan spasi dan tampilkan\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "Hello World",
        "visible": true
      }
    ]
  },
  {
    "id": "string-numbers",
    "title": "String dan Angka",
    "category": "String",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_strings_numbers.asp",
    "sourceLabel": "W3Schools — Strings and Numbers",
    "summary": "String menyimpan teks, sedangkan tipe numerik menyimpan angka untuk perhitungan. C++ menyediakan std::to_string() untuk mengubah angka menjadi string dan stoi() atau stod() untuk mengubah teks numerik menjadi angka.",
    "concepts": [
      {
        "title": "Angka menjadi string",
        "body": "Gunakan <code>to_string(angka)</code> untuk mengubah nilai numerik menjadi teks, misalnya <code>string teks = to_string(25);</code>."
      },
      {
        "title": "String menjadi bilangan bulat",
        "body": "Gunakan <code>stoi(teks)</code> untuk mengubah string berisi bilangan bulat menjadi int. Untuk bilangan desimal, C++ menyediakan <code>stod(teks)</code>."
      },
      {
        "title": "Perhatikan jenis datanya",
        "body": "String seperti <code>\"12\"</code> adalah teks, bukan angka yang langsung dijumlahkan. Ubah menjadi tipe numerik terlebih dahulu sebelum melakukan perhitungan."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "14"
    },
    "task": "Buat string umurTeks bernilai \"13\". Ubah menjadi int menggunakan stoi(), tambahkan 1, lalu tampilkan hasilnya.",
    "requirements": [
      "Gunakan string umurTeks = \"13\".",
      "Gunakan stoi() sebelum melakukan penjumlahan.",
      "Output harus tepat: 14."
    ],
    "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string umurTeks = \"13\";\n    // TODO: konversi umurTeks dengan stoi, tambah 1, lalu tampilkan\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "14",
        "visible": true
      }
    ]
  },
  {
    "id": "string-length",
    "title": "Panjang String",
    "category": "String",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_strings_length.asp",
    "sourceLabel": "W3Schools — String Length",
    "summary": "Metode length() dan size() digunakan untuk mengetahui jumlah karakter dalam string. Keduanya memberikan hasil yang sama untuk std::string.",
    "concepts": [
      {
        "title": "Menggunakan length()",
        "body": "Contoh <code>string kata = \"Informatika\";</code> lalu <code>kata.length()</code> mengembalikan jumlah karakter dalam kata tersebut."
      },
      {
        "title": "Menggunakan size()",
        "body": "Metode <code>size()</code> juga mengembalikan jumlah karakter. Pilih length() atau size() sesuai gaya yang paling mudah kamu ingat."
      },
      {
        "title": "Spasi juga dihitung",
        "body": "Dalam string seperti <code>\"Belajar C++\"</code>, spasi di antara kata ikut dihitung sebagai satu karakter."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "11"
    },
    "task": "Buat string kata bernilai \"Informatika\", lalu tampilkan panjangnya menggunakan length().",
    "requirements": [
      "Gunakan variabel string bernama kata.",
      "Gunakan metode length().",
      "Output harus tepat: 11."
    ],
    "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string kata = \"Informatika\";\n    // TODO: tampilkan jumlah karakter dengan length()\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "11",
        "visible": true
      }
    ]
  },
  {
    "id": "string-access",
    "title": "Mengakses Karakter String",
    "category": "String",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_strings_access.asp",
    "sourceLabel": "W3Schools — Access Strings",
    "summary": "Setiap karakter di dalam string memiliki indeks. Indeks dimulai dari 0, sehingga karakter pertama ada di indeks 0 dan karakter terakhir berada di indeks length() - 1.",
    "concepts": [
      {
        "title": "Indeks dimulai dari nol",
        "body": "Untuk string <code>\"KELAS\"</code>, indeks 0 berisi K, indeks 1 berisi E, dan indeks 4 berisi S."
      },
      {
        "title": "Menggunakan operator []",
        "body": "Gunakan <code>kata[0]</code> untuk membaca karakter pertama. Pastikan indeks yang digunakan masih berada dalam rentang string."
      },
      {
        "title": "Menggunakan at()",
        "body": "Metode <code>kata.at(1)</code> juga dapat mengambil karakter berdasarkan indeks dan melakukan pemeriksaan batas indeks."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "K S"
    },
    "task": "Buat string kata bernilai \"KELAS\". Tampilkan karakter pertama dan terakhir, pisahkan dengan satu spasi.",
    "requirements": [
      "Gunakan indeks 0 untuk karakter pertama.",
      "Gunakan indeks kata.length() - 1 untuk karakter terakhir.",
      "Output harus tepat: K S."
    ],
    "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string kata = \"KELAS\";\n    // TODO: tampilkan karakter pertama dan karakter terakhir\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "K S",
        "visible": true
      }
    ]
  },
  {
    "id": "string-escape",
    "title": "Escape Character dalam String",
    "category": "String",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_strings_esc.asp",
    "sourceLabel": "W3Schools — String Escape Characters",
    "summary": "Escape sequence adalah kombinasi karakter yang diawali backslash untuk menampilkan karakter khusus di dalam string, seperti baris baru, tab, tanda petik, dan backslash itu sendiri.",
    "concepts": [
      {
        "title": "Baris baru dan tab",
        "body": "Gunakan <code>\\n</code> untuk membuat baris baru dan <code>\\t</code> untuk memberi tab di output."
      },
      {
        "title": "Tanda petik di dalam string",
        "body": "Gunakan <code>\\\"</code> untuk menampilkan tanda petik dua di dalam string yang dibatasi tanda petik dua."
      },
      {
        "title": "Menampilkan backslash",
        "body": "Gunakan <code>\\\\</code> untuk menampilkan satu karakter backslash. Escape sequence membantu menjaga teks tampil sesuai yang diinginkan."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "Nama: \"Alya\""
    },
    "task": "Tampilkan teks Nama: \"Alya\" dengan menggunakan escape sequence untuk tanda petik dua.",
    "requirements": [
      "Gunakan satu string dengan escape sequence \\\".",
      "Output harus menampilkan tanda petik dua di sekitar Alya.",
      "Output harus tepat: Nama: \"Alya\"."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: tampilkan Nama: \"Alya\" menggunakan escape sequence\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "Nama: \"Alya\"",
        "visible": true
      }
    ]
  },
  {
    "id": "string-input",
    "title": "Input String",
    "category": "String",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_strings_input.asp",
    "sourceLabel": "W3Schools — String Input",
    "summary": "Input string bisa dibaca menggunakan cin atau getline(). cin >> nama membaca satu kata hingga spasi, sedangkan getline(cin, nama) membaca seluruh baris termasuk spasi.",
    "concepts": [
      {
        "title": "Input satu kata dengan cin",
        "body": "Gunakan <code>cin &gt;&gt; nama;</code> jika input berupa satu kata tanpa spasi."
      },
      {
        "title": "Input satu baris dengan getline",
        "body": "Gunakan <code>getline(cin, nama);</code> untuk membaca seluruh baris, misalnya nama lengkap yang berisi spasi."
      },
      {
        "title": "Memilih cara input",
        "body": "Pilih cara membaca input sesuai kebutuhan. Jika getline() dipanggil setelah pembacaan angka dengan cin, perhatikan karakter newline yang masih tersisa di buffer."
      }
    ],
    "example": {
      "input": "Alya Putri",
      "output": "Halo, Alya Putri!"
    },
    "task": "Gunakan getline(cin, nama) untuk membaca nama lengkap yang mungkin berisi spasi, lalu tampilkan dengan format Halo, [nama]!",
    "requirements": [
      "Gunakan string bernama nama.",
      "Baca seluruh baris dengan getline(cin, nama).",
      "Output harus mengikuti seluruh input, termasuk spasi."
    ],
    "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string nama;\n    // TODO: baca nama lengkap dengan getline lalu tampilkan salam\n    return 0;\n}",
    "tests": [
      {
        "input": "Alya Putri",
        "expected": "Halo, Alya Putri!",
        "visible": true
      },
      {
        "input": "Bima Saputra",
        "expected": "Halo, Bima Saputra!",
        "visible": true
      },
      {
        "input": "Nisa Rahma",
        "expected": "Halo, Nisa Rahma!",
        "visible": true
      }
    ]
  },
  {
    "id": "string-namespace",
    "title": "Namespace String",
    "category": "String",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_strings_namespace.asp",
    "sourceLabel": "W3Schools — String Namespace",
    "summary": "std::string adalah bagian dari namespace std. Kamu dapat menggunakan using namespace std; untuk mengakses nama-nama dari std tanpa awalan, atau menuliskan std:: secara eksplisit.",
    "concepts": [
      {
        "title": "String berada di namespace std",
        "body": "Tipe string standar ditulis lengkap sebagai <code>std::string</code>. Fungsi output dan input juga dapat ditulis sebagai <code>std::cout</code> dan <code>std::cin</code>."
      },
      {
        "title": "Menggunakan using namespace std",
        "body": "Dengan <code>using namespace std;</code>, kamu dapat menulis <code>string</code> dan <code>cout</code> tanpa awalan <code>std::</code>."
      },
      {
        "title": "Mengapa std:: berguna?",
        "body": "Menulis <code>std::</code> secara eksplisit menunjukkan asal nama dan mengurangi risiko benturan nama pada program yang lebih besar."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "Halo, C++"
    },
    "task": "Tulis program tanpa using namespace std;. Gunakan std::string untuk menyimpan \"C++\" dan std::cout untuk menampilkan Halo, C++.",
    "requirements": [
      "Jangan menggunakan using namespace std;.",
      "Gunakan std::string dan std::cout secara eksplisit.",
      "Output harus tepat: Halo, C++."
    ],
    "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // TODO: deklarasikan std::string bahasa dan tampilkan Halo, C++ dengan std::cout\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "Halo, C++",
        "visible": true
      }
    ]
  },
  {
    "id": "conditions",
    "title": "Kondisi dengan if",
    "category": "Percabangan",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_conditions.asp",
    "sourceLabel": "W3Schools",
    "summary": "Pernyataan if menjalankan blok kode hanya ketika kondisi bernilai true. Kondisi umum memakai operator perbandingan.",
    "concepts": [
      {
        "title": "Struktur if",
        "body": "Bentuk dasar: <code>if (kondisi) { ... }</code>. Isi blok dijalankan hanya saat kondisi benar."
      },
      {
        "title": "Ekspresi Boolean",
        "body": "Ekspresi seperti <code>nilai &gt;= 75</code> menghasilkan true atau false."
      },
      {
        "title": "Blok kode",
        "body": "Kurung kurawal <code>{ }</code> menandai perintah yang bergantung pada kondisi."
      }
    ],
    "example": {
      "input": "80",
      "output": "Lulus\nPemeriksaan selesai"
    },
    "task": "Baca satu nilai int. Jika nilai >= 75 tampilkan Lulus. Apa pun nilainya, tampilkan Pemeriksaan selesai pada baris berikutnya.",
    "requirements": [
      "Baca nilai menggunakan cin.",
      "Gunakan if dengan kondisi nilai >= 75.",
      "Tampilkan Pemeriksaan selesai di luar blok if."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nilai;\n    cin >> nilai;\n    // TODO: jika nilai >= 75, tampilkan Lulus\n    cout << \"Pemeriksaan selesai\";\n    return 0;\n}",
    "tests": [
      {
        "input": "80",
        "expected": "Lulus\nPemeriksaan selesai",
        "visible": true
      },
      {
        "input": "60",
        "expected": "Pemeriksaan selesai",
        "visible": true
      }
    ]
  },
  {
    "id": "conditions-else",
    "title": "Kondisi if...else",
    "category": "Percabangan",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_conditions_else.asp",
    "sourceLabel": "W3Schools",
    "summary": "if...else menyediakan dua jalur: satu saat kondisi true dan satu saat false. Hanya satu blok yang dijalankan.",
    "concepts": [
      {
        "title": "Dua kemungkinan",
        "body": "Struktur: <code>if (kondisi) { ... } else { ... }</code>."
      },
      {
        "title": "Else tanpa kondisi tambahan",
        "body": "Bagian <code>else</code> adalah jalur alternatif ketika kondisi if false."
      },
      {
        "title": "Syarat yang tepat",
        "body": "Contohnya, nilai minimal 75 untuk lulus."
      }
    ],
    "example": {
      "input": "80",
      "output": "Lulus"
    },
    "task": "Baca nilai ujian. Tampilkan Lulus jika nilai >= 75, dan Tidak lulus jika kondisi salah.",
    "requirements": [
      "Gunakan if dan else.",
      "Gunakan kondisi nilai >= 75.",
      "Nilai 80 menghasilkan Lulus, nilai 60 menghasilkan Tidak lulus."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nilai;\n    cin >> nilai;\n    // TODO: tampilkan Lulus atau Tidak lulus dengan if...else\n    return 0;\n}",
    "tests": [
      {
        "input": "80",
        "expected": "Lulus",
        "visible": true
      },
      {
        "input": "60",
        "expected": "Tidak lulus",
        "visible": true
      }
    ]
  },
  {
    "id": "conditions-elseif",
    "title": "Kondisi else if",
    "category": "Percabangan",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_conditions_elseif.asp",
    "sourceLabel": "W3Schools",
    "summary": "else if memeriksa beberapa kondisi secara berurutan. Blok pertama dengan kondisi true yang dijalankan.",
    "concepts": [
      {
        "title": "Banyak cabang",
        "body": "Struktur umum: <code>if (...) { ... } else if (...) { ... } else { ... }</code>."
      },
      {
        "title": "Urutan kondisi",
        "body": "Periksa batas nilai dari yang tertinggi ke terendah."
      },
      {
        "title": "Jalur terakhir",
        "body": "Bagian <code>else</code> dijalankan ketika semua kondisi sebelumnya false."
      }
    ],
    "example": {
      "input": "85",
      "output": "B"
    },
    "task": "Tentukan predikat: A untuk nilai >= 90, B untuk >= 80, C untuk >= 70, dan D untuk nilai lainnya.",
    "requirements": [
      "Gunakan if, else if, dan else.",
      "Periksa ambang dari tertinggi ke terendah.",
      "Input 85 menghasilkan B."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nilai;\n    cin >> nilai;\n    // TODO: tentukan predikat dengan if...else if...else\n    return 0;\n}",
    "tests": [
      {
        "input": "95",
        "expected": "A",
        "visible": true
      },
      {
        "input": "85",
        "expected": "B",
        "visible": true
      },
      {
        "input": "72",
        "expected": "C",
        "visible": true
      },
      {
        "input": "55",
        "expected": "D",
        "visible": true
      }
    ]
  },
  {
    "id": "conditions-shorthand",
    "title": "Operator Ternary (if singkat)",
    "category": "Percabangan",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_conditions_shorthand.asp",
    "sourceLabel": "W3Schools",
    "summary": "Operator ternary ?: memilih satu dari dua nilai berdasarkan kondisi. Cocok untuk assignment sederhana.",
    "concepts": [
      {
        "title": "Bentuk ternary",
        "body": "Sintaks: <code>kondisi ? nilaiJikaBenar : nilaiJikaSalah</code>."
      },
      {
        "title": "Simpan hasil",
        "body": "Contoh: <code>string status = (umur &gt;= 17) ? \"Dewasa\" : \"Belum dewasa\";</code>."
      },
      {
        "title": "Kapan digunakan",
        "body": "Untuk cabang kompleks dengan banyak perintah, if...else biasanya lebih mudah dibaca."
      }
    ],
    "example": {
      "input": "18",
      "output": "Dewasa"
    },
    "task": "Baca umur. Gunakan operator ternary untuk menampilkan Dewasa jika umur >= 17, atau Belum dewasa jika kurang.",
    "requirements": [
      "Gunakan operator ?:, bukan if...else.",
      "Gunakan kondisi umur >= 17.",
      "Input 18 menghasilkan Dewasa, input 12 menghasilkan Belum dewasa."
    ],
    "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int umur;\n    cin >> umur;\n    // TODO: pilih status menggunakan operator ternary\n    return 0;\n}",
    "tests": [
      {
        "input": "18",
        "expected": "Dewasa",
        "visible": true
      },
      {
        "input": "12",
        "expected": "Belum dewasa",
        "visible": true
      }
    ]
  },
  {
    "id": "conditions-nested",
    "title": "Nested if (if Bersarang)",
    "category": "Percabangan",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_conditions_nested.asp",
    "sourceLabel": "W3Schools",
    "summary": "Nested if adalah if di dalam if lain. Kondisi dalam diperiksa setelah kondisi luar terpenuhi.",
    "concepts": [
      {
        "title": "Kondisi luar dan dalam",
        "body": "If luar memeriksa syarat utama; jika benar, program dapat memeriksa syarat kedua di dalamnya."
      },
      {
        "title": "Pasangan else",
        "body": "Letakkan else pada tingkat yang sesuai supaya jelas if mana yang menjadi pasangannya."
      },
      {
        "title": "Kapan digunakan",
        "body": "Nested if berguna saat keputusan kedua baru relevan setelah keputusan pertama terpenuhi."
      }
    ],
    "example": {
      "input": "14\n1",
      "output": "Boleh masuk"
    },
    "task": "Baca umur dan punyaKartu (1 berarti punya kartu, 0 tidak). Jika umur >= 13, gunakan nested if: punya kartu menampilkan Boleh masuk, tidak punya kartu menampilkan Perlu kartu. Jika umur kurang dari 13 tampilkan Usia belum cukup.",
    "requirements": [
      "Baca dua integer: umur dan punyaKartu.",
      "Gunakan if di dalam if untuk memeriksa kartu setelah usia memenuhi syarat.",
      "Tangani ketiga kemungkinan."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int umur, punyaKartu;\n    cin >> umur >> punyaKartu;\n    // TODO: gunakan nested if untuk memeriksa usia dan kartu\n    return 0;\n}",
    "tests": [
      {
        "input": "14\n1",
        "expected": "Boleh masuk",
        "visible": true
      },
      {
        "input": "14\n0",
        "expected": "Perlu kartu",
        "visible": true
      },
      {
        "input": "10\n1",
        "expected": "Usia belum cukup",
        "visible": true
      }
    ]
  },
  {
    "id": "conditions-logical",
    "title": "Kondisi dengan Operator Logika",
    "category": "Percabangan",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_conditions_logical.asp",
    "sourceLabel": "W3Schools",
    "summary": "Operator logika memeriksa beberapa syarat sekaligus: AND (&&), OR (||), dan NOT (!).",
    "concepts": [
      {
        "title": "AND (&&)",
        "body": "<code>A &amp;&amp; B</code> bernilai true hanya jika A dan B true."
      },
      {
        "title": "OR (||)",
        "body": "<code>A || B</code> bernilai true jika minimal satu kondisi true."
      },
      {
        "title": "NOT (!)",
        "body": "<code>!A</code> membalik nilai boolean. Gunakan tanda kurung untuk ekspresi panjang."
      }
    ],
    "example": {
      "input": "14\n1",
      "output": "Boleh ikut"
    },
    "task": "Baca umur dan punyaIzin (1 berarti punya izin, 0 tidak). Tampilkan Boleh ikut jika umur >= 13 DAN punyaIzin == 1; selain itu tampilkan Belum memenuhi syarat.",
    "requirements": [
      "Baca umur dan punyaIzin.",
      "Gabungkan syarat dengan &&.",
      "Boleh ikut hanya jika kedua syarat terpenuhi."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int umur, punyaIzin;\n    cin >> umur >> punyaIzin;\n    // TODO: gabungkan syarat usia dan izin dengan &&\n    return 0;\n}",
    "tests": [
      {
        "input": "14\n1",
        "expected": "Boleh ikut",
        "visible": true
      },
      {
        "input": "14\n0",
        "expected": "Belum memenuhi syarat",
        "visible": true
      },
      {
        "input": "10\n1",
        "expected": "Belum memenuhi syarat",
        "visible": true
      }
    ]
  },
  {
    "id": "switch-statement",
    "title": "Pernyataan switch",
    "category": "Kontrol Alur",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_switch.asp",
    "sourceLabel": "W3Schools",
    "summary": "switch memilih satu cabang berdasarkan nilai ekspresi, biasanya integer atau karakter. Setiap cabang ditandai case dan dapat diakhiri break agar eksekusi tidak berlanjut ke case berikutnya.",
    "concepts": [
      {
        "title": "Struktur switch",
        "body": "Gunakan <code>switch (pilihan) { case 1: ... break; }</code> untuk memilih cabang berdasarkan nilai."
      },
      {
        "title": "Case dan default",
        "body": "Setiap <code>case</code> memeriksa nilai tertentu. Bagian <code>default</code> dijalankan jika tidak ada case yang cocok."
      },
      {
        "title": "Fungsi break",
        "body": "<code>break;</code> menghentikan switch sehingga program tidak melanjutkan eksekusi ke case selanjutnya."
      }
    ],
    "example": {
      "input": "2",
      "output": "Selasa"
    },
    "task": "Baca angka hari dari 1 sampai 3. Gunakan switch untuk menampilkan Senin, Selasa, atau Rabu; tampilkan Hari tidak valid untuk angka lainnya.",
    "requirements": [
      "Gunakan switch dan minimal tiga case.",
      "Setiap case berakhir dengan break.",
      "Input 2 menghasilkan Selasa; input 8 menghasilkan Hari tidak valid."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int hari;\n    cin >> hari;\n    // TODO: gunakan switch untuk memilih nama hari\n    return 0;\n}",
    "tests": [
      {
        "input": "1",
        "expected": "Senin",
        "visible": true
      },
      {
        "input": "2",
        "expected": "Selasa",
        "visible": true
      },
      {
        "input": "3",
        "expected": "Rabu",
        "visible": true
      },
      {
        "input": "8",
        "expected": "Hari tidak valid",
        "visible": true
      }
    ]
  },
  {
    "id": "while-loop",
    "title": "Perulangan while",
    "category": "Kontrol Alur",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_while_loop.asp",
    "sourceLabel": "W3Schools",
    "summary": "Perulangan while menjalankan kembali blok kode selama kondisi bernilai true. Kondisi diperiksa sebelum setiap putaran, sehingga blok bisa saja tidak dijalankan sama sekali.",
    "concepts": [
      {
        "title": "Kondisi while",
        "body": "Bentuk dasar: <code>while (kondisi) { ... }</code>. Jika kondisi false sejak awal, blok tidak dijalankan."
      },
      {
        "title": "Perubahan variabel",
        "body": "Pastikan variabel kondisi berubah di dalam loop agar perulangan dapat berhenti."
      },
      {
        "title": "Hindari infinite loop",
        "body": "Jika kondisi terus true karena variabel tidak diperbarui dengan benar, program dapat berjalan tanpa henti."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "1 2 3 4 5"
    },
    "task": "Gunakan while untuk menampilkan angka 1 sampai 5 secara berurutan, dipisahkan satu spasi.",
    "requirements": [
      "Gunakan while, bukan for.",
      "Mulai dari angka 1 dan ulangi selama angka <= 5.",
      "Naikkan angka setiap putaran."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int angka = 1;\n    // TODO: gunakan while untuk menampilkan angka 1 sampai 5\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "1 2 3 4 5",
        "visible": true
      }
    ]
  },
  {
    "id": "do-while-loop",
    "title": "Perulangan do...while",
    "category": "Kontrol Alur",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_do_while_loop.asp",
    "sourceLabel": "W3Schools",
    "summary": "Perulangan do...while mirip dengan while, tetapi kondisi diperiksa setelah blok dijalankan. Karena itu, blok do...while selalu dijalankan setidaknya satu kali.",
    "concepts": [
      {
        "title": "Letak kondisi",
        "body": "Sintaksnya <code>do { ... } while (kondisi);</code>. Perhatikan titik koma setelah while."
      },
      {
        "title": "Minimal satu putaran",
        "body": "Walaupun kondisi awal mungkin false setelah pemeriksaan, blok sudah berjalan satu kali sebelum kondisi diperiksa."
      },
      {
        "title": "Perbarui nilai",
        "body": "Seperti while, ubah variabel kondisi di dalam blok agar loop dapat berhenti."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "1 2 3"
    },
    "task": "Gunakan do...while untuk menampilkan angka 1 sampai 3, dipisahkan satu spasi.",
    "requirements": [
      "Gunakan do...while, bukan while biasa.",
      "Tampilkan angka sebelum menaikkan nilainya.",
      "Pastikan sintaks while di akhir memiliki titik koma."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int angka = 1;\n    // TODO: gunakan do...while untuk menampilkan 1 sampai 3\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "1 2 3",
        "visible": true
      }
    ]
  },
  {
    "id": "for-loop",
    "title": "Perulangan for",
    "category": "Kontrol Alur",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_for_loop.asp",
    "sourceLabel": "W3Schools",
    "summary": "Perulangan for biasanya digunakan ketika jumlah pengulangan diketahui. Dalam satu baris, for memuat inisialisasi, kondisi, dan perubahan nilai.",
    "concepts": [
      {
        "title": "Tiga bagian for",
        "body": "Sintaks <code>for (inisialisasi; kondisi; perubahan)</code> menjalankan inisialisasi sekali, memeriksa kondisi, lalu melakukan perubahan setelah setiap putaran."
      },
      {
        "title": "Hitung mundur atau maju",
        "body": "Ubah nilai awal, kondisi, dan langkah seperti <code>i++</code> atau <code>i--</code> untuk mengatur urutan."
      },
      {
        "title": "Akumulasi nilai",
        "body": "Loop dapat dipakai untuk menghitung total, misalnya menambahkan semua angka dari 1 sampai 5 ke variabel total."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "15"
    },
    "task": "Gunakan for untuk menjumlahkan angka 1 sampai 5, lalu tampilkan totalnya.",
    "requirements": [
      "Gunakan perulangan for.",
      "Mulai total dari 0 lalu tambahkan nilai i pada setiap putaran.",
      "Output harus tepat: 15."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int total = 0;\n    // TODO: gunakan for untuk menjumlahkan 1 sampai 5\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "15",
        "visible": true
      }
    ]
  },
  {
    "id": "nested-for-loop",
    "title": "Nested for (Perulangan Bersarang)",
    "category": "Kontrol Alur",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_for_loop_nested.asp",
    "sourceLabel": "W3Schools",
    "summary": "Nested for adalah perulangan for yang berada di dalam perulangan for lain. Loop luar biasanya mengatur baris, sedangkan loop dalam mengatur kolom atau item pada setiap baris.",
    "concepts": [
      {
        "title": "Loop luar dan dalam",
        "body": "Loop luar berjalan satu kali untuk setiap baris. Pada setiap putaran loop luar, loop dalam menjalankan seluruh putarannya."
      },
      {
        "title": "Membuat pola",
        "body": "Nested for dapat digunakan untuk membentuk pola bintang, tabel perkalian, dan grid."
      },
      {
        "title": "Perhatikan baris baru",
        "body": "Setelah loop dalam selesai, cetak baris baru agar hasil setiap putaran loop luar tampil pada baris berbeda."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "***\n***\n***"
    },
    "task": "Gunakan nested for untuk mencetak pola persegi berisi tiga baris. Setiap baris berisi tiga karakter bintang tanpa spasi.",
    "requirements": [
      "Gunakan dua perulangan for yang bersarang.",
      "Loop luar mengatur tiga baris dan loop dalam mencetak tiga bintang.",
      "Cetak newline setelah setiap baris."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: gunakan nested for untuk mencetak persegi 3 x 3\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "***\n***\n***",
        "visible": true
      }
    ]
  },
  {
    "id": "range-based-for-loop",
    "title": "Range-based for (Foreach)",
    "category": "Kontrol Alur",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_for_loop_foreach.asp",
    "sourceLabel": "W3Schools",
    "summary": "Range-based for memudahkan program mengunjungi setiap elemen array atau koleksi tanpa mengelola indeks secara manual. Bentuk ini sering disebut foreach.",
    "concepts": [
      {
        "title": "Bentuk range-based for",
        "body": "Gunakan <code>for (int angka : data) { ... }</code> untuk mengambil setiap elemen array pada setiap putaran."
      },
      {
        "title": "Tanpa indeks manual",
        "body": "Kamu tidak perlu membuat variabel indeks atau memeriksa panjang array pada kondisi for."
      },
      {
        "title": "Elemen dapat diproses",
        "body": "Setiap elemen dapat ditampilkan, dijumlahkan, atau dipakai dalam perhitungan lain."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "12"
    },
    "task": "Gunakan range-based for untuk menjumlahkan semua elemen array {2, 4, 6}, lalu tampilkan totalnya.",
    "requirements": [
      "Buat array int berisi 2, 4, dan 6.",
      "Gunakan range-based for dengan bentuk for (int angka : data).",
      "Output harus tepat: 12."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int data[] = {2, 4, 6};\n    int total = 0;\n    // TODO: gunakan range-based for untuk menjumlahkan elemen array\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "12",
        "visible": true
      }
    ]
  },
  {
    "id": "break-statement",
    "title": "Menghentikan Perulangan dengan break",
    "category": "Kontrol Alur",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_break.asp",
    "sourceLabel": "W3Schools",
    "summary": "Pernyataan break langsung menghentikan perulangan atau switch terdekat. Perintah setelah loop tetap dijalankan setelah eksekusi keluar dari loop.",
    "concepts": [
      {
        "title": "Keluar lebih awal",
        "body": "Letakkan <code>break;</code> di dalam kondisi yang ingin menghentikan loop."
      },
      {
        "title": "Break pada loop",
        "body": "Misalnya, loop dapat mencari nilai tertentu lalu berhenti ketika nilai tersebut ditemukan."
      },
      {
        "title": "Berbeda dengan continue",
        "body": "break menghentikan seluruh loop, sedangkan continue melewatkan sisa perintah pada putaran saat ini dan melanjutkan ke putaran berikutnya."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "1 2 3 4"
    },
    "task": "Gunakan for dari 1 sampai 10. Jika angka mencapai 5, hentikan loop dengan break. Tampilkan angka yang dicetak sebelum loop berhenti.",
    "requirements": [
      "Gunakan for dan periksa kondisi angka == 5 di dalam loop.",
      "Gunakan break agar angka 5 dan angka setelahnya tidak dicetak.",
      "Output harus tepat: 1 2 3 4."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: loop 1 sampai 10 dan break saat angka == 5\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "1 2 3 4",
        "visible": true
      }
    ]
  },
  {
    "id": "arrays",
    "title": "Array dalam C++",
    "category": "Array",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_arrays.asp",
    "sourceLabel": "W3Schools",
    "summary": "Array menyimpan beberapa nilai dengan tipe data yang sama dalam satu variabel. Setiap elemen diakses menggunakan indeks yang dimulai dari 0.",
    "concepts": [
      {
        "title": "Mendeklarasikan array",
        "body": "Contoh <code>int nilai[3] = {80, 90, 100};</code> membuat array berisi tiga nilai integer."
      },
      {
        "title": "Mengakses elemen",
        "body": "Elemen pertama ada pada indeks 0, sehingga <code>nilai[0]</code> bernilai 80 dan <code>nilai[2]</code> bernilai 100."
      },
      {
        "title": "Mengubah elemen",
        "body": "Nilai elemen dapat diperbarui lewat indeks, misalnya <code>nilai[1] = 95;</code>. Pastikan indeks tidak keluar dari rentang array."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "80 90 100"
    },
    "task": "Buat array int nilai berisi {80, 90, 100}. Tampilkan ketiga elemen secara berurutan dan dipisahkan satu spasi.",
    "requirements": [
      "Deklarasikan array bernama nilai dengan tiga elemen.",
      "Gunakan indeks 0, 1, dan 2 untuk menampilkan elemen.",
      "Output harus tepat: 80 90 100."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan array nilai berisi 80, 90, 100\n    // TODO: tampilkan ketiga elemennya\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "80 90 100",
        "visible": true
      }
    ]
  },
  {
    "id": "arrays-loop",
    "title": "Mengakses Array dengan Loop",
    "category": "Array",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_arrays_loop.asp",
    "sourceLabel": "W3Schools",
    "summary": "Perulangan dapat digunakan untuk mengunjungi setiap elemen array. Loop dengan indeks cocok saat posisi elemen dibutuhkan atau ketika ukuran array diketahui.",
    "concepts": [
      {
        "title": "Loop dengan indeks",
        "body": "Pola umum: <code>for (int i = 0; i &lt; 4; i++)</code> lalu akses elemen menggunakan <code>data[i]</code>."
      },
      {
        "title": "Mulai dari indeks 0",
        "body": "Indeks pertama array adalah 0. Untuk array berisi empat elemen, indeks yang valid adalah 0 sampai 3."
      },
      {
        "title": "Mengolah setiap elemen",
        "body": "Dalam loop, elemen bisa ditampilkan satu per satu atau digunakan untuk menghitung total dan mencari nilai tertentu."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "2 4 6 8"
    },
    "task": "Buat array int data berisi {2, 4, 6, 8}. Gunakan for untuk menampilkan seluruh elemen dengan satu spasi.",
    "requirements": [
      "Gunakan array bernama data yang memiliki empat elemen.",
      "Gunakan loop for dan akses elemen dengan data[i].",
      "Output harus tepat: 2 4 6 8."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int data[] = {2, 4, 6, 8};\n    // TODO: gunakan for untuk menampilkan semua elemen array\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "2 4 6 8",
        "visible": true
      }
    ]
  },
  {
    "id": "arrays-omit",
    "title": "Menghilangkan Ukuran Array",
    "category": "Array",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_arrays_omit.asp",
    "sourceLabel": "W3Schools",
    "summary": "Ukuran array pada deklarasi dapat dihilangkan jika array langsung diberi daftar nilai awal. Compiler akan menghitung jumlah elemen dari daftar tersebut.",
    "concepts": [
      {
        "title": "Ukuran disimpulkan dari initializer",
        "body": "Contoh <code>int angka[] = {5, 10, 15, 20};</code> otomatis membuat array dengan empat elemen."
      },
      {
        "title": "Tetap ada ukuran",
        "body": "Walau ukuran tidak ditulis di dalam kurung siku, array tetap memiliki jumlah elemen tetap yang ditentukan saat kompilasi."
      },
      {
        "title": "Periksa indeks",
        "body": "Untuk empat elemen, indeks tetap dimulai dari 0 dan berakhir pada 3. Mengakses indeks 4 akan berada di luar rentang array."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "5 20"
    },
    "task": "Deklarasikan int angka[] tanpa menulis ukuran di dalam kurung siku, dengan nilai {5, 10, 15, 20}. Tampilkan elemen pertama dan terakhir.",
    "requirements": [
      "Tulis deklarasi sebagai int angka[] = {5, 10, 15, 20};.",
      "Akses elemen pertama dan terakhir dengan indeks yang benar.",
      "Output harus tepat: 5 20."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan angka[] tanpa ukuran yang ditulis eksplisit\n    // TODO: tampilkan elemen pertama dan terakhir\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "5 20",
        "visible": true
      }
    ]
  },
  {
    "id": "arrays-size",
    "title": "Menghitung Ukuran Array",
    "category": "Array",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_arrays_size.asp",
    "sourceLabel": "W3Schools",
    "summary": "Untuk array biasa yang masih berada dalam lingkup sebagai array, jumlah elemennya dapat dihitung dari ukuran total byte dibagi ukuran satu elemen.",
    "concepts": [
      {
        "title": "Menggunakan sizeof",
        "body": "Ekspresi <code>sizeof(data)</code> menghasilkan ukuran seluruh array dalam byte, sedangkan <code>sizeof(data[0])</code> menghasilkan ukuran satu elemen."
      },
      {
        "title": "Rumus jumlah elemen",
        "body": "Gunakan <code>sizeof(data) / sizeof(data[0])</code> untuk menghitung jumlah elemen pada array biasa yang dideklarasikan di lingkup tersebut."
      },
      {
        "title": "Batasan rumus",
        "body": "Rumus ini tidak bekerja dengan cara yang sama jika array telah diteruskan sebagai pointer ke fungsi. Untuk array biasa, gunakan rumus ini di tempat array dideklarasikan."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "5"
    },
    "task": "Buat array int data berisi {10, 20, 30, 40, 50}. Hitung jumlah elemennya menggunakan sizeof(data) / sizeof(data[0]) dan tampilkan hasilnya.",
    "requirements": [
      "Gunakan array bernama data berisi lima integer.",
      "Hitung jumlah elemen dengan sizeof(data) / sizeof(data[0]).",
      "Output harus tepat: 5."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int data[] = {10, 20, 30, 40, 50};\n    // TODO: hitung ukuran array dalam jumlah elemen\n    // TODO: tampilkan jumlah elemennya\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "5",
        "visible": true
      }
    ]
  },
  {
    "id": "functions",
    "title": "Fungsi dalam C++",
    "category": "Fungsi",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_functions.asp",
    "sourceLabel": "W3Schools — C++ Functions",
    "summary": "Fungsi adalah kumpulan instruksi yang diberi nama dan dapat dipanggil saat dibutuhkan. Fungsi membantu membagi program menjadi bagian kecil yang mudah dibaca, diuji, dan digunakan kembali.",
    "concepts": [
      {
        "title": "Mendefinisikan fungsi",
        "body": "Fungsi memiliki tipe kembalian, nama, tanda kurung, dan blok kode. Contohnya, <code>void sapa()</code> mendefinisikan fungsi bernama <code>sapa</code> yang tidak mengembalikan nilai."
      },
      {
        "title": "Memanggil fungsi",
        "body": "Kode di dalam fungsi dijalankan ketika fungsi dipanggil, misalnya dengan menulis <code>sapa();</code>. Program C++ tetap dimulai dari fungsi <code>main()</code>."
      },
      {
        "title": "Mengapa menggunakan fungsi?",
        "body": "Fungsi membuat program lebih terstruktur dan mengurangi penulisan kode berulang. Kita dapat memberi nama sesuai tugasnya, seperti <code>hitungTotal()</code> atau <code>tampilkanMenu()</code>."
      },
      {
        "title": "Posisi definisi fungsi",
        "body": "Dalam contoh pemula, definisikan fungsi di atas <code>main()</code> agar compiler mengetahui fungsi tersebut saat dipanggil."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "Halo dari fungsi!"
    },
    "task": "Buat fungsi void sapa() yang menampilkan teks Halo dari fungsi! Panggil fungsi tersebut dari main().",
    "requirements": [
      "Definisikan fungsi bernama sapa dengan tipe kembalian void.",
      "Panggil sapa() dari dalam main().",
      "Output harus tepat: Halo dari fungsi!."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nvoid sapa() {\n    // TODO: tampilkan \"Halo dari fungsi!\"\n}\n\nint main() {\n    // TODO: panggil fungsi sapa\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "Halo dari fungsi!",
        "visible": true
      }
    ]
  },
  {
    "id": "function-param",
    "title": "Parameter Fungsi",
    "category": "Fungsi",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_function_param.asp",
    "sourceLabel": "W3Schools — C++ Functions",
    "summary": "Parameter membuat fungsi dapat menerima data dari pemanggilnya. Nilai yang dikirim saat fungsi dipanggil disebut argumen, sedangkan nama variabel pada definisi fungsi disebut parameter.",
    "concepts": [
      {
        "title": "Menambahkan parameter",
        "body": "Parameter ditulis di dalam tanda kurung pada definisi fungsi, lengkap dengan tipe datanya. Contoh: <code>void tampilkanSkor(int skor)</code> menerima bilangan bulat bernama <code>skor</code>."
      },
      {
        "title": "Mengirim argumen",
        "body": "Saat memanggil fungsi, kirim nilai di dalam tanda kurung, misalnya <code>tampilkanSkor(85);</code>. Angka <code>85</code> adalah argumen yang diteruskan ke parameter <code>skor</code>."
      },
      {
        "title": "Tipe harus sesuai",
        "body": "Pilih tipe parameter sesuai data yang diperlukan, seperti <code>int</code> untuk bilangan bulat atau <code>string</code> untuk teks. Sertakan <code>#include <string></code> jika menggunakan <code>string</code>."
      },
      {
        "title": "Manfaat parameter",
        "body": "Dengan parameter, fungsi yang sama bisa digunakan untuk nilai berbeda tanpa menulis ulang isi fungsi."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "Skor: 85"
    },
    "task": "Buat fungsi void tampilkanSkor(int skor) yang mencetak Skor: diikuti nilai parameter. Panggil fungsi dengan argumen 85.",
    "requirements": [
      "Fungsi harus memiliki parameter int bernama skor.",
      "Panggil fungsi dengan argumen 85.",
      "Output harus tepat: Skor: 85."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nvoid tampilkanSkor(int skor) {\n    // TODO: tampilkan \"Skor: \" dan nilai skor\n}\n\nint main() {\n    // TODO: panggil tampilkanSkor dengan argumen 85\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "Skor: 85",
        "visible": true
      }
    ]
  },
  {
    "id": "function-default",
    "title": "Parameter Default",
    "category": "Fungsi",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_function_default.asp",
    "sourceLabel": "W3Schools — C++ Functions",
    "summary": "Parameter default memiliki nilai bawaan yang digunakan jika pemanggil tidak mengirim argumen untuk parameter tersebut. Argumen tetap dapat diberikan untuk mengganti nilai bawaan.",
    "concepts": [
      {
        "title": "Menentukan nilai default",
        "body": "Tulis nilai bawaan setelah tanda sama dengan pada parameter, misalnya <code>void sapa(string negara = \"Indonesia\")</code>."
      },
      {
        "title": "Memakai atau mengganti default",
        "body": "Pemanggilan <code>sapa()</code> menggunakan nilai <code>Indonesia</code>, sedangkan <code>sapa(\"Jepang\")</code> memakai nilai yang dikirim, yaitu <code>Jepang</code>."
      },
      {
        "title": "Urutan parameter default",
        "body": "Jika fungsi memiliki beberapa parameter dan ada yang memakai nilai default, letakkan parameter default di bagian paling kanan agar argumen yang tidak diberikan tidak membuat posisi argumen ambigu."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "Saya dari Jepang\nSaya dari Indonesia"
    },
    "task": "Buat fungsi void sapa dengan parameter string negara yang memiliki nilai default Indonesia. Panggil sapa(\"Jepang\") lalu panggil sapa() tanpa argumen.",
    "requirements": [
      "Gunakan parameter string negara dengan nilai default Indonesia.",
      "Panggil fungsi sekali dengan argumen Jepang dan sekali tanpa argumen.",
      "Output harus dua baris: Saya dari Jepang lalu Saya dari Indonesia."
    ],
    "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid sapa(string negara = \"Indonesia\") {\n    // TODO: tampilkan \"Saya dari \" dan negara\n}\n\nint main() {\n    // TODO: panggil sapa(\"Jepang\") lalu sapa()\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "Saya dari Jepang\nSaya dari Indonesia",
        "visible": true
      }
    ]
  },
  {
    "id": "function-multiple",
    "title": "Banyak Parameter Fungsi",
    "category": "Fungsi",
    "level": "Pemula",
    "duration": "10 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_function_multiple.asp",
    "sourceLabel": "W3Schools — C++ Functions",
    "summary": "Sebuah fungsi dapat menerima lebih dari satu parameter. Parameter dipisahkan dengan koma, dan urutan argumen saat pemanggilan harus sesuai dengan urutan serta tipe parameter pada definisi.",
    "concepts": [
      {
        "title": "Menulis beberapa parameter",
        "body": "Contoh definisi <code>void tampilkanData(string nama, int umur)</code> menerima dua parameter: teks <code>nama</code> dan bilangan bulat <code>umur</code>."
      },
      {
        "title": "Urutan argumen",
        "body": "Saat dipanggil sebagai <code>tampilkanData(\"Alya\", 13)</code>, argumen pertama masuk ke <code>nama</code> dan argumen kedua masuk ke <code>umur</code>."
      },
      {
        "title": "Pemisah koma",
        "body": "Gunakan koma untuk memisahkan parameter pada definisi fungsi maupun argumen saat pemanggilan. Pastikan jumlah dan urutannya benar."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "Alya berumur 13 tahun."
    },
    "task": "Buat fungsi void tampilkanData(string nama, int umur). Panggil dengan nilai Alya dan 13, lalu tampilkan Alya berumur 13 tahun.",
    "requirements": [
      "Fungsi menerima dua parameter dengan tipe string dan int.",
      "Kirim argumen Alya terlebih dahulu, lalu 13.",
      "Output harus tepat: Alya berumur 13 tahun."
    ],
    "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid tampilkanData(string nama, int umur) {\n    // TODO: tampilkan nama, \" berumur \", umur, \" tahun.\"\n}\n\nint main() {\n    // TODO: panggil tampilkanData dengan \"Alya\" dan 13\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "Alya berumur 13 tahun.",
        "visible": true
      }
    ]
  },
  {
    "id": "function-return",
    "title": "Nilai Kembalian Fungsi",
    "category": "Fungsi",
    "level": "Pemula",
    "duration": "12 menit",
    "sourceUrl": "https://www.w3schools.com/cpp/cpp_function_return.asp",
    "sourceLabel": "W3Schools — C++ Functions",
    "summary": "Fungsi dapat mengembalikan hasil melalui return. Tipe kembalian pada definisi harus sesuai dengan nilai yang dikembalikan, misalnya int untuk hasil bilangan bulat.",
    "concepts": [
      {
        "title": "Tipe kembalian",
        "body": "Pada definisi <code>int luasPersegiPanjang(int panjang, int lebar)</code>, kata <code>int</code> sebelum nama fungsi menunjukkan bahwa hasilnya berupa bilangan bulat."
      },
      {
        "title": "Menggunakan return",
        "body": "Statement <code>return</code> mengirimkan nilai kembali kepada pemanggil dan mengakhiri eksekusi fungsi tersebut. Contoh: <code>return panjang * lebar;</code>."
      },
      {
        "title": "Menyimpan hasil",
        "body": "Nilai yang dikembalikan dapat disimpan dalam variabel, dipakai dalam ekspresi, atau langsung ditampilkan. Berbeda dengan <code>void</code>, fungsi bertipe <code>int</code> perlu mengembalikan nilai yang sesuai."
      }
    ],
    "example": {
      "input": "(tidak ada input)",
      "output": "Luas: 24"
    },
    "task": "Buat fungsi int luasPersegiPanjang(int panjang, int lebar) yang mengembalikan hasil panjang dikali lebar. Panggil dengan 6 dan 4, lalu tampilkan Luas: 24.",
    "requirements": [
      "Fungsi memiliki tipe kembalian int.",
      "Gunakan return untuk mengembalikan panjang * lebar.",
      "Simpan hasil pemanggilan dengan argumen 6 dan 4, lalu tampilkan Luas: 24."
    ],
    "starter": "#include <iostream>\nusing namespace std;\n\nint luasPersegiPanjang(int panjang, int lebar) {\n    // TODO: kembalikan hasil panjang * lebar\n}\n\nint main() {\n    // TODO: panggil fungsi dengan 6 dan 4\n    // TODO: tampilkan \"Luas: \" dan hasilnya\n    return 0;\n}",
    "tests": [
      {
        "input": "",
        "expected": "Luas: 24",
        "visible": true
      }
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
  ],
  "data-types": [
    {
      "id": "data-types-2",
      "title": "Latihan 2 · Data siswa",
      "difficulty": "Mudah",
      "task": "Buat int umur = 14, double tinggi = 1.6, char kelas = '8', bool aktif = true, dan string nama = \"Bima\". Tampilkan berurutan dengan satu spasi.",
      "requirements": [
        "Pilih tipe data yang sesuai.",
        "Gunakan boolalpha agar bool tampil sebagai true.",
        "Output harus tepat: 14 1.6 8 true Bima."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "14 1.6 8 true Bima"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan lima variabel sesuai instruksi\n    // TODO: tampilkan semua nilai dengan satu spasi\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "14 1.6 8 true Bima",
          "visible": true
        }
      ]
    },
    {
      "id": "data-types-3",
      "title": "Latihan 3 · Ringkasan data",
      "difficulty": "Tantangan",
      "task": "Buat int skor = 90, double rataRata = 87.5, char predikat = 'A', bool lulus = true, dan string nama = \"Nisa\". Tampilkan: Nisa | 90 | 87.5 | A | true.",
      "requirements": [
        "Gunakan kelima tipe data yang tepat.",
        "Gunakan boolalpha untuk lulus.",
        "Tampilkan nilai sesuai urutan dan format."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Nisa | 90 | 87.5 | A | true"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan variabel ringkasan data\n    // TODO: tampilkan semua nilai sesuai format\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Nisa | 90 | 87.5 | A | true",
          "visible": true
        }
      ]
    }
  ],
  "numeric-types": [
    {
      "id": "numeric-types-2",
      "title": "Latihan 2 · Bilangan desimal",
      "difficulty": "Mudah",
      "task": "Deklarasikan float tinggi = 1.65f dan double berat = 52.75. Tampilkan keduanya dengan satu spasi.",
      "requirements": [
        "Gunakan float untuk tinggi dan double untuk berat.",
        "Tampilkan nilai melalui variabel.",
        "Output harus tepat: 1.65 52.75."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "1.65 52.75"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan tinggi dan berat\n    // TODO: tampilkan keduanya\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "1.65 52.75",
          "visible": true
        }
      ]
    },
    {
      "id": "numeric-types-3",
      "title": "Latihan 3 · Pembagian desimal",
      "difficulty": "Tantangan",
      "task": "Deklarasikan int pembilang = 7 dan int penyebut = 2. Simpan hasil pembagian desimal pada double hasil, lalu tampilkan 3.50.",
      "requirements": [
        "Gunakan dua variabel int sesuai instruksi.",
        "Pastikan pembagian dilakukan sebagai desimal, bukan pembagian integer.",
        "Gunakan fixed dan setprecision(2)."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "3.50"
      },
      "starter": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int pembilang = 7;\n    int penyebut = 2;\n    // TODO: hitung hasil pembagian desimal\n    // TODO: tampilkan dua angka di belakang koma\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "3.50",
          "visible": true
        }
      ]
    }
  ],
  "bool-types": [
    {
      "id": "bool-types-2",
      "title": "Latihan 2 · Status login",
      "difficulty": "Mudah",
      "task": "Buat bool sudahLogin = false. Tampilkan sebagai teks false dengan cout << boolalpha << sudahLogin; Jangan menulis int boolalpha = sudahLogin, karena itu akan mencetak 0 atau 1.",
      "requirements": [
        "Gunakan variabel bool bernama sudahLogin.",
        "Gunakan cout << boolalpha << sudahLogin; jangan deklarasikan int boolalpha.",
        "Output harus tepat: false."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "false"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    bool sudahLogin = false;\n    // TODO: tampilkan sebagai false dengan cout << boolalpha << sudahLogin\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "false",
          "visible": true
        }
      ]
    },
    {
      "id": "bool-types-3",
      "title": "Latihan 3 · Syarat masuk",
      "difficulty": "Tantangan",
      "task": "Buat bool punyaTiket = true dan sudahMendaftar = true. Tampilkan hasil punyaTiket && sudahMendaftar menggunakan boolalpha.",
      "requirements": [
        "Gunakan dua variabel bool.",
        "Gabungkan dengan operator &&.",
        "Output harus tepat: true."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "true"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    bool punyaTiket = true;\n    bool sudahMendaftar = true;\n    // TODO: tulis cout << boolalpha << (punyaTiket && sudahMendaftar);\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "true",
          "visible": true
        }
      ]
    }
  ],
  "char-types": [
    {
      "id": "char-types-2",
      "title": "Latihan 2 · Kode karakter",
      "difficulty": "Mudah",
      "task": "Deklarasikan char kode = '7' dan tampilkan karakternya, bukan hasil perhitungan numerik.",
      "requirements": [
        "Gunakan char untuk kode.",
        "Nilai karakter memakai tanda petik satu.",
        "Output harus tepat: 7."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "7"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan dan tampilkan char kode\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "7",
          "visible": true
        }
      ]
    },
    {
      "id": "char-types-3",
      "title": "Latihan 3 · Cek jawaban huruf",
      "difficulty": "Tantangan",
      "task": "Deklarasikan char jawaban = 'B'. Bandingkan dengan 'B' dan tampilkan hasilnya menggunakan boolalpha.",
      "requirements": [
        "Gunakan variabel char bernama jawaban.",
        "Bandingkan dengan karakter 'B'.",
        "Gunakan boolalpha agar output true atau false."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "true"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char jawaban = 'B';\n    // TODO: bandingkan jawaban dengan 'B' dan tampilkan hasilnya\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "true",
          "visible": true
        }
      ]
    }
  ],
  "string-types": [
    {
      "id": "string-types-2",
      "title": "Latihan 2 · Salam dengan input",
      "difficulty": "Mudah",
      "task": "Baca satu kata nama dengan cin, lalu tampilkan Halo, [nama] tanpa tanda kurung siku dan tanda seru.",
      "requirements": [
        "Gunakan string dan cin.",
        "Nama berasal dari input.",
        "Output misalnya Halo, Alya."
      ],
      "example": {
        "input": "Alya",
        "output": "Halo, Alya"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string nama;\n    // TODO: baca nama dan tampilkan salam tanpa tanda seru\n    return 0;\n}",
      "tests": [
        {
          "input": "Alya",
          "expected": "Halo, Alya",
          "visible": true
        },
        {
          "input": "Bima",
          "expected": "Halo, Bima",
          "visible": true
        },
        {
          "input": "Nisa",
          "expected": "Halo, Nisa",
          "visible": true
        }
      ]
    },
    {
      "id": "string-types-3",
      "title": "Latihan 3 · Nama lengkap",
      "difficulty": "Tantangan",
      "task": "Gunakan getline(cin, nama) untuk membaca nama lengkap termasuk spasi. Tampilkan Selamat datang, [nama]!",
      "requirements": [
        "Gunakan string dan getline(cin, nama).",
        "Jangan menggunakan cin >> nama karena nama dapat berisi spasi.",
        "Output harus menyertakan seluruh input."
      ],
      "example": {
        "input": "Alya Putri",
        "output": "Selamat datang, Alya Putri!"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string nama;\n    // TODO: baca seluruh baris dan tampilkan salam\n    return 0;\n}",
      "tests": [
        {
          "input": "Alya Putri",
          "expected": "Selamat datang, Alya Putri!",
          "visible": true
        },
        {
          "input": "Bima Saputra",
          "expected": "Selamat datang, Bima Saputra!",
          "visible": true
        }
      ]
    }
  ],
  "auto-types": [
    {
      "id": "auto-types-2",
      "title": "Latihan 2 · Total harga",
      "difficulty": "Mudah",
      "task": "Gunakan auto untuk harga = 12500 dan jumlah = 2. Hitung total lalu tampilkan Total: 25000.",
      "requirements": [
        "Gunakan auto pada kedua deklarasi.",
        "Kalikan harga dengan jumlah.",
        "Tampilkan sesuai format."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Total: 25000"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan harga dan jumlah dengan auto\n    // TODO: hitung dan tampilkan total\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Total: 25000",
          "visible": true
        }
      ]
    },
    {
      "id": "auto-types-3",
      "title": "Latihan 3 · Rata-rata nilai",
      "difficulty": "Tantangan",
      "task": "Gunakan auto untuk nilai1 = 80 dan nilai2 = 91. Hitung rata-rata sebagai desimal dan tampilkan satu angka di belakang koma.",
      "requirements": [
        "Gunakan auto untuk nilai1 dan nilai2.",
        "Hitung rata-rata dengan pembagi 2.0.",
        "Gunakan fixed dan setprecision(1). Output harus 85.5."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "85.5"
      },
      "starter": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan nilai1 dan nilai2 menggunakan auto\n    // TODO: hitung dan tampilkan rata-rata satu desimal\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "85.5",
          "visible": true
        }
      ]
    }
  ],
  "operators": [
    {
      "id": "operators-2",
      "title": "Latihan 2 · Operator perkalian",
      "difficulty": "Mudah",
      "task": "Buat int x = 8 dan y = 2. Tampilkan x*y dan x/y dengan satu spasi.",
      "requirements": [
        "Gunakan operator * dan /.",
        "Tampilkan hasil dari variabel, bukan angka hasil yang ditulis langsung.",
        "Output harus tepat: 16 4."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "16 4"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 8;\n    int y = 2;\n    // TODO: tampilkan x*y dan x/y\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "16 4",
          "visible": true
        }
      ]
    },
    {
      "id": "operators-3",
      "title": "Latihan 3 · Operator gabungan",
      "difficulty": "Tantangan",
      "task": "Buat int nilai = 12, tambahkan 3 dengan +=, lalu tampilkan nilai akhirnya.",
      "requirements": [
        "Gunakan operator +=.",
        "Simpan perubahan pada variabel nilai.",
        "Output harus tepat: 15."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "15"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nilai = 12;\n    // TODO: tambahkan 3 dengan += lalu tampilkan nilai\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "15",
          "visible": true
        }
      ]
    }
  ],
  "arithmetic-operators": [
    {
      "id": "arithmetic-operators-2",
      "title": "Latihan 2 · Jumlah dan hasil kali",
      "difficulty": "Mudah",
      "task": "Buat int x = 9 dan y = 4. Tampilkan x+y dan x*y dengan satu spasi.",
      "requirements": [
        "Gunakan operator + dan *.",
        "Tampilkan hasil sesuai urutan instruksi.",
        "Output harus tepat: 13 36."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "13 36"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 9;\n    int y = 4;\n    // TODO: tampilkan x+y dan x*y\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "13 36",
          "visible": true
        }
      ]
    },
    {
      "id": "arithmetic-operators-3",
      "title": "Latihan 3 · Hasil bagi desimal",
      "difficulty": "Tantangan",
      "task": "Hitung 7.0 / 2 dan 7 % 2. Tampilkan hasilnya dengan satu angka desimal untuk hasil bagi, lalu sisa pembagian.",
      "requirements": [
        "Pastikan pembagian menggunakan operand desimal.",
        "Gunakan fixed dan setprecision(1).",
        "Output harus tepat: 3.5 1."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "3.5 1"
      },
      "starter": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    // TODO: hitung hasil bagi desimal dan sisa pembagian\n    // TODO: tampilkan dengan format 3.5 1\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "3.5 1",
          "visible": true
        }
      ]
    }
  ],
  "assignment-operators": [
    {
      "id": "assignment-operators-2",
      "title": "Latihan 2 · Kurangi nilai",
      "difficulty": "Mudah",
      "task": "Buat int poin = 20, kurangi dengan 7 menggunakan -=, lalu tampilkan poin.",
      "requirements": [
        "Gunakan operator -=.",
        "Perbarui nilai variabel poin.",
        "Output harus tepat: 13."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "13"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int poin = 20;\n    // TODO: kurangi 7 dengan -= lalu tampilkan poin\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "13",
          "visible": true
        }
      ]
    },
    {
      "id": "assignment-operators-3",
      "title": "Latihan 3 · Sisa pembagian",
      "difficulty": "Tantangan",
      "task": "Buat int total = 50, gunakan %= 6 lalu += 4. Tampilkan nilai akhir.",
      "requirements": [
        "Gunakan operator %= dan += secara berurutan.",
        "Ingat bahwa %= menyimpan sisa pembagian.",
        "Output harus tepat: 6."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "6"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int total = 50;\n    // TODO: gunakan %= 6, lalu += 4, dan tampilkan total\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "6",
          "visible": true
        }
      ]
    }
  ],
  "comparison-operators": [
    {
      "id": "comparison-operators-2",
      "title": "Latihan 2 · Memenuhi rentang",
      "difficulty": "Mudah",
      "task": "Buat int skor = 85. Tampilkan apakah skor >= 75 dan skor < 100 menggunakan boolalpha.",
      "requirements": [
        "Gunakan operator >= dan <.",
        "Gunakan boolalpha.",
        "Output harus tepat: true true."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "true true"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int skor = 85;\n    // TODO: tampilkan skor>=75 dan skor<100\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "true true",
          "visible": true
        }
      ]
    },
    {
      "id": "comparison-operators-3",
      "title": "Latihan 3 · Nilai yang sama",
      "difficulty": "Tantangan",
      "task": "Buat int x = 5 dan y = 5. Tampilkan hasil x == y dan x <= y menggunakan boolalpha.",
      "requirements": [
        "Gunakan operator == dan <=.",
        "Gunakan boolalpha untuk output.",
        "Output harus tepat: true true."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "true true"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    int y = 5;\n    // TODO: tampilkan x==y dan x<=y\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "true true",
          "visible": true
        }
      ]
    }
  ],
  "logical-operators": [
    {
      "id": "logical-operators-2",
      "title": "Latihan 2 · Kondisi OR",
      "difficulty": "Mudah",
      "task": "Buat bool hujan = false dan membawaPayung = true. Tampilkan hasil !hujan || membawaPayung menggunakan boolalpha.",
      "requirements": [
        "Gunakan operator ! dan ||.",
        "Pertahankan tanda kurung pada ekspresi jika diperlukan.",
        "Output harus tepat: true."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "true"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    bool hujan = false;\n    bool membawaPayung = true;\n    // TODO: tampilkan !hujan || membawaPayung dengan boolalpha\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "true",
          "visible": true
        }
      ]
    },
    {
      "id": "logical-operators-3",
      "title": "Latihan 3 · AND, OR, NOT",
      "difficulty": "Tantangan",
      "task": "Buat bool A = true dan B = false. Tampilkan A && B, A || B, dan !B dengan boolalpha.",
      "requirements": [
        "Gunakan operator &&, ||, dan !.",
        "Tampilkan tiga hasil berurutan.",
        "Output harus tepat: false true true."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "false true true"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    bool A = true;\n    bool B = false;\n    // TODO: tampilkan A&&B, A||B, dan !B dengan boolalpha\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "false true true",
          "visible": true
        }
      ]
    }
  ],
  "operator-precedence": [
    {
      "id": "operator-precedence-2",
      "title": "Latihan 2 · Urutan operasi",
      "difficulty": "Mudah",
      "task": "Hitung nilai = 10 - 2 * 3 + 4 lalu tampilkan nilai.",
      "requirements": [
        "Ingat perkalian dikerjakan sebelum penjumlahan dan pengurangan.",
        "Gunakan ekspresi sesuai instruksi tanpa mengubah urutannya.",
        "Output harus tepat: 8."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "8"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan nilai dengan ekspresi 10 - 2 * 3 + 4\n    // TODO: tampilkan nilai\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "8",
          "visible": true
        }
      ]
    },
    {
      "id": "operator-precedence-3",
      "title": "Latihan 3 · Bandingkan prioritas",
      "difficulty": "Tantangan",
      "task": "Buat int a = 6, b = 2, c = 3. Tampilkan (a+b)*c dan a+b*c secara berurutan.",
      "requirements": [
        "Gunakan tanda kurung pada ekspresi pertama.",
        "Jangan menambahkan tanda kurung pada ekspresi kedua.",
        "Output harus tepat: 24 12."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "24 12"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 6, b = 2, c = 3;\n    // TODO: tampilkan (a+b)*c dan a+b*c\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "24 12",
          "visible": true
        }
      ]
    }
  ],
  "strings": [
    {
      "id": "strings-2",
      "title": "Latihan 2 · Pesan singkat",
      "difficulty": "Mudah",
      "task": "Buat string pesan bernilai \"Selamat belajar\" lalu tampilkan isi variabel pesan.",
      "requirements": [
        "Gunakan variabel string bernama pesan.",
        "Tampilkan isi variabel, bukan teks yang ditulis langsung di cout.",
        "Output harus tepat: Selamat belajar."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Selamat belajar"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan dan tampilkan string pesan\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Selamat belajar",
          "visible": true
        }
      ]
    },
    {
      "id": "strings-3",
      "title": "Latihan 3 · Ubah nilai string",
      "difficulty": "Tantangan",
      "task": "Buat string bahasa bernilai \"Java\", ubah nilainya menjadi \"C++\", lalu tampilkan nilai terakhir.",
      "requirements": [
        "Gunakan variabel string bernama bahasa.",
        "Ubah nilai variabel setelah deklarasi.",
        "Output harus tepat: C++."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "C++"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string bahasa = \"Java\";\n    // TODO: ubah bahasa menjadi C++ lalu tampilkan\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "C++",
          "visible": true
        }
      ]
    }
  ],
  "string-concat": [
    {
      "id": "string-concat-2",
      "title": "Latihan 2 · Nama lengkap",
      "difficulty": "Mudah",
      "task": "Gabungkan string namaDepan = \"Alya\" dan namaBelakang = \"Putri\" menjadi Alya Putri.",
      "requirements": [
        "Gunakan operator + untuk menggabungkan string.",
        "Tambahkan satu spasi di tengah.",
        "Output harus tepat: Alya Putri."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Alya Putri"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string namaDepan = \"Alya\";\n    string namaBelakang = \"Putri\";\n    // TODO: gabungkan nama dengan spasi dan tampilkan\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Alya Putri",
          "visible": true
        }
      ]
    },
    {
      "id": "string-concat-3",
      "title": "Latihan 3 · Buat kalimat",
      "difficulty": "Tantangan",
      "task": "Gabungkan string subjek = \"Saya\" dan kegiatan = \"belajar C++\" menjadi Saya sedang belajar C++.",
      "requirements": [
        "Gabungkan tiga bagian teks dengan operator +.",
        "Tambahkan spasi agar kalimat terbaca dengan benar.",
        "Output harus tepat: Saya sedang belajar C++."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Saya sedang belajar C++"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string subjek = \"Saya\";\n    string kegiatan = \"belajar C++\";\n    // TODO: gabungkan menjadi Saya sedang belajar C++\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Saya sedang belajar C++",
          "visible": true
        }
      ]
    }
  ],
  "string-numbers": [
    {
      "id": "string-numbers-2",
      "title": "Latihan 2 · Angka menjadi string",
      "difficulty": "Mudah",
      "task": "Gunakan to_string(25) untuk membuat string teksAngka, lalu tampilkan dengan awalan Angka: .",
      "requirements": [
        "Gunakan to_string() untuk mengubah angka menjadi string.",
        "Simpan hasilnya pada variabel string teksAngka.",
        "Output harus tepat: Angka: 25."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Angka: 25"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // TODO: ubah 25 menjadi string lalu tampilkan dengan awalan Angka:\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Angka: 25",
          "visible": true
        }
      ]
    },
    {
      "id": "string-numbers-3",
      "title": "Latihan 3 · Konversi lalu jumlahkan",
      "difficulty": "Tantangan",
      "task": "Konversi string \"12\" dan \"8\" ke int menggunakan stoi(), lalu tampilkan hasil penjumlahannya.",
      "requirements": [
        "Gunakan stoi() pada kedua string.",
        "Jumlahkan nilai numerik hasil konversi, bukan stringnya.",
        "Output harus tepat: 20."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "20"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string a = \"12\";\n    string b = \"8\";\n    // TODO: konversi kedua string dengan stoi dan tampilkan jumlahnya\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "20",
          "visible": true
        }
      ]
    }
  ],
  "string-length": [
    {
      "id": "string-length-2",
      "title": "Latihan 2 · Panjang C++",
      "difficulty": "Mudah",
      "task": "Buat string bahasa = \"C++\" dan tampilkan panjang string menggunakan size().",
      "requirements": [
        "Gunakan variabel string bernama bahasa.",
        "Gunakan metode size().",
        "Output harus tepat: 3."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "3"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string bahasa = \"C++\";\n    // TODO: tampilkan panjang string dengan size()\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "3",
          "visible": true
        }
      ]
    },
    {
      "id": "string-length-3",
      "title": "Latihan 3 · Panjang kalimat",
      "difficulty": "Tantangan",
      "task": "Buat string kalimat = \"Belajar C++\" dan tampilkan jumlah karakternya. Spasi juga dihitung.",
      "requirements": [
        "Gunakan length() atau size().",
        "Pastikan spasi di tengah kalimat ikut dihitung.",
        "Output harus tepat: 11."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "11"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string kalimat = \"Belajar C++\";\n    // TODO: tampilkan jumlah karakter, termasuk spasi\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "11",
          "visible": true
        }
      ]
    }
  ],
  "string-access": [
    {
      "id": "string-access-2",
      "title": "Latihan 2 · Karakter kedua",
      "difficulty": "Mudah",
      "task": "Buat string kata = \"KELAS\" dan tampilkan karakter kedua dengan indeks yang tepat.",
      "requirements": [
        "Ingat indeks string dimulai dari 0.",
        "Karakter kedua berada di indeks 1.",
        "Output harus tepat: E."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "E"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string kata = \"KELAS\";\n    // TODO: tampilkan karakter kedua\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "E",
          "visible": true
        }
      ]
    },
    {
      "id": "string-access-3",
      "title": "Latihan 3 · Karakter terakhir",
      "difficulty": "Tantangan",
      "task": "Buat string kode = \"ICT2026\" dan tampilkan karakter terakhir menggunakan at().",
      "requirements": [
        "Gunakan metode at().",
        "Gunakan indeks kode.length() - 1.",
        "Output harus tepat: 6."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "6"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string kode = \"ICT2026\";\n    // TODO: tampilkan karakter terakhir menggunakan at()\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "6",
          "visible": true
        }
      ]
    }
  ],
  "string-escape": [
    {
      "id": "string-escape-2",
      "title": "Latihan 2 · Dua baris",
      "difficulty": "Mudah",
      "task": "Tampilkan teks Baris 1 dan Baris 2 dalam dua baris menggunakan escape sequence \\n.",
      "requirements": [
        "Gunakan \\n di dalam string untuk membuat baris baru.",
        "Jangan membuat dua output yang mengubah format hasil yang diminta.",
        "Output harus terdiri dari dua baris yang diminta."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Baris 1\nBaris 2"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: tampilkan Baris 1 dan Baris 2 dengan escape sequence \\n\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Baris 1\nBaris 2",
          "visible": true
        }
      ]
    },
    {
      "id": "string-escape-3",
      "title": "Latihan 3 · Tampilkan path",
      "difficulty": "Tantangan",
      "task": "Tampilkan teks Folder: C:\\ICT dengan satu karakter backslash di antara C: dan ICT.",
      "requirements": [
        "Gunakan escape sequence \\\\ untuk mencetak satu backslash.",
        "Tampilkan awalan Folder: .",
        "Output harus tepat: Folder: C:\\ICT."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Folder: C:\\ICT"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: tampilkan path Folder: C:\\\\ICT dengan escape sequence\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Folder: C:\\ICT",
          "visible": true
        }
      ]
    }
  ],
  "string-input": [
    {
      "id": "string-input-2",
      "title": "Latihan 2 · Nama lengkap",
      "difficulty": "Mudah",
      "task": "Gunakan getline(cin, nama) untuk membaca nama lengkap dan tampilkan nama itu saja.",
      "requirements": [
        "Gunakan getline(), bukan cin >> nama.",
        "Pertahankan spasi dalam nama lengkap.",
        "Output harus sama persis dengan input."
      ],
      "example": {
        "input": "Alya Putri",
        "output": "Alya Putri"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string nama;\n    // TODO: baca satu baris penuh dan tampilkan nama\n    return 0;\n}",
      "tests": [
        {
          "input": "Alya Putri",
          "expected": "Alya Putri",
          "visible": true
        },
        {
          "input": "Bima Saputra",
          "expected": "Bima Saputra",
          "visible": true
        },
        {
          "input": "Nisa Rahma",
          "expected": "Nisa Rahma",
          "visible": true
        }
      ]
    },
    {
      "id": "string-input-3",
      "title": "Latihan 3 · Format biodata",
      "difficulty": "Tantangan",
      "task": "Baca satu baris nama lengkap dan satu baris kota menggunakan getline(). Tampilkan dengan format Nama: [nama] | Kota: [kota].",
      "requirements": [
        "Gunakan dua variabel string.",
        "Gunakan getline() untuk membaca kedua baris input.",
        "Pertahankan spasi pada nama lengkap dan kota."
      ],
      "example": {
        "input": "Alya Putri\nPurwodadi",
        "output": "Nama: Alya Putri | Kota: Purwodadi"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string nama;\n    string kota;\n    // TODO: baca dua baris dengan getline lalu tampilkan format biodata\n    return 0;\n}",
      "tests": [
        {
          "input": "Alya Putri\nPurwodadi",
          "expected": "Nama: Alya Putri | Kota: Purwodadi",
          "visible": true
        },
        {
          "input": "Bima Saputra\nSemarang",
          "expected": "Nama: Bima Saputra | Kota: Semarang",
          "visible": true
        }
      ]
    }
  ],
  "string-namespace": [
    {
      "id": "string-namespace-2",
      "title": "Latihan 2 · std::string",
      "difficulty": "Mudah",
      "task": "Tanpa using namespace std;, deklarasikan std::string nama = \"Alya\" lalu tampilkan dengan std::cout.",
      "requirements": [
        "Jangan menggunakan using namespace std;.",
        "Gunakan std::string dan std::cout.",
        "Output harus tepat: Alya."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Alya"
      },
      "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    // TODO: deklarasikan std::string nama dan tampilkan dengan std::cout\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Alya",
          "visible": true
        }
      ]
    },
    {
      "id": "string-namespace-3",
      "title": "Latihan 3 · Namespace untuk input",
      "difficulty": "Tantangan",
      "task": "Tanpa using namespace std;, baca satu baris teks dengan std::getline(std::cin, pesan), lalu tampilkan isi pesan dengan std::cout.",
      "requirements": [
        "Gunakan std::string untuk variabel pesan.",
        "Gunakan std::getline dan std::cin secara eksplisit.",
        "Gunakan std::cout untuk menampilkan seluruh teks."
      ],
      "example": {
        "input": "Halo C++",
        "output": "Halo C++"
      },
      "starter": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string pesan;\n    // TODO: baca satu baris dengan std::getline lalu tampilkan dengan std::cout\n    return 0;\n}",
      "tests": [
        {
          "input": "Halo C++",
          "expected": "Halo C++",
          "visible": true
        },
        {
          "input": "Belajar string",
          "expected": "Belajar string",
          "visible": true
        }
      ]
    }
  ],
  "conditions": [
    {
      "id": "conditions-2",
      "title": "Latihan 2 · Cek bilangan positif",
      "difficulty": "Mudah",
      "task": "Baca integer. Jika angka > 0 tampilkan Positif. Selalu tampilkan Selesai pada baris berikutnya.",
      "requirements": [
        "Gunakan if untuk angka > 0.",
        "Tampilkan Selesai di luar if.",
        "Input 4 menghasilkan dua baris; input 0 hanya Selesai."
      ],
      "example": {
        "input": "4",
        "output": "Positif\nSelesai"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int angka;\n    cin >> angka;\n    // TODO: jika angka positif, tampilkan Positif\n    cout << \"Selesai\";\n    return 0;\n}",
      "tests": [
        {
          "input": "4",
          "expected": "Positif\nSelesai",
          "visible": true
        },
        {
          "input": "0",
          "expected": "Selesai",
          "visible": true
        }
      ]
    },
    {
      "id": "conditions-3",
      "title": "Latihan 3 · Nilai minimum",
      "difficulty": "Tantangan",
      "task": "Baca skor. Jika skor >= 50 tampilkan Memenuhi. Selalu tampilkan Ujian selesai setelah pemeriksaan.",
      "requirements": [
        "Gunakan if tanpa else.",
        "Gunakan skor >= 50.",
        "Tampilkan Ujian selesai di luar if."
      ],
      "example": {
        "input": "70",
        "output": "Memenuhi\nUjian selesai"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int skor;\n    cin >> skor;\n    // TODO: jika skor >= 50 tampilkan Memenuhi\n    cout << \"Ujian selesai\";\n    return 0;\n}",
      "tests": [
        {
          "input": "70",
          "expected": "Memenuhi\nUjian selesai",
          "visible": true
        },
        {
          "input": "30",
          "expected": "Ujian selesai",
          "visible": true
        }
      ]
    }
  ],
  "conditions-else": [
    {
      "id": "conditions-else-2",
      "title": "Latihan 2 · Ganjil atau genap",
      "difficulty": "Mudah",
      "task": "Baca integer. Gunakan if...else untuk menampilkan Genap jika angka % 2 == 0, jika tidak Ganjil.",
      "requirements": [
        "Gunakan if dan else.",
        "Gunakan operator %.",
        "Input 8 menghasilkan Genap; input 5 menghasilkan Ganjil."
      ],
      "example": {
        "input": "8",
        "output": "Genap"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int angka;\n    cin >> angka;\n    // TODO: tentukan genap atau ganjil\n    return 0;\n}",
      "tests": [
        {
          "input": "8",
          "expected": "Genap",
          "visible": true
        },
        {
          "input": "5",
          "expected": "Ganjil",
          "visible": true
        }
      ]
    },
    {
      "id": "conditions-else-3",
      "title": "Latihan 3 · Positif atau bukan",
      "difficulty": "Tantangan",
      "task": "Baca integer. Tampilkan Positif jika angka > 0, jika tidak tampilkan Nol atau negatif.",
      "requirements": [
        "Gunakan if...else.",
        "Gunakan angka > 0.",
        "Angka 0 bukan positif."
      ],
      "example": {
        "input": "-3",
        "output": "Nol atau negatif"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int angka;\n    cin >> angka;\n    // TODO: tampilkan Positif atau Nol atau negatif\n    return 0;\n}",
      "tests": [
        {
          "input": "5",
          "expected": "Positif",
          "visible": true
        },
        {
          "input": "0",
          "expected": "Nol atau negatif",
          "visible": true
        },
        {
          "input": "-3",
          "expected": "Nol atau negatif",
          "visible": true
        }
      ]
    }
  ],
  "conditions-elseif": [
    {
      "id": "conditions-elseif-2",
      "title": "Latihan 2 · Kategori umur",
      "difficulty": "Mudah",
      "task": "Baca umur: Anak jika < 13, Remaja jika < 18, dan Dewasa untuk sisanya.",
      "requirements": [
        "Gunakan if, else if, dan else.",
        "Urutkan batas umur.",
        "Umur 15 menghasilkan Remaja."
      ],
      "example": {
        "input": "15",
        "output": "Remaja"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int umur;\n    cin >> umur;\n    // TODO: kategori umur dengan if...else if...else\n    return 0;\n}",
      "tests": [
        {
          "input": "10",
          "expected": "Anak",
          "visible": true
        },
        {
          "input": "15",
          "expected": "Remaja",
          "visible": true
        },
        {
          "input": "20",
          "expected": "Dewasa",
          "visible": true
        }
      ]
    },
    {
      "id": "conditions-elseif-3",
      "title": "Latihan 3 · Tarif tiket",
      "difficulty": "Tantangan",
      "task": "Baca umur: tarif 10000 jika umur < 12, 15000 jika umur < 18, dan 25000 untuk sisanya.",
      "requirements": [
        "Gunakan if...else if...else.",
        "Urutkan batas umur.",
        "Umur 16 menghasilkan 15000."
      ],
      "example": {
        "input": "16",
        "output": "15000"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int umur;\n    cin >> umur;\n    // TODO: tentukan tarif tiket dengan if...else if...else\n    return 0;\n}",
      "tests": [
        {
          "input": "8",
          "expected": "10000",
          "visible": true
        },
        {
          "input": "16",
          "expected": "15000",
          "visible": true
        },
        {
          "input": "25",
          "expected": "25000",
          "visible": true
        }
      ]
    }
  ],
  "conditions-shorthand": [
    {
      "id": "conditions-shorthand-2",
      "title": "Latihan 2 · Genap atau ganjil",
      "difficulty": "Mudah",
      "task": "Baca integer dan gunakan ternary untuk menampilkan Genap atau Ganjil.",
      "requirements": [
        "Gunakan ?: tanpa if...else.",
        "Gunakan angka % 2 == 0.",
        "Input 9 menghasilkan Ganjil."
      ],
      "example": {
        "input": "9",
        "output": "Ganjil"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int angka;\n    cin >> angka;\n    // TODO: pilih Genap atau Ganjil dengan ternary\n    return 0;\n}",
      "tests": [
        {
          "input": "8",
          "expected": "Genap",
          "visible": true
        },
        {
          "input": "9",
          "expected": "Ganjil",
          "visible": true
        }
      ]
    },
    {
      "id": "conditions-shorthand-3",
      "title": "Latihan 3 · Nilai terbesar",
      "difficulty": "Tantangan",
      "task": "Baca dua integer a dan b. Gunakan ternary untuk menampilkan nilai yang lebih besar; jika sama tampilkan a.",
      "requirements": [
        "Gunakan ?: untuk memilih nilai.",
        "Baca dua integer.",
        "Input 8 12 menghasilkan 12; input 5 5 menghasilkan 5."
      ],
      "example": {
        "input": "8 12",
        "output": "12"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    // TODO: pilih nilai terbesar dengan ternary\n    return 0;\n}",
      "tests": [
        {
          "input": "8 12",
          "expected": "12",
          "visible": true
        },
        {
          "input": "5 5",
          "expected": "5",
          "visible": true
        }
      ]
    }
  ],
  "conditions-nested": [
    {
      "id": "conditions-nested-2",
      "title": "Latihan 2 · Diskon member",
      "difficulty": "Mudah",
      "task": "Baca total belanja dan status member (1 member). Jika total >= 100000 gunakan nested if: member mendapat Diskon 20%, bukan member Diskon 10%. Jika kurang, Tanpa diskon.",
      "requirements": [
        "Gunakan nested if untuk memeriksa member setelah total belanja memenuhi syarat.",
        "Tangani tiga kondisi.",
        "Input 120000 1 menghasilkan Diskon 20%."
      ],
      "example": {
        "input": "120000 1",
        "output": "Diskon 20%"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int total, member;\n    cin >> total >> member;\n    // TODO: gunakan nested if untuk menentukan diskon\n    return 0;\n}",
      "tests": [
        {
          "input": "120000 1",
          "expected": "Diskon 20%",
          "visible": true
        },
        {
          "input": "120000 0",
          "expected": "Diskon 10%",
          "visible": true
        },
        {
          "input": "50000 1",
          "expected": "Tanpa diskon",
          "visible": true
        }
      ]
    },
    {
      "id": "conditions-nested-3",
      "title": "Latihan 3 · Akses ruang lab",
      "difficulty": "Tantangan",
      "task": "Baca umur dan peran (1 guru, 0 siswa). Guru mendapat Akses penuh. Jika siswa, nested if memeriksa umur >= 13 untuk Akses siswa; selain itu Ditolak.",
      "requirements": [
        "Periksa peran dengan if luar.",
        "Gunakan nested if untuk usia siswa.",
        "Uji guru, siswa cukup umur, dan siswa belum cukup umur."
      ],
      "example": {
        "input": "15 0",
        "output": "Akses siswa"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int umur, guru;\n    cin >> umur >> guru;\n    // TODO: guru akses penuh; periksa umur siswa dengan nested if\n    return 0;\n}",
      "tests": [
        {
          "input": "30 1",
          "expected": "Akses penuh",
          "visible": true
        },
        {
          "input": "15 0",
          "expected": "Akses siswa",
          "visible": true
        },
        {
          "input": "10 0",
          "expected": "Ditolak",
          "visible": true
        }
      ]
    }
  ],
  "conditions-logical": [
    {
      "id": "conditions-logical-2",
      "title": "Latihan 2 · Akses perpustakaan",
      "difficulty": "Mudah",
      "task": "Baca umur dan punyaKartu. Tampilkan Diizinkan hanya jika umur >= 12 dan punya kartu; jika tidak Ditolak.",
      "requirements": [
        "Gabungkan dua syarat dengan &&.",
        "Gunakan if...else.",
        "Input 12 1 menghasilkan Diizinkan."
      ],
      "example": {
        "input": "12 1",
        "output": "Diizinkan"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int umur, punyaKartu;\n    cin >> umur >> punyaKartu;\n    // TODO: periksa umur dan kartu dengan &&\n    return 0;\n}",
      "tests": [
        {
          "input": "12 1",
          "expected": "Diizinkan",
          "visible": true
        },
        {
          "input": "15 0",
          "expected": "Ditolak",
          "visible": true
        },
        {
          "input": "10 1",
          "expected": "Ditolak",
          "visible": true
        }
      ]
    },
    {
      "id": "conditions-logical-3",
      "title": "Latihan 3 · Beasiswa",
      "difficulty": "Tantangan",
      "task": "Baca nilai dan pendapatan (juta). Tampilkan Beasiswa jika (nilai >= 90 dan pendapatan <= 4) atau nilai >= 95. Selain itu Belum memenuhi syarat.",
      "requirements": [
        "Gunakan && dan ||.",
        "Gunakan kondisi (nilai >= 90 && pendapatan <= 4) || nilai >= 95.",
        "Uji ketiga kemungkinan."
      ],
      "example": {
        "input": "92 3",
        "output": "Beasiswa"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nilai, pendapatan;\n    cin >> nilai >> pendapatan;\n    // TODO: periksa (nilai >= 90 && pendapatan <= 4) || nilai >= 95\n    return 0;\n}",
      "tests": [
        {
          "input": "92 3",
          "expected": "Beasiswa",
          "visible": true
        },
        {
          "input": "96 8",
          "expected": "Beasiswa",
          "visible": true
        },
        {
          "input": "88 2",
          "expected": "Belum memenuhi syarat",
          "visible": true
        }
      ]
    }
  ],
  "switch-statement": [
    {
      "id": "switch-statement-2",
      "title": "Latihan 2 · Menu minuman",
      "difficulty": "Mudah",
      "task": "Baca pilihan 1, 2, atau 3. Gunakan switch untuk menampilkan Air jika 1, Teh jika 2, Kopi jika 3, atau Menu tidak tersedia untuk pilihan lain.",
      "requirements": [
        "Gunakan switch, case, break, dan default.",
        "Tangani pilihan di luar 1 sampai 3.",
        "Input 2 menghasilkan Teh."
      ],
      "example": {
        "input": "2",
        "output": "Teh"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int pilihan;\n    cin >> pilihan;\n    // TODO: tampilkan minuman dengan switch\n    return 0;\n}",
      "tests": [
        {
          "input": "1",
          "expected": "Air",
          "visible": true
        },
        {
          "input": "2",
          "expected": "Teh",
          "visible": true
        },
        {
          "input": "3",
          "expected": "Kopi",
          "visible": true
        },
        {
          "input": "8",
          "expected": "Menu tidak tersedia",
          "visible": true
        }
      ]
    },
    {
      "id": "switch-statement-3",
      "title": "Latihan 3 · Operasi sederhana",
      "difficulty": "Tantangan",
      "task": "Baca operator karakter (+ atau -) lalu dua integer. Gunakan switch untuk menampilkan hasil penjumlahan atau pengurangan sesuai operator. Untuk operator lain tampilkan Operator tidak dikenal.",
      "requirements": [
        "Baca char operatorPilihan dan dua integer.",
        "Gunakan switch untuk case '+' dan '-'.",
        "Input + 8 3 menghasilkan 11; input - 8 3 menghasilkan 5."
      ],
      "example": {
        "input": "+ 8 3",
        "output": "11"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char operatorPilihan;\n    int a, b;\n    cin >> operatorPilihan >> a >> b;\n    // TODO: gunakan switch untuk + dan -\n    return 0;\n}",
      "tests": [
        {
          "input": "+ 8 3",
          "expected": "11",
          "visible": true
        },
        {
          "input": "- 8 3",
          "expected": "5",
          "visible": true
        },
        {
          "input": "* 8 3",
          "expected": "Operator tidak dikenal",
          "visible": true
        }
      ]
    }
  ],
  "while-loop": [
    {
      "id": "while-loop-2",
      "title": "Latihan 2 · Hitung mundur",
      "difficulty": "Mudah",
      "task": "Gunakan while untuk menampilkan angka 5, 4, 3, 2, 1 dengan pemisah satu spasi.",
      "requirements": [
        "Gunakan while, bukan for.",
        "Mulai dari 5 dan ulangi selama angka >= 1.",
        "Kurangi angka setiap putaran."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "5 4 3 2 1"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int angka = 5;\n    // TODO: gunakan while untuk hitung mundur dari 5 sampai 1\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "5 4 3 2 1",
          "visible": true
        }
      ]
    },
    {
      "id": "while-loop-3",
      "title": "Latihan 3 · Jumlah bilangan genap",
      "difficulty": "Tantangan",
      "task": "Gunakan while untuk menjumlahkan bilangan genap 2, 4, 6, 8, dan 10. Tampilkan totalnya.",
      "requirements": [
        "Mulai angka dari 2 dan gunakan while hingga angka <= 10.",
        "Tambahkan angka ke total setiap putaran.",
        "Tambahkan angka sebesar 2; output totalnya 30."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "30"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int angka = 2;\n    int total = 0;\n    // TODO: jumlahkan bilangan genap sampai 10 menggunakan while\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "30",
          "visible": true
        }
      ]
    }
  ],
  "do-while-loop": [
    {
      "id": "do-while-loop-2",
      "title": "Latihan 2 · Jalankan minimal sekali",
      "difficulty": "Mudah",
      "task": "Gunakan do...while untuk mencetak angka 1 sekali. Buat kondisi loop angka < 1 agar setelah putaran pertama loop berhenti.",
      "requirements": [
        "Gunakan do...while.",
        "Cetak angka sebelum kondisi diperiksa.",
        "Output tetap harus 1 meskipun kondisi angka < 1 false."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "1"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int angka = 1;\n    // TODO: cetak sekali menggunakan do...while dengan kondisi angka < 1\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "1",
          "visible": true
        }
      ]
    },
    {
      "id": "do-while-loop-3",
      "title": "Latihan 3 · Ulangi tiga kali",
      "difficulty": "Tantangan",
      "task": "Gunakan do...while untuk menampilkan teks Ulangi sebanyak tiga kali, masing-masing pada baris baru.",
      "requirements": [
        "Gunakan do...while.",
        "Tambah penghitung setiap putaran.",
        "Output terdiri dari tiga baris berisi Ulangi."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Ulangi\nUlangi\nUlangi"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int hitung = 1;\n    // TODO: tampilkan Ulangi tiga kali dengan do...while\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Ulangi\nUlangi\nUlangi",
          "visible": true
        }
      ]
    }
  ],
  "for-loop": [
    {
      "id": "for-loop-2",
      "title": "Latihan 2 · Bilangan ganjil",
      "difficulty": "Mudah",
      "task": "Gunakan for untuk menampilkan bilangan ganjil dari 1 sampai 9, dipisahkan satu spasi.",
      "requirements": [
        "Gunakan perulangan for.",
        "Mulai dari 1, berhenti di 9, dan tambahkan 2 setiap putaran.",
        "Output harus tepat: 1 3 5 7 9."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "1 3 5 7 9"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: gunakan for untuk menampilkan 1, 3, 5, 7, 9\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "1 3 5 7 9",
          "visible": true
        }
      ]
    },
    {
      "id": "for-loop-3",
      "title": "Latihan 3 · Faktorial sederhana",
      "difficulty": "Tantangan",
      "task": "Gunakan for untuk menghitung faktorial 5 (1 × 2 × 3 × 4 × 5) lalu tampilkan hasilnya.",
      "requirements": [
        "Mulai variabel hasil dari 1.",
        "Gunakan for untuk mengalikan hasil dengan angka 1 sampai 5.",
        "Output harus tepat: 120."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "120"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int hasil = 1;\n    // TODO: hitung faktorial 5 menggunakan for\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "120",
          "visible": true
        }
      ]
    }
  ],
  "nested-for-loop": [
    {
      "id": "nested-for-loop-2",
      "title": "Latihan 2 · Segitiga bintang",
      "difficulty": "Mudah",
      "task": "Gunakan nested for untuk mencetak pola tiga baris: *, **, dan ***.",
      "requirements": [
        "Gunakan for di dalam for.",
        "Jumlah bintang per baris sama dengan nomor baris.",
        "Cetak newline setelah setiap baris."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "*\n**\n***"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: cetak segitiga bintang dengan nested for\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "*\n**\n***",
          "visible": true
        }
      ]
    },
    {
      "id": "nested-for-loop-3",
      "title": "Latihan 3 · Tabel perkalian",
      "difficulty": "Tantangan",
      "task": "Gunakan nested for untuk mencetak tabel perkalian 1 sampai 3. Setiap baris menampilkan tiga hasil perkalian yang dipisahkan spasi.",
      "requirements": [
        "Gunakan dua perulangan for.",
        "Loop luar mengatur angka 1 sampai 3 dan loop dalam mengalikan dengan 1 sampai 3.",
        "Output tiga baris: 1 2 3, 2 4 6, dan 3 6 9."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "1 2 3\n2 4 6\n3 6 9"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: cetak tabel perkalian 1 sampai 3 dengan nested for\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "1 2 3\n2 4 6\n3 6 9",
          "visible": true
        }
      ]
    }
  ],
  "range-based-for-loop": [
    {
      "id": "range-based-for-loop-2",
      "title": "Latihan 2 · Tampilkan array",
      "difficulty": "Mudah",
      "task": "Gunakan range-based for untuk menampilkan setiap angka pada array {3, 6, 9}, dipisahkan satu spasi.",
      "requirements": [
        "Gunakan sintaks for (int angka : data).",
        "Jangan memakai indeks manual.",
        "Output harus tepat: 3 6 9."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "3 6 9"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int data[] = {3, 6, 9};\n    // TODO: tampilkan elemen array dengan range-based for\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "3 6 9",
          "visible": true
        }
      ]
    },
    {
      "id": "range-based-for-loop-3",
      "title": "Latihan 3 · Hitung nilai lebih dari lima",
      "difficulty": "Tantangan",
      "task": "Gunakan range-based for untuk menghitung berapa elemen array {2, 7, 4, 9, 1, 8} yang lebih besar dari 5.",
      "requirements": [
        "Gunakan range-based for tanpa indeks manual.",
        "Tambahkan penghitung jika angka > 5.",
        "Output harus tepat: 3."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "3"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int data[] = {2, 7, 4, 9, 1, 8};\n    int jumlah = 0;\n    // TODO: hitung elemen yang lebih besar dari 5\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "3",
          "visible": true
        }
      ]
    }
  ],
  "break-statement": [
    {
      "id": "break-statement-2",
      "title": "Latihan 2 · Cari angka 4",
      "difficulty": "Mudah",
      "task": "Gunakan for dari 1 sampai 8. Jika angka sama dengan 4, hentikan loop dengan break; tampilkan angka sebelumnya saja.",
      "requirements": [
        "Gunakan for dan break.",
        "Periksa angka == 4 sebelum cout agar angka 4 tidak tercetak.",
        "Output harus tepat: 1 2 3."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "1 2 3"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: cetak 1 sampai 8, tetapi break saat angka == 4\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "1 2 3",
          "visible": true
        }
      ]
    },
    {
      "id": "break-statement-3",
      "title": "Latihan 3 · Hentikan saat total tercapai",
      "difficulty": "Tantangan",
      "task": "Tambahkan angka mulai dari 1 ke variabel total. Hentikan loop saat total >= 10 menggunakan break, lalu tampilkan total.",
      "requirements": [
        "Gunakan while atau for dan break.",
        "Tambahkan angka ke total dalam setiap putaran.",
        "Loop berhenti saat total mencapai 10; output harus tepat: 10."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "10"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int angka = 1;\n    int total = 0;\n    // TODO: tambahkan angka sampai total >= 10, lalu break\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "10",
          "visible": true
        }
      ]
    }
  ],
  "arrays": [
    {
      "id": "arrays-2",
      "title": "Latihan 2 · Ubah elemen array",
      "difficulty": "Mudah",
      "task": "Buat array int nilai berisi {10, 20, 30}. Ubah elemen kedua menjadi 25, lalu tampilkan ketiga elemen.",
      "requirements": [
        "Gunakan array bernama nilai.",
        "Perbarui elemen kedua menggunakan indeks 1.",
        "Output harus tepat: 10 25 30."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "10 25 30"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nilai[] = {10, 20, 30};\n    // TODO: ubah elemen kedua menjadi 25 dan tampilkan semua elemen\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "10 25 30",
          "visible": true
        }
      ]
    },
    {
      "id": "arrays-3",
      "title": "Latihan 3 · Tampilkan terbalik",
      "difficulty": "Tantangan",
      "task": "Buat array int data berisi {3, 6, 9, 12}. Gunakan indeks untuk menampilkan elemennya dari belakang ke depan.",
      "requirements": [
        "Gunakan array berisi empat elemen.",
        "Mulai dari indeks terakhir dan bergerak menuju indeks 0.",
        "Output harus tepat: 12 9 6 3."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "12 9 6 3"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int data[] = {3, 6, 9, 12};\n    // TODO: gunakan for untuk menampilkan array dari belakang ke depan\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "12 9 6 3",
          "visible": true
        }
      ]
    }
  ],
  "arrays-loop": [
    {
      "id": "arrays-loop-2",
      "title": "Latihan 2 · Jumlah array",
      "difficulty": "Mudah",
      "task": "Gunakan for untuk menjumlahkan array {3, 5, 7}. Tampilkan jumlahnya.",
      "requirements": [
        "Gunakan loop for untuk mengunjungi elemen array.",
        "Tambahkan setiap elemen ke variabel total.",
        "Output harus tepat: 15."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "15"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int data[] = {3, 5, 7};\n    int total = 0;\n    // TODO: jumlahkan semua elemen dengan loop for\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "15",
          "visible": true
        }
      ]
    },
    {
      "id": "arrays-loop-3",
      "title": "Latihan 3 · Hitung nilai tinggi",
      "difficulty": "Tantangan",
      "task": "Gunakan for untuk menghitung berapa elemen array {60, 85, 90, 70, 95} yang >= 80.",
      "requirements": [
        "Gunakan loop untuk memeriksa setiap elemen.",
        "Tambahkan penghitung jika elemen >= 80.",
        "Output harus tepat: 3."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "3"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nilai[] = {60, 85, 90, 70, 95};\n    int jumlah = 0;\n    // TODO: hitung nilai >= 80 menggunakan for\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "3",
          "visible": true
        }
      ]
    }
  ],
  "arrays-omit": [
    {
      "id": "arrays-omit-2",
      "title": "Latihan 2 · Ukuran otomatis",
      "difficulty": "Mudah",
      "task": "Deklarasikan int data[] dengan nilai {3, 6, 9}. Tampilkan elemen terakhir menggunakan indeks 2.",
      "requirements": [
        "Jangan menulis ukuran eksplisit di dalam kurung siku deklarasi array.",
        "Compiler menyimpulkan jumlah elemen dari initializer.",
        "Output harus tepat: 9."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "9"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan int data[] dengan nilai {3, 6, 9}\n    // TODO: tampilkan elemen indeks 2\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "9",
          "visible": true
        }
      ]
    },
    {
      "id": "arrays-omit-3",
      "title": "Latihan 3 · Cetak array otomatis",
      "difficulty": "Tantangan",
      "task": "Deklarasikan int angka[] dengan nilai {1, 4, 7, 10}. Gunakan range-based for untuk menampilkan setiap elemen.",
      "requirements": [
        "Hilangkan angka ukuran dalam tanda kurung siku deklarasi array.",
        "Gunakan range-based for: for (int n : angka).",
        "Output harus tepat: 1 4 7 10."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "1 4 7 10"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // TODO: deklarasikan int angka[] tanpa ukuran\n    // TODO: tampilkan elemen dengan range-based for\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "1 4 7 10",
          "visible": true
        }
      ]
    }
  ],
  "arrays-size": [
    {
      "id": "arrays-size-2",
      "title": "Latihan 2 · Ukuran empat elemen",
      "difficulty": "Mudah",
      "task": "Buat array char huruf berisi {'A', 'B', 'C', 'D'}. Hitung dan tampilkan jumlah elemennya menggunakan sizeof.",
      "requirements": [
        "Gunakan array char dengan empat elemen.",
        "Gunakan sizeof(huruf) / sizeof(huruf[0]).",
        "Output harus tepat: 4."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "4"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char huruf[] = {'A', 'B', 'C', 'D'};\n    // TODO: hitung jumlah elemen menggunakan sizeof\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "4",
          "visible": true
        }
      ]
    },
    {
      "id": "arrays-size-3",
      "title": "Latihan 3 · Jumlah dan rata-rata",
      "difficulty": "Tantangan",
      "task": "Gunakan array int nilai berisi {70, 80, 90, 100}. Hitung jumlah elemennya dengan sizeof, jumlahkan semua nilai dengan for, lalu tampilkan jumlah elemen dan rata-ratanya. Rata-rata ditampilkan sebagai bilangan bulat.",
      "requirements": [
        "Hitung jumlah elemen menggunakan sizeof(nilai) / sizeof(nilai[0]).",
        "Gunakan for untuk menghitung total nilai.",
        "Output harus tepat: 4 85."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "4 85"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nilai[] = {70, 80, 90, 100};\n    // TODO: hitung jumlah elemen dengan sizeof\n    // TODO: jumlahkan nilai menggunakan for\n    // TODO: tampilkan jumlah elemen dan rata-rata\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "4 85",
          "visible": true
        }
      ]
    }
  ]
,
  "functions": [
    {
      "id": "functions-2",
      "title": "Latihan 2 · Panggil dua kali",
      "difficulty": "Mudah",
      "task": "Buat fungsi void salam() yang menampilkan Siap belajar C++!. Panggil fungsi tersebut dua kali sehingga teks muncul pada dua baris.",
      "requirements": [
        "Definisikan fungsi void salam().",
        "Panggil salam() sebanyak dua kali.",
        "Output harus dua baris berisi Siap belajar C++!."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Siap belajar C++!\nSiap belajar C++!"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nvoid salam() {\n    // TODO: tampilkan \"Siap belajar C++!\"\n}\n\nint main() {\n    // TODO: panggil salam dua kali\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Siap belajar C++!\nSiap belajar C++!",
          "visible": true
        }
      ]
    },
    {
      "id": "functions-3",
      "title": "Latihan 3 · Urutan dua fungsi",
      "difficulty": "Tantangan",
      "task": "Buat dua fungsi void: tampilkanAwal() mencetak MULAI dan tampilkanAkhir() mencetak SELESAI. Panggil keduanya dengan urutan yang benar.",
      "requirements": [
        "Definisikan kedua fungsi terpisah.",
        "Panggil tampilkanAwal() sebelum tampilkanAkhir().",
        "Output harus dua baris: MULAI lalu SELESAI."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "MULAI\nSELESAI"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nvoid tampilkanAwal() {\n    // TODO: tampilkan MULAI\n}\n\nvoid tampilkanAkhir() {\n    // TODO: tampilkan SELESAI\n}\n\nint main() {\n    // TODO: panggil kedua fungsi dengan urutan yang benar\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "MULAI\nSELESAI",
          "visible": true
        }
      ]
    }
  ],
  "function-param": [
    {
      "id": "function-param-2",
      "title": "Latihan 2 · Salam sesuai nama",
      "difficulty": "Mudah",
      "task": "Buat fungsi void sapa(string nama) yang mencetak Halo, diikuti nama dan tanda seru. Panggil dengan argumen Budi.",
      "requirements": [
        "Fungsi memiliki satu parameter string bernama nama.",
        "Panggil fungsi dengan argumen Budi.",
        "Output harus tepat: Halo, Budi!."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Halo, Budi!"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid sapa(string nama) {\n    // TODO: tampilkan \"Halo, \" + nama + \"!\"\n}\n\nint main() {\n    // TODO: panggil sapa dengan \"Budi\"\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Halo, Budi!",
          "visible": true
        }
      ]
    },
    {
      "id": "function-param-3",
      "title": "Latihan 3 · Jumlah dua bilangan",
      "difficulty": "Tantangan",
      "task": "Buat fungsi void jumlah(int a, int b) yang menampilkan hasil penjumlahan kedua parameter. Panggil dengan 12 dan 13.",
      "requirements": [
        "Gunakan dua parameter int bernama a dan b.",
        "Jumlahkan kedua parameter di dalam fungsi.",
        "Output harus tepat: 25."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "25"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nvoid jumlah(int a, int b) {\n    // TODO: tampilkan a + b\n}\n\nint main() {\n    // TODO: panggil jumlah dengan 12 dan 13\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "25",
          "visible": true
        }
      ]
    }
  ],
  "function-default": [
    {
      "id": "function-default-2",
      "title": "Latihan 2 · Default ongkir",
      "difficulty": "Mudah",
      "task": "Buat fungsi void tampilkanOngkir(int ongkir = 5000) yang menampilkan Ongkir: diikuti nilai ongkir. Panggil tanpa argumen.",
      "requirements": [
        "Parameter ongkir bertipe int dengan default 5000.",
        "Panggil tampilkanOngkir() tanpa argumen.",
        "Output harus tepat: Ongkir: 5000."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Ongkir: 5000"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nvoid tampilkanOngkir(int ongkir = 5000) {\n    // TODO: tampilkan \"Ongkir: \" dan ongkir\n}\n\nint main() {\n    // TODO: panggil tampilkanOngkir tanpa argumen\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Ongkir: 5000",
          "visible": true
        }
      ]
    },
    {
      "id": "function-default-3",
      "title": "Latihan 3 · Default dan pengganti",
      "difficulty": "Tantangan",
      "task": "Buat fungsi void cetakNilai(int nilai, int bonus = 5) yang menampilkan Nilai akhir: lalu hasil nilai + bonus. Panggil dengan 70, lalu dengan 70 dan 10.",
      "requirements": [
        "Parameter bonus bertipe int dan memiliki default 5.",
        "Parameter default berada di posisi paling kanan.",
        "Output dua baris: Nilai akhir: 75 lalu Nilai akhir: 80."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Nilai akhir: 75\nNilai akhir: 80"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nvoid cetakNilai(int nilai, int bonus = 5) {\n    // TODO: tampilkan \"Nilai akhir: \" dan nilai + bonus\n}\n\nint main() {\n    // TODO: panggil dengan 70, lalu 70 dan 10\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Nilai akhir: 75\nNilai akhir: 80",
          "visible": true
        }
      ]
    }
  ],
  "function-multiple": [
    {
      "id": "function-multiple-2",
      "title": "Latihan 2 · Hitung luas",
      "difficulty": "Mudah",
      "task": "Buat fungsi void tampilkanLuas(int panjang, int lebar) yang menampilkan Luas: diikuti perkalian kedua parameter. Panggil dengan 6 dan 5.",
      "requirements": [
        "Gunakan dua parameter int.",
        "Urutan argumen adalah panjang lalu lebar.",
        "Output harus tepat: Luas: 30."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Luas: 30"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nvoid tampilkanLuas(int panjang, int lebar) {\n    // TODO: tampilkan \"Luas: \" dan panjang * lebar\n}\n\nint main() {\n    // TODO: panggil tampilkanLuas dengan 6 dan 5\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Luas: 30",
          "visible": true
        }
      ]
    },
    {
      "id": "function-multiple-3",
      "title": "Latihan 3 · Tiga parameter",
      "difficulty": "Tantangan",
      "task": "Buat fungsi void totalTiga(int a, int b, int c) yang menampilkan jumlah ketiga parameter. Panggil dengan 4, 6, dan 20.",
      "requirements": [
        "Fungsi memiliki tiga parameter int.",
        "Panggil fungsi dengan urutan argumen 4, 6, dan 20.",
        "Output harus tepat: 30."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "30"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nvoid totalTiga(int a, int b, int c) {\n    // TODO: tampilkan a + b + c\n}\n\nint main() {\n    // TODO: panggil totalTiga dengan 4, 6, dan 20\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "30",
          "visible": true
        }
      ]
    }
  ],
  "function-return": [
    {
      "id": "function-return-2",
      "title": "Latihan 2 · Nilai rata-rata",
      "difficulty": "Mudah",
      "task": "Buat fungsi double rataRata(int a, int b) yang mengembalikan rata-rata kedua bilangan. Panggil dengan 6 dan 9 lalu tampilkan Rata-rata: 7.5.",
      "requirements": [
        "Gunakan tipe kembalian double.",
        "Kembalikan (a + b) / 2.0 agar hasil bisa pecahan.",
        "Output harus tepat: Rata-rata: 7.5."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Rata-rata: 7.5"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\ndouble rataRata(int a, int b) {\n    // TODO: return (a + b) / 2.0\n}\n\nint main() {\n    // TODO: tampilkan \"Rata-rata: \" dan hasil rataRata(6, 9)\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Rata-rata: 7.5",
          "visible": true
        }
      ]
    },
    {
      "id": "function-return-3",
      "title": "Latihan 3 · Kembalikan nilai terbesar",
      "difficulty": "Tantangan",
      "task": "Buat fungsi int maksimum(int a, int b) yang mengembalikan bilangan yang lebih besar. Panggil dengan 18 dan 12, lalu tampilkan hasilnya.",
      "requirements": [
        "Fungsi memiliki tipe kembalian int.",
        "Gunakan return untuk mengembalikan nilai yang lebih besar.",
        "Output harus tepat: 18."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "18"
      },
      "starter": "#include <iostream>\nusing namespace std;\n\nint maksimum(int a, int b) {\n    // TODO: return nilai yang lebih besar\n}\n\nint main() {\n    // TODO: tampilkan hasil maksimum(18, 12)\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "18",
          "visible": true
        }
      ]
    }
  ],
  "functions": [
    {
      "id": "functions-2",
      "title": "Latihan 2 · Panggil dua kali",
      "difficulty": "Mudah",
      "task": "Buat fungsi salam() yang mencetak Siap belajar C++! dan panggil dua kali.",
      "requirements": [
        "Definisikan void salam().",
        "Panggil salam() dua kali.",
        "Output dua baris berisi Siap belajar C++!."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Siap belajar C++!\nSiap belajar C++!"
      },
      "starter": "#include <iostream>\nusing namespace std;\nvoid salam() {\n    // TODO: tampilkan salam\n}\nint main() {\n    // TODO: panggil salam dua kali\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Siap belajar C++!\nSiap belajar C++!",
          "visible": true
        }
      ]
    },
    {
      "id": "functions-3",
      "title": "Latihan 3 · Urutan dua fungsi",
      "difficulty": "Tantangan",
      "task": "Buat tampilkanAwal() yang mencetak MULAI dan tampilkanAkhir() yang mencetak SELESAI. Panggil sesuai urutan.",
      "requirements": [
        "Definisikan dua fungsi void terpisah.",
        "Panggil tampilkanAwal() lebih dahulu.",
        "Output dua baris: MULAI lalu SELESAI."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "MULAI\nSELESAI"
      },
      "starter": "#include <iostream>\nusing namespace std;\nvoid tampilkanAwal() {\n    // TODO: cetak MULAI\n}\nvoid tampilkanAkhir() {\n    // TODO: cetak SELESAI\n}\nint main() {\n    // TODO: panggil kedua fungsi\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "MULAI\nSELESAI",
          "visible": true
        }
      ]
    }
  ],
  "function-param": [
    {
      "id": "function-param-2",
      "title": "Latihan 2 · Salam sesuai nama",
      "difficulty": "Mudah",
      "task": "Buat fungsi sapa(string nama) yang mencetak Halo, diikuti nama dan tanda seru. Panggil dengan Budi.",
      "requirements": [
        "Fungsi memiliki parameter string nama.",
        "Kirim argumen Budi.",
        "Output: Halo, Budi!."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Halo, Budi!"
      },
      "starter": "#include <iostream>\n#include <string>\nusing namespace std;\nvoid sapa(string nama) {\n    // TODO: cetak Halo, nama!\n}\nint main() {\n    // TODO: panggil sapa(\"Budi\")\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Halo, Budi!",
          "visible": true
        }
      ]
    },
    {
      "id": "function-param-3",
      "title": "Latihan 3 · Jumlah dua bilangan",
      "difficulty": "Tantangan",
      "task": "Buat jumlah(int a, int b) untuk menampilkan penjumlahan kedua parameter. Panggil dengan 12 dan 13.",
      "requirements": [
        "Gunakan dua parameter int.",
        "Tampilkan a + b dari fungsi.",
        "Output: 25."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "25"
      },
      "starter": "#include <iostream>\nusing namespace std;\nvoid jumlah(int a, int b) {\n    // TODO: tampilkan a + b\n}\nint main() {\n    // TODO: panggil jumlah(12, 13)\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "25",
          "visible": true
        }
      ]
    }
  ],
  "function-default": [
    {
      "id": "function-default-2",
      "title": "Latihan 2 · Default ongkir",
      "difficulty": "Mudah",
      "task": "Buat tampilkanOngkir(int ongkir = 5000) yang menampilkan Ongkir: diikuti nilai ongkir. Panggil tanpa argumen.",
      "requirements": [
        "Parameter ongkir memiliki default 5000.",
        "Panggil tanpa argumen.",
        "Output: Ongkir: 5000."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Ongkir: 5000"
      },
      "starter": "#include <iostream>\nusing namespace std;\nvoid tampilkanOngkir(int ongkir = 5000) {\n    // TODO: cetak Ongkir dan nilainya\n}\nint main() {\n    // TODO: panggil tanpa argumen\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Ongkir: 5000",
          "visible": true
        }
      ]
    },
    {
      "id": "function-default-3",
      "title": "Latihan 3 · Default dan pengganti",
      "difficulty": "Tantangan",
      "task": "Buat cetakNilai(int nilai, int bonus = 5). Cetak nilai akhir, lalu panggil dengan 70 dan dengan 70 serta 10.",
      "requirements": [
        "Parameter bonus memiliki default 5 dan berada di kanan.",
        "Cetak nilai + bonus.",
        "Output dua baris: Nilai akhir: 75 lalu Nilai akhir: 80."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Nilai akhir: 75\nNilai akhir: 80"
      },
      "starter": "#include <iostream>\nusing namespace std;\nvoid cetakNilai(int nilai, int bonus = 5) {\n    // TODO: cetak Nilai akhir: dan nilai + bonus\n}\nint main() {\n    // TODO: panggil cetakNilai(70) lalu cetakNilai(70, 10)\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Nilai akhir: 75\nNilai akhir: 80",
          "visible": true
        }
      ]
    }
  ],
  "function-multiple": [
    {
      "id": "function-multiple-2",
      "title": "Latihan 2 · Hitung luas",
      "difficulty": "Mudah",
      "task": "Buat tampilkanLuas(int panjang, int lebar) yang menampilkan luas. Panggil dengan 6 dan 5.",
      "requirements": [
        "Gunakan dua parameter int.",
        "Hitung panjang * lebar.",
        "Output: Luas: 30."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Luas: 30"
      },
      "starter": "#include <iostream>\nusing namespace std;\nvoid tampilkanLuas(int panjang, int lebar) {\n    // TODO: cetak luas persegi panjang\n}\nint main() {\n    // TODO: panggil tampilkanLuas(6, 5)\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Luas: 30",
          "visible": true
        }
      ]
    },
    {
      "id": "function-multiple-3",
      "title": "Latihan 3 · Tiga parameter",
      "difficulty": "Tantangan",
      "task": "Buat totalTiga(int a, int b, int c) untuk mencetak jumlah ketiganya. Panggil dengan 4, 6, dan 20.",
      "requirements": [
        "Fungsi memiliki tiga parameter int.",
        "Jumlahkan semua parameter.",
        "Output: 30."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "30"
      },
      "starter": "#include <iostream>\nusing namespace std;\nvoid totalTiga(int a, int b, int c) {\n    // TODO: cetak a + b + c\n}\nint main() {\n    // TODO: panggil totalTiga(4, 6, 20)\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "30",
          "visible": true
        }
      ]
    }
  ],
  "function-return": [
    {
      "id": "function-return-2",
      "title": "Latihan 2 · Nilai rata-rata",
      "difficulty": "Mudah",
      "task": "Buat double rataRata(int a, int b) yang mengembalikan rata-rata. Panggil dengan 6 dan 9 lalu cetak Rata-rata: 7.5.",
      "requirements": [
        "Tipe kembalian double.",
        "Gunakan return (a + b) / 2.0.",
        "Output: Rata-rata: 7.5."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "Rata-rata: 7.5"
      },
      "starter": "#include <iostream>\nusing namespace std;\ndouble rataRata(int a, int b) {\n    // TODO: return (a + b) / 2.0\n}\nint main() {\n    // TODO: cetak hasil rataRata(6, 9)\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "Rata-rata: 7.5",
          "visible": true
        }
      ]
    },
    {
      "id": "function-return-3",
      "title": "Latihan 3 · Nilai terbesar",
      "difficulty": "Tantangan",
      "task": "Buat int maksimum(int a, int b) yang mengembalikan bilangan lebih besar. Panggil dengan 18 dan 12 lalu tampilkan hasilnya.",
      "requirements": [
        "Tipe kembalian int.",
        "Gunakan return untuk nilai terbesar.",
        "Output: 18."
      ],
      "example": {
        "input": "(tidak ada input)",
        "output": "18"
      },
      "starter": "#include <iostream>\nusing namespace std;\nint maksimum(int a, int b) {\n    // TODO: return nilai yang lebih besar\n}\nint main() {\n    // TODO: tampilkan maksimum(18, 12)\n    return 0;\n}",
      "tests": [
        {
          "input": "",
          "expected": "18",
          "visible": true
        }
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
