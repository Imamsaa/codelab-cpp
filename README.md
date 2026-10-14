# C++ Playground

Playground C++ statis untuk belajar pemrograman langsung di browser. Kode C++ dikompilasi menjadi WebAssembly menggunakan proyek open-source [browsercc](https://github.com/BertalanD/browsercc), tanpa backend compiler milik sendiri.

## Deploy di GitHub Pages

Website ini ditujukan untuk GitHub Pages:

**https://imamsaa.github.io/codelab-cpp/**

Di **Settings → Pages**, pilih **Deploy from a branch**, branch \`main\`, folder \`/(root)\`, lalu tekan **Save**. Pastikan deployment selesai di tab **Actions** sebelum menguji website.

File \`index.html\`, \`app.js\`, \`compiler-worker.js\`, dan \`coi-serviceworker.min.js\` harus berada di root repository. Website statis ini tidak membutuhkan \`npm install\`, build step, API key, database, atau backend.

Antarmuka menggunakan branding netral agar fokus utama tetap pada editor kode.

## Menyiapkan mode offline

1. Buka C++ Playground melalui GitHub Pages saat internet masih tersedia.
2. Tunggu halaman selesai memuat editor. Pastikan Service Worker sudah mengendalikan halaman.
3. Klik **Siapkan C++ Playground untuk Offline**. Proses mengunduh aset compiler (sekitar 95 MB) dan memuat dependensi editor/runtime yang digunakan aplikasi.
4. Tunggu hingga status berubah menjadi **C++ Playground siap digunakan offline**. Persiapan belum dianggap selesai bila ada berkas atau dependensi yang gagal disimpan.
5. Matikan internet lalu muat ulang alamat C++ Playground untuk menguji mode offline.

Tombol ini menggunakan Cache Storage untuk menyimpan aset compiler, modul editor/runtime dari CDN, dan file aplikasi lokal. Browser dapat menghapus data situs secara otomatis saat ruang penyimpanan terbatas; bila itu terjadi, sambungkan internet lalu siapkan ulang mode offline.

## Materi dan latihan otomatis

Buka **Materi** di header playground atau langsung ke:

**https://imamsaa.github.io/codelab-cpp/materi.html**

Halaman materi menyediakan penjelasan dalam bahasa Indonesia, contoh input/output, dan playground untuk topik praktik. Materi pertama, **Pengenalan C++**, adalah materi baca saja tanpa editor tantangan. Setiap topik praktik memiliki **tiga latihan bertahap** (dasar, mudah, tantangan); masing-masing latihan mempunyai kode awal, test case, tombol **Periksa Jawaban**, serta penyimpanan kode dan progres yang terpisah.

Halaman materi saat ini berisi enam topik: Pengenalan C++ (baca saja), Sintaks Dasar C++, Statement dalam C++, Menampilkan Teks dengan cout, Menampilkan Angka, dan Membuat Baris Baru. Lima topik praktik memiliki total 15 latihan. Satu topik ditandai selesai jika semua tiga latihannya berhasil; progres dan kode setiap latihan disimpan terpisah di browser.

Penilaian ini berjalan di sisi browser dan cocok untuk latihan pembelajaran. Karena situs sepenuhnya statis, jangan gunakan test case tersembunyi untuk penilaian berisiko tinggi: kode dan data test pada JavaScript yang dikirim ke browser tidak dapat dirahasiakan dari pengguna yang memeriksa source.

## Cara menggunakan

- Tulis kode di editor. Editor teks langsung ditampilkan agar tetap bisa digunakan saat library syntax highlighting sedang dimuat; jika CodeMirror gagal dimuat, editor teks cadangan tetap tersedia.
- **Tab / Shift + Tab** menambah atau mengurangi indentasi pada editor. Pada editor utama, indentasi dikelola oleh CodeMirror; editor teks cadangan juga mendukung Tab.
- **Autocomplete** memberi saran keyword, tipe data, fungsi umum, library, dan snippet C++ seperti kerangka `main`, `if`, `for`, `while`, `cout`, dan `cin`. Gunakan `Ctrl + Space` untuk membuka saran secara manual.
- Klik **Format** atau tekan **Shift + Alt + F** untuk merapikan kode C++ dengan `clang-format` WebAssembly (format Google dengan indentasi 4 spasi). Formatter dimuat saat pertama kali digunakan dan ikut disiapkan ketika menyiapkan mode offline.
- Pilih standar C++17, C++20, C++14, atau C++11.
- Klik **Jalankan** atau tekan **Ctrl + Enter**.
- Jika program membaca `cin`, terminal menerima input saat program berjalan. Ketik satu baris, lalu tekan **Enter** atau **Kirim**. Kamu bisa mengirim lebih dari satu baris selama program meminta input.
- Tombol **EOF** menutup input standar; tombol **Stop** menghentikan proses kompilasi atau eksekusi.
- Gunakan **Buka.cpp** dan **Unduh kode** untuk membuka atau menyimpan file.
- Jika browser tidak mengaktifkan cross-origin isolation, website beralih ke mode stdin cadangan: isi input sebelum menekan Jalankan.
## Cara kerja dan batasan

- Compiler Clang/LLD WebAssembly dimuat saat runtime dari CDN publik. Tombol **Siapkan C++ Playground untuk Offline** mengunduh dan menyimpan `index.js`, `clang.js`, `lld.js`, `clang.wasm`, `lld.wasm`, dan `sysroot.tar`, lalu memuat modul editor/runtime agar tersimpan dalam cache. Ukuran aset compiler besar sekitar 95 MB sebelum kompresi/cache menurut dokumentasi browsercc.
- Persiapan offline juga memuat modul `@wasm-fmt/clang-format` dan file WASM formatter untuk mendukung tombol Format ketika internet mati. Formatter menambah unduhan awal di luar ukuran compiler C++ sekitar 95 MB.
- Progress bar memperkirakan progres berdasarkan ukuran aset compiler dan memiliki tahap terpisah untuk memuat dependensi serta memverifikasi mode offline. Status **C++ Playground siap digunakan offline** baru ditampilkan jika aset compiler, file aplikasi, editor, runtime WASI, dan Service Worker terdeteksi.
- Aset eksternal disimpan di Cache Storage oleh Service Worker. Uji offline sebenarnya dengan mematikan koneksi dan memuat ulang situs setelah status siap. Browser dapat membersihkan cache situs; mode offline tidak dapat dijamin jika data tersebut dihapus.
- \`coi-serviceworker.min.js\` membantu mengaktifkan \`SharedArrayBuffer\` pada static hosting yang tidak menyediakan header COOP/COEP langsung. Browser harus mengizinkan Service Worker. Saat pertama kali membuka website, halaman dapat memuat ulang sekali untuk mengaktifkan mode tersebut.
- Pada mode interaktif, antrean input dibagikan antara halaman dan Worker. Program dapat berhenti menunggu \`cin\` sementara pengguna mengetik di terminal, sedangkan stdout/stderr dikirim ke terminal saat diproduksi.
- Kode C++ dijalankan dalam sandbox WebAssembly di browser. Kode program tidak dikirim ke backend milik pemilik website, tetapi compiler dan dependensi diunduh dari CDN pihak ketiga.
- Ini bukan lingkungan Linux/Windows native. Akses jaringan dan sistem file permanen dibatasi. Konfigurasi compiler memakai \`-fno-exceptions\`, sehingga kode yang membutuhkan exception C++ tidak didukung. Threading juga tidak didukung oleh konfigurasi browsercc ini.
- Program yang berjalan tanpa henti dibatasi oleh watchdog pada halaman. Menekan **Stop** akan menghentikan Worker.

## Dependensi dan atribusi

- [browsercc](https://github.com/BertalanD/browsercc) — compiler Clang/LLD WebAssembly, MIT.
- [browser_wasi_shim](https://github.com/bjorn3/browser_wasi_shim) — WASI runtime untuk browser, dual MIT/Apache-2.0.
- [CodeMirror](https://codemirror.net/) — editor kode, MIT.
- [coi-serviceworker](https://github.com/gzuidhof/coi-serviceworker) — workaround COOP/COEP untuk static hosting, MIT.
- [esm.sh](https://esm.sh/) dan [jsDelivr](https://www.jsdelivr.com/) — CDN dependensi.

Silakan modifikasi UI dan materi contoh sesuai kebutuhan kelas ICT. Ikuti lisensi masing-masing dependensi.
