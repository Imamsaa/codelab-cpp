# CodeLab C++ — ICT Playground

Playground C++ statis untuk di-host di GitHub Pages. Kode C++ dikompilasi menjadi WebAssembly di browser memakai proyek open-source [`browsercc`](https://github.com/BertalanD/browsercc); tidak perlu membuat backend/API compiler sendiri.

## Deploy ke GitHub Pages

1. Buat repository GitHub baru, misalnya `ict-cpp-playground`.
2. Upload semua file dan struktur folder dari paket ini ke **root** repository. Minimal: `index.html`, `app.js`, dan `compiler-worker.js`.
3. Di repository GitHub, buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu tekan **Save**.
5. Tunggu sampai deployment selesai, lalu buka alamat Pages yang diberikan GitHub.

Tidak dibutuhkan `npm install`, build step, server, database, maupun API key. Jangan buka `index.html` dengan `file://`; uji melalui GitHub Pages atau server HTTP lokal.

## Cara menggunakan

- Tulis C++ di editor, atau klik **Buka .cpp** untuk membuka file.
- Pilih standar C++17/C++20/C++14/C++11.
- Jika program memakai `cin`, isi panel **Input program (stdin)** sebelum menekan **Jalankan**. Input diberikan sebagai stream dari awal program; input interaktif yang menunggu ketikan di tengah eksekusi belum didukung.
- Tekan **Ctrl + Enter** untuk menjalankan.
- Klik **Unduh kode** untuk menyimpan kode sebagai `main.cpp`.

## Catatan penting

- Halaman ini hanya membutuhkan hosting statis, tetapi compiler toolchain dimuat dari CDN jsDelivr saat runtime. Penggunaan pertama dapat mengunduh aset berukuran puluhan MB (paket browsercc mencantumkan compiler/linker/sysroot sekitar 95 MB sebelum memperhitungkan kompresi/cache).
- Koneksi internet diperlukan saat aset compiler dan library CDN belum tersedia di cache. Setelah itu, beberapa aset dapat tersimpan dalam cache browser; jangan menganggap aplikasi sepenuhnya offline.
- Karena source code dan runtime dijalankan di browser, aplikasi tidak memerlukan akun server atau backend compiler milik kita. File `main.cpp` tidak dikirim ke backend milik pemilik website, tetapi kode compiler dan library dimuat dari CDN pihak ketiga.
- Ini bukan lingkungan Linux/Windows native. Akses jaringan, file sistem permanen, thread dan fitur tertentu dibatasi. Konfigurasi compiler saat ini memakai `-fno-exceptions`; kode yang memerlukan exception C++ tidak didukung dengan konfigurasi tersebut.
- Uji program C++ sederhana terlebih dahulu setelah deploy. Jika compiler gagal dimuat, periksa Console browser dan akses ke `cdn.jsdelivr.net` serta `esm.sh`.

## Dependensi dan atribusi

- [browsercc](https://github.com/BertalanD/browsercc) — MIT; compiler Clang/LLD yang dikompilasi ke WebAssembly.
- [browser_wasi_shim](https://github.com/andrewrk/browser_wasi_shim) / package [`@bjorn3/browser_wasi_shim`](https://www.npmjs.com/package/@bjorn3/browser_wasi_shim) — runtime WASI di browser.
- [CodeMirror](https://codemirror.net/) — editor kode.
- [esm.sh](https://esm.sh/) dan [jsDelivr](https://www.jsdelivr.com/) — CDN dependensi.

UI CodeLab C++ dapat dimodifikasi sesuai kebutuhan program ICT. Lihat lisensi masing-masing dependensi untuk rincian atribusi dan distribusi.
