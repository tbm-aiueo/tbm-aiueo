# Website Profil TBM AIUEO — Komunitas Ngejah

Website profil modern, profesional, cepat, dan responsif untuk **Taman Baca Masyarakat (TBM) AIUEO Komunitas Ngejah** (Singajaya, Garut, Jawa Barat).

Dibangun secara khusus sebagai **Static Website** berkinerja tinggi yang siap di-deploy secara otomatis ke **GitHub Pages**.

---

## 📖 Tentang TBM AIUEO Komunitas Ngejah

* **Nama Komunitas:** Komunitas Ngejah / TBM AIUEO
* **Tahun Berdiri:** 15 Juli 2010
* **Pendiri:** Nero Taopik Abdillah
* **Pengelola TBM:** Budi Iskandar & Roni Nuroni
* **Lokasi:** Kampung Sukawangi RT 03/07, Desa Sukawangi, Kec. Singajaya, Kab. Garut, Jawa Barat 44173
* **Fokus Gerakan:** Gerakan Kampung Membaca, Pojok Baca Dusun, Literasi Digital, Ekoliterasi & Konservasi Alam, Seni Budaya Tradisional Sunda (Karinding), serta Advokasi Pendidikan Alternatif di Pedesaan Garut.
* **Email Resmi:** `redaksingejah@gmail.com`

---

## ✨ Fitur Unggulan Website

1. **100% Static & GitHub Pages Compatible:** Berjalan lancar tanpa ketergantungan server backend, PHP, atau database eksternal.
2. **Desain "Modern Community Literacy":** Hangat, humanis, bernuansa alam pedesaan Garut dengan palet warna emerald & earthy neutrals.
3. **Data Terverifikasi & Bebas Halusinasi:** Seluruh riwayat, penghargaan, publikasi akademik, dan nama tokoh didasarkan pada data historis terverifikasi (Kemendikbud, Perpusnas, STKIP Siliwangi, dll).
4. **Alur Perubahan Sosial ("Impact Chain"):** Visualisasi runtut: *KAMPUNG → BUKU → MEMBACA → BELAJAR → BERKARYA → BERBAGI → BERGERAK → BERDAMPAK*.
5. **Pencarian & Filter Artikel Realtime:** Pencarian warta dan artikel literasi langsung di sisi klien dengan JavaScript/React state.
6. **Bento & Masonry Gallery + Lightbox Modal:** Dilengkapi fitur perbesaran gambar (*zoom*), navigasi keyboard (*Escape, Arrow keys*), serta atribusi dokumentasi.
7. **Pendaftaran Relawan Terintegrasi:** Form interaktif yang mengarahkan pesan langsung ke email resmi `redaksingejah@gmail.com`.
8. **Dark Mode / Light Mode:** Dukungan tema gelap dan terang otomatis dengan persistensi `localStorage`.
9. **SEO & PWA Ready:** Dilengkapi Open Graph, Twitter Cards, Schema.org (JSON-LD), `sitemap.xml`, dan `manifest.json`.

---

## 🛠️ Teknologi yang Digunakan

* **Frontend:** React 18, TypeScript
* **Build Tool:** Vite (dikonfigurasi dengan `base: './'` untuk path relatif GitHub Pages)
* **Styling:** Tailwind CSS
* **Ikon:** Lucide React
* **Tipografi:** Google Fonts (*Playfair Display* & *Plus Jakarta Sans*)

---

## 🚀 Panduan Menjalankan di Lokal (Local Development)

```bash
# 1. Clone repository
git clone https://github.com/username/tbm-aiueo-komunitas-ngejah.git

# 2. Masuk ke direktori
cd tbm-aiueo-komunitas-ngejah

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev
```

Aplikasi dapat diakses melalui browser di `http://localhost:3000`.

---

## 🌐 Panduan Deploy ke GitHub & Custom Domain

Proyek ini telah dikonfigurasi secara lengkap untuk repository:
👉 `https://github.com/tbm-aiueo/PAUD-Admin-System-Lite`  
👉 Domain resmi: **`https://tamanbaca-aiueo.my.id`**

### Langkah 1: Push Kode ke Repository GitHub
```bash
git init
git add .
git commit -m "Deploy Website Profil TBM AIUEO Komunitas Ngejah ke GitHub Pages"
git branch -M main
git remote add origin https://github.com/tbm-aiueo/PAUD-Admin-System-Lite.git
git push -u origin main --force
```

### Langkah 2: Aktifkan GitHub Pages di Repository
1. Buka halaman pengaturan repository:  
   👉 `https://github.com/tbm-aiueo/PAUD-Admin-System-Lite/settings/pages`
2. Pada bagian **Build and deployment > Source**, pilih **GitHub Actions**.
3. Di bagian **Custom domain**, pastikan tertulis:  
   `tamanbaca-aiueo.my.id`
4. Centang opsi **Enforce HTTPS** (sertifikat SSL Let's Encrypt gratis akan aktif otomatis dari GitHub).

---

## 🏷️ Pengaturan DNS Domain (`tamanbaca-aiueo.my.id`)

Di panel penyedia domain (misal: Rumahweb, Niagahoster, DomaiNesia, Cloudflare, atau penyedia domain Anda), tambahkan DNS Record berikut:

| Tipe | Nama Host / Subdomain | Target / Nilai IPv4 / CNAME | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (atau kosong) | `185.199.108.153` | Auto / 3600 |
| **A** | `@` (atau kosong) | `185.199.109.153` | Auto / 3600 |
| **A** | `@` (atau kosong) | `185.199.110.153` | Auto / 3600 |
| **A** | `@` (atau kosong) | `185.199.111.153` | Auto / 3600 |
| **CNAME** | `www` | `tbm-aiueo.github.io` | Auto / 3600 |

> *Catatan:* File `public/CNAME` di proyek ini sudah diatur otomatis ke `tamanbaca-aiueo.my.id`, sehingga setiap kali GitHub Actions berjalan, custom domain tidak akan ter-reset.

---

## 📝 Cara Memperbarui Konten

Seluruh konten data dikelola secara rapi dan terpusat di dalam file:
`src/data/communityData.ts`

Untuk menambah artikel baru, memperbarui galeri, menambah dokumentasi kegiatan, atau mengubah nomor kontak, Anda cukup mengedit data di file tersebut tanpa perlu mengubah struktur layout komponen.

---

## 📚 Validasi & Sitasi Riset

Penelitian akademik mengenai TBM AIUEO Komunitas Ngejah:
* **Judul:** *Peran Komunitas Ngejah dalam Mensukseskan Program Literasi melalui Taman Baca Masyarakat AIUEO*
* **Peneliti:** Wiwin Herwina, Dede Nurul Qomariah, Faisal Sulistio (2021)
* **Jurnal:** *Jurnal Ilmiah P2M STKIP Siliwangi*, Vol. 8, No. 1, Hal. 1–9.

---

## 📄 Lisensi & Hak Cipta

© 2010–2026 **Taman Baca Masyarakat AIUEO Komunitas Ngejah**.
Dikelola dengan sukarela untuk kemaslahatan literasi dan pemuda pedesaan Garut, Jawa Barat.
