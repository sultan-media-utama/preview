// Site Configuration
const siteConfig = {
    brandName: "Lectore",
    whatsappNumber: "6285143665477", // Ganti dengan nomor WhatsApp bisnis Anda
    consultationLabel: "Konsultasikan dengan Kami"
};

// Data katalog website - 95 website
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
