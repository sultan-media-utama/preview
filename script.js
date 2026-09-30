// Site Configuration
const siteConfig = {
    brandName: "Lectore",
    whatsappNumber: "6285143665477", // Ganti dengan nomor WhatsApp bisnis Anda
    consultationLabel: "Konsultasikan dengan Kami"
};

// Data katalog website - 95 website
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

// Tambahkan path gambar ke setiap website
websites.forEach((website, index) => {
    const fileName = website.name.toLowerCase();
    const capitalizedName = website.name.charAt(0).toUpperCase() + website.name.slice(1);
    website.image = `assets/previews/${capitalizedName}.png`;
    website.detailPage = `pages/website-${String(website.id).padStart(2, '0')}.html`;
});

// Utility functions
function getWebsiteById(id) {
    return websites.find(w => w.id === id);
}

function getWebsiteByIndex(index) {
    return websites[index];
}

function getTotalWebsites() {
    return websites.length;
}

// WhatsApp functions
function createConsultationMessage(websiteName) {
    return `Halo, saya ingin berkonsultasi mengenai desain ${websiteName}. Saya tertarik dengan desain ini dan ingin mengetahui kemungkinan perubahan, penyesuaian fitur, serta estimasi biaya pengerjaannya.`;
}

function createGeneralConsultationMessage() {
    return `Halo, saya ingin berkonsultasi mengenai layanan pembuatan website. Saya ingin mengetahui pilihan desain, fitur, penyesuaian, dan estimasi biaya.`;
}

function generateWhatsAppLink(message) {
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function openWhatsAppConsultation(websiteName) {
    const message = createConsultationMessage(websiteName);
    const url = generateWhatsAppLink(message);
    window.open(url, '_blank');
}

function openGeneralWhatsAppConsultation() {
    const message = createGeneralConsultationMessage();
    const url = generateWhatsAppLink(message);
    window.open(url, '_blank');
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { websites, siteConfig };
}
