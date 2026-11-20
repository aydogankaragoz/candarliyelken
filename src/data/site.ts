// Tüm içerik candarliyelken.org.tr ve kulübün yayınladığı 2026 program PDF'lerinden derlenmiştir.

export const club = {
  name: 'Çandarlı Yelken ve Su Sporları Spor Kulübü',
  short: 'Çandarlı Yelken',
  founded: 2008,
  address: 'Çandarlı Mah. Bergama Cad. No:25, Dikili / İzmir',
  phone: '+90 535 033 28 80',
  phoneHref: 'tel:+905350332880',
  email: 'info@candarliyelken.org.tr',
  iban: 'TR97 0006 4000 0013 4660 6074 11',
  coords: { lat: 38.937447, lon: 26.935858 },
  // Google Maps'teki kulüp kaydı (haritada adın görünmesi için)
  mapsPlaceId: '0x14ba3c58374b179d%3A0x86eca60deaae0887',
  contacts: [
    { name: 'İrfan Bora', phone: '+90 532 462 10 46', href: 'tel:+905324621046' },
    { name: 'Gamze Yıldırım', phone: '+90 541 263 65 83', href: 'tel:+905412636583' },
  ],
  founders: [
    'A. Sedat Dağdelen', 'Abdüllatif Songüler', 'Adnan Güldal', 'Ahmet Başpehlivan',
    'Cem Türksavaş', 'Emrah Harun Köleci', 'Erkan Kozlu', 'Gül Yavuz',
    'Halil Merthan Ay', 'İbrahim Erol Ay', 'Tolga Tunççan',
  ],
};

export type Program = {
  id: string;
  title: string;
  kicker: string;
  who: string;
  duration: string;
  schedule: string;
  fee: string;
  note: string;
  photo: string; // gallery file name
  curriculum: { title: string; items: string[] }[];
  pdf: string;
  extras?: string[];
};

export const programs: Program[] = [
  {
    id: 'optimist',
    title: 'Optimist',
    kicker: 'Çocuklar için',
    who: '7–12 yaş · yüzme bilen her çocuk',
    duration: '2 haftalık dönemler',
    schedule: 'Hafta içi her gün 10.30–13.30',
    fee: '25.000 TL / dönem',
    note: 'İki dönem katılana TYF ve World Sailing onaylı sertifika verilir. En az üç dönem katılan çocuklar değerlendirmeyle lisanslı kulüp sporcusu olabilir.',
    photo: 'g25.jpg',
    curriculum: [
      {
        title: 'Temel eğitim',
        items: ['Optimist teknesinin tanıtımı ve hazırlanması', 'Denizde can güvenliği ilkeleri', 'Tekne yönetimi, dümen kullanımı', 'Yelkenlinin çalışma mantığı', 'Seyir yönleri ve yönlendirme', 'Basit dönüşler: kavança ve tramola'],
      },
      {
        title: 'İleri eğitim',
        items: ['Denizcilik terimleri ve denizci bağları', 'Rüzgâr: şiddet, yön, gerçek ve hissedilen rüzgâr', 'Seyirler: orsa, apaz, pupa', 'Manevra: tramola ve kavança', 'Trapez kullanımı', 'Şamandıra dönüşleri'],
      },
    ],
    pdf: '/docs/2026-optimist.pdf',
  },
  {
    id: 'genc',
    title: 'Genç Yetişkin',
    kicker: 'Gençler için',
    who: 'Grup başına en fazla 4 kişi',
    duration: '5 gün × 2 saat · toplam 10 saat',
    schedule: 'Haziran–Ağustos, pazartesiden cumaya',
    fee: '10.000 TL / kişi',
    note: 'İlk dönem 29 Haziran 2026’da başlıyor. Birden fazla döneme katılana %10 indirim; üç dönem katılana TYF ve World Sailing onaylı sertifika.',
    photo: 'g16.jpg',
    curriculum: [
      {
        title: 'Centerboard veya orta boy yat ile',
        items: ['Yelkenli teknenin tanıtımı ve hazırlanması', 'Kişisel güvenlik kuralları ve güvenlik donanımı', 'Liman içi ve açık denizde seyir kuralları', 'İskeleden ayrılma, yanaşma; yelken basma, indirme, küçültme', 'Orsa, apaz, pupa; tramola ve kavança', 'Kıyı seyri, kerteriz ve dümen tutma', 'Yelken trimi, rüzgâr gülü ve tüycükler', 'Seyir sonrası tekne bakımı'],
      },
    ],
    pdf: '/docs/2026-genc-yetiskin.pdf',
  },
  {
    id: 'yatcilik',
    title: 'Yetişkin Yatçılık',
    kicker: 'Yetişkinler için · YY1 / YY2',
    who: '18 yaş ve üstü',
    duration: '4 gün × 4 saat ya da 2 gün × 8 saat · 16 saat',
    schedule: 'Yıl boyunca',
    fee: '20.000 TL / kişi (YY1)',
    note: 'Temel eğitim (YY1) sonrası ileri yatçılık (YY2) ile devam edilir. Eğitim seyirleri: Çandarlı–Bademli Adaları 14 mil, Çandarlı–Yeni Foça 12 mil.',
    photo: 'g03.jpg',
    curriculum: [
      {
        title: 'YY1 · Yelkenli yatçılık temel eğitimi',
        items: ['Denizde can güvenliği ve güvenlik donanımı', 'Liman içi ve açık denizde seyir kuralları', 'Yelkenlinin kısımları, yelkenin çalışma mantığı', 'Denizcilik terimleri, denizci bağları', 'İskeleden ayrılma ve yanaşma', 'Orsa, apaz, pupa; tramola ve kavança', 'Kıyı seyri, kerteriz tayini, dümen tutma', 'Yelken trimi; seyir öncesi ve sonrası tekneyi neta etmek'],
      },
    ],
    pdf: '/docs/2026-yy1.pdf',
  },
];

// 2026 Optimist dönemleri (Pazartesi–Cuma, 2 hafta)
export const optimistTerms = [
  { n: 1, from: '29 Haz', to: '10 Tem' },
  { n: 2, from: '13 Tem', to: '24 Tem' },
  { n: 3, from: '27 Tem', to: '7 Ağu' },
  { n: 4, from: '10 Ağu', to: '21 Ağu' },
  { n: 5, from: '24 Ağu', to: '4 Eyl' },
];

// "Neden Çandarlı Yelken" belgesinden sporcu yolculuğu
export const journey = [
  {
    step: 'Yaz Okulu',
    text: 'Çocuklar denizle ve yelkenle tanışır. Dönem sonunda her katılımcı için bir değerlendirme formu doldurulur. Tamamlayamayan çocuk eksiklerini öğrenir ve yeniden katılabilir; kimse geride bırakılmaz.',
  },
  {
    step: 'Takım Adayı',
    text: 'Programı başarıyla tamamlayanlara gelişimlerini sürdürmeleri için yaz boyunca en az bir dönem daha önerilir. Eylül’de çocuklar ve velileriyle “Sporcu Adaylığı” toplantısı yapılır.',
  },
  {
    step: 'Sporcu Adayı',
    text: 'Bir aylık deneme süresinin (4 hafta sonu) ardından çocuklar antrenörleriyle altyapı antrenmanlarına başlar. Bu dönemde kulübün zimmetlediği malzemeyi kullanırlar.',
  },
  {
    step: 'Yarış Takımı',
    text: 'Lisanslı sporcular yerel, bölgesel, ulusal ve uluslararası yarışlarda kulübü, milli takıma girerlerse Türkiye’yi temsil eder. Kulüp onları elindeki en iyi ekipmanla destekler.',
  },
];

export const adbSteps = [
  { title: 'e-Devlet ile giriş', text: 'Ulaştırma ve Altyapı Bakanlığı’nın Amatör Denizci Belgesi sistemine e-Devlet üzerinden giriş yapılır.', img: 'adb-0.jpg' },
  { title: 'Teorik eğitime kayıt', text: 'Vatandaş panelinde “Teorik Eğitim Kaydı” adımı seçilir.', img: 'adb-1.jpg' },
  { title: 'Online teorik eğitim', text: 'Eğitimler sayfasında “Amatör Denizci Online Eğitimi” başlatılır ve tamamlanır.', img: 'adb-2.jpg' },
  { title: 'Uygulama eğitimi kaydı', text: 'Panelde ikinci adım olan “Uygulama Eğitimi Kaydı” seçilir.', img: 'adb-3.jpg' },
  { title: 'Federasyon uygulama eğitimi', text: 'Yelken Federasyonu Uygulama Eğitimi’nde “Hemen Katıl” denir. Uygulamayı kulübümüzde, teknelerimizle yaparsınız.', img: 'adb-4.jpg' },
  { title: 'TYF Eğitim hesabı', text: 'TYF Eğitim sitesinde “Giriş Yap / Kayıt Ol” ile hesap oluşturulur. T.C. vatandaşları pasaport alanını boş bırakır.', img: 'adb-5.jpg' },
  { title: 'Bilgilerin girilmesi', text: 'Kimlik ve iletişim bilgileri girilir. Uygulama tamamlanınca sınav başvurusu yapılır.', img: 'adb-6.jpg' },
];

export const news = [
  { date: '2024 Haziran', title: 'Olağan Genel Kurulumuz yapıldı', text: 'Yeni kurullarımız seçildi; 2024 faaliyet raporu ve mali durum tablosu üyelerimizle paylaşıldı.', href: 'https://cloud.candarliyelken.org.tr/s/aAbcyYXZGmmXZZ7' },
  { date: '2021', title: 'Amatör Denizci Belgesi uygulama eğitimleri başladı', text: 'Ulaştırma Bakanlığı ve Yelken Federasyonu işbirliğiyle, ADB için zorunlu uygulama eğitimlerini kulübümüzde veriyoruz.' },
  { date: '2021', title: 'Rüzgâr sörfü milli takım seçmeleri', text: 'Sporcularımız Bora ve Demir Yazıcı kardeşler TYF 2021 Milli Takım Seçme Yarışları’nda.' },
  { date: '2020', title: 'Çandarlı Windsurf Center bize katıldı', text: 'Uzun süredir çalışan tesisin katılımıyla yaz okulunda rüzgâr sörfü eğitimi de başladı.' },
  { date: '2020', title: 'Üç dalda yaz okulu', text: 'Optimist, rüzgâr sörfü ve yatçılık eğitimleri aynı yaz okulunda.' },
  { date: '2019 Haziran', title: 'Çandarlı plajlarında çevre temizliği', text: 'İzmir İl Çevre Müdürlüğü, TURMEPA ve Aliağa Deniz Ticaret Odası’nın etkinliğindeydik.' },
  { date: '2019 Mayıs', title: 'Tanju Okan Kupası', text: 'Urla’daki yarışlara kulübümüzün üç teknesiyle katıldık ve iyi sonuçlar aldık.' },
  { date: '2019 Mayıs', title: '100. Yıl Atatürk Kupası, Samsun', text: 'TYF’nin 16–21 Mayıs’ta düzenlediği yarışlarda başarılı sonuçlar aldık.' },
  { date: '2019 Nisan', title: '“Tutkum” teknesini misafir ettik', text: 'Kaptanı dahil tamamı kadınlardan oluşan mürettebatla Bodrum–Samsun rotasında 70 günlük seyir yapan Tutkum’u Çandarlı’da ağırladık.' },
  { date: '2019 Nisan', title: 'Bora ve Demir Yazıcı’nın başarısı', text: 'Çeşme’deki il birinciliğinde gençler kategorisinde 4. ve 5. oldular. 35 knot rüzgârda yaptıkları antrenmanların karşılığını aldılar.' },
  { date: '2019 Mart', title: 'Yelken Federasyonu Başkanı’nı ziyaret', text: '“Sizler gibi gönülden yelkene ve denize bağlı kulüplerle birlikte alınacak çok yol var.” — Özlem Akdurak' },
  { date: '2018 Kasım', title: 'Yelken tanıtım turları', text: 'İlk durağımız mahallemizdeki Cumhuriyet İlkokulu oldu. Çocuklar çok ilgi gösterdi.' },
  { date: '2018 Eylül', title: 'İlk yarış deneyimi', text: 'Genç sporcularımız aileleriyle birlikte İzmir Körfez yarışlarını Karşıyaka Yelken’in botundan izledi.' },
  { date: '2018', title: 'Yeni bot ve optimistler', text: 'Belediye kulübümüze yeni bir servis botu aldı; biz de kendi imkânlarımızla 5 optimist daha aldık.' },
  { date: '2018', title: 'Özkan Gülkaynak konuğumuzdu', text: 'Kayıtsız III ile dünya turunu tamamlayan denizci, seyrini üyelerimize anlattı.' },
  { date: '2011 Mayıs', title: 'İlk optimistlerimiz', text: 'Çandarlı Belediyesi’nin hediye ettiği 4 optimistle filomuz 5 tekneye çıktı.' },
  { date: '2008', title: 'Kulübümüz kuruldu', text: 'Yelkene gönül vermiş on bir kişi, Çandarlı körfezinde yelkeni sevdirmek ve yelkenci yetiştirmek için bir araya geldi.' },
];

export const docs = [
  { title: 'Kulüp üyelik başvuru formu', href: 'https://candarliyelken.org.tr/docs/uyelik_basvuru_formu.odt', kind: 'DOC' },
  { title: 'Kulüple ilişki belgesi', href: 'https://candarliyelken.org.tr/docs/kuluple_iliski_belgesi.doc', kind: 'DOC' },
  { title: 'TYF 2026 sporcu lisansı talimatı ve ücretleri', href: 'https://candarliyelken.org.tr/docs/tyf_lisans_vize_2026.jpg', kind: 'JPG' },
  { title: 'Neden Çandarlı Yelken?', href: '/docs/neden-candarli-yelken.pdf', kind: 'PDF' },
  { title: 'Kulüp tüzüğü (2023)', href: '/docs/CYK_Tuzuk_2023.pdf', kind: 'PDF' },
  { title: 'Olağanüstü genel kurul YK kararı', href: 'https://candarliyelken.org.tr/docs/genel_kurul_YK_karari.pdf', kind: 'PDF' },
  { title: '2024 genel kurul faaliyet raporu', href: 'https://cloud.candarliyelken.org.tr/s/Jc4RZ2QfjEBJHCw', kind: 'Bulut' },
  { title: '2024 Haziran sonu mali durum', href: 'https://cloud.candarliyelken.org.tr/s/JrMj73Jf3KF94te', kind: 'Bulut' },
];
