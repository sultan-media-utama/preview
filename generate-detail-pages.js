#!/usr/bin/env node

/**
 * Script untuk generate 95 halaman detail website
 * Run: node generate-detail-pages.js
 */

const fs = require('fs');
const path = require('path');

// Data websites (harus sesuai dengan script.js)
const websites = [
    { id: 1, name: "Abudhabi", category: "Bisnis", description: "Desain modern untuk bisnis internasional" },
    { id: 2, name: "Alabama", category: "Pendidikan", description: "Sekolah Online dengan pendekatan pembelajaran interaktif" },
    { id: 3, name: "Alaska", category: "Pendidikan", description: "Sekolah dengan pendekatan pembelajaran interaktif" },
    { id: 4, name: "Ancona", category: "Bisnis", description: "Desain ekspedisi dengan fitur navigasi" },
    { id: 5, name: "Andria", category: "Bisnis", description: "Laundry service dengan layanan antar-jemput" },
    { id: 6, name: "Anjo", category: "Creative", description: "Website kreatif untuk desainer dan artist" },
    { id: 7, name: "Arezzo", category: "F&B", description: "Website restoran dengan menu menarik" },
    { id: 8, name: "Arica", category: "Bisnis", description: "Konstruksi dengan fitur navigasi" },
    { id: 9, name: "Bagota", category: "Bisnis", description: "Situs gym dengan layanan kebugaran" },
    { id: 10, name: "Bergamo", category: "F&B", description: "Website restoran dengan menu interaktif" },
    { id: 11, name: "Berlin", category: "Pendidikan", description: "Taman Kanak-kanak dengan program edukatif" },
    { id: 12, name: "Brasiola", category: "E-commerce", description: "Marketplace produk lokal" },
    { id: 13, name: "Budhapest", category: "Bisnis", description: "Konstruksi yang inovatif" },
    { id: 14, name: "Caracas", category: "Bisnis", description: "Gym dengan fasilitas lengkap" },
    { id: 15, name: "Casena", category: "Bisnis", description: "Situs desain Interior dengan fitur navigasi" },
    { id: 16, name: "Cataluna", category: "E-commerce", description: "Marketplace produk lokal" },
    { id: 17, name: "Chiryu", category: "Travel", description: "Website travel dengan galeri foto" },
    { id: 18, name: "Chita", category: "Cafe", description: "Website kafe dengan menu khusus" },
    { id: 19, name: "Dakar", category: "Farm", description: "Petani bisa menjual produk mereka secara online" },
    { id: 20, name: "Delhi", category: "Travel", description: "Website hotel dan pariwisata" },
    { id: 21, name: "Doha", category: "F&B", description: "Toko kue dengan menu menarik" },
    { id: 22, name: "Etiopia", category: "Bisnis", description: "Bisnis lokal dengan fokus pada produk tradisional" },
    { id: 23, name: "Ferrara", category: "E-commerce", description: "E-commerce dengan produk fashion" },
    { id: 24, name: "Forli", category: "Pendidikan", description: "Platform kursus online interaktif" },
    { id: 25, name: "Gifu", category: "Bisnis", description: "Situs konstruksi yang menyediakan jasa" },
    { id: 26, name: "Ginza", category: "Bisnis", description: "Website toko marketing" },
    { id: 27, name: "Guangzhou", category: "Bisnis", description: "Situs bisnis jasa yang informatif" },
    { id: 28, name: "Haiti", category: "E-commerce", description: "Jual furniture secara online" },
    { id: 29, name: "Handa", category: "Otomotif", description: "Situs jasa service mobil" },
    { id: 30, name: "Hekinan", category: "Fashion", description: "Salon juga bisa memiliki situs sendiri" },
    { id: 31, name: "Hiroshima", category: "Travel", description: "Website rental mobil" },
    { id: 32, name: "Honduras", category: "F&B", description: "Jual makanan dan minuman" },
    { id: 33, name: "Honolulu", category: "E-commerce", description: "Penjualan produk-produk lokal" },
    { id: 34, name: "Inazawa", category: "E-commerce", description: "Website toko fashion" },
    { id: 35, name: "Istanbul", category: "Otomotif", description: "Jual sepeda anda secara online" },
    { id: 36, name: "Kariya", category: "Kesehatan", description: "Website klinik dan layanan kesehatan" },
    { id: 37, name: "Kasugai", category: "F&B", description: "Kenalkan produk buah anda secara online" },
    { id: 38, name: "Konan", category: "Bisnis", description: "Jasa apapun layankan dengan mudah" },
    { id: 39, name: "Kualalumpur", category: "Bisnis", description: "Toko petshop" },
    { id: 40, name: "Kyoto", category: "Otomotif", description: "Perusahaan jual beli mobil" },
    { id: 41, name: "Lasvegas", category: "Bisnis", description: "Website agen marketing" },
    { id: 42, name: "Latina", category: "Bisnis", description: "Situs firma hukum yang bisa diakses online" },
    { id: 43, name: "Lima", category: "Bisnis", description: "Konsultasi bisnis anda secara online" },
    { id: 44, name: "London", category: "Bisnis", description: "Digital agensi mudah untuk ditemukan secara online" },
    { id: 45, name: "Madagaskar", category: "Bisnis", description: "Pusat kebugaran bisa membuat member secara online" },
    { id: 46, name: "Manila", category: "Travel", description: "Jasa perjalanan dan tour" },
    { id: 47, name: "Maroko", category: "Fundraising", description: "Donasi untuk program kemanusiaan" },
    { id: 48, name: "Montana", category: "Bisnis", description: "Agensi kreatif" },
    { id: 49, name: "Mumbai", category: "Bisnis", description: "Website perusahaan IT" },
    { id: 50, name: "Munchen", category: "Bisnis", description: "Memudahkan pencarian untuk agensi desain" },
    { id: 51, name: "Nagasaki", category: "Kesehatan", description: "Rumah sakit dan layanan kesehatan" },
    { id: 52, name: "Nagoya", category: "Bisnis", description: "Konstruksi dan perencanaan" },
    { id: 53, name: "Nanjing", category: "Bisnis", description: "Interior designer" },
    { id: 54, name: "Newyork", category: "Portofolio", description: "Portofolio webdesigner" },
    { id: 55, name: "Novara", category: "Blog", description: "Blog fashion dan gaya hidup" },
    { id: 56, name: "Obu", category: "Portofolio", description: "Portfolio desain" },
    { id: 57, name: "Osaka", category: "Bisnis", description: "Website perusahaan interior" },
    { id: 58, name: "Panama", category: "Travel", description: "Travel agency" },
    { id: 59, name: "Paris", category: "Bisnis", description: "Digital marketing" },
    { id: 60, name: "Pesaro", category: "Bisnis", description: "Perusahaan pertanian" },
    { id: 61, name: "Pescara", category: "Pendidikan", description: "Sekolah bahasa online" },
    { id: 62, name: "Quito", category: "Blog", description: "Blog review digital agensi" },
    { id: 63, name: "Riyadh", category: "Pendidikan", description: "Pelatihan keterampilan digital" },
    { id: 64, name: "Roma", category: "Bisnis", description: "Perusahaan jasa elektrikal" },
    { id: 65, name: "Rosario", category: "Bisnis", description: "Dokter hewan yang bisa ditemukan secara online" },
    { id: 66, name: "Salta", category: "Bisnis", description: "Furniture yang bisa dibeli secara online" },
    { id: 67, name: "Santiago", category: "E-commerce", description: "Marketplace produk lokal" },
    { id: 68, name: "Secilia", category: "Cafe", description: "Website cafe kopi" },
    { id: 69, name: "Shanghai", category: "Bisnis", description: "Wedding organizer" },
    { id: 70, name: "Siberia", category: "Bisnis", description: "Firma hukum" },
    { id: 71, name: "Singapura", category: "Bisnis", description: "Rumah sakit dan layanan kesehatan" },
    { id: 72, name: "Sleman", category: "Bisnis", description: "Website UMKM kerajinan" },
    { id: 73, name: "Taipei", category: "Bisnis", description: "Agensi bisnis" },
    { id: 74, name: "Tehran", category: "Bisnis", description: "Agensi finansial" },
    { id: 75, name: "Terni", category: "Portofolio", description: "Portofolio fotografi" },
    { id: 76, name: "Tokai", category: "E-commerce", description: "Marketplace produk fashion" },
    { id: 77, name: "Tokomane", category: "Pendidikan", description: "Centrum belajar bahasa" },
    { id: 78, name: "Toyokawa", category: "Bisnis", description: "Konstruksi bangunan" },
    { id: 79, name: "Toyota", category: "Bisnis", description: "Website apartemen" },
    { id: 80, name: "Trento", category: "Bisnis", description: "Agensi bisnis" },
    { id: 81, name: "Tripoli", category: "Bisnis", description: "Wedding Organizer" },
    { id: 82, name: "Tsushima", category: "Portofolio", description: "Portfolio desain grafis" },
    { id: 83, name: "Udine", category: "Bisnis", description: "Agensi kreatif" },
    { id: 84, name: "Venesia", category: "Bisnis", description: "Jasa pengecekan pipa" },
    { id: 85, name: "Washington", category: "Blog", description: "Blog tari" },
    { id: 86, name: "Wuhan", category: "Kesehatan", description: "Rumah sakit" },
    { id: 87, name: "Yerusalem", category: "Bisnis", description: "Kerajinan tangan" },
    { id: 88, name: "Zurich", category: "Kesehatan", description: "Rumah sakit" },
    { id: 89, name: "Gamagori", category: "Pendidikan", description: "Platform pembelajaran interaktif" },
    { id: 90, name: "Inuyama", category: "E-commerce", description: "Toko souvenirs dan cenderamata" },
    { id: 91, name: "Monza", category: "Bisnis", description: "Website klub olahraga" },
    { id: 92, name: "Nishio", category: "Blog", description: "Blog otomotif dan review mobil" },
    { id: 93, name: "Salerno", category: "Portofolio", description: "Portfolio ilustrasi digital" },
    { id: 94, name: "Sassari", category: "Organisasi", description: "Organisasi pengembangan komunitas" }
];

// Sort websites alphabetically by name (case-insensitive) and reassign sequential ids
websites.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
websites.forEach((w, i) => { w.id = i + 1; });

// Utility function
function getPreviousWebsite(currentId) {
    return websites.find(w => w.id === currentId - 1);
}

function getNextWebsite(currentId) {
    return websites.find(w => w.id === currentId + 1);
}

// Generate detail page HTML
function generateDetailPageHTML(website) {
    const prev = getPreviousWebsite(website.id);
    const next = getNextWebsite(website.id);
    const numberFormatted = String(website.id).padStart(2, '0');

    // Image path (relative from pages folder)
    const imagePath = `../assets/previews/${website.name}.png`;

    let html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${website.name} — Lectore</title>
    <meta name="description" content="Lihat preview desain ${website.name} dan konsultasikan kebutuhan penyesuaian website Anda.">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${website.name} — Lectore">
    <meta property="og:description" content="Preview desain ${website.name} dalam kategori ${website.category}. Konsultasikan kebutuhan Anda sekarang.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="${imagePath}">
    
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="header-container">
            <div class="logo">
                <span>🌐</span>
                <span>Lectore</span>
            </div>
            <nav>
                <a href="../index.html">Beranda</a>
                <a href="../index.html#katalog">Katalog</a>
                <a href="#tentang">Tentang Kami</a>
                <a href="#kontak">Kontak</a>
            </nav>
        </div>
    </header>

    <!-- Breadcrumb -->
    <div class="breadcrumb">
        <a href="../index.html">Beranda</a>
        <span>/</span>
        <a href="../index.html#katalog">Katalog</a>
        <span>/</span>
        <span>${website.name}</span>
    </div>

    <!-- Detail Hero -->
    <section class="detail-hero">
        <div class="detail-header">
            <h1 class="detail-title">${website.name}</h1>
            <div class="detail-meta">
                <span><strong>Website #${numberFormatted}</strong></span>
                <span>Kategori: <strong>${website.category}</strong></span>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <main>
        <!-- Description -->
        <div class="detail-content">
            <p class="detail-description">
                ${website.description}
            </p>
        </div>

        <!-- Image -->
        <div class="detail-image">
            <img 
                src="${imagePath}" 
                alt="Preview ${website.name}"
                loading="lazy"
                decoding="async"
                onerror="this.style.background='#f0f0f0'; this.alt='Gambar tidak tersedia';"
            >
        </div>

        <!-- CTA Section -->
        <div class="detail-content">
            <div class="cta-section">
                <h3>Tertarik dengan Desain Ini?</h3>
                <p>Konsultasikan kebutuhan website Anda dan dapatkan penawaran terbaik.</p>
                <div class="cta-buttons">
                    <button class="btn btn-primary" onclick="consultWebsite('${website.name}')">
                        Konsultasikan dengan Kami
                    </button>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <div class="detail-content">
            <div class="nav-adjacent">
                ${prev ? `<a href="website-${String(prev.id).padStart(2, '0')}.html" class="btn btn-secondary">← Website Sebelumnya (${prev.name})</a>` : `<button class="btn btn-secondary" disabled>← Website Sebelumnya</button>`}
                ${next ? `<a href="website-${String(next.id).padStart(2, '0')}.html" class="btn btn-secondary">Website Berikutnya (${next.name}) →</a>` : `<button class="btn btn-secondary" disabled>Website Berikutnya →</button>`}
            </div>

            <div class="navigation">
                <a href="../index.html#katalog" class="btn btn-primary">Kembali ke Katalog</a>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer>
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Lectore</h4>
                    <p>Katalog desain website profesional untuk inspirasi proyek Anda.</p>
                </div>
                <div class="footer-section">
                    <h4>Navigasi</h4>
                    <ul>
                        <li><a href="../index.html">Beranda</a></li>
                        <li><a href="../index.html#katalog">Katalog</a></li>
                        <li><a href="#tentang">Tentang Kami</a></li>
                        <li><a href="#kontak">Kontak</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Layanan</h4>
                    <ul>
                        <li><a href="javascript:consultWebsite('${website.name}')">Konsultasi Gratis</a></li>
                        <li><a href="javascript:openGeneralWhatsAppConsultation()">Hubungi Kami</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Lectore. Semua hak dilindungi.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"><\/script>
    <script>
        // Convenience function for this page
        function consultWebsite(websiteName) {
            openWhatsAppConsultation(websiteName);
        }

        // Add keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' && ${prev ? 'true' : 'false'}) {
                window.location.href = 'website-${prev ? String(prev.id).padStart(2, '0') : ''}.html';
            }
            if (e.key === 'ArrowRight' && ${next ? 'true' : 'false'}) {
                window.location.href = 'website-${next ? String(next.id).padStart(2, '0') : ''}.html';
            }
        });
    </script>
</body>
</html>`;

    return html;
}

// Main function
function generateAllDetailPages() {
    const pagesDir = path.join(__dirname, 'pages');

    // Ensure pages directory exists
    if (!fs.existsSync(pagesDir)) {
        fs.mkdirSync(pagesDir, { recursive: true });
    }

    let successCount = 0;
    let errorCount = 0;

    websites.forEach(website => {
        try {
            const pageNum = String(website.id).padStart(2, '0');
            const filename = `website-${pageNum}.html`;
            const filepath = path.join(pagesDir, filename);
            const html = generateDetailPageHTML(website);

            fs.writeFileSync(filepath, html, 'utf8');
            console.log(`✓ Generated: ${filename}`);
            successCount++;
        } catch (error) {
            console.error(`✗ Error generating page for ${website.name}:`, error.message);
            errorCount++;
        }
    });

    console.log(`\n========================================`);
    console.log(`Generation complete!`);
    console.log(`Success: ${successCount}/${websites.length}`);
    if (errorCount > 0) {
        console.log(`Errors: ${errorCount}`);
    }
    console.log(`========================================`);
}

// Run the script
if (require.main === module) {
    generateAllDetailPages();
}

module.exports = { generateAllDetailPages, generateDetailPageHTML };
