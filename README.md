# CodeLab C++ — ICT Playground

Playground C++ statis untuk belajar pemrograman. Kode C++ dikompilasi di browser menjadi WebAssembly menggunakan proyek open-source [browsercc](https://github.com/BertalanD/browsercc); tidak perlu backend/API compiler milik sendiri.

## Live website dengan GitHub Pages

Setelah GitHub Pages diaktifkan, alamat website repository ini adalah:

**https://imamsaa.github.io/codelab-cpp/**

Untuk mengaktifkan atau memastikan deployment:
1. Buka **Settings → Pages** di repository ini.
2. Pada **Build and deployment**, pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/(root)`, lalu tekan **Save**.
4. Buka tab **Actions** atau bagian Pages sampai status deployment berhasil, kemudian coba link website di atas.

File `index.html`, `app.js`, dan `compiler-worker.js` harus berada di root repository.

## Cara menggunakan

- Tulis C++ di editor, atau pilih **Buka .cpp** untuk membuka file lokal.
- Pilih standar C++17/C++20/C++14/C++11.
- Jika program menggunakan `cin`, isi panel **Input program (stdin)** sebelum menekan **Jalankan**. Input diberikan dari awal program; input interaktif yang menunggu ketikan di tengah eksekusi belum didukung.
- Tekan **Ctrl + Enter** untuk menjalankan.
- Klik **Unduh kode** untuk menyimpan kode sebagai `main.cpp`.
- Tombol **Stop** dapat digunakan untuk menghentikan worker yang sedang berjalan.

## Catatan penting

- Website ini hanya menggunakan hosting statis. Compiler/toolchain dimuat saat runtime dari CDN publik. Penggunaan pertama dapat mengunduh aset cukup besar (paket browsercc menyebutkan compiler, linker, dan sysroot sekitar 95 MB sebelum kompresi/cache).
- Koneksi internet diperlukan ketika aset compiler dan library CDN belum tersedia di cache browser.
- Kode pengguna dikirim dari halaman ke Web Worker di browser, bukan ke backend milik pemilik website. Akan tetapi, kode compiler dan library dimuat dari CDN pihak ketiga.
- Ini bukan lingkungan Linux/Windows native. Akses jaringan, sistem file permanen, thread, dan beberapa fitur dibatasi. Konfigurasi compiler memakai `-fno-exceptions`; kode yang memerlukan exception C++ tidak didukung dengan konfigurasi ini.
- Jika compiler tidak berhasil dimuat, periksa Console browser dan akses ke `cdn.jsdelivr.net` serta `esm.sh`.

## Dependensi dan atribusi

- [browsercc](https://github.com/BertalanD/browsercc) — compiler Clang/LLD yang dikompilasi ke WebAssembly.
- [browser_wasi_shim](https://github.com/andrewrk/browser_wasi_shim) / [@bjorn3/browser_wasi_shim](https://www.npmjs.com/package/@bjorn3/browser_wasi_shim) — runtime WASI di browser.
- [CodeMirror](https://codemirror.net/) — editor kode.
- [esm.sh](https://esm.sh/) dan [jsDelivr](https://www.jsdelivr.com/) — CDN dependensi.

Silakan modifikasi UI dan materi contoh sesuai kebutuhan kelas ICT. Pastikan tetap mengikuti lisensi masing-masing dependensi.
