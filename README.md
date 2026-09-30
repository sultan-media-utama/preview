# Lectore — Katalog Desain Website

Katalog interaktif yang menampilkan 95 desain website profesional dalam format PNG. Website ini dirancang untuk membantu calon klien melihat berbagai referensi desain dan berkonsultasi mengenai kebutuhan website mereka.

## 📋 Fitur Utama

- ✅ **Katalog 94 Website** - Semua desain ditampilkan dalam grid card responsif
- ✅ **Halaman Detail Individu** - Setiap website memiliki halaman detail terpisah
- ✅ **Pencarian & Filter** - Cari berdasarkan nama atau filter berdasarkan kategori
- ✅ **Sortir Dinamis** - Urutkan berdasarkan nomor atau nama
- ✅ **Integrasi WhatsApp** - Tombol konsultasi otomatis dengan pesan berbasis konteks
- ✅ **Navigasi Intuitif** - Tombol previous/next untuk navigasi antarhalaman
- ✅ **Responsive Design** - Optimal untuk desktop, tablet, dan mobile
- ✅ **SEO Friendly** - Meta tags, Open Graph, dan struktur HTML semantik
- ✅ **GitHub Pages Compatible** - Static website tanpa backend atau database

## 📁 Struktur Direktori

```
website-showcase/
├── index.html                          # Halaman utama katalog
├── style.css                           # Stylesheet global
├── script.js                           # JavaScript untuk logika dan data
├── generate-detail-pages.js            # Script generator halaman detail
├── README.md                           # Dokumentasi ini
├── assets/
│   └── previews/                       # Folder berisi 95 PNG
│       ├── Abudhabi.png
│       ├── Alabama.png
│       ├── ... (93 file lainnya)
│       └── sultan.png
└── pages/                              # Folder berisi 95 halaman detail
    ├── website-01.html
    ├── website-02.html
    ├── ... (93 file lainnya)
    └── website-95.html
```

## 🚀 Memulai

### 1. Cloning Repository

```bash
git clone https://github.com/username/website-showcase.git
cd website-showcase
```

### 2. Buka Secara Lokal

Karena ini adalah static website, Anda bisa membuka `index.html` langsung di browser:

```bash
# Linux/Mac
open index.html

# atau gunakan Python server
python3 -m http.server 8000
# Buka http://localhost:8000
```

### 3. Deploy ke GitHub Pages

1. Push repository ke GitHub
2. Di repository settings, aktifkan GitHub Pages dari branch `main`
3. Website akan tersedia di: `https://username.github.io/website-showcase/`

## ⚙️ Konfigurasi

### Mengatur Nomor WhatsApp

Edit `script.js` dan ubah nomor WhatsApp di bagian `siteConfig`:

```javascript
const siteConfig = {
    brandName: "Lectore",
    whatsappNumber: "628123456789", // Ganti dengan nomor bisnis Anda
    consultationLabel: "Konsultasikan dengan Kami"
};
```

Format nomor:
- Gunakan format internasional: `62` (kode negara Indonesia) + nomor tanpa 0
- Contoh: `62812345678` (bukan `0812345678`)

### Mengubah Nama Website

Edit file `script.js`, ubah `brandName`:

```javascript
const siteConfig = {
    brandName: "Nama Brand Anda", // Ubah di sini
    whatsappNumber: "628123456789",
    consultationLabel: "Konsultasikan dengan Kami"
};
```

### Menambah atau Mengubah Kategori

1. Edit array `websites` di `script.js`
2. Ubah atau tambah nilai di field `category`
3. Kategori default yang tersedia:
   - Bisnis
   - Pendidikan
   - Organisasi
   - Portofolio
   - Blog
   - E-commerce
   - Perpustakaan dan Arsip
   - Lainnya

Contoh:
```javascript
{
    id: 1,
    name: "Abudhabi",
    category: "Kategori Baru", // Ubah di sini
    description: "Deskripsi singkat website."
}
```

### Mengubah Deskripsi Website

Edit field `description` di array `websites` dalam `script.js`:

```javascript
{
    id: 1,
    name: "Abudhabi",
    category: "Bisnis",
    description: "Deskripsi baru website." // Ubah di sini
}
```

### Menambah Website Baru

Jika ingin menambah website baru:

1. **Tambahkan file PNG** ke `assets/previews/`
   - Nama file: `NamaWebsite.png` (perhatikan kapitalisasi)

2. **Tambahkan data ke script.js**
   ```javascript
   const websites = [
       // ... website existing
       {
           id: 96,
           name: "NamaWebsite",
           category: "Bisnis",
           description: "Deskripsi website baru"
       }
   ];
   ```

3. **Generate halaman detail baru**
   ```bash
   node generate-detail-pages.js
   ```
   Script akan secara otomatis membuat `pages/website-96.html`

4. **Update logika di index.html** (jika diperlukan)
   - Script sudah dirancang untuk dinamis menggunakan data dari `script.js`

## 📝 Mengubah Pesan WhatsApp

### Pesan Default (dari halaman detail)

Edit fungsi `createConsultationMessage()` di `script.js`:

```javascript
function createConsultationMessage(websiteName) {
    return `Halo, saya ingin berkonsultasi mengenai desain ${websiteName}. Saya tertarik dengan desain ini dan ingin mengetahui kemungkinan perubahan, penyesuaian fitur, serta estimasi biaya pengerjaannya.`;
}
```

### Pesan Umum (dari halaman utama)

Edit fungsi `createGeneralConsultationMessage()` di `script.js`:

```javascript
function createGeneralConsultationMessage() {
    return `Halo, saya ingin berkonsultasi mengenai layanan pembuatan website. Saya ingin mengetahui pilihan desain, fitur, penyesuaian, dan estimasi biaya.`;
}
```

## 🎨 Menyesuaikan Desain

Semua warna dan styling diatur dalam CSS Variables di bagian `:root` dalam `style.css`:

```css
:root {
    --color-primary: #0066cc;
    --color-primary-dark: #004fa3;
    --color-secondary: #00cc99;
    --color-dark: #1a1a1a;
    --color-white: #ffffff;
    /* ... dan lainnya */
}
```

### Mengubah Warna Utama

```css
:root {
    --color-primary: #FF6B6B;      /* Warna utama baru */
    --color-primary-dark: #FF0000; /* Warna gelap */
    --color-primary-light: #FFE5E5; /* Warna terang */
}
```

### Mengubah Font

```css
:root {
    --font-family-base: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Font baru */
}
```

### Mengubah Spacing/Jarak

```css
:root {
    --spacing-md: 20px;  /* Ubah jarak default */
    --spacing-lg: 30px;  /* Ubah jarak besar */
}
```

## 🔧 Troubleshooting

### Gambar PNG tidak muncul

1. Pastikan nama file PNG sesuai dengan nama di `script.js`
2. Periksa path: `../assets/previews/{NamaWebsite}.png`
3. Pastikan file PNG ada di folder `assets/previews/`

### Link tidak berfungsi

1. Verifikasi struktur folder sudah benar
2. Pastikan tidak ada typo dalam nama file halaman
3. Untuk GitHub Pages, gunakan relative path yang benar

### WhatsApp tidak membuka

1. Periksa format nomor WhatsApp (harus format internasional)
2. Nomor harus valid dan aktif di WhatsApp
3. Pastikan tidak ada karakter khusus di pesan

### Halaman lambat saat dimuat

- PNG ukuran besar? Gunakan lazy loading (sudah diterapkan dengan `loading="lazy"`)
- Kompres gambar PNG untuk mengurangi ukuran file
- Gunakan CDN untuk assets jika tersedia

## 📊 Statistik Project

- **Total Website**: 94
- **Halaman Detail**: 94 (1 per website)
- **Halaman Utama**: 1 (index.html)
- **Total Halaman HTML**: 95
- **Asset PNG**: 94
- **CSS Global**: 1
- **JavaScript**: 1

## 🌐 Deploy ke Hosting Lain

### Netlify

1. Connect repository dari GitHub
2. Build command: `-` (kosong)
3. Publish directory: `/`
4. Deploy!

### Vercel

1. Import project dari GitHub
2. Framework: `Other`
3. Deploy!

### Self-Hosted

1. Copy semua file ke server web Anda
2. Pastikan struktur folder tetap sama
3. Buka di browser: `http://your-domain.com/`

## 🔒 Keamanan

- ✅ Tidak ada backend/database - lebih aman
- ✅ Tidak ada form submission
- ✅ Semua konten statis
- ✅ Tidak memerlukan API keys di client-side
- ✅ Nomor WhatsApp bisa diganti sewaktu-waktu

## 📱 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Semua browser modern yang support CSS Grid dan ES6

## ♿ Aksesibilitas

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Sufficient color contrast
- ✅ Focus states terlihat
- ✅ Alt text untuk semua gambar

## 📄 License

Bebas digunakan untuk keperluan pribadi dan komersial.

## 📞 Support

Untuk pertanyaan atau saran, hubungi melalui WhatsApp menggunakan tombol "Konsultasikan dengan Kami" di website.

---

**Dibuat dengan ❤️ untuk portfolio digital.**
