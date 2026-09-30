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
    { id: 2, name: "Alabama", category: "Organisasi", description: "Website organisasi dengan layout profesional" },
    { id: 3, name: "Alaska", category: "Portofolio", description: "Showcase portofolio dengan tema gelap" },
    { id: 4, name: "Ancona", category: "Bisnis", description: "Desain minimalis untuk usaha kecil menengah" },
    { id: 5, name: "Andria", category: "Blog", description: "Platform blog dengan navigasi intuitif" },
    { id: 6, name: "Anjo", category: "E-commerce", description: "Toko online dengan fitur checkout lengkap" },
    { id: 7, name: "Arezzo", category: "Bisnis", description: "Website perusahaan dengan tim showcase" },
    { id: 8, name: "Arica", category: "Pendidikan", description: "Platform edukasi dengan kursus online" },
    { id: 9, name: "Bagota", category: "Organisasi", description: "Situs organisasi sosial dengan donasi" },
    { id: 10, name: "Bergamo", category: "Bisnis", description: "Website restoran dengan menu interaktif" },
    { id: 11, name: "Berlin", category: "Portofolio", description: "Portofolio digital designer profesional" },
    { id: 12, name: "Brasiola", category: "E-commerce", description: "Marketplace produk lokal" },
    { id: 13, name: "Budhapest", category: "Blog", description: "Blog travel dengan galeri foto" },
    { id: 14, name: "Caracas", category: "Bisnis", description: "Website agensi kreatif" },
    { id: 15, name: "Casena", category: "Organisasi", description: "Situs komunitas lokal" },
    { id: 16, name: "Cataluna", category: "Pendidikan", description: "Sekolah online dengan fitur pembelajaran" },
    { id: 17, name: "Chiryu", category: "Bisnis", description: "Website startup teknologi" },
    { id: 18, name: "Chita", category: "Portofolio", description: "Portfolio fotografer profesional" },
    { id: 19, name: "Dakar", category: "Organisasi", description: "NGO dengan program sosial" },
    { id: 20, name: "Delhi", category: "Bisnis", description: "Website hotel dan pariwisata" },
    { id: 21, name: "Doha", category: "E-commerce", description: "Toko fashion online" },
    { id: 22, name: "Etiopia", category: "Blog", description: "Blog kuliner dan resep" },
    { id: 23, name: "Ferrara", category: "Bisnis", description: "Website konsultan bisnis" },
    { id: 24, name: "Forli", category: "Pendidikan", description: "Platform kursus online interaktif" },
    { id: 25, name: "Gifu", category: "Organisasi", description: "Situs pemerintah daerah" },
    { id: 26, name: "Ginza", category: "Bisnis", description: "Website toko perhiasan mewah" },
    { id: 27, name: "Guangzhou", category: "E-commerce", description: "Platform perdagangan B2B" },
    { id: 28, name: "Haiti", category: "Organisasi", description: "Organisasi kemanusiaan" },
    { id: 29, name: "Handa", category: "Portofolio", description: "Portfolio arsitektur dan desain interior" },
    { id: 30, name: "Hekinan", category: "Bisnis", description: "Website manufaktur industri" },
    { id: 31, name: "Hiroshima", category: "Blog", description: "Blog budaya dan sejarah" },
    { id: 32, name: "Honduras", category: "Organisasi", description: "Organisasi internasional" },
    { id: 33, name: "Honolulu", category: "E-commerce", description: "Penjualan produk kerajinan lokal" },
    { id: 34, name: "Inazawa", category: "Bisnis", description: "Website toko obat dan kesehatan" },
    { id: 35, name: "Istanbul", category: "Pendidikan", description: "Universitas online" },
    { id: 36, name: "Kariya", category: "Portofolio", description: "Portfolio ilustrator dan animator" },
    { id: 37, name: "Kasugai", category: "Bisnis", description: "Website perusahaan otomotif" },
    { id: 38, name: "Konan", category: "Blog", description: "Blog teknologi dan startup" },
    { id: 39, name: "Kualalumpur", category: "E-commerce", description: "Toko elektronik online" },
    { id: 40, name: "Kyoto", category: "Organisasi", description: "Organisasi pariwisata budaya" },
    { id: 41, name: "Lasvegas", category: "Bisnis", description: "Website kasino dan hiburan" },
    { id: 42, name: "Latina", category: "Portofolio", description: "Portfolio videografer profesional" },
    { id: 43, name: "Lima", category: "Pendidikan", description: "Akademi pelatihan profesional" },
    { id: 44, name: "London", category: "E-commerce", description: "Toko pakaian dan aksesori" },
    { id: 45, name: "Madagaskar", category: "Organisasi", description: "Organisasi lingkungan" },
    { id: 46, name: "Manila", category: "Bisnis", description: "Website bank dan layanan keuangan" },
    { id: 47, name: "Maroko", category: "Blog", description: "Blog perjalanan dunia" },
    { id: 48, name: "Montana", category: "Portofolio", description: "Portfolio desainer grafis" },
    { id: 49, name: "Mumbai", category: "Bisnis", description: "Website perusahaan IT" },
    { id: 50, name: "Munchen", category: "E-commerce", description: "Penjualan buku dan media" },
    { id: 51, name: "Nagasaki", category: "Pendidikan", description: "Sekolah bahasa online" },
    { id: 52, name: "Nagoya", category: "Organisasi", description: "Komunitas seni dan budaya" },
    { id: 53, name: "Nanjing", category: "Bisnis", description: "Website pabrik manufaktur" },
    { id: 54, name: "Newyork", category: "E-commerce", description: "Toko kosmetik premium" },
    { id: 55, name: "Novara", category: "Blog", description: "Blog fashion dan gaya hidup" },
    { id: 56, name: "Obu", category: "Portofolio", description: "Portfolio webdesigner" },
    { id: 57, name: "Osaka", category: "Bisnis", description: "Website perusahaan logistik" },
    { id: 58, name: "Panama", category: "Pendidikan", description: "Platform e-learning interaktif" },
    { id: 59, name: "Paris", category: "E-commerce", description: "Butik fashion eksklusif" },
    { id: 60, name: "Pesaro", category: "Organisasi", description: "Festival dan acara budaya" },
    { id: 61, name: "Pescara", category: "Bisnis", description: "Website resort dan hotel" },
    { id: 62, name: "Quito", category: "Blog", description: "Blog review restoran" },
    { id: 63, name: "Riyadh", category: "Portofolio", description: "Portfolio fotografer wedding" },
    { id: 64, name: "Roma", category: "Bisnis", description: "Agensi periklanan digital" },
    { id: 65, name: "Rosario", category: "E-commerce", description: "Toko peralatan olahraga" },
    { id: 66, name: "Salta", category: "Organisasi", description: "Festival musik tahunan" },
    { id: 67, name: "Santiago", category: "Pendidikan", description: "Bootcamp coding online" },
    { id: 68, name: "Secilia", category: "Bisnis", description: "Website restoran fine dining" },
    { id: 69, name: "Shanghai", category: "E-commerce", description: "Platform penjualan barang antik" },
    { id: 70, name: "Siberia", category: "Blog", description: "Blog lingkungan dan alam" },
    { id: 71, name: "Singapura", category: "Portofolio", description: "Portfolio developer full-stack" },
    { id: 72, name: "Sleman", category: "Bisnis", description: "Website UMKM kerajinan" },
    { id: 73, name: "Taipei", category: "Organisasi", description: "Organisasi startup incubator" },
    { id: 74, name: "Tehran", category: "Pendidikan", description: "Universitas virtual" },
    { id: 75, name: "Terni", category: "E-commerce", description: "Toko permainan dan mainan" },
    { id: 76, name: "Tokai", category: "Bisnis", description: "Website perusahaan energi" },
    { id: 77, name: "Tokomane", category: "Blog", description: "Blog seni dan kerajinan DIY" },
    { id: 78, name: "Toyokawa", category: "Portofolio", description: "Portfolio motion graphics" },
    { id: 79, name: "Toyota", category: "Bisnis", description: "Website dealer mobil" },
    { id: 80, name: "Trento", category: "Organisasi", description: "Organisasi petualangan outdoor" },
    { id: 81, name: "Tripoli", category: "E-commerce", description: "Toko minyak dan kosmetik alami" },
    { id: 82, name: "Tsushima", category: "Pendidikan", description: "Sekolah musik online" },
    { id: 83, name: "Udine", category: "Bisnis", description: "Website kantor hukum" },
    { id: 84, name: "Venesia", category: "Blog", description: "Blog seni dan galeri" },
    { id: 85, name: "Washington", category: "E-commerce", description: "Toko perabotan rumah" },
    { id: 86, name: "Wuhan", category: "Portofolio", description: "Portfolio arsitek profesional" },
    { id: 87, name: "Yerusalem", category: "Organisasi", description: "Organisasi keagamaan" },
    { id: 88, name: "Zurich", category: "Bisnis", description: "Agensi konsultasi manajemen" },
    { id: 89, name: "gamagori", category: "Pendidikan", description: "Platform pembelajaran interaktif" },
    { id: 90, name: "inuyama", category: "E-commerce", description: "Toko souvenirs dan cenderamata" },
    { id: 91, name: "monza", category: "Bisnis", description: "Website klub olahraga" },
    { id: 92, name: "nishio", category: "Blog", description: "Blog otomotif dan review mobil" },
    { id: 93, name: "salerno", category: "Portofolio", description: "Portfolio ilustrasi digital" },
    { id: 94, name: "sassari", category: "Organisasi", description: "Organisasi pengembangan komunitas" }
];

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
