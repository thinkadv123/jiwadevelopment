// All site copy, in English and Arabic, taken verbatim from the original website.
export type Lang = 'en' | 'ar';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path or asset with the configured base path. */
export const u = (path: string) => {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${BASE}${path.startsWith('/') ? path : '/' + path}`;
};
/** Image helper: files live in /public/images/<year>/<month>/... */
export const img = (p: string) => u(`/images/${p.replace(/^\//, '')}`);

// ---------------------------------------------------------------- routes
export const routes = {
  en: {
    home: '/',
    about: '/about-us/',
    careers: '/careers/',
    contact: '/get-in-touch/',
    project: (s: string) => `/portfolio/${s}/`,
    service: (s: string) => `/service/${s}/`,
    job: (s: string) => `/jobs/${s}/`,
  },
  ar: {
    home: '/ar/',
    about: '/ar/عن-jiwa/',
    careers: '/ar/الوظائف/',
    contact: '/ar/تواصل-معنا/',
    project: (s: string) => `/ar/portfolio/${s}/`,
    service: (s: string) => `/ar/service/${s}/`,
    job: (s: string) => `/ar/jobs/${s}/`,
  },
};

export const contact = {
  email: 'info@jiwadevelopment.com',
  phone: '17037',
  phoneHref: 'tel:17037',
  map: 'https://maps.app.goo.gl/Qxyz8LDBAtnDfXc16',
  mapEmbed:
    'https://maps.google.com/maps?q=220%20Crown%20Plaza%20Building%20North%2090%20ST%2C%205th%20Settlement%2C%20New%20Cairo&t=m&z=14&output=embed&iwloc=near',
  youtube: 'f-RWYUgx3H8',
  social: [
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/share/1JhPprJFJg/?mibextid=wwXIfr' },
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/jiwa.developments.eg?igsh=a3lsd3ZpZTlhcGpr&utm_source=qr' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/83013866/' },
    { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@jiwa.developments?_r=1&_t=ZS-94LxZeyExN7' },
    { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com/@jiwadevelopments8352?si=VDMKAbg1lS8qFgST' },
  ],
};

export const logos = {
  white: img('2024/07/jiwa-white-logo.webp'),
  red: img('2024/07/jiwa-red-logo.webp'),
};

export const clients = [
  { src: '2026/03/az-home.webp', alt: 'az home' },
  { src: '2026/03/lapoire-.webp', alt: 'lapoire' },
  { src: '2026/03/Dushka-burger.webp', alt: 'Dushka-burger' },
  { src: '2026/03/yanssen-1-1.webp', alt: 'yanssen' },
  { src: '2026/04/solitair2.png', alt: 'solitair2' },
];

export const consultants = [
  '2024/07/e.webp',
  '2024/07/jiwa-construction.webp',
  '2024/07/medc.webp',
  '2024/07/smarch-.webp',
  '2024/07/summit.webp',
  '2026/05/track-constructions-logo.png',
];

// ---------------------------------------------------------------- shared UI strings
export const t = {
  en: {
    siteName: 'Jiwa Developments',
    nav: { home: 'Home', about: 'Who We Are', projects: 'Our Projects', careers: 'Careers', contact: 'Get in Touch' },
    langName: 'English',
    otherLangName: 'العربية',
    footerText:
      'Jiwa is not just a name, it is a brand that is reflected in the innovative designs and quality that we provide. We believe that every project we work on is a reflection of our vision',
    copyright: 'JIWA Developments, All Rights Reserved | Designed By',
    toggleDark: 'Switch to Dark',
    toggleLight: 'Switch to Light',
    menu: 'Menu',
    close: 'Close',
    clients: ['Our', 'Clients'],
    contactInfo: {
      mail: 'Our Mail', mailCta: 'Mail us',
      call: 'Call us', callCta: 'Call now',
      address: 'Our Address', addressText: 'Crow Plaza Mall, 5th settlement, New Cairo', addressCta: 'view map',
    },
    form: {
      name: 'Name', fullName: 'Your full name', phone: 'Phone Number', message: 'Your Message', messageShort: 'Message',
      send: 'SEND MAIL', submit: 'Submit Now', sending: 'Sending…',
      ok: 'Thank you for your message. It has been sent.',
      err: 'There was an error trying to send your message. Please try again later.',
    },
  },
  ar: {
    siteName: 'Jiwa Developments',
    nav: { home: 'الرئيسية', about: 'من نحن', projects: 'مشاريعنا', careers: 'الوظائف', contact: 'تواصل معنا' },
    langName: 'العربية',
    otherLangName: 'English',
    footerText:
      '“جيوا… ليست مجرد شركة تطوير عقاري.\nنحن نصنع مشاريع تجمع بين الابتكار والجودة.\nكل تصميم يعكس رؤيتنا وطموحنا في خلق قيمة حقيقية.”',
    copyright: 'JIWA Developments, جميع الحقوق محفوظة | تم التصميم بواسطة',
    toggleDark: 'الوضع الداكن',
    toggleLight: 'الوضع الفاتح',
    menu: 'القائمة',
    close: 'إغلاق',
    clients: ['', 'شركاؤنا'],
    contactInfo: {
      mail: 'بريدنا الالكتروني', mailCta: 'راسلنا',
      call: 'اتصل بنا', callCta: 'اتصل الآن',
      address: 'عنواننا', addressText: 'Crown Plaza Mall, التجمع الخامس, القاهرة الجديدة', addressCta: 'الخريطة',
    },
    form: {
      name: 'الاسم', fullName: 'الاسم كامل', phone: 'رقم الهاتف', message: 'رسالتك', messageShort: 'رسالتك',
      send: 'إرسال', submit: 'إرسال', sending: 'جارٍ الإرسال…',
      ok: 'شكراً لتواصلك معنا، تم إرسال رسالتك بنجاح.',
      err: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة لاحقاً.',
    },
  },
};

// ---------------------------------------------------------------- services / amenities
export const services = [
  { en: 'property-management', ar: 'إدارة-وحدات', titleEn: 'Property Management', titleAr: 'إدارة وحدات', icon: '2024/04/property.png', iconHover: '2024/04/property-1.png' },
  { en: 'plaza', ar: 'plaza', titleEn: 'Plaza', titleAr: 'Plaza', icon: '2024/04/apartment.png', iconHover: '2024/04/apartment-1.png' },
  { en: 'gym', ar: 'gym', titleEn: 'GYM', titleAr: 'GYM', icon: '2024/04/dumbbell.png', iconHover: '2024/04/dumbbell-1.png' },
  { en: 'escalators', ar: 'سلالم-كهربائية', titleEn: 'Escalators', titleAr: 'سلالم كهربائية', icon: '2024/04/escalator.png', iconHover: '2024/04/escalator-1.png' },
  { en: 'electric-charging-units', ar: 'محطات-شحن-كهربائي', titleEn: 'Electric Charging Units', titleAr: 'محطات شحن كهربائي', icon: '2024/04/charging-station.png', iconHover: '2024/04/charging-station-1.png' },
  { en: 'solar-panel', ar: 'ألواح-شمسية', titleEn: 'Solar Panel', titleAr: 'ألواح شمسية', icon: '2026/02/solar-panel-1.png', iconHover: '2026/02/solar-panel-2.png' },
  { en: 'hypermarket', ar: 'هايبر-ماركت', titleEn: 'Hypermarket', titleAr: 'هايبر ماركت', icon: '2026/02/supermarket.png', iconHover: '2026/02/supermarket-1.png' },
  { en: 'elevators', ar: 'مصاعد', titleEn: 'Elevators', titleAr: 'مصاعد', icon: '2026/02/elevator-1.png', iconHover: '2026/02/elevator-2.png' },
  { en: 'wifi', ar: 'wifi', titleEn: 'Wifi', titleAr: 'Wifi', icon: '2026/02/internet.png', iconHover: '2026/02/internet-1.png' },
  { en: 'atm-center', ar: 'صراف-آلي', titleEn: 'Atm Center', titleAr: 'صراف آلي', icon: '2026/02/atm.png', iconHover: '2026/02/atm-1.png' },
  { en: 'public-toilet', ar: 'دورة-مياه', titleEn: 'Public Toilet', titleAr: 'دورة مياه', icon: '2026/02/toilet.png', iconHover: '2026/02/toilet-1.png' },
  { en: 'security', ar: 'الامان', titleEn: 'Security', titleAr: 'الامان', icon: '2026/02/policeman.png', iconHover: '2026/02/policeman-1.png' },
  { en: 'fire-system', ar: 'مكافحة-الحرائق', titleEn: 'Fire System', titleAr: 'مكافحة الحرائق', icon: '2026/02/fire-alarm.png', iconHover: '2026/02/fire-alarm-1.png' },
  { en: 'cctv', ar: 'cctv', titleEn: 'CCTV', titleAr: 'CCTV', icon: '2026/02/cctv-camera-1.png', iconHover: '2026/02/cctv-camera-2.png' },
  { en: 'food-court', ar: 'منطقة-الطعام', titleEn: 'Food Court', titleAr: 'منطقة الطعام', icon: '2026/02/restaurant.png', iconHover: '2026/02/restaurant-2.png' },
  { en: 'spa', ar: 'سبا', titleEn: 'SPA', titleAr: 'سبا', icon: '2026/02/spa.png', iconHover: '2026/02/spa-2.png' },
  { en: 'entertainment-center', ar: 'مركز-ترفيهي', titleEn: 'Entertainment Center', titleAr: 'مركز ترفيهي', icon: '2026/02/game-center.png', iconHover: '2026/02/game-center-1.png' },
  { en: 'kids-area', ar: 'منطقة-الاطفال', titleEn: 'Kids Area', titleAr: 'منطقة الاطفال', icon: '2026/02/playground.png', iconHover: '2026/02/playground-1.png' },
];

// ---------------------------------------------------------------- projects
type Counter = { value: number; suffix: string; label: string; mobileOnly?: boolean; desktopOnly?: boolean };
type ProjectCopy = {
  title: string;
  brochureLabel?: string;
  heading: [string, string]; // [plain, accent]
  aboutBtn: string;
  aboutTitle: string;
  about: string[];
  stats: Counter[];
  locationHeading: [string, string];
  locationText: string;
  distances: Counter[];
  unitsHeading: [string, string];
  units: { title: string; text: string[] }[];
  facilitiesHeading: [string, string];
  floorHeading: [string, string];
  floors: string[];
  consultantsHeading: [string, string];
};

export type Project = {
  slug: string;
  banner: string;
  featured: string;
  aboutImage: string;
  map: string;
  brochure?: string;
  unitImages: string[];
  floorImages: string[];
  en: ProjectCopy;
  ar: ProjectCopy;
};

const statsAiangle = (ar: boolean): Counter[] => [
  { value: 7300, suffix: 'm²+', label: ar ? 'مساحة الأرض' : 'Land Area' },
  { value: 30, suffix: '%', label: ar ? 'النسبة البنائية' : 'Footprint' },
  { value: 3128, suffix: 'm²+', label: ar ? 'المساحة البنائية الإجمالية' : 'BUA' },
];

export const projects: Project[] = [
  {
    slug: 'aiangle',
    banner: '2024/07/banner-copy.jpg',
    featured: '2024/07/angle-featured.jpg',
    aboutImage: '2024/07/WhatsApp-Image-2026-04-16-at-5.37.10-PM-1.jpeg',
    map: '2024/07/aiangle-map-for-website-989.png',
    brochure: '/files/aiangle-brochure.pdf',
    unitImages: ['2024/07/ADMINISTRATIVE.jpg', '2024/07/COMMERCIAL.jpg', '2024/07/medical.jpg'],
    floorImages: [
      '2024/07/floor-new-basement-1.webp',
      '2024/07/floor-new-ground.webp',
      '2024/07/floor-new-1.webp',
      '2024/07/floor-new-2.webp',
      '2024/07/floor-new-3.webp',
    ],
    en: {
      title: 'Aiangle',
      brochureLabel: 'Download Brochure',
      heading: ['More Than', 'a Mall'],
      aboutBtn: 'About JIWA',
      aboutTitle: 'ABOUT Aiangle City Mall',
      about: [
        'Aiangle City Mall is built on an area of 7,300 sqm that is prepared to handle a high capacity of visitors all day long. With 300 parking slots and facilities with the maximum attention to comfort. Aiangle is designed with curves to provide a full and clear view of the g reenery, lake, and all properties. The mall includes six floors of commercial spaces for shops, hypermarkets, and dining. In addition to the luxuries of administrative a nd medical properties.',
      ],
      stats: statsAiangle(false),
      locationHeading: ['Our Vital', 'Location'],
      locationText: 'Aiangle City Mall is one of the largest mall area located in the heart of the Narges district in New Cairo.',
      distances: [
        { value: 1, suffix: 'Min', label: '90 st.' },
        { value: 8, suffix: 'Mins', label: 'Suez Road' },
        { value: 1, suffix: 'Min', label: 'Mohamed Nagib Axis' },
        { value: 1, suffix: 'Min', label: 'Talat Harb axis' },
        { value: 4, suffix: 'Mins', label: 'Ainsokhna Road' },
        { value: 5, suffix: 'Mins', label: 'AUC' },
      ],
      unitsHeading: ['Our Unit', 'Types'],
      units: [
        {
          title: 'COMMERCIAL',
          text: [
            "It's not just a shopping destination; It's a lifestyle experience. where commerce meets convenience, and variety meets value.",
            'Aiangel City Mall welcomes you to a world where shopping dreams come true. Discovering the endless possibilities that awaits you in its commercial scope.',
            'Ensuring that visitors can find everything they desire. What sets Aiangel city mall apart; is its commitment to customer satisfaction.',
          ],
        },
        {
          title: 'ADMINISTRATIVE',
          text: [
            'A premier commercial mixed-use destination, goes beyond the ordinary by integrating administrative offices within its bustling atmosphere.',
            'Designed to cater for the diverse needs of businesses. Guarantee efficient productivity for entrepreneurs and professionals with a perfect environment.',
            'The offices are equipped with modern and advanced technology, creating a conducive atmosphere for creativity and collaboration, ensuring optimal productivity and success for all its clients.',
          ],
        },
        {
          title: 'MEDICAL',
          text: [
            'Providing the best clinics with the most comfortable atmosphere to make sure that patients receiving the possible treatment, with a feeling of comfort and reassurance.',
            "Aiangel City Mall's medical clinics serve as a trusted haven, where its patient is the top priority. The clinics are equipped to meet your healthcare needs effectively.",
          ],
        },
      ],
      facilitiesHeading: ['Our', 'Facilities & AMENITIES'],
      floorHeading: ['Floor', 'Plans'],
      floors: ['Basement 1', 'GROUND FLOOR', 'First Floor', 'Second Floor', 'Third Floor'],
      consultantsHeading: ['Our', 'Consultants'],
    },
    ar: {
      title: 'Aiangle',
      brochureLabel: 'تحميل الملف التعريفي',
      heading: ['أكثر من مجرد مول …', 'وجهة متكاملة'],
      aboutBtn: 'عن JIWA',
      aboutTitle: 'عن أيانجل سيتى مول',
      about: [
        'يمتد أي أنجل سيتي مول على مساحة 7,300 متر مربع، وقد تم تصميمه لاستيعاب كثافة عالية من الزوار على مدار اليوم، مع توفير 300 موقف للسيارات ومرافق متكاملة تولي أقصى درجات الراحة للزوار. يتميز المشروع بتصميم معماري حديث يعتمد على منحنيات مدروسة تتيح رؤية واضحة للمساحات الخضراء والبحيرة وجميع الوحدات. يضم المول ستة طوابق تضم مساحات تجارية متنوعة تشمل المحلات والهايبر ماركت والمطاعم، بالإضافة إلى وحدات إدارية وطبية فاخرة، ليقدم تجربة متكاملة في موقع واحد.',
      ],
      stats: statsAiangle(true),
      locationHeading: ['اكتشف', 'موقعنا'],
      locationText: 'يعد “أي أنجل سيتي مول” واحدًا من أكبر المولات مساحةً، ويقع في قلب حي النرجس بالقاهرة الجديدة.',
      distances: [
        { value: 1, suffix: 'Min', label: 'شارع التسعين' },
        { value: 8, suffix: 'Mins', label: 'طريق السويس' },
        { value: 1, suffix: 'Min', label: 'محور محمد نجيب' },
        { value: 1, suffix: 'Min', label: 'محور طلعت حرب' },
        { value: 4, suffix: 'Mins', label: 'طريق العين السخنة' },
        { value: 5, suffix: 'Mins', label: 'الجامعة الامريكية' },
      ],
      unitsHeading: ['أنواع', 'الواحدات'],
      units: [
        {
          title: 'تجارية',
          text: [
            'ليس مجرد وجهة للتسوّق، بل تجربة متكاملة لنمط حياة عصري، حيث يلتقي النشاط التجاري بالراحة في تناغمٍ يعكس قيمة التجربة وتنوّعها.',
            'يفتح أي أنجل سيتي مول أبوابه ليقدّم تجربة استثنائية تجمع بين التسوّق والفرص المتنوعة داخل بيئة راقية ومتكاملة. ونحرص على توفير كل ما يرتقي بتجربة الزائر، ليظل رضا العملاء هو الأساس الذي يقوم عليه تميّز أي أنجل سيتي مول',
          ],
        },
        {
          title: 'إدارية',
          text: [
            'باعتباره وجهة تجارية متميزة متعددة الاستخدامات، يقدّم أي أنجل مفهومًا متطورًا يتجاوز النمط التقليدي من خلال دمج المكاتب الإدارية داخل بيئة حيوية متكاملة.',
            'وقد صُممت هذه المكاتب لتلبية احتياجات الشركات المختلفة، بما يضمن أعلى مستويات الكفاءة والإنتاجية لرواد الأعمال والمهنيين في بيئة عمل مثالية. كما جُهزت بأحدث التقنيات المتطورة التي تخلق أجواءً محفزة على الإبداع والتعاون، بما يدعم تحقيق أفضل النتائج وتعزيز فرص النجاح لعملائنا.',
          ],
        },
        {
          title: 'طبية',
          text: [
            'توفر عيادات أي أنجل سيتي مول بيئة طبية متكاملة تجمع بين الراحة والهدوء، بما يضمن تجربة علاجية آمنة تمنح المرضى الشعور بالاطمئنان.',
            'وتُعد هذه العيادات وجهة موثوقة للرعاية الصحية، حيث تم تجهيزها وفق أعلى المعايير لتلبية احتياجات المرضى بكفاءة واحترافية، مع التركيز على تقديم تجربة علاجية متميزة.',
          ],
        },
      ],
      facilitiesHeading: ['', 'الخدمات والمرافق'],
      floorHeading: ['التصميم الداخلي', 'للمساحات'],
      floors: ['تحت الارض', 'الدور الارضي', 'الدور الاول', 'الدور الثاني', 'الدور الثالث'],
      consultantsHeading: ['', 'شركاءنا في النجاح'],
    },
  },
  {
    slug: 'one-plaza',
    banner: '2026/02/banner-copy.webp',
    featured: '2026/02/one-plaza.webp',
    aboutImage: '2026/02/WhatsApp-Image-2026-04-16-at-5.42.21-PM-1.jpeg',
    map: '2026/02/one-plaza-map-for-website-989.png',
    brochure: '/files/one-plaza-sales-kit.pdf',
    unitImages: ['2026/02/administrative.jpg', '2026/02/commercial.jpg', '2026/02/medical.jpg'],
    floorImages: ['2026/02/floor-new-ground.webp', '2026/02/floor-new-1.webp', '2026/02/floor-new-2.webp', '2026/02/floor-new-3.webp'],
    en: {
      title: 'One Plaza',
      brochureLabel: 'Download Brochure',
      heading: ['All In', 'One'],
      aboutBtn: 'About JIWA',
      aboutTitle: 'ABOUT ONE PLAZA',
      about: [
        'One plaza is a commercial administrative and medical project located at the center of 1 st Settlement New Cairo in a vital location at Mostafa Kamel Axis, with an area of 3,060 sqm . One Plaza consists of 5 ﬂoors including one level of underground parking, Lower ground, ground and first floor are commercial zone With a second & Third ﬂoor dedicated to administrative and medical units .',
      ],
      stats: [],
      locationHeading: ['Our Vital', 'Location'],
      locationText:
        'With an exceptional location on Mostafa Kamel axis, and in the middle of the main roads linking the neighborhoods of New Cairo One Plaza project is in a vital location characterized by its proximity to all essential services .',
      distances: [
        { value: 4, suffix: 'Mins', label: 'Ring road' },
        { value: 5, suffix: 'Mins', label: 'Suez Road' },
        { value: 7, suffix: 'Mins', label: 'Petrosport Stadium' },
        { value: 6, suffix: 'Mins', label: 'Rehab City' },
        { value: 3, suffix: 'Mins', label: 'JW Marriott' },
        { value: 8, suffix: 'Mins', label: 'CIC' },
      ],
      unitsHeading: ['Our Unit', 'Types'],
      units: [
        {
          title: 'COMMERCIAL',
          text: [
            'One plaza provides a new and distinctive experience throughout its high-end retail areas .',
            'Where you can easily find your favorite food places, and shopping retails.',
            'Dining experiences will truly be a new and enjoyable experience as places of relaxation and tranquility merge with the beautifully designed commercial space to create a unique and enjoyable relaxing atmosphere to take your experience to a whole new level.',
          ],
        },
        {
          title: 'ADMINISTRATIVE',
          text: [
            'One plaza combines well-utilized spaces with a perfect environment that guarantees the most effective and efﬁcient productivity Whether you are a small or medium business looking to expand or a startup looking for the best niche to introduce to the market. One plaza is the perfect place to suit your needs . A private entrance separates the administrative ofﬁce area from the rest of the building, with interior floors, lighting, and high-quality ﬁnishes .',
          ],
        },
        {
          title: 'MEDICAL',
          text: [
            "One plaza clinic's designed to make you feel better right away . Because one plaza has been carefully designed with extreme attention to detail and ﬁnishing to provide a comfortable atmosphere . With a commercial district, patients will have their own medical care while their families and loved ones can enjoy the on-site dining and entertainment facilities .",
          ],
        },
      ],
      facilitiesHeading: ['Our', 'Facilities'],
      floorHeading: ['Floor', 'Plans'],
      floors: ['Ground Floor', 'First Floor', 'Second Floor', 'Third Floor'],
      consultantsHeading: ['Our', 'Consultants'],
    },
    ar: {
      title: 'One Plaza',
      brochureLabel: 'تحميل الملف التعريفي',
      heading: ['كل ما تحتاجه في مكان', 'واحد'],
      aboutBtn: 'عن JIWA',
      aboutTitle: 'عن وان بلازا',
      about: [
        'يعد ‘ون بلازا’ مشروعاً متكاملاً يجمع بين الوحدات التجارية والإدارية والطبية، ويحتل موقعاً حيوياً في قلب التجمع الأول بالقاهرة الجديدة مباشرة على محور مصطفى كامل. يمتد المشروع على مساحة 3,060 متر مربع، ويتكون من 5 طوابق تشمل طابقاً مخصصاً لانتظار السيارات تحت الأرض، وطوابق (البدروم المرتفع، الأرضي، والأول) للمنطقة التجارية، بينما خُصص الطابقان الثاني والثالث للوحدات الإدارية والطبية.',
      ],
      stats: [],
      locationHeading: ['اكتشف', 'موقعنا'],
      locationText:
        'بإطلالة استثنائية على محور مصطفى كامل، وفي قلب شبكة الطرق الرئيسية التي تربط أحياء القاهرة الجديدة؛ يتمتع مشروع ‘ون بلازا’ بموقع حيوي فريد يتميز بقربه الشديد من كافة الخدمات الأساسية والمرافق الحيوية.',
      distances: [
        { value: 4, suffix: 'Mins', label: 'الطريق الدائري' },
        { value: 5, suffix: 'Mins', label: 'طريق السويس' },
        { value: 7, suffix: 'Mins', label: 'ستاد بتروسبورت' },
        { value: 6, suffix: 'Mins', label: 'مدينة الرحاب' },
        { value: 3, suffix: 'Mins', label: 'JW Marriott' },
        { value: 8, suffix: 'Mins', label: 'CIC' },
      ],
      unitsHeading: ['أنواع', 'الوحدات'],
      units: [
        {
          title: 'تجارية',
          text: [
            'صُممت عيادات "ون بلازا" لتمنح المرضى شعورًا بالراحة والهدوء منذ اللحظة الأولى، من خلال اهتمام دقيق بالتفاصيل والتشطيبات، لتوفير بيئة طبية مريحة بمعايير عالية.',
            'وتقع الوحدات الطبية في الدورين الثاني والثالث، بما يضمن الخصوصية وسهولة الوصول داخل المشروع، مع تكامل كامل مع المنطقة التجارية التي توفر تجربة متكاملة للمرضى والمرافقين، بين الرعاية والخدمات والمطاعم في مكان واحد.',
          ],
        },
        {
          title: 'إدارية',
          text: [
            'يجمع "ون بلازا" بين التخطيط الذكي للمساحات وبيئة عمل مصممة لتعزيز الكفاءة والإنتاجية، ليمنحك تجربة احترافية تدعم نمو أعمالك.',
            'سواء كنت تسعى للتوسع أو تبحث عن انطلاقة قوية، ستجد هنا المساحة التي تواكب طموحاتك، مع تخصيص الوحدات الإدارية في الدورين الثاني والثالث.',
          ],
        },
        {
          title: 'طبية',
          text: [
            "صُممت عيادات 'ون بلازا' لتمنحك شعوراً بالراحة والسكينة منذ اللحظة الأولى؛ حيث أولينا اهتماماً فائقاً بأدق التفاصيل والتشطيبات لتوفير بيئة استشفاء مريحة وهادئة. وبفضل وجود منطقة تجارية متكاملة داخل المشروع، سيتمكن المرضى من الحصول على رعاية طبية متميزة، بينما يستمتع مرافقوهم وذووهم بخيارات المطاعم والترفيه المتاحة في الموقع، مما يجعل الزيارة الطبية تجربة مريحة لجميع أفراد العائلة.",
          ],
        },
      ],
      facilitiesHeading: ['', 'الخدمات و المرافق'],
      floorHeading: ['التصميم الداخلى', 'للمساحات'],
      floors: ['الدور الارضي', 'الدور الاول', 'الدور الثاني', 'الدور الثالث'],
      consultantsHeading: ['', 'شركاءنا في النجاح'],
    },
  },
  {
    slug: 'za-white',
    banner: '2026/02/banner-copy.jpg',
    featured: '2026/02/za-white.webp',
    aboutImage: '2026/02/z1-1.webp',
    map: '2026/02/za-white-map-for-website-989.png',
    unitImages: ['2026/02/administrative-1.jpg', '2026/02/medical-1.jpg', '2026/02/commercial-1.jpg'],
    floorImages: [
      '2026/02/WhatsApp-Image-2026-04-19-at-2.26.20-PM-1.jpeg',
      '2026/02/WhatsApp-Image-2026-04-19-at-2.26.21-PM.jpeg',
      '2026/02/WhatsApp-Image-2026-04-19-at-2.26.21-PM-1.jpeg',
    ],
    en: {
      title: 'Za white',
      heading: ['Where Everyone', 'Gathers'],
      aboutBtn: 'About JIWA',
      aboutTitle: 'ABOUT Za white',
      about: [
        'Za white was named because of its ideal location in the middle of a vital location in Zayed, to be a place for a great experience to spend a Splendid time in a unique commercial area of cafes and restaurants and surrounded by wide green spaces away from the noise of the street despite off being on waslet dahshour road , Hence the term',
      ],
      stats: [],
      locationHeading: ['Our Vital', 'Location'],
      locationText:
        'Za white is located in a significant and strategic location, in front of Ferrari and Mall of Arabia, on waslet dahshour road and the 26th of July Axis, and next to the Nile University Za White rhythmically is located to be the spot of the entire area surrounded by the following landmarks',
      distances: [
        { value: 150, suffix: 'M', label: 'Ferrari' },
        { value: 350, suffix: 'M', label: 'mall of Arabia' },
        { value: 650, suffix: 'M', label: 'Juhaynah Square' },
        { value: 800, suffix: 'M', label: 'Nile University' },
        { value: 3.2, suffix: 'KM', label: 'Shooting club' },
        { value: 6.5, suffix: 'KM', label: 'Dar Al Fouad Hospital' },
      ],
      unitsHeading: ['Our Unit', 'Types'],
      units: [
        {
          title: 'COMMERCIAL',
          text: [
            'The design of Za white was based on the importance of outdoor areas, so it was designed to satisfy both lovers of tranquility and those who love the hustle and bustle of the city.',
            'With a focus on the required codes for the food & beverage industry in terms of cafes/restaurants, shop owners and many more.',
          ],
        },
        {
          title: 'ADMINISTRATIVE',
          text: [
            'With a high-end finishes and optimum use for sunlight, we offer very practical offices, based on studies that show that natural sunlight increases employee productivity, along with the exposure to greenery and landscape in work environments that also improves the level of performance .',
            'From this perspective, we have taken upon ourselves how important it is for fast-growing companies, with ample office space and lighting to motivate employees to develop work mechanisms with productivity To be the best choice for our clients .',
          ],
        },
        {
          title: 'MEDICAL',
          text: [
            'Stay away from the competition and at the same time be at the heart of the action, your medical unit is in a high-demand area with a promising future to be a vital center for emerging companies in addition to many universities and hospitals in Waslet Dahshur.',
            'We offer fully finished medical units that suit all your needs.',
          ],
        },
      ],
      facilitiesHeading: ['Our', 'Facilities'],
      floorHeading: ['Floor', 'Plans'],
      floors: ['Ground Floor', 'First Floor', 'Second Floor'],
      consultantsHeading: ['Our', 'Consultants'],
    },
    ar: {
      title: 'Za white',
      heading: ['حيث تبدأ كل', 'الحكايات'],
      aboutBtn: 'عن JIWA',
      aboutTitle: 'عن زا وايت',
      about: [
        'يُعد “زا وايت” وجهة تجارية وترفيهية متكاملة تم تطويرها في موقع استراتيجي داخل مدينة الشيخ زايد، ليقدم تجربة يومية استثنائية تجمع بين سهولة الوصول والخصوصية في آنٍ واحد. يتميز المشروع بتصميم حديث يراعي انسيابية الحركة وتوزيع الأنشطة بشكل يحقق أعلى درجات الراحة للزوار.',
        'يوفر “زد وايت” بيئة نابضة بالحياة تضم مجموعة مختارة من المطاعم والكافيهات والخدمات، ضمن أجواء راقية تحيط بها مساحات خضراء تمنح إحساسًا بالهدوء والاتساع. ويأتي المشروع ليعكس مفهومًا متوازنًا يجمع بين الحيوية والسكينة، ليصبح وجهة مثالية للتجربة اليومية في قلب الشيخ زايد.',
      ],
      stats: [],
      locationHeading: ['اكتشف', 'موقعنا'],
      locationText:
        'يحتل ‘زد وايت’ موقعاً استراتيجياً بارزاً في قلب الشيخ زايد، حيث يتألق بمواجهة مباشرة لمعرض ‘فراري’ ومول العرب، وعلى تقاطع طريق وصلة دهشور مع محور 26 يوليو، وبالقرب من جامعة النيل. لقد تم اختيار موقع ‘زد وايت’ بدقة ليكون النقطة المركزية والنبض الحيوي للمنطقة بأكملها، محاطاً بأهم المعالم الحيوية التي تجعل منه الوجهة الأولى بلا منازع.',
      distances: [
        { value: 150, suffix: 'M', label: 'فراري' },
        { value: 350, suffix: 'M', label: 'مول العرب' },
        { value: 650, suffix: 'M', label: 'ميدان جهينة' },
        { value: 800, suffix: 'M', label: 'جامعة النيل' },
        { value: 3.2, suffix: 'KM', label: 'نادي الرماية' },
        { value: 6.5, suffix: 'KM', label: 'مستشفى دار الفؤاد' },
      ],
      unitsHeading: ['أنواع', 'الوحدات'],
      units: [
        {
          title: 'تجارية',
          text: [
            "ارتكز تصميم 'زد وايت' على الأهمية البالغة للمساحات الخارجية المفتوحة، ليلبي تطلعات الباحثين عن الهدوء والسكينة، وعشاق صخب وحيوية المدينة في آنٍ واحد. ومع التركيز الدقيق على تطبيق الأكواد والمعايير الهندسية المطلوبة لقطاع الأغذية والمشروبات (F&B)، يوفر المشروع بيئة مثالية تضمن نجاح أصحاب المطاعم والكافيهات والمحلات التجارية، وتلبي احتياجاتهم التشغيلية بدقة واحترافية.",
          ],
        },
        {
          title: 'إدارية',
          text: [
            'بتشطيبات فاخرة واستغلال ذكي لضوء الشمس، نقدم مكاتب إدارية تتسم بالعملية المطلقة؛ استناداً إلى دراسات تثبت أن الإضاءة الطبيعية تعزز من إنتاجية الموظفين، وأن الإطلالات الخضراء والمساحات المفتوحة في بيئات العمل ترفع من مستويات الأداء بشكل ملحوظ. ومن هذا المنطلق، أخذنا على عاتقنا توفير مساحات إدارية واسعة وإضاءة مثالية تحفز الشركات سريعة النمو على تطوير آليات عملها وزيادة كفاءتها، لنكون دائماً الخيار الأول والأفضل لعملائنا.',
          ],
        },
        {
          title: 'طبية',
          text: [
            'ابتعد عن ازدحام المنافسين وكن في قلب الحدث في آنٍ واحد؛ حيث تقع وحدتك الطبية في منطقة ذات طلب مرتفع ومستقبل واعد، لتكون مركزاً حيوياً يخدم الشركات الناشئة، بالإضافة إلى قربها من العديد من الجامعات والمستشفيات الكبرى على طريق وصلة دهشور. نحن نقدم وحدات طبية كاملة التشطيب، مصممة بدقة لتلبي كافة احتياجاتك المهنية وتضمن لك بيئة عمل مثالية.',
          ],
        },
      ],
      facilitiesHeading: ['', 'الخدمات و المرافق'],
      floorHeading: ['التصميم الداخلى', 'للمساحات'],
      floors: ['الدور الارضي', 'الدور الاول', 'الدور الثاني'],
      consultantsHeading: ['', 'شركاءنا فى النجاح'],
    },
  },
];

/** Order projects appear in menus & footer */
export const projectMenu = ['aiangle', 'one-plaza', 'za-white'];
