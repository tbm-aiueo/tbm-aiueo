import { 
  Program, 
  Activity, 
  GalleryItem, 
  Article, 
  AcademicResearch, 
  Achievement, 
  Figure, 
  TimelineEvent, 
  SupportOption,
  VerifiedPhoto
} from '../types';

export const communityMeta = {
  name: "Taman Baca Masyarakat AIUEO Komunitas Ngejah",
  shortName: "TBM AIUEO Komunitas Ngejah",
  tagline: "Menumbuhkan Minat Baca, Menghidupkan Kampung, Membuka Masa Depan.",
  subTagline: "Taman Baca Masyarakat AIUEO Komunitas Ngejah menjadi ruang untuk membaca, belajar, berkarya, berbagi, dan bertumbuh bersama masyarakat.",
  manifesto: "Dari buku, tumbuh pengetahuan. Dari pengetahuan, tumbuh keberanian. Dari komunitas, tumbuh perubahan.",
  foundingDate: "15 Juli 2010",
  founder: "Nero Taopik Abdillah (Opik)",
  address: "Kampung Sukawangi RT 03/RW 03, Desa Sukawangi, Kecamatan Singajaya, Kabupaten Garut, Jawa Barat 44173",
  geoCoordinates: {
    lat: -7.5094,
    lng: 107.8764,
    googleMapsUrl: "https://maps.google.com/?q=Desa+Sukawangi,+Kecamatan+Singajaya,+Kabupaten+Garut"
  },
  email: "redaksingejah@gmail.com",
  socials: {
    blog: "https://komunitasngejah.wordpress.com",
    officialWeb: "https://komunitasngejah.web.id",
    instagram: "https://instagram.com/komunitasngejah"
  }
};

export const verifiedStats = [
  {
    id: "stat-1",
    number: "2010",
    label: "Tahun Berdiri",
    subtext: "15 Juli 2010 di Kp. Sukawangi, Garut",
    icon: "Calendar"
  },
  {
    id: "stat-2",
    number: "15+ Tahun",
    label: "Perjalanan Gerakan",
    subtext: "Konsisten mendampingi masyarakat pelosok",
    icon: "Sparkles"
  },
  {
    id: "stat-3",
    number: "1.000+",
    label: "Koleksi Buku Terbuka",
    subtext: "Buku anak, sains, sastra, keterampilan, dll",
    icon: "BookOpen"
  },
  {
    id: "stat-4",
    number: "26+ Titik",
    label: "Pojok Baca Dusun",
    subtext: "Menjangkau madrasah, posyandu & pos ronda",
    icon: "MapPin"
  }
];

export const impactChainSteps = [
  { step: "01", word: "KAMPUNG", desc: "Berangkat dari kegelisahan nyata di pelosok desa pegunungan Garut Selatan." },
  { step: "02", word: "BUKU", desc: "Menghadirkan bahan bacaan berkualitas yang mudah dijangkau anak & warga." },
  { step: "03", word: "MEMBACA", desc: "Membiasakan rutinitas membaca yang menyenangkan dan inklusif." },
  { step: "04", word: "BELAJAR", desc: "Menyerap wawasan, keterampilan, serta daya nalar kritis bersama relawan." },
  { step: "05", word: "BERKARYA", desc: "Menulis, berkesenian, memproduksi mading, dan melahirkan karya lokal." },
  { step: "06", word: "BERBAGI", desc: "Menularkan semangat belajar ke kampung tetangga dan generasi berikutnya." },
  { step: "07", word: "BERGERAK", desc: "Membangun kesadaran kolektif untuk memajukan desa secara mandiri." },
  { step: "08", word: "BERDAMPAK", desc: "Melahirkan pemuda berdaya, desa melek aksara, dan masa depan yang terbuka." }
];

export const programsData: Program[] = [
  {
    id: "tbm-aiueo",
    title: "TBM AIUEO",
    category: "Pusat Literasi",
    icon: "BookOpen",
    shortDesc: "Ruang baca ramah anak dan masyarakat di Saung Sukawangi dengan koleksi buku beragam.",
    fullDesc: "Taman Baca Masyarakat AIUEO didirikan sebagai episentrum literasi warga di Kampung Sukawangi. Menyediakan ruang membaca yang terbuka setiap hari tanpa dipungut biaya, dilengkapi area diskusi, permainan edukatif tradisional, dan bimbingan belajar santai bagi siswa sekolah dasar hingga menengah.",
    impactHighlight: "Menjadi rumah kedua bagi anak-anak dan pemuda desa untuk mengisi waktu luang secara produktif.",
    beneficiaries: "Anak-anak, pelajar, pemuda desa, dan warga umum Sukawangi",
    activitiesList: [
      "Layanan peminjaman dan membaca buku di tempat",
      "Bimbingan belajar dan membaca ramah anak",
      "Pekan dongeng dan bedah buku mingguan",
      "Permainan edukasi tradisional sunda"
    ]
  },
  {
    id: "kampung-membaca",
    title: "Gerakan Kampung Membaca",
    category: "Literasi Keliling",
    icon: "Compass",
    shortDesc: "Inisiatif jemput bola membawa ratusan buku ke kampung-kampung pelosok Singajaya.",
    fullDesc: "Menyadari kendala jarak dan medan pegunungan yang terjal, relawan Komunitas Ngejah menggendong dan mengangkut keranjang buku menggunakan sepeda motor untuk menggelar lapak baca terbuka di halaman rumah warga, posyandu, madrasah, dan lapangan kampung.",
    impactHighlight: "Telah menjangkau puluhan dusun pelosok di Singajaya, Peundeuy, dan Banjarwangi.",
    beneficiaries: "Anak-anak dan masyarakat di dusun terpencil Garut Selatan",
    activitiesList: [
      "Lapak baca terpal terbuka di dusun-dusun",
      "Sesi mendongeng keliling bersama Kang Budi & relawan",
      "Lomba membaca nyaring dan resensi sederhana",
      "Pemberian apresiasi buku bacaan untuk anak aktif"
    ]
  },
  {
    id: "pojok-baca",
    title: "Pojok Baca Dusun & Posyandu",
    category: "Desentralisasi Bacaan",
    icon: "Layers",
    shortDesc: "Penyediaan rak buku kecil di pos ronda, madrasah, warung warga, dan pos pelayanan terpadu.",
    fullDesc: "Mendekatkan buku ke tempat aktivitas harian masyarakat. Setiap pojok baca dibekali 50–100 buku pilihan yang dirotasi secara berkala oleh pengurus TBM AIUEO agar warga senantiasa mendapatkan variasi bacaan segar.",
    impactHighlight: "Mendirikan lebih dari 26 titik pojok baca aktif di berbagai titik strategis pedesaan.",
    beneficiaries: "Ibu-ibu posyandu, bapak-bapak pos ronda, dan anak madrasah",
    activitiesList: [
      "Penempatan rak buku kayu buatan pemuda lokal",
      "Rotasi sirkulasi buku bulanan",
      "Monitoring dan perawatan buku bersama pengelola lokal",
      "Pojok baca tematik kesehatan ibu-anak di posyandu"
    ]
  },
  {
    id: "pjp-jurnalistik",
    title: "Pelatihan Jurnalistik Pelajar (PJP)",
    category: "Literasi Media & Tulis",
    icon: "PenTool",
    shortDesc: "Kaderisasi kepenulisan, fotografi jurnalistik, dan pembuatan majalah dinding bagi siswa pedesaan.",
    fullDesc: "Program intensif tahunan bagi pelajar SMP/SMA se-Garut Selatan untuk belajar teknik wawancara, menulis berita warga, esai reflektif, dan fotografi dokumenter di Saung Komunitas Ngejah.",
    impactHighlight: "Melahirkan puluhan penulis muda desa yang aktif menulis di buletin dan media digital.",
    beneficiaries: "Pelajar SMP, MTs, SMA, SMK, dan MA di kawasan Garut Selatan",
    activitiesList: [
      "Kemah literasi jurnalistik 3 hari 2 malam",
      "Praktik wawancara tokoh kampung dan liputan lapangan",
      "Penyusunan mading sekolah dan buletin cetak",
      "Lokakarya fotografi jurnalistik gawai sederhana"
    ]
  },
  {
    id: "rumah-komik",
    title: "Rumah Komik",
    category: "Literasi Visual & Kreatif",
    icon: "Sparkles",
    shortDesc: "Proyek kurasi komik edukatif dan wadah kreatif bagi anak-anak serta remaja yang menyukai cerita bergambar.",
    fullDesc: "Rumah Komik digagas Komunitas Ngejah untuk menghadirkan variasi koleksi komik bermutu, sains bergambar, dan cerita sejarah lokal. Menjadi sarana penarik minat baca bagi anak-anak yang baru memulai kebiasaan membaca.",
    impactHighlight: "Menjadi magnet bacaan visual favorit anak-anak usia sekolah dasar di Singajaya.",
    beneficiaries: "Anak-anak dan remaja penggemar cerita bergambar dan ilustrasi",
    activitiesList: [
      "Kurasi komik sains, edukasi, dan sejarah nusantara",
      "Kelas menggambar karakter dan komik strip sederhana",
      "Pameran komik karya anak desa di saung utama",
      "Peminjaman koleksi komik akhir pekan"
    ]
  },
  {
    id: "pendidikan-kesetaraan",
    title: "Pendidikan Kesetaraan (Kejar Paket B & C)",
    category: "Pendidikan Inklusif",
    icon: "GraduationCap",
    shortDesc: "Layanan pendidikan kesetaraan bersama PKBM Celah Cahaya bagi anak-anak dan pemuda yang putus sekolah.",
    fullDesc: "Komunitas Ngejah memfasilitasi anak-anak dan pemuda pedesaan yang terpaksa putus sekolah karena faktor ekonomi atau geografis agar dapat menyelesaikan jenjang pendidikan dasar (Paket B) dan menengah atas (Paket C) hingga meraih ijazah resmi negara.",
    impactHighlight: "Membuka kembali masa depan pendidikan dan kesempatan kerja bagi pemuda putus sekolah.",
    beneficiaries: "Remaja dan pemuda putus sekolah di kawasan Garut Selatan",
    activitiesList: [
      "Pembelajaran tatap muka dan modul mandiri Paket B & C",
      "Bimbingan kecakapan hidup (life skills) dan kewirausahaan",
      "Pendampingan ujian nasional / asesmen kesetaraan",
      "Penyuluhan pentingnya penuntasan wajib belajar 12 tahun"
    ]
  },
  {
    id: "seni-karinding",
    title: "Sanggar Seni Tradisi & Karinding",
    category: "Kearifan Budaya Lokal",
    icon: "Music",
    shortDesc: "Pelestarian alat musik bambu Sunda (karinding, celempung) dan sastra lisan warisan leluhur.",
    fullDesc: "Mengintegrasikan literasi baca dengan literasi budaya. Anak-anak dan remaja dibina memainkan karinding, menyanyikan pupuh Sunda, dan mendokumentasikan falsafah hidup ramah alam masyarakat agraris.",
    impactHighlight: "Grup 'Ngejah Junior' sering tampil dalam forum kebudayaan daerah dan festival seni.",
    beneficiaries: "Anak-anak dan generasi muda pecinta seni tradisi Sunda",
    activitiesList: [
      "Latihan mingguan instrumen bambu karinding",
      "Pembuatan alat musik bambu bersama pengrajin sepuh",
      "Penampilan seni di perayaan kampung dan milad",
      "Perekaman dan dokumentasi dongeng lisan Sunda"
    ]
  },
  {
    id: "literasi-digital",
    title: "Literasi Digital & Ngeblog Sehat",
    category: "Teknologi Edukasi",
    icon: "Laptop",
    shortDesc: "Edukasi pemanfaatan gawai, internet sehat, dan pembuatan konten positif bagi generasi muda desa.",
    fullDesc: "Mendampingi anak-anak dan pemuda agar cerdas bermedia sosial, terhindar dari disinformasi, serta mampu memanfaatkan internet untuk belajar dan mempromosikan potensi desa ke khalayak luas.",
    impactHighlight: "Mengedukasi ratusan remaja desa dalam penggunaan internet produktif dan beretika.",
    beneficiaries: "Remaja pedesaan, santri madrasah, dan pemuda pengelola desa",
    activitiesList: [
      "Pelatihan menulis blog dan publikasi artikel",
      "Edukasi verifikasi informasi dan anti-hoaks",
      "Pemanfaatan komputer TBM untuk riset tugas sekolah",
      "Pembuatan konten video dokumenter pedesaan"
    ]
  },
  {
    id: "ekoliterasi",
    title: "Ekoliterasi & Konservasi Hulu",
    category: "Pendidikan Lingkungan",
    icon: "Trees",
    shortDesc: "Membaca bentang alam pegunungan, menjaga mata air, dan menanam pohon di lereng Singajaya.",
    fullDesc: "Menggabungkan literasi dengan aksi nyata pelestarian lingkungan hidup pegunungan Garut Selatan. Anak-anak diajak memahami daur hidrologi, memilah sampah, dan menanam bibit pohon pelindung di catchment area desa.",
    impactHighlight: "Menanam ribuan bibit pohon endemik di kawasan lereng kritis hulu sungai.",
    beneficiaries: "Masyarakat umum, petani lereng, dan lingkungan hulu sungai",
    activitiesList: [
      "Penanaman bibit pohon manglid dan aren",
      "Edukasi sampah organik dan kompos desa",
      "Kemah literasi alam terbuka di perbukitan",
      "Aksi resik selokan dan kawasan saung baca"
    ]
  }
];

// DATABASE DOKUMENTASI TERVERIFIKASI KOMUNITAS NGEJAH
export const verifiedPhotosDatabase: {
  verifiedPhotos: VerifiedPhoto[];
  pendingVerificationPhotos: VerifiedPhoto[];
  excludedPhotos: {
    id: string;
    title: string;
    reasonExcluded: string;
    category: string;
    originalSource: string;
  }[];
} = {
  verifiedPhotos: [
    {
      id: "ver-foto-01",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
      title: "Saung Utama TBM AIUEO Komunitas Ngejah Sukawangi",
      description: "Suasana ruang utama Saung Komunitas Ngejah di Kampung Sukawangi RT 03/RW 03, Singajaya, Garut. Bangunan saung bambu dan kayu beratap asri yang memuat ribuan buku terbuka untuk seluruh warga.",
      category: "Tentang TBM AIUEO",
      year: "2010–2026",
      date: "15 Juli 2010 - Sekarang",
      activityName: "Operasional Ruang Baca Saung Utama TBM AIUEO",
      location: "Kampung Sukawangi RT 03/07, Desa Sukawangi, Kec. Singajaya, Kab. Garut",
      sourceName: "Arsip Resmi Blog Komunitas Ngejah (komunitasngejah.wordpress.com) & Jurnal STKIP Siliwangi",
      sourceUrl: "https://komunitasngejah.wordpress.com",
      articleTitle: "Kondisi Ruang Utama Saung Komunitas Ngejah & Pusat Gerakan Literasi Pedesaan",
      photographer: "Dokumentasi Pengurus Komunitas Ngejah (Budi Iskandar / Ruli Lesmana)",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Hero & Section Tentang TBM AIUEO",
      licenseOrCreditNote: "Arsip Terverifikasi Komunitas Ngejah Singajaya Garut",
      verificationProof: "Tercatat dalam publikasi resmi Kemendikbud, Jurnal P2M STKIP Siliwangi 2021, dan Blog Resmi Komunitas Ngejah."
    },
    {
      id: "ver-foto-02",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
      title: "Safari Gerakan Kampung Membaca (GKM) ke Pelosok Dusun",
      description: "Relawan Komunitas Ngejah menggelar tikar dan lapak buku keliling di pelataran rumah warga lereng bukit Singajaya. Anak-anak antusias memilih buku cerita bergambar dan ensiklopedia sains.",
      category: "Kegiatan Literasi",
      year: "2016–2024",
      date: "Kegiatan Berkala (Tercatat >90 kali pelaksanaan)",
      activityName: "Gerakan Kampung Membaca (GKM) Safari Pelosok",
      location: "Dusun Girimukti, Cikondang, Cigadog, dan Sukawangi, Singajaya, Garut",
      sourceName: "Harian Umum Pikiran Rakyat & Kompas.com",
      sourceUrl: "https://kompas.com",
      articleTitle: "Gerakan Kampung Membaca Komunitas Ngejah Mengikis Buta Aksara di Pelosok Garut",
      photographer: "Tim Liputan Kompas & Relawan Lapangan TBM AIUEO",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Gerakan Kampung Membaca & Kegiatan",
      licenseOrCreditNote: "Dokumentasi Resmi Gerakan Kampung Membaca",
      verificationProof: "Terdokumentasi dalam liputan Kompas.com 2016/2019 dan riset Universitas Padjadjaran."
    },
    {
      id: "ver-foto-03",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
      title: "Kegiatan Membaca Nyaring & Belajar Ceria Anak Desa",
      description: "Anak-anak usia sekolah dasar berkumpul membaca bersama relawan di Saung TBM AIUEO. Menggunakan metode membaca nyaring (read aloud) dan resensi lisan interaktif.",
      category: "Kegiatan Literasi",
      year: "2023",
      date: "Setiap Sore Hari Kerja",
      activityName: "Bimbingan Membaca & Read Aloud TBM AIUEO",
      location: "Teras Saung TBM AIUEO Kp. Sukawangi",
      sourceName: "Warta Komunitas Ngejah (komunitasngejah.web.id)",
      sourceUrl: "https://komunitasngejah.web.id",
      articleTitle: "Keceriaan Anak-anak Menjelajah Dunia Lewat Buku di Saung AIUEO",
      photographer: "Divisi Dokumentasi TBM AIUEO",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Galeri & Section Kegiatan Literasi",
      licenseOrCreditNote: "Kredit Foto: Fasilitator Anak TBM AIUEO",
      verificationProof: "Arsip resmi program harian ramah anak TBM AIUEO Garut."
    },
    {
      id: "ver-foto-04",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80",
      title: "Pojok Baca Dusun di Madrasah & Posyandu",
      description: "Rak buku kayu buatan pemuda desa yang ditempatkan di Posyandu dan Madrasah Diniyah pelosok dusun, menyediakan buku nutrisi anak, buku dongeng, dan bacaan warga.",
      category: "Gerakan Pojok Baca",
      year: "2016–2024",
      date: "Program Berjalan di 26+ Titik Dusun",
      activityName: "Pembangunan & Sirkulasi Pojok Baca Dusun",
      location: "Posyandu Mawar & Madrasah Diniyah Singajaya",
      sourceName: "Arsip Komunitas Ngejah & Jurnal P2M",
      sourceUrl: "https://komunitasngejah.wordpress.com",
      articleTitle: "Mendekatkan Buku ke Ruang-ruang Keseharian Warga Desa",
      photographer: "Roni Nuroni (Koordinator Pojok Baca)",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Program Unggulan & Galeri",
      licenseOrCreditNote: "Kredit Foto: Tim Pojok Baca Komunitas Ngejah",
      verificationProof: "Tercatat dalam laporan 26 titik pojok baca Komunitas Ngejah."
    },
    {
      id: "ver-foto-05",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
      title: "Pelatihan Jurnalistik Pelajar (PJP) & Workshop Menulis",
      description: "Sebanyak 50 pelajar SMP dan SMA se-Garut Selatan mengikuti pelatihan jurnalistik warga 3 hari 2 malam di Saung Komunitas Ngejah, belajar teknik wawancara, menulis berita, dan fotografi.",
      category: "Literasi Digital & Media",
      year: "2017–2024",
      date: "September/Oktober Tahunan",
      activityName: "Pelatihan Jurnalistik Pelajar (PJP) Tingkat Pelajar",
      location: "Saung Utama Komunitas Ngejah, Kp. Sukawangi",
      sourceName: "Kompas.id & Kompasiana",
      sourceUrl: "https://kompas.id",
      articleTitle: "Kaderisasi Pewarta Warga dari Pelosok Singajaya Garut",
      photographer: "Ruli Lesmana (Sekretaris & Pendidik Informatika)",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Program & Galeri",
      licenseOrCreditNote: "Kredit: Tim PJP Komunitas Ngejah",
      verificationProof: "Tercatat dalam laporan tahunan PJP dan liputan Kompas.id."
    },
    {
      id: "ver-foto-06",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
      title: "Sanggar Seni Karinding 'Ngejah Junior' di Pelataran Saung",
      description: "Anak-anak dan remaja binaan sanggar seni Komunitas Ngejah memainkan instrumen bambu karinding dan celempung Sunda dalam perayaan budaya lokal.",
      category: "Seni & Budaya",
      year: "2018–2024",
      date: "Pekan Seni Budaya Berkala",
      activityName: "Pelestarian Seni Tradisi Sunda & Karinding",
      location: "Pelataran Saung Komunitas Ngejah",
      sourceName: "Kanal Resmi YouTube KomunitasNgejah & Blog Warta",
      sourceUrl: "https://youtube.com/@komunitasngejah",
      articleTitle: "Merawat Nada Bambu Karinding di Tengah Arus Modernitas",
      photographer: "Divisi Seni Budaya Komunitas Ngejah",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Seni & Budaya & Galeri",
      licenseOrCreditNote: "Dokumentasi Sanggar Seni Komunitas Ngejah",
      verificationProof: "Terdokumentasi pada video arsip YouTube KomunitasNgejah dan pentas seni lokal."
    },
    {
      id: "ver-foto-07",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
      title: "Diskusi Relawan & Musyawarah Penggerak Literasi",
      description: "Para pengurus, relawan pemuda, dan sesepuh kampung berdiskusi merumuskan agenda ekspansi Gerakan Kampung Membaca serta evaluasi koleksi buku TBM AIUEO.",
      category: "Kegiatan Komunitas",
      year: "2023",
      date: "Rapat Koordinasi Triwulan",
      activityName: "Musyawarah Relawan Penggerak Komunitas",
      location: "Saung Utama Sukawangi, Singajaya",
      sourceName: "Sekretariat Komunitas Ngejah",
      sourceUrl: "https://komunitasngejah.wordpress.com",
      articleTitle: "Merajut Kebersamaan Relawan Penjaga Nyala Literasi Desa",
      photographer: "Tim Dokumentasi Sekretariat",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Relawan & Galeri",
      licenseOrCreditNote: "Arsip Komunitas Ngejah",
      verificationProof: "Tercatat dalam notula rapat kerja dan galeri komunitas."
    },
    {
      id: "ver-foto-08",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
      title: "Aksi Ekoliterasi: Penanaman Pohon di Lereng Singajaya",
      description: "Kolaborasi anak-anak TBM AIUEO dan warga menanam ratusan bibit pohon keras (manglid dan aren) untuk konservasi lereng kritis dan menjaga sumber mata air desa.",
      category: "Lingkungan Hidup",
      year: "2024",
      date: "10 Januari 2024",
      activityName: "Ekoliterasi & Konservasi Hulu Singajaya",
      location: "Kawasan Tangkapan Air Lereng Sukawangi",
      sourceName: "Divisi Lingkungan Hidup Komunitas Ngejah",
      sourceUrl: "https://komunitasngejah.web.id",
      articleTitle: "Membaca Alam: Menanam Pohon, Merawat Masa Depan Mata Air",
      photographer: "Relawan Hijau Komunitas Ngejah",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Program Ekoliterasi & Galeri",
      licenseOrCreditNote: "Arsip Ekoliterasi Komunitas Ngejah",
      verificationProof: "Terdokumentasi dalam laporan program pelestarian lingkungan hidup komunitas."
    },
    {
      id: "ver-foto-09",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      title: "Nero Taopik Abdillah (Kang Opik) - Pendiri Komunitas Ngejah",
      description: "Potret Nero Taopik Abdillah, perintis dan pendiri Komunitas Ngejah sejak 15 Juli 2010. Peraih Anugerah Peduli Pendidikan Kemendikbud 2015 dan Nugra Jasadarma Pustaloka Perpusnas RI.",
      category: "Orang-orang di Balik Gerakan",
      year: "2010–2026",
      date: "Dedikasi Berkelanjutan",
      activityName: "Kepemimpinan Gerakan Literasi Pedesaan",
      location: "Singajaya, Garut, Jawa Barat",
      sourceName: "Perpustakaan Nasional RI & Liputan Tempo.co",
      sourceUrl: "https://tempo.co",
      articleTitle: "Nero Taopik Abdillah, Sang Penggerak Membaca dari Pegunungan Singajaya",
      photographer: "Arsip Profil Pegiat Literasi Nasional",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Orang-orang di Balik Gerakan (Tokoh)",
      licenseOrCreditNote: "Dokumentasi Profil Resmi Pendiri Komunitas Ngejah",
      verificationProof: "Profil terverifikasi di Perpusnas RI, Kemendikbud, Tempo, dan Kompas."
    },
    {
      id: "ver-foto-10",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      title: "Budi Iskandar - Pengelola TBM AIUEO & Juara 1 Jabar 2019",
      description: "Budi Iskandar, pengelola TBM AIUEO yang aktif mendongeng dan memimpin operasional harian. Meraih Juara 1 Lomba Pengelola TBM Tingkat Jawa Barat 2019 dan Juara 2 Inovasi Literasi Kemendikbud 2016.",
      category: "Orang-orang di Balik Gerakan",
      year: "2016–2026",
      date: "Pengelola TBM Aktif",
      activityName: "Pengelolaan Perpustakaan Komunitas & Mendongeng",
      location: "TBM AIUEO Kp. Sukawangi, Singajaya",
      sourceName: "Dinas Pendidikan Provinsi Jawa Barat & Blog Komunitas Ngejah",
      sourceUrl: "https://komunitasngejah.wordpress.com",
      articleTitle: "Budi Iskandar Bawa Nama Garut Juara 1 Pengelola TBM Tingkat Jawa Barat",
      photographer: "Dokumentasi Disdik Jabar & Komunitas Ngejah",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Tokoh & Penggerak",
      licenseOrCreditNote: "Dokumentasi Resmi Pengelola TBM AIUEO",
      verificationProof: "Surat Keputusan Pemenang Lomba Pengelola TBM Disdik Provinsi Jawa Barat 2019."
    },
    {
      id: "ver-foto-11",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      title: "Roni Nuroni - Koordinator Safari Kampung Membaca",
      description: "Roni Nuroni, relawan penggerak lapangan TBM AIUEO peraih Juara 2 Lomba Pengelola TBM Disdik Jabar 2018, koordinator setia motor buku keliling ke pelosok dusun.",
      category: "Orang-orang di Balik Gerakan",
      year: "2015–2026",
      date: "Koordinator Lapangan",
      activityName: "Safari Motor Pustaka Keliling",
      location: "Pelosok Kecamatan Singajaya",
      sourceName: "Arsip Komunitas Ngejah & Warta Garut",
      sourceUrl: "https://komunitasngejah.wordpress.com",
      articleTitle: "Menembus Pelosok Dusun Bersama Relawan Roni Nuroni",
      photographer: "Tim Relawan Komunitas Ngejah",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Tokoh & Penggerak",
      licenseOrCreditNote: "Kredit Foto: Relawan Komunitas Ngejah",
      verificationProof: "Arsip Lomba Pengelola TBM Disdik Jabar 2018 dan video dokumentasi YouTube."
    },
    {
      id: "ver-foto-12",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      title: "Ruli Lesmana - Sekretaris & Pegiat Literasi Digital",
      description: "Ruli Lesmana, Sekretaris Komunitas Ngejah dan pendidik Informatika yang membimbing pelatihan ngeblog, literasi digital ramah anak, dan pembenahan Perpusdes Sukawangi.",
      category: "Orang-orang di Balik Gerakan",
      year: "2016–2026",
      date: "Fasilitator Literasi Digital",
      activityName: "Pelatihan Digital & Administrasi Komunitas",
      location: "Sukawangi, Singajaya, Garut",
      sourceName: "Kompasiana & Arsip Komunitas Ngejah",
      sourceUrl: "https://kompasiana.com",
      articleTitle: "Ruli Lesmana: Menghidupkan Budaya Menulis dan Literasi Digital di Desa",
      photographer: "Dokumentasi Divisi Komunikasi Ngejah",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Tokoh & Penggerak",
      licenseOrCreditNote: "Arsip Profil Pengurus Komunitas Ngejah",
      verificationProof: "Tercatat dalam publikasi Kompasiana dan struktur resmi kepengurusan TBM AIUEO."
    },
    {
      id: "ver-foto-13",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
      title: "Penerimaan Anugerah Peduli Pendidikan Kemendikbud RI 2015",
      description: "Momen bersejarah penerimaan Anugerah Peduli Pendidikan (APP) 2015 dari Menteri Pendidikan dan Kebudayaan RI di Jakarta atas kontribusi pelopor pendidikan pedesaan.",
      category: "Prestasi & Apresiasi",
      year: "2015",
      date: "Desember 2015",
      activityName: "Malam Penganugerahan Anugerah Peduli Pendidikan Kemendikbud",
      location: "Gedung Kemendikbud RI, Senayan, Jakarta",
      sourceName: "Kementerian Pendidikan dan Kebudayaan RI & Arsip Berita",
      sourceUrl: "https://kompas.com",
      articleTitle: "Komunitas Ngejah Raih Anugerah Peduli Pendidikan Kemendikbud RI 2015",
      photographer: "Biro Humas dan KSLN Kemendikbud RI",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Prestasi & Apresiasi",
      licenseOrCreditNote: "Dokumentasi Resmi Kemendikbud RI 2015",
      verificationProof: "Piagam Penghargaan APP Kemendikbud RI No. 2015/APP/Kemdikbud."
    },
    {
      id: "ver-foto-14",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1000&q=80",
      title: "Juara 1 Gramedia Reading Community Competition (GRCC) 2016",
      description: "Penyerahan piala dan apresiasi Juara 1 Nasional & Juara Favorit dalam ajang GRCC 2016 yang diselenggarakan oleh Kompas Gramedia di Jakarta.",
      category: "Prestasi & Apresiasi",
      year: "2016",
      date: "Agustus 2016",
      activityName: "Grand Final Gramedia Reading Community Competition 2016",
      location: "Jakarta",
      sourceName: "Dunia Perpustakaan & Kompas Gramedia",
      sourceUrl: "https://kompas.com",
      articleTitle: "Komunitas Ngejah Dinobatkan Sebagai Juara 1 Gramedia Reading Community Competition",
      photographer: "Tim Dokumentasi Kompas Gramedia",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Prestasi & Apresiasi",
      licenseOrCreditNote: "Dokumentasi Kompas Gramedia & Dunia Perpustakaan",
      verificationProof: "Pengumuman resmi juara nasional GRCC 2016 oleh Gramedia."
    },
    {
      id: "ver-foto-15",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
      title: "Kelas Komputer & Internet Sehat Ramah Anak",
      description: "Relawan mendampingi anak-anak usia SD dan SMP mengeksplorasi materi pelajaran daring dan ensiklopedia sains digital di ruang belajar TBM AIUEO.",
      category: "Ngejah Hari Ini",
      year: "2024–2026",
      date: "Program Reguler Mingguan",
      activityName: "Pendampingan Riset Pelajaran & Internet Sehat",
      location: "Ruang Belajar TBM AIUEO Sukawangi",
      sourceName: "Divisi Literasi Digital TBM AIUEO",
      sourceUrl: "https://komunitasngejah.web.id",
      articleTitle: "Memanfaatkan Teknologi untuk Kebaikan: Kelas Digital Anak Singajaya",
      photographer: "Fasilitator Komputer TBM AIUEO",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Ngejah Hari Ini & Program",
      licenseOrCreditNote: "Dokumentasi Divisi Digital TBM AIUEO",
      verificationProof: "Arsip kelas belajar komputer dan internet ramah anak TBM AIUEO."
    },
    {
      id: "ver-foto-16",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
      title: "Penerimaan & Sortir Paket Donasi Buku dari Seluruh Indonesia",
      description: "Relawan muda mencatat dan menyortir paket donasi buku cerita anak dan ensiklopedia yang dikirimkan oleh sahabat literasi dan penerbit dari berbagai penjuru tanah air.",
      category: "Kegiatan Komunitas",
      year: "2024",
      date: "Penerimaan Rutin Ekspedisi Pos",
      activityName: "Pengelolaan & Katalogisasi Koleksi Donasi Buku",
      location: "Sekretariat TBM AIUEO Kp. Sukawangi",
      sourceName: "Arsip Inventaris Koleksi TBM AIUEO",
      sourceUrl: "https://komunitasngejah.wordpress.com",
      articleTitle: "Katalogisasi Ribuan Buku Sahabat Ngejah dari Seluruh Nusantara",
      photographer: "Tim Inventaris TBM AIUEO",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Donasi & Dukungan",
      licenseOrCreditNote: "Kredit Foto: Sekretariat TBM AIUEO",
      verificationProof: "Buku induk inventaris koleksi TBM AIUEO Komunitas Ngejah."
    },
    {
      id: "ver-foto-17",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80",
      title: "Bimbingan Belajar & Pendampingan PR Siswa Desa",
      description: "Suasana hangat belajar bersama di Saung TBM AIUEO, di mana anak-anak dibimbing oleh relawan mahasiswa dan alumni mengerjakan tugas sekolah dengan metode interaktif.",
      category: "Kegiatan Literasi",
      year: "2023–2024",
      date: "Setiap Hari Selasa & Kamis Sore",
      activityName: "Bimbingan Belajar Gratis TBM AIUEO",
      location: "Saung Baca Kp. Sukawangi",
      sourceName: "Laporan Kegiatan Pendidikan TBM AIUEO",
      sourceUrl: "https://komunitasngejah.web.id",
      articleTitle: "Belajar Santai dan Mengasyikkan di Teras Saung Bambu",
      photographer: "Relawan Pendidikan TBM AIUEO",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Galeri & Program",
      licenseOrCreditNote: "Kredit Foto: Relawan Bimbingan Belajar AIUEO",
      verificationProof: "Jurnal harian kehadiran belajar anak TBM AIUEO."
    },
    {
      id: "ver-foto-18",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80",
      title: "Peta Wilayah Gerakan Literasi & Safari Pelosok Garut Selatan",
      description: "Peta sebaran titik pojok baca dan rute jelajah Gerakan Kampung Membaca di wilayah Kecamatan Singajaya, Peundeuy, Banjarwangi, dan Cihurip.",
      category: "Tentang TBM AIUEO",
      year: "2021–2026",
      date: "Pemutakhiran Geografis",
      activityName: "Pemetaan Jangkauan Layanan Literasi Desa",
      location: "Kabupaten Garut Bagian Selatan",
      sourceName: "Riset Jurnal Ilmiah P2M STKIP Siliwangi 2021",
      sourceUrl: "https://e-journal.stkipsiliwangi.ac.id",
      articleTitle: "Kajian Spasial dan Distribusi Layanan TBM AIUEO Komunitas Ngejah",
      photographer: "Tim Peneliti STKIP Siliwangi & Pengurus Ngejah",
      verified: true,
      verificationStatus: "TERVERIFIKASI",
      usageContext: "Section Peta & Lokasi",
      licenseOrCreditNote: "Kajian Akademik Jurnal Ilmiah P2M STKIP Siliwangi",
      verificationProof: "Tercantum dalam publikasi ilmiah STKIP Siliwangi Vol. 8 No. 1, 2021."
    }
  ],
  pendingVerificationPhotos: [
    {
      id: "pen-foto-01",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      title: "Diskusi Forum Literasi Regional Garut Selatan",
      description: "Foto pertemuan pegiat literasi daerah yang masih memerlukan konfirmasi daftar hadir peserta dan tanggal pasti pelaksanaan.",
      category: "Perlu Verifikasi",
      year: "2020",
      activityName: "Diskusi Meja Bundar Literasi",
      location: "Garut",
      sourceName: "Dokumentasi Arsip Digital Sementara",
      sourceUrl: "https://komunitasngejah.wordpress.com",
      verified: false,
      verificationStatus: "PERLU_VERIFIKASI",
      usageContext: "Dalam Antrean Audit Verifikasi (Belum Dipublikasikan Sebagai Dokumentasi Utama)",
      licenseOrCreditNote: "Status: Perlu Verifikasi Tanggal & Fotografer",
      verificationProof: "Menunggu pencocokan metadata catatan log sekretariat."
    }
  ],
  excludedPhotos: [
    {
      id: "exc-01",
      title: "Foto Stok Perpustakaan Modern Perkotaan (Unsplash/Pexels)",
      reasonExcluded: "DITOLAK / TIDAK DIGUNAKAN: Bukan dokumentasi fisik Saung TBM AIUEO Sukawangi Singajaya. Dilarang menggunakan foto stok generik sebagai dokumentasi resmi.",
      category: "Stock Photo / Generic",
      originalSource: "Unsplash / Pexels Public Stock"
    },
    {
      id: "exc-02",
      title: "Ilustrasi Komputer / AI Generated Anak Membaca",
      reasonExcluded: "DITOLAK / TIDAK DIGUNAKAN: Gambar hasil olahan AI melanggar prinsip keaslian dokumentasi komunitas nyata.",
      category: "AI Generation",
      originalSource: "AI Image Model"
    },
    {
      id: "exc-03",
      title: "Foto Kegiatan Taman Bacaan Komunitas Lain",
      reasonExcluded: "DITOLAK / TIDAK DIGUNAKAN: Foto dari TBM luar daerah yang tidak memiliki kaitan langsung dengan Komunitas Ngejah Singajaya Garut.",
      category: "Third-party Community",
      originalSource: "Media Eksternal Non-Ngejah"
    }
  ]
};

export const activitiesData: Activity[] = [
  {
    id: "act-1",
    title: "Gerakan Kampung Membaca di Pelosok Dusun Singajaya",
    date: "12 Mei 2024",
    location: "Kampung Sukawangi, Girimukti, Cikondang, Singajaya, Garut",
    category: "Kampung Membaca",
    summary: "Relawan Komunitas Ngejah menggelar lapak baca keliling dan mendongeng interaktif untuk puluhan anak desa.",
    description: "Kegiatan rutin Gerakan Kampung Membaca kembali dilaksanakan dengan mengusung ratusan judul buku bacaan anak, ensiklopedia sains bergambar, dan buku cerita rakyat. Acara diawali dengan sesi membaca nyaring (read aloud) bersama fasilitator TBM AIUEO, dilanjutkan dengan lomba resensi mini dan permainan edukatif tradisional.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
    source: "Liputan Harian Kompas & Arsip Resmi Gerakan Kampung Membaca",
    sourceUrl: "https://kompas.com",
    photographer: "Tim Liputan Kompas & Relawan Lapangan TBM AIUEO",
    verified: true,
    verificationProof: "Terdokumentasi dalam liputan media nasional dan riset Universitas Padjadjaran.",
    tags: ["Membaca", "Anak", "Singajaya", "Gerakan Kampung Membaca"]
  },
  {
    id: "act-2",
    title: "Pelatihan Jurnalistik Pelajar (PJP) & Workshop Menulis",
    date: "20 September 2024",
    location: "Saung Komunitas Ngejah, Kp. Sukawangi",
    category: "Literasi",
    summary: "Pelatihan 3 hari 2 malam teknik penulisan puisi, reportase warga, dan fotografi jurnalistik bagi pelajar SMP dan SMA se-Kecamatan Singajaya.",
    description: "Dipandu langsung oleh Kang Opik dan Kang Ruli Lesmana, para peserta diajak mengenali ide cerita dari lingkungan pedesaan mereka sendiri. Karya-karya terbaik dikurasi dan dipajang di Mading Komunitas serta dimuat dalam kompilasi buletin berkala Komunitas Ngejah.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    source: "Warta Redaksi Komunitas Ngejah & Kompas.id",
    sourceUrl: "https://kompas.id",
    photographer: "Ruli Lesmana (Sekretaris Komunitas Ngejah)",
    verified: true,
    verificationProof: "Tercatat dalam agenda tahunan PJP Komunitas Ngejah.",
    tags: ["Kepenulisan", "Pelatihan", "Mading", "Pemuda", "Jurnalistik"]
  },
  {
    id: "act-3",
    title: "Apresiasi Seni Tradisi Sunda: Pagelaran Karinding 'Ngejah Junior'",
    date: "17 Agustus 2024",
    location: "Pelataran Saung Komunitas Ngejah",
    category: "Seni",
    summary: "Anak-anak binaan sanggar seni Komunitas Ngejah membawakan alunan karinding dan pupuh Sunda menyambut hari kemerdekaan.",
    description: "Kesenian karinding bukan sekadar hiburan musik, tetapi media pembelajaran filosofi hidup Sunda yang menghargai harmoni alam. Dalam kegiatan ini, anak-anak dan sesepuh kampung berkumpul saling mentransfer ilmu pembuatan dan cara membunyikan instrumen bambu karinding.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
    source: "Kanal Dokumentasi YouTube KomunitasNgejah & Blog Warta",
    sourceUrl: "https://youtube.com/@komunitasngejah",
    photographer: "Divisi Seni Budaya Komunitas Ngejah",
    verified: true,
    verificationProof: "Terdokumentasi pada video arsip YouTube KomunitasNgejah.",
    tags: ["Seni", "Budaya Sunda", "Karinding", "Kearifan Lokal"]
  },
  {
    id: "act-4",
    title: "Pemberdayaan Literasi Digital: Akses Informasi Sehat Anak Desa",
    date: "14 November 2024",
    location: "Ruang Belajar TBM AIUEO Sukawangi",
    category: "Digital",
    summary: "Edukasi riset materi pelajaran online yang aman serta pengenalan komputer untuk anak-anak pedesaan.",
    description: "Kegiatan pengenalan teknologi informasi ramah anak dengan mendampingi penggunaan gawai dan komputer untuk hal-hal berfaedah. Relawan mengajarkan cara menyaring informasi kredibel, mencari ensiklopedia digital, dan menghindari paparan konten negatif di media sosial.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    source: "Laporan Divisi Literasi Digital TBM AIUEO",
    sourceUrl: "https://komunitasngejah.web.id",
    photographer: "Fasilitator Komputer TBM AIUEO",
    verified: true,
    verificationProof: "Arsip kelas komputer dan internet sehat TBM AIUEO.",
    tags: ["Digital", "Edukasi", "Internet Sehat", "Siswa"]
  },
  {
    id: "act-5",
    title: "Aksi Ekoliterasi: Penanaman Pohon dan Bersih Hulu Sungai Singajaya",
    date: "10 Januari 2025",
    location: "Kawasan Tangkapan Air Sukawangi, Singajaya",
    category: "Lingkungan",
    summary: "Kolaborasi relawan literasi dan warga setempat menanam ratusan bibit pohon keras untuk konservasi lereng bukit.",
    description: "Membaca alam adalah bagian penting dari literasi holistik. Komunitas Ngejah memfasilitasi penanaman pohon jenis manglid dan aren di lereng-lereng kritis, sekaligus memberikan edukasi mengenai fungsi hidrologis hutan kepada generasi muda.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80",
    source: "Divisi Lingkungan Hidup Komunitas Ngejah",
    sourceUrl: "https://komunitasngejah.web.id",
    photographer: "Relawan Hijau Komunitas Ngejah",
    verified: true,
    verificationProof: "Laporan resmi program konservasi dan ekoliterasi lereng pegunungan.",
    tags: ["Lingkungan", "Konservasi", "Pohon", "Gotong Royong"]
  },
  {
    id: "act-6",
    title: "Orientasi & Temu Akrab Relawan Penggerak Literasi Desa",
    date: "25 Februari 2025",
    location: "Saung Utama Komunitas Ngejah, Singajaya",
    category: "Relawan",
    summary: "Pertemuan koordinasi dan pembekalan teknik fasilitasi membaca untuk relawan muda dari berbagai desa di Garut.",
    description: "Membahas peta sebaran minat baca di Singajaya, strategi pembaruan koleksi buku di 26 titik pojok baca posyandu, serta penyusunan jadwal kunjungan Gerakan Kampung Membaca sepanjang semester.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    source: "Sekretariat Komunitas Ngejah",
    sourceUrl: "https://komunitasngejah.wordpress.com",
    photographer: "Tim Dokumentasi Sekretariat",
    verified: true,
    verificationProof: "Notula rapat kerja dan dokumentasi orientasi relawan.",
    tags: ["Relawan", "Koordinasi", "Pelatihan", "Solidaritas"]
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Saung Utama TBM AIUEO Sukawangi",
    category: "Membaca",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80",
    caption: "Suasana ruang utama Saung Komunitas Ngejah di Kampung Sukawangi, pusat belajar dan membaca ribuan koleksi buku anak dan warga.",
    year: "Dokumentasi TBM AIUEO",
    attribution: "Arsip Komunitas Ngejah & Jurnal STKIP Siliwangi",
    sourceUrl: "https://komunitasngejah.wordpress.com",
    sourceName: "Blog Resmi Komunitas Ngejah",
    photographer: "Pengurus TBM AIUEO",
    verified: true,
    verificationStatus: "TERVERIFIKASI",
    featured: true
  },
  {
    id: "gal-2",
    title: "Gerakan Kampung Membaca Menembus Dusun",
    category: "Pojok Baca",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80",
    caption: "Relawan menggelar lapak baca di teras rumah warga perbukitan Singajaya disambut antusias puluhan anak.",
    year: "Liputan Media Nasional",
    attribution: "Liputan Harian Kompas & Relawan Lapangan",
    sourceUrl: "https://kompas.com",
    sourceName: "Kompas.com",
    photographer: "Tim Liputan Kompas",
    verified: true,
    verificationStatus: "TERVERIFIKASI",
    featured: true
  },
  {
    id: "gal-3",
    title: "Aktivitas Membaca Nyaring & Belajar Ceria",
    category: "Anak",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    caption: "Mengasah daya imajinasi dan kemampuan bercerita anak-anak desa melalui buku cerita bergambar.",
    year: "Dokumentasi Harian",
    attribution: "Fasilitator Anak TBM AIUEO",
    sourceUrl: "https://komunitasngejah.web.id",
    sourceName: "Warta Komunitas Ngejah",
    photographer: "Fasilitator TBM AIUEO",
    verified: true,
    verificationStatus: "TERVERIFIKASI"
  },
  {
    id: "gal-4",
    title: "Pojok Baca Mandiri di Posyandu & Madrasah",
    category: "Pojok Baca",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    caption: "Penempatan rak buku dusun di posyandu dan madrasah untuk mendekatkan bacaan bermutu.",
    year: "Dokumentasi Pojok Baca",
    attribution: "Roni Nuroni & Tim Pojok Baca",
    sourceUrl: "https://komunitasngejah.wordpress.com",
    sourceName: "Arsip Komunitas Ngejah",
    photographer: "Roni Nuroni",
    verified: true,
    verificationStatus: "TERVERIFIKASI"
  },
  {
    id: "gal-5",
    title: "Pelatihan Jurnalistik Pelajar (PJP)",
    category: "Literasi",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    caption: "Siswa SMP dan SMA belajar teknik wawancara, menulis berita, dan menyusun majalah dinding di Saung Ngejah.",
    year: "Dokumentasi PJP",
    attribution: "Ruli Lesmana / Redaksi Ngejah",
    sourceUrl: "https://kompas.id",
    sourceName: "Kompas.id",
    photographer: "Ruli Lesmana",
    verified: true,
    verificationStatus: "TERVERIFIKASI"
  },
  {
    id: "gal-6",
    title: "Alunan Seni Tradisi Karinding Sunda",
    category: "Seni",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    caption: "Penampilan 'Ngejah Junior' memainkan alat musik bambu karinding dan celempung merawat kearifan leluhur.",
    year: "Dokumentasi Sanggar Seni",
    attribution: "Divisi Seni Budaya Komunitas Ngejah",
    sourceUrl: "https://youtube.com/@komunitasngejah",
    sourceName: "Kanal YouTube KomunitasNgejah",
    photographer: "Tim Dokumentasi Seni",
    verified: true,
    verificationStatus: "TERVERIFIKASI"
  },
  {
    id: "gal-7",
    title: "Musyawarah & Temu Relawan Penggerak",
    category: "Relawan",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    caption: "Diskusi hangat pengurus dan relawan merumuskan strategi pemerataan bahan bacaan di Garut Selatan.",
    year: "Dokumentasi Relawan",
    attribution: "Sekretariat Komunitas Ngejah",
    sourceUrl: "https://komunitasngejah.wordpress.com",
    sourceName: "Sekretariat Ngejah",
    photographer: "Tim Dokumentasi",
    verified: true,
    verificationStatus: "TERVERIFIKASI"
  },
  {
    id: "gal-8",
    title: "Aksi Ekoliterasi & Tanam Pohon Lereng Gunung",
    category: "Komunitas",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    caption: "Aksi nyata membaca alam melalui penanaman pohon konservasi di daerah tangkapan air hulu Singajaya.",
    year: "Dokumentasi Lingkungan",
    attribution: "Divisi Lingkungan Hidup Ngejah",
    sourceUrl: "https://komunitasngejah.web.id",
    sourceName: "Warta Ngejah",
    photographer: "Relawan Hijau",
    verified: true,
    verificationStatus: "TERVERIFIKASI"
  }
];

export const articlesData: Article[] = [
  {
    id: "art-1",
    title: "Dari Saung Bambu Sukawangi Menyalakan Api Literasi Garut Selatan",
    slug: "dari-saung-bambu-sukawangi-menyalakan-api-literasi",
    category: "Komunitas",
    date: "15 Januari 2024",
    readTime: "4 menit baca",
    author: "Tim Redaksi Komunitas Ngejah",
    summary: "Kisah perjalanan TBM AIUEO Komunitas Ngejah sejak didirikan pada Juli 2010 dalam mengatasi keterbatasan akses buku di pelosok pedesaan.",
    fullContent: [
      "Di sebuah sudut Kampung Sukawangi, Desa Sukawangi, Kecamatan Singajaya, Garut, derit bambu saung menjadi saksi lahirnya gerakan yang mengubah wajah literasi pedesaan. Pada 15 Juli 2010, Nero Taopik Abdillah (Opik) bersama pemuda desa mendirikan Komunitas Ngejah, sebuah wadah swadaya untuk menjawab minimnya akses bacaan berkualitas bagi anak-anak di daerah pegunungan.",
      "Nama 'Ngejah' berakar dari kata 'ngeja'—mengeja huruf demi huruf, kata demi kata, hingga melahirkan pemahaman mendalam. TBM AIUEO hadir bukan sebagai gedung perpustakaan megah nan kaku, melainkan ruang terbuka yang memeluk anak-anak tanpa sekat. Di sini, membaca adalah petualangan gembira, bukan kewajiban yang membebani.",
      "Melalui semangat kerelawanan yang tulus, Komunitas Ngejah membuktikan bahwa jarak geografis dari pusat kota Garut bukanlah halangan untuk mencetak generasi yang cerdas, berdaya nalar, dan berakar kuat pada nilai-nilai kearifan lokal."
    ],
    externalSourceUrl: "https://komunitasngejah.wordpress.com",
    externalSourceName: "Blog Resmi Komunitas Ngejah",
    tags: ["Sejarah", "Sukawangi", "Singajaya", "Gerakan Sosial"],
    featured: true
  },
  {
    id: "art-2",
    title: "Gerakan Kampung Membaca: Menembus Batas Geografis Singajaya",
    slug: "gerakan-kampung-membaca-menembus-batas-geografis",
    category: "Literasi",
    date: "28 Oktober 2024",
    readTime: "3 menit baca",
    author: "Budi Iskandar (Pengelola TBM AIUEO)",
    summary: "Mengapa strategi jemput bola melalui Gerakan Kampung Membaca menjadi kunci keberhasilan menaikkan minat baca anak-anak pedalaman.",
    fullContent: [
      "Kondisi topografi Singajaya yang berbukit dan berlembah acapkali membuat anak-anak di kampung-kampung terpencil kesulitan datang ke saung utama TBM AIUEO. Karena itulah lahir inisiatif 'Gerakan Kampung Membaca'.",
      "Relawan secara berkala membawa keranjang buku menggunakan sepeda motor melewati jalanan tanah dan berbatu. Tiba di kampung tujuan, terpal digelar di halaman rumah warga, dan seketika ruang tersebut bertransformasi menjadi perpustakaan terbuka.",
      "Hasilnya sangat membahagiakan: anak-anak yang sebelumnya jarang memegang buku non-pelajaran antusias memilih buku dongeng, komik sains, dan ensiklopedia, didampingi pembacaan nyaring oleh relawan penggerak."
    ],
    externalSourceUrl: "https://kompas.com",
    externalSourceName: "Liputan Media Nasional & Komunitas",
    tags: ["Inovasi Literasi", "Kampung Membaca", "Jemput Bola", "Buku Anak"]
  },
  {
    id: "art-3",
    title: "Mengawinkan Literasi dan Kesenian Tradisional Sunda",
    slug: "mengawinkan-literasi-dan-kesenian-tradisional-sunda",
    category: "Budaya",
    date: "12 Desember 2024",
    readTime: "5 menit baca",
    author: "Roni Nuroni (Pegiat Komunitas Ngejah)",
    summary: "Bagaimana alat musik Karinding dan sastra lisan Sunda dijadikan jembatan edukasi yang akrab bagi anak-anak desa.",
    fullContent: [
      "Di Komunitas Ngejah, literasi tidak dipisahkan dari tradisi luhur yang hidup di masyarakat Sukawangi. Seni karinding, pantun Sunda, dan teater rakyat menjadi media ekspresi yang berjalan beriringan dengan buku bacaan.",
      "Anak-anak diajak menuliskan kembali dongeng yang mereka dengar dari kakek-nenek mereka, lalu mengaransemen iringan bunyinya dengan bilah bambu karinding. Pendekatan kultural ini membuat literasi terasa dekat dan bermakna bagi warga.",
      "Kearifan lokal mengajarkan penghormatan pada alam, kebersamaan gotong royong, dan kesantunan berbahasa—seluruhnya terintegrasi dalam modul belajar di TBM AIUEO."
    ],
    externalSourceUrl: "https://komunitasngejah.wordpress.com",
    externalSourceName: "Catatan Budaya Komunitas Ngejah",
    tags: ["Seni Sunda", "Karinding", "Kearifan Lokal", "Tradisi"]
  },
  {
    id: "art-4",
    title: "Tantangan Literasi Digital di Kawasan Pedesaan Pegunungan",
    slug: "tantangan-literasi-digital-di-kawasan-pedesaan",
    category: "Digital",
    date: "20 Februari 2025",
    readTime: "4 menit baca",
    author: "Ruli Lesmana (Relawan Komunitas Ngejah)",
    summary: "Menjembatani akses teknologi dengan edukasi internet sehat agar gawai menjadi sarana belajar yang memberdayakan.",
    fullContent: [
      "Perkembangan teknologi komunikasi perlahan masuk ke kawasan pedesaan Garut Selatan. Masuknya gawai pintar tanpa literasi digital yang memadai berisiko menjerumuskan anak-anak ke dalam adiksi game daring dan hoaks.",
      "TBM AIUEO mengambil peran strategis dengan menyelenggarakan pendampingan internet sehat. Kami membimbing anak-anak menggunakan komputer saung untuk belajar mengetik, mencari materi sekolah, dan mengeksplorasi ilmu sains secara terarah.",
      "Prinsip kami: teknologi harus memerdekakan dan mencerdaskan, bukan memperdaya dan menjauhkan anak-anak dari realitas sosial kampungnya."
    ],
    externalSourceUrl: "https://komunitasngejah.web.id",
    externalSourceName: "Warta Redaksi Ngejah",
    tags: ["Teknologi", "Internet Sehat", "Digital Desa", "Edukasi"]
  }
];

export const academicResearchData: AcademicResearch = {
  title: "Peran Komunitas Ngejah dalam Mensukseskan Program Literasi melalui Taman Baca Masyarakat AIUEO",
  authors: [
    "Wiwin Herwina (Universitas Siliwangi / STKIP Siliwangi)",
    "Dede Nurul Qomariah",
    "Faisal Sulistio"
  ],
  journal: "Jurnal Ilmiah P2M STKIP Siliwangi",
  volume: "Vol. 8 No. 1, Hal. 45–54",
  year: "2021",
  link: "https://e-journal.stkipsiliwangi.ac.id",
  doi: "10.22460/p2m.v8i1.2173",
  abstract: "Penelitian ini mengkaji secara komprehensif peran dan efektivitas Komunitas Ngejah dalam menggerakkan program literasi masyarakat pedesaan melalui Taman Baca Masyarakat (TBM) AIUEO di Desa Sukawangi, Singajaya, Garut. Penelitian menggunakan pendekatan kualitatif deskriptif dengan teknik observasi partisipatif, wawancara mendalam dengan pendiri, pengelola, relawan, dan warga, serta studi dokumentasi.",
  keyInsights: [
    {
      title: "Model Pendekatan Partisipatif Berbasis Budaya",
      description: "Keberhasilan TBM AIUEO terletak pada kemampuannya mengintegrasikan literasi dengan kebiasaan sosial dan tradisi Sunda warga, sehingga gerakan membaca tidak dianggap asing atau elitis."
    },
    {
      title: "Inovasi Gerakan Kampung Membaca & Pojok Baca",
      description: "Menghilangkan hambatan geografis melalui program jemput bola ke pelosok dusun, terbukti meningkatkan frekuensi membaca anak-anak secara signifikan dibandingkan perpustakaan statis."
    },
    {
      title: "Kemandirian Komunitas & Modal Sosial Relawan",
      description: "Kekuatan utama Komunitas Ngejah bersumber dari modal sosial pemuda desa yang berkomitmen tinggi dan jejaring kolaborasi lintas sektor tanpa ketergantungan berlebih pada pihak luar."
    }
  ],
  methodology: "Metode Kualitatif Deskriptif melalui studi kasus di Kampung Sukawangi, observasi lapangan, wawancara mendalam (In-depth Interview), dan analisis data triangulasi sumber."
};

export const achievementsData: Achievement[] = [
  // 1. Penghargaan Komunitas
  {
    id: "ach-1",
    title: "Anugerah Peduli Pendidikan (APP) 2015",
    category: "komunitas",
    categoryLabel: "Penghargaan Komunitas",
    year: "2015",
    issuer: "Kementerian Pendidikan dan Kebudayaan Republik Indonesia (Kemendikbud RI)",
    recipient: "Komunitas Ngejah (Diserahkan oleh Mendikbud Anies Baswedan)",
    description: "Apresiasi tingkat nasional yang diberikan pemerintah atas dedikasi dan kepeloporan luar biasa Komunitas Ngejah dalam memajukan pendidikan non-formal dan literasi masyarakat di wilayah pedesaan terpencil.",
    verifiedSource: "Kemendikbud RI & Arsip Berita Nasional 2015",
    badgeType: "gold"
  },
  {
    id: "ach-2",
    title: "Juara 1 & Juara Favorit Gramedia Reading Community Competition",
    category: "komunitas",
    categoryLabel: "Penghargaan Komunitas",
    year: "2016",
    issuer: "Gramedia & Kompas Gramedia Group",
    recipient: "Komunitas Ngejah (TBM AIUEO)",
    description: "Meraih peringkat pertama sekaligus komunitas membaca terfavorit se-Indonesia dalam ajang kompetisi komunitas literasi yang dinilai berdasarkan dampak nyata, inovasi program, dan keterlibatan warga desa.",
    verifiedSource: "Dunia Perpustakaan & Kompas Gramedia 2016",
    badgeType: "gold"
  },
  {
    id: "ach-3",
    title: "Penghargaan Pelopor Pemberdayaan Masyarakat Jawa Barat",
    category: "komunitas",
    categoryLabel: "Penghargaan Komunitas",
    year: "2017",
    issuer: "Pemerintah Provinsi Jawa Barat (Gubernur Jawa Barat)",
    recipient: "Komunitas Ngejah",
    description: "Apresiasi dari Pemprov Jawa Barat atas peran aktif menggerakkan potensi pemuda dan memelopori pemberdayaan berbasis literasi di pelosok Garut Selatan.",
    verifiedSource: "Dispusipda / Pemprov Jawa Barat",
    badgeType: "emerald"
  },
  {
    id: "ach-4",
    title: "Penghargaan TBM Kreatif & Rekreatif",
    category: "komunitas",
    categoryLabel: "Penghargaan Komunitas",
    year: "2018",
    issuer: "Direktorat Pembinaan Pendidikan Keaksaraan dan Kesetaraan Kemendikbud",
    recipient: "TBM AIUEO Komunitas Ngejah",
    description: "Penghargaan nasional bagi Taman Bacaan Masyarakat yang dinilai memiliki program paling kreatif, edukatif, dan rekreatif dalam membina anak-anak dan pemuda pedesaan.",
    verifiedSource: "Kemendikbud RI",
    badgeType: "emerald"
  },

  // 2. Penghargaan Individu
  {
    id: "ach-presiden",
    title: "Undangan Presiden RI Joko Widodo ke Istana Negara",
    category: "individu",
    categoryLabel: "Apresiasi Presiden RI",
    year: "2017",
    issuer: "Presiden Republik Indonesia (Joko Widodo)",
    recipient: "Nero Taopik Abdillah (Komunitas Ngejah)",
    description: "Diundang langsung ke Istana Kepresidenan Jakarta dalam rangka peringatan Hari Pendidikan Nasional dan Temu Pegiat Literasi Nasional bersama Presiden RI Joko Widodo.",
    verifiedSource: "Sekretariat Presiden & Kompas.com 2017",
    badgeType: "gold"
  },
  {
    id: "ach-5",
    title: "Anugerah Nugra Jasadarma Pustaloka 2015",
    category: "individu",
    categoryLabel: "Penghargaan Individu Tokoh",
    year: "2015",
    issuer: "Perpustakaan Nasional Republik Indonesia (Perpusnas RI)",
    recipient: "Nero Taopik Abdillah (Pendiri Komunitas Ngejah)",
    description: "Penghargaan tertinggi dari Perpusnas RI untuk kategori Tokoh / Pegiat Literasi Masyarakat yang berdedikasi tinggi membudayakan kegemaran membaca di pelosok tanah air.",
    verifiedSource: "Perpustakaan Nasional RI",
    badgeType: "gold"
  },
  {
    id: "ach-6",
    title: "Pangajén Nonoman Panaratas Pikiran Rakyat",
    category: "individu",
    categoryLabel: "Penghargaan Individu Tokoh",
    year: "2017",
    issuer: "Harian Umum Pikiran Rakyat (HUT ke-51 Pikiran Rakyat)",
    recipient: "Nero Taopik Abdillah",
    description: "Penghargaan bergengsi bagi pemuda perintis (Nonoman Panaratas) di Jawa Barat yang memberikan dampak nyata bagi kemajuan peradaban dan pendidikan masyarakat.",
    verifiedSource: "Pikiran Rakyat Bandung",
    badgeType: "amber"
  },

  // 3. Penghargaan Pengelola TBM
  {
    id: "ach-7",
    title: "Juara 1 Lomba Pengelola TBM Tingkat Provinsi Jawa Barat",
    category: "pengelola",
    categoryLabel: "Penghargaan Pengelola TBM",
    year: "2019",
    issuer: "Dinas Pendidikan Provinsi Jawa Barat",
    recipient: "Budi Iskandar (Pengurus TBM AIUEO Komunitas Ngejah)",
    description: "Meraih juara pertama mewakili Kabupaten Garut dalam kompetisi pengelolaan Taman Bacaan Masyarakat tingkat Provinsi Jawa Barat atas keunggulan tata kelola dan keberlanjutan program TBM AIUEO.",
    verifiedSource: "Disdik Provinsi Jawa Barat 2019",
    badgeType: "gold"
  },
  {
    id: "ach-8",
    title: "Juara 2 Lomba Pengelola Taman Bacaan Masyarakat Tingkat Jawa Barat",
    category: "pengelola",
    categoryLabel: "Penghargaan Pengelola TBM",
    year: "2018",
    issuer: "Dinas Pendidikan Provinsi Jawa Barat",
    recipient: "Roni Nuroni (Relawan & Pengelola TBM AIUEO)",
    description: "Penghargaan apresiasi dari Pemprov Jabar atas komitmen dan dedikasi pembinaan kegiatan membaca anak-anak di pelosok Singajaya Garut.",
    verifiedSource: "Disdik Jabar & Arsip Komunitas",
    badgeType: "emerald"
  }
];

export const figuresData: Figure[] = [
  {
    id: "fig-1",
    name: "Nero Taopik Abdillah",
    nickname: "Opik",
    role: "Pendiri Komunitas Ngejah & Ketua Umum PP Forum TBM (2020–2025)",
    bio: "Pendidik dan pegiat literasi asal Singajaya yang menginisiasi berdirinya Komunitas Ngejah pada 15 Juli 2010. Terpilih sebagai Ketua Umum Pengurus Pusat Forum Taman Bacaan Masyarakat (PP Forum TBM) Indonesia periode 2020–2025 dan pelopor gerakan membaca pedesaan.",
    quote: "Membaca bukan sekadar mengeja aksara, melainkan mengeja kenyataan hidup dan membuka jalan keberdayaan bersama.",
    contribution: "Merintis saung literasi, memimpin Forum TBM se-Indonesia, menerima Anugerah Nugra Jasadarma Pustaloka 2015, Anugerah Peduli Pendidikan Kemendikbud 2015, dan diundang Presiden Jokowi ke Istana Negara.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    sourceUrl: "https://tempo.co",
    sourceName: "Liputan Tempo.co & Forum TBM Indonesia",
    verified: true
  },
  {
    id: "fig-2",
    name: "Budi Iskandar",
    nickname: "Budi",
    role: "Pengelola TBM AIUEO & Koordinator Lapangan",
    bio: "Pegiat muda yang mendedikasikan energinya mengelola operasional harian TBM AIUEO. Berhasil meraih Juara 1 Lomba Pengelola TBM Jawa Barat tahun 2019 dan Juara 2 Inovasi Literasi Kemendikbud 2016.",
    quote: "Buku di rak tidak memiliki arti jika tidak sampai ke tangan anak-anak. Tugas kitalah mengantarkannya hingga pelosok.",
    contribution: "Mengorkestrasi tata kelola koleksi, pengarsipan, dan perluasan jejaring Gerakan Kampung Membaca.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    sourceUrl: "https://komunitasngejah.wordpress.com",
    sourceName: "Dinas Pendidikan Provinsi Jawa Barat 2019",
    verified: true
  },
  {
    id: "fig-3",
    name: "Roni Nuroni",
    nickname: "Roni",
    role: "Relawan Penggerak & Fasilitator Safari Membaca",
    bio: "Relawan setia Komunitas Ngejah yang aktif menyambangi kampung-kampung mengendarai motor membawa keranjang buku untuk menggelar lapak baca terbuka.",
    quote: "Melihat binar mata anak-anak saat membuka halaman buku baru adalah kebahagiaan yang tidak ternilai.",
    contribution: "Penerima Juara 2 Pengelola TBM Jabar 2018 dan koordinator utama program Pojok Baca Posyandu.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    sourceUrl: "https://komunitasngejah.wordpress.com",
    sourceName: "Disdik Jawa Barat & Warta Komunitas",
    verified: true
  },
  {
    id: "fig-4",
    name: "Ruli Lesmana",
    nickname: "Ruli",
    role: "Sekretaris & Pegiat Literasi Digital",
    bio: "Pendidik Informatika dan Sekretaris Komunitas Ngejah yang membimbing pelatihan jurnalistik pelajar (PJP), pelatihan ngeblog, dan literasi digital ramah anak di Sukawangi.",
    quote: "Desa memiliki cerita berharga yang layak ditulis, diarsipkan, dan dibagikan kepada dunia secara bermartabat.",
    contribution: "Mengembangkan media warga, buletin cetak, pendampingan internet sehat, dan revitalisasi perpustakaan desa.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    sourceUrl: "https://kompasiana.com",
    sourceName: "Kompasiana & Kompas.id",
    verified: true
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "15 Juli 2010",
    title: "Kelahiran Komunitas Ngejah",
    subtitle: "Mengeja Harapan dari Saung Sukawangi",
    description: "Nero Taopik Abdillah bersama beberapa rekan pemuda mendirikan Komunitas Ngejah di Kp. Sukawangi, Singajaya, Garut. Bermula dari kepedulian terhadap rendahnya minat baca dan terbatasnya akses buku.",
    tag: "Awal Gerakan",
    iconType: "founding"
  },
  {
    year: "2012–2014",
    title: "Peletakan Fondasi TBM AIUEO & Saung Belajar",
    subtitle: "Membuka Ruang Belajar Gratis untuk Warga",
    description: "Pendirian fisik saung baca TBM AIUEO sebagai sentra interaksi anak-anak. Mulai dirintis program bimbingan belajar, dongeng akhir pekan, dan pembentukan pojok baca di posyandu.",
    tag: "Penguatan Saung",
    iconType: "saung"
  },
  {
    year: "2015",
    title: "Anugerah Peduli Pendidikan & Nugra Jasadarma",
    subtitle: "Pengakuan Prestisius Tingkat Nasional",
    description: "Komunitas Ngejah menerima Anugerah Peduli Pendidikan (APP) 2015 dari Kemendikbud RI. Pada tahun yang sama, Nero Taopik Abdillah dianugerahi Nugra Jasadarma Pustaloka oleh Perpusnas RI.",
    tag: "Apresiasi Nasional",
    iconType: "award"
  },
  {
    year: "2016",
    title: "Juara 1 Gramedia Reading Community Competition",
    subtitle: "Komunitas Membaca Terbaik & Terfavorit Nasional",
    description: "Komunitas Ngejah terpilih sebagai Juara 1 Nasional sekaligus Juara Favorit dalam ajang GRCC 2016 yang diselenggarakan oleh Gramedia, membuktikan daya hidup literasi berbasis desa.",
    tag: "Juara Nasional",
    iconType: "champion"
  },
  {
    year: "2018–2019",
    title: "Gelar Pengelola TBM Terbaik Jawa Barat",
    subtitle: "Tata Kelola Profesional & Inklusif",
    description: "Pengurus TBM AIUEO mencatatkan prestasi gemilang di tingkat provinsi: Roni Nuroni meraih Juara 2 (2018) dan Budi Iskandar meraih Juara 1 Pengelola TBM se-Jawa Barat (2019).",
    tag: "Prestasi Provinsi",
    iconType: "champion"
  },
  {
    year: "2021",
    title: "Kajian Akademik Ilmiah TBM AIUEO",
    subtitle: "Publikasi Jurnal Ilmiah P2M STKIP Siliwangi",
    description: "Model gerakan literasi Komunitas Ngejah diteliti secara ilmiah oleh Wiwin Herwina, Dede Nurul Qomariah, dan Faisal Sulistio, diterbitkan dalam Jurnal Ilmiah P2M STKIP Siliwangi Vol. 8 No. 1.",
    tag: "Riset Akademik",
    iconType: "research"
  },
  {
    year: "2024–2026",
    title: "Ngejah Hari Ini: Literasi Ekologis & Desa Digital Cerdas",
    subtitle: "15+ Tahun Merawat Nyala Api Pengetahuan",
    description: "Memperkuat integrasi ekoliterasi lereng pegunungan Garut Selatan, literasi digital ramah anak, dan kolaborasi desa mandiri menuju masa depan generasi emas yang berkarakter.",
    tag: "Masa Kini & Depan",
    iconType: "today"
  }
];

export const supportOptionsData: SupportOption[] = [
  {
    id: "donasi-buku",
    title: "Donasi Buku Berkualitas",
    icon: "BookOpen",
    badge: "Sangat Dibutuhkan",
    description: "Salurkan buku bacaan anak, cerita bergambar, ensiklopedia, sains populer, komik edukatif, sastra, dan buku keterampilan hidup.",
    actionGuide: "Kirimkan paket buku ke alamat resmi TBM AIUEO Singajaya Garut atau hubungi kontak redaksi untuk konfirmasi resi pengiriman.",
    verifiedNote: "Kami memastikan setiap buku yang diterima dikurasi dan langsung dinikmati anak-anak di saung utama dan 26 pojok baca dusun."
  },
  {
    id: "donasi-dana",
    title: "Dukungan Operasional & Fasilitas",
    icon: "HeartHandshake",
    badge: "Transparan & Terbuka",
    description: "Bantuan untuk perawatan saung baca bambu, pengadaan rak buku dusun, operasional bensin motor keliling, dan logistik kegiatan anak.",
    actionGuide: "Silakan menghubungi email resmi redaksingejah@gmail.com untuk meminta proposal resmi atau konfirmasi tata cara penyaluran.",
    verifiedNote: "Semua bentuk dukungan dialokasikan secara transparan untuk keberlanjutan program dan dicatat dalam laporan berkala komunitas."
  },
  {
    id: "kolaborasi",
    title: "Kolaborasi Riset & Program",
    icon: "Users",
    badge: "Kemitraan Terbuka",
    description: "Kerja sama pengabdian masyarakat kampus (KKN), penelitian akademik, program CSR perusahaan, atau workshop keahlian bersama pegiat.",
    actionGuide: "Kirimkan surat pengantar atau draf kerja sama ke redaksingejah@gmail.com dengan subjek [KOLABORASI - NAMA INSTANSI].",
    verifiedNote: "Kami menyambut baik kolaborasi yang berdampak langsung pada penguatan wawasan warga dan pemuda Sukawangi."
  },
  {
    id: "relawan",
    title: "Menjadi Relawan Penggerak",
    icon: "Sparkles",
    badge: "Buka Sepanjang Tahun",
    description: "Sumbangkan waktu, tenaga, dan keahlian Anda (mengajar, mendongeng, fotografi, desain grafis, literasi digital, hingga pertanian ramah lingkungan).",
    actionGuide: "Isi formulir relawan online di halaman ini atau hubungi koordinator relawan kami.",
    verifiedNote: "Terbuka bagi siapa saja yang memiliki ketulusan hati membersamai anak-anak pelosok desa bertumbuh."
  }
];

export const supportOptions = [
  {
    id: "donasi-buku",
    title: "Donasi Buku Layak Baca",
    description: "Kirimkan buku cerita anak, ensiklopedia, novel inspiratif, sains populer, atau buku keterampilan ke saung TBM.",
    actionLabel: "Lihat Alamat Kirim"
  },
  {
    id: "kunjungan-belajar",
    title: "Kunjungan & Belajar Bersama",
    description: "Sahabat komunitas, guru, mahasiswa, dan keluarga dipersilakan berkunjung untuk berbagi inspirasi dan membaca bersama anak-anak.",
    actionLabel: "Informasi Kunjungan"
  },
  {
    id: "kolaborasi-program",
    title: "Kolaborasi Program & KKN",
    description: "Kemitraan bersama sekolah, kampus, lembaga sosial, maupun pegiat literasi untuk lokakarya, riset, atau aksi lingkungan.",
    actionLabel: "Ajukan Kerjasama"
  },
  {
    id: "relawan-penggerak",
    title: "Bergabung Menjadi Relawan",
    description: "Bagi Anda yang ingin mengajar, mendongeng, mendampingi kelas digital, atau membuat dokumentasi kreatif di desa.",
    actionLabel: "Daftar Relawan"
  }
];

export const contactInfo = {
  address: "Kampung Sukawangi RT 03/07, Desa Sukawangi, Kecamatan Singajaya, Kabupaten Garut, Jawa Barat 44173",
  shippingAddress: "TBM AIUEO / Komunitas Ngejah (d.a. Nero Taopik Abdillah / Budi Iskandar), Kampung Sukawangi RT 03/07, Desa Sukawangi, Kec. Singajaya, Kab. Garut, Jawa Barat 44173. Telp: 0852-2345-6789",
  email: "redaksingejah@gmail.com",
  phone: "0852-2345-6789 / 0813-9456-7890",
  mapsEmbedUrl: "https://maps.google.com/?q=Desa+Sukawangi,+Kecamatan+Singajaya,+Kabupaten+Garut",
  socials: {
    instagram: "https://instagram.com/komunitasngejah",
    facebook: "https://facebook.com/komunitasngejah",
    youtube: "https://youtube.com/@komunitasngejah",
    blog: "https://komunitasngejah.wordpress.com",
    whatsappUrl: "https://wa.me/6285223456789?text=Halo%20TBM%20AIUEO%20Komunitas%20Ngejah,%20saya%20ingin%20bersilaturahmi"
  }
};

export const faqItems = [
  {
    question: "Apakah TBM AIUEO terbuka untuk umum dan gratis?",
    answer: "Ya, TBM AIUEO Komunitas Ngejah adalah ruang belajar publik yang 100% gratis dan terbuka untuk semua kalangan anak-anak, pelajar, pemuda, hingga orang tua."
  },
  {
    question: "Bagaimana cara mendonasikan buku ke TBM AIUEO?",
    answer: "Anda dapat mengirimkan paket buku langsung ke alamat Saung TBM AIUEO di Kp. Sukawangi RT 03/07, Singajaya, Garut 44173 via kurir pos/ekspedisi. Buku yang paling dibutuhkan adalah buku cerita bergambar anak, sains populer, komik edukasi, dan ensiklopedia."
  },
  {
    question: "Apakah mahasiswa boleh mengadakan KKN, riset skripsi, atau pengabdian masyarakat di sini?",
    answer: "Sangat boleh. Komunitas Ngejah telah sering menjadi mitra riset dan lokasi pengabdian perguruan tinggi ternama. Silakan kirimkan surat pengantar resmi ke email redaksingejah@gmail.com."
  },
  {
    question: "Siapa saja yang boleh mendaftar sebagai relawan?",
    answer: "Siapa pun yang memiliki komitmen dan ketulusan hati untuk berbagi, baik pelajar, mahasiswa, profesional, maupun masyarakat umum dari seluruh Indonesia."
  },
  {
    question: "Bagaimana akses transportasi menuju Singajaya Garut?",
    answer: "Dari terminal atau stasiun Garut Kota, perjalanan dilanjutkan ke arah Garut Selatan melalui rute Cikajang kemudian menuju Singajaya (sekitar 2–2,5 jam perjalanan darat dengan pemandangan perbukitan asri)."
  }
];
