# CodeLab C++ — ICT Playground

Playground C++ statis untuk belajar pemrograman langsung di browser. Kode C++ dikompilasi menjadi WebAssembly menggunakan proyek open-source [browsercc](https://github.com/BertalanD/browsercc), tanpa backend compiler milik sendiri.

## Deploy di GitHub Pages

Website ini ditujukan untuk GitHub Pages:

**https://imamsaa.github.io/codelab-cpp/**

Di **Settings → Pages**, pilih **Deploy from a branch**, branch \`main\`, folder \`/(root)\`, lalu tekan **Save**. Pastikan deployment selesai di tab **Actions** sebelum menguji website.

File \`index.html\`, \`app.js\`, \`compiler-worker.js\`, dan \`coi-serviceworker.min.js\` harus berada di root repository. Website statis ini tidak membutuhkan \`npm install\`, build step, API key, database, atau backend.

## Cara menggunakan

- Tulis kode di editor. Editor teks langsung ditampilkan agar tetap bisa digunakan saat library syntax highlighting sedang dimuat; jika CodeMirror gagal dimuat, editor teks cadangan tetap tersedia.
- Pilih standar C++17, C++20, C++14, atau C++11.
- Klik **Jalankan** atau tekan **Ctrl + Enter**.
- Jika program membaca \`cin\`, terminal menerima input saat program berjalan. Ketik satu baris, lalu tekan **Enter** atau **Kirim**. Kamu bisa mengirim lebih dari satu baris selama program meminta input.
- Tombol **EOF** menutup input standar; tombol **Stop** menghentikan proses kompilasi atau eksekusi.
- Gunakan **Buka .cpp** dan **Unduh kode** untuk membuka atau menyimpan file.
- Jika browser tidak mengaktifkan cross-origin isolation, website beralih ke mode stdin cadangan: isi kotak input sebelum menekan Jalankan.

## Cara kerja dan batasan

- Compiler Clang/LLD WebAssembly dimuat saat runtime dari CDN publik. Penggunaan pertama dapat mengunduh aset besar (compiler, linker, dan sysroot berukuran sekitar 95 MB sebelum kompresi/cache menurut dokumentasi browsercc).
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
