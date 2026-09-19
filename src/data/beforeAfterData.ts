export interface ComparisonPair {
  id: string;
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export interface TransformationItem {
  title: string;
  before: string;
  after: string;
}

export interface ProjectVideo {
  title: string;
  src: string;
  duration?: string;
}

export interface BeforeAfterProject {
  id: string;
  code: string;
  title: string;
  category: 'pool' | 'landscape' | 'comprehensive';
  categoryLabel: string;
  location: string;
  area: string;
  year: string;
  duration: string;
  status: 'completed' | 'upcoming';
  summary: string;
  beforeDescription: string;
  afterDescription: string;
  comparisonPairs: ComparisonPair[];
  transformationScope: TransformationItem[];
  features: string[];
  beforeGallery: string[];
  afterGallery: string[];
  videos?: ProjectVideo[];
}

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'project-1',
    code: 'TR-PL-01',
    title: 'تنفيذ مسبح إنفينيتي فاخر وجلسات مائية غاطسة',
    category: 'pool',
    categoryLabel: 'المسابح السكنية الفاخرة',
    location: 'نخلة جميرا، دبي',
    area: '16 × 7.5 متر',
    year: '2024 — 2025',
    duration: '75 يوم عمل',
    status: 'completed',
    summary: 'تحويل كامل لفناء فيلا خاصة من أعمال حفر وعزل وتأسيس هيكلي معقد إلى مسبح إنفينيتي متدفق مجهز بجلسات شاطئية غاطسة (Sunken Loungers)، شلالات مائية ثلاثية، تكسيات بورسلان إسباني، ونظام إضاءة ذكي متناغم مع أشجار البونساي واللاندسكيب المحيط.',
    beforeDescription: 'موقع إنشائي رملي مفتوح مع حفر عشوائي، انعدام العزل المائي وأنظمة الصرف، تضاريس ترابية غير متناسقة مع مبنى الفيلا.',
    afterDescription: 'مسبح إنفينيتي متكامل بتشطيب بورسلان راقٍ، كراسي استجمام مائية في التانينج ليدج (Tanning Ledge)، شلالات حائطية متدفقة، ومسارات حجرية مع إضاءة ليلية سينمائية.',
    comparisonPairs: [
      {
        id: 'p1-angle-1',
        title: 'الزاوية الأولى: منطقة الجلسات المائية والتانينج ليدج',
        subtitle: 'مقارنة دقيقة بين مرحلة الصب والتأسيس الخرساني وبين الجلسات المائية الغاطسة',
        beforeImage: '/projects/project-1/before/before-1.jpg',
        afterImage: '/projects/project-1/after/after-1.jpg',
        beforeLabel: 'قبل: مرحلة الحفر والقواعد الخرسانية',
        afterLabel: 'بعد: جلسة مائية وبورسلان وبونساي معمارية',
      },
      {
        id: 'p1-angle-2',
        title: 'الزاوية الثانية: المسقط البانورامي للمسبح والشلالات',
        subtitle: 'من شبكة حديد التسليح الكثيفة المقاومة للرطوبة إلى نقاء المياه الفيروزية',
        beforeImage: '/projects/project-1/before/before-2.jpg',
        afterImage: '/projects/project-1/after/after-3.jpg',
        beforeLabel: 'قبل: شبكة حديد التسليح والتمديدات الهيدروليكية',
        afterLabel: 'بعد: مسبح إنفينيتي وشلالات جدارية متتالية',
      },
      {
        id: 'p1-angle-3',
        title: 'الزاوية الثالثة: حواف المسبح ومسار التصريف الخفي',
        subtitle: 'تنفيذ دقيق لحافة التدفق المستمر والمسارات الحصوية الفاخرة',
        beforeImage: '/projects/project-1/before/before-3.jpg',
        afterImage: '/projects/project-1/after/after-2.jpg',
        beforeLabel: 'قبل: عزل القواعد وتمديد خطوط الفلترة',
        afterLabel: 'بعد: حواف بورسلان مضادة للانزلاق ومياه كريستالية',
      },
    ],
    transformationScope: [
      {
        title: 'الأعمال الإنشائية والخرسانة المسلحة',
        before: 'أرض ترابية غير مستوية بحاجة لدعم هندسي وضغط تربة معتمد.',
        after: 'هيكل خرساني مسلح مقاوم للكبريتات مع صب متصل لمنع فواصل الصب.',
      },
      {
        title: 'نظام العزل المائي (Waterproofing)',
        before: 'عدم وجود أي نظام عزل رطوبة يهدد أساسات المبنى المجاور.',
        after: 'عزل أسمنتي وبوليمري مزدوج مع اختبار غمر مائي لمدة 72 ساعة وضمان 10 سنوات.',
      },
      {
        title: 'التشطيبات والكسوة المائية',
        before: 'حوائط ترابية وقوالب خشبية مؤقتة.',
        after: 'ألواح بورسلان وبلاط موزاييك فاخر متدرج ومقاوم للملوحة وأشعة الشمس.',
      },
      {
        title: 'التجهيزات الميكانيكية والهيدروليكية',
        before: 'انعدام مصادر المياه والصرف ومضخات الفلترة.',
        after: 'نظام فلترة ذكي بنظام الملح (Salt Chlorinator)، شلالات مبرمجة، ومضخات متغيرة السرعة موفرة للطاقة.',
      },
      {
        title: 'الإضاءة واللاندسكيب المحيط',
        before: 'ظلام دامس وانعدام أي عناصر جمالية خارجية.',
        after: 'إضاءة غاطسة LED متعددة الدرجات، ومسارات حجرية مع أشجار بونساي وزيتون مستوردة.',
      },
    ],
    features: [
      'حافة إنفينيتي متدفقة بالكامل (Full Infinity Spillway)',
      'جلسة استجمام مائية (Shallow Sunken Tanning Ledge)',
      'شلالات مائية جدارية ثلاثية (Triple Cascades)',
      'نظام فلترة ومعالجة ملحية خالية من رائحة الكلور الحادة',
      'أشجار زينة وبونساي في أحواض حجرية فاخرة',
      'أرضيات ديكينج مقاومة للحرارة وأشعة الشمس',
    ],
    beforeGallery: [
      '/projects/project-1/before/before-1.jpg',
      '/projects/project-1/before/before-2.jpg',
      '/projects/project-1/before/before-3.jpg',
      '/projects/project-1/before/before-4.jpg',
      '/projects/project-1/before/before-5.jpg',
      '/projects/project-1/before/before-6.jpg',
      '/projects/project-1/before/before-7.jpg',
      '/projects/project-1/before/before-8.jpg',
      '/projects/project-1/before/before-9.jpg',
      '/projects/project-1/before/before-10.jpg',
      '/projects/project-1/before/before-11.jpg',
      '/projects/project-1/before/before-12.jpg',
    ],
    afterGallery: [
      '/projects/project-1/after/after-1.jpg',
      '/projects/project-1/after/after-2.jpg',
      '/projects/project-1/after/after-3.jpg',
      '/projects/project-1/after/after-4.jpg',
      '/projects/project-1/after/after-5.jpg',
      '/projects/project-1/after/after-6.jpg',
      '/projects/project-1/after/after-7.jpg',
      '/projects/project-1/after/after-8.jpg',
      '/projects/project-1/after/after-9.jpg',
      '/projects/project-1/after/after-10.jpg',
      '/projects/project-1/after/after-11.jpg',
      '/projects/project-1/after/after-12.jpg',
    ],
    videos: [
      {
        title: 'توثيق ليلي لجريان المياه ونظام الشلالات المضيء',
        src: '/projects/project-1/video/video-1.mp4',
        duration: 'جولة ليلية',
      },
      {
        title: 'جولة مسائية متكاملة لحوض المسبح والتشطيبات الفاخرة',
        src: '/projects/project-1/video/video-2.mp4',
        duration: 'نظرة شاملة',
      },
      {
        title: 'حركة تدفق المياه في التانينج ليدج والشلالات',
        src: '/projects/project-1/video/video-4.mp4',
        duration: 'تفاصيل هيدروليكية',
      },
    ],
  },
  {
    id: 'project-2',
    code: 'TR-LS-02',
    title: 'تطوير فناء سكني متكامل مع مسبح وجلسة دائرية وبرجولة',
    category: 'comprehensive',
    categoryLabel: 'تنسيق حدائق ومسابح متكامل',
    location: 'المرابع العربية، دبي',
    area: '920 متر مربع',
    year: '2022 — 2023',
    duration: '110 يوم عمل',
    status: 'completed',
    summary: 'تحول جذري لفناء فيلا سكنية واسعة كانت عبارة عن أرض صحراوية خالية مع حفرة مسبح غير مكتملة، إلى مساحة ترفيهية متكاملة تضم جلسة دائرية حجرية تتوسطها شعلة نار غاطسة، مسبحاً خاصاً، برجولة معدنية مع مطبخ خارجي مجهز (BBQ Counter)، ممرات خضراء مزينة بشرائط إضاءة LED، وأنظمة ري أوتوماتيكية ذكية.',
    beforeDescription: 'فناء رملي شاسع غير مستغل، تلال ترابية متفرقة، حوض مسبح أزرق تقليدي غير مكتمل ومحاط بالحصى والركام دون أسوار أو جلسات.',
    afterDescription: 'واحة عصرية فاخرة توفر خصوصية تامة، جلسة حجرية دائرية غاطسة مع إنارة محيطية، برجولة ذات تصميم مشربية عصري، ممرات عشبية مضيئة، وتشجير متكامل يتكيف مع مناخ الإمارات.',
    comparisonPairs: [
      {
        id: 'p2-angle-1',
        title: 'الزاوية الأولى: تحويل الفناء الصحراوي إلى جلسة دائرية فاخرة',
        subtitle: 'من أرض رملية قاحلة إلى جلسة حجرية دائرية بإضاءة محيطية دافئة ومسارات عشبية',
        beforeImage: '/projects/project-2/before/before-1.jpg',
        afterImage: '/projects/project-2/after/after-1.jpg',
        beforeLabel: 'قبل: فناء رملي خالي وركام حفر غير مستغل',
        afterLabel: 'بعد: جلسة دائرية رخامية مع شعلة ومسارات عشبية مضاءة',
      },
      {
        id: 'p2-angle-2',
        title: 'الزاوية الثانية: منطقة البرجولة العصرية والمطبخ الخارجي',
        subtitle: 'تأسيس متين لمنطقة الترفيه والضيافة الخارجية تحت سقف البرجولة المفرغة',
        beforeImage: '/projects/project-2/before/before-2.jpg',
        afterImage: '/projects/project-2/after/after-2.jpg',
        beforeLabel: 'قبل: مساحة ترابية فارغة خلف جدار الفيلا',
        afterLabel: 'بعد: برجولة مشربية ومطبخ بار خارجي بإنارة أرضية',
      },
      {
        id: 'p2-angle-3',
        title: 'الزاوية الثالثة: تطوير وتحديث مسبح الفيلا والتشطيبات المحيطة',
        subtitle: 'إعادة عزل وتشطيب أرضيات المسبح ودمجه بسلاسة مع الحديقة والمسارات',
        beforeImage: '/projects/project-2/before/before-3.jpg',
        afterImage: '/projects/project-2/after/after-4.jpg',
        beforeLabel: 'قبل: حفر المسبح غير المكتمل وركام التربة',
        afterLabel: 'بعد: مسبح متكامل بأرضيات حجرية وتشجير فاخر',
      },
    ],
    transformationScope: [
      {
        title: 'إدارة الموقع والتسوية الإنشائية',
        before: 'تراكم أكثر من 40 طناً من الركام والأتربة الزائدة ومناسيب غير مدروسة.',
        after: 'تسوية ليزرية دقيقة لكامل الفناء، تثبيت التربة، وبناء جدران استنادية ديكورية.',
      },
      {
        title: 'الجلسة الدائرية الحجرية (Sunken Fire-Pit Lounge)',
        before: 'فراغ رملي مكشوف عرضة للرياح والغبار.',
        after: 'بناء دائري من الحجر الطبيعي والرخام المصقول مع مدفأة غازية مركزية وإضاءة مخفية.',
      },
      {
        title: 'البرجولة والمنطقة الخدمية الخارجية',
        before: 'انعدام أي مساحات مظللة للجلوس أو إعداد الطعام.',
        after: 'برجولة ألمنيوم معالجة بطلاء حراري مع كاونتر مطبخ حجري وشواية مدمجة وإنارة معلقة.',
      },
      {
        title: 'اللاندسكيب الزراعي والمسطحات الخضراء',
        before: 'لا توجد أي نباتات أو شبكات ري، والحرارة تنعكس بشدة على البيت.',
        after: 'عشب طبيعي كثيف، أشجار تظليل، ومسارات حجرية تفصل بين المساحات بسلاسة.',
      },
      {
        title: 'هندسة الإضاءة الليلية (Landscape Lighting)',
        before: 'إضاءة سور الفيلا الضعيفة وغير الموجهة.',
        after: 'شرائط LED أرضية دافئة تحدد الممرات، وكشافات سبوت لايت مسلطة على سيقان الأشجار.',
      },
    ],
    features: [
      'جلسة حجرية دائرية مخصصة (Custom Stone Circle Lounge)',
      'شعلة نار مركزية غاطسة (Sunken Fire Pit Feature)',
      'برجولة ألمنيوم مقاومة للرطوبة والعوامل الجوية مع مشربية',
      'كاونتر بار ومطبخ خارجي مجهز (Outdoor Kitchen Counter)',
      'ممرات حجرية طبيعية متداخلة مع العشب الأخضر',
      'إضاءات ليد خطية دافئة (Linear Contour Lighting)',
      'نظام ري أوتوماتيكي ذكي موفر للمياه',
    ],
    beforeGallery: [
      '/projects/project-2/before/before-1.jpg',
      '/projects/project-2/before/before-2.jpg',
      '/projects/project-2/before/before-3.jpg',
      '/projects/project-2/before/before-4.jpg',
      '/projects/project-2/before/before-5.jpg',
      '/projects/project-2/before/before-6.jpg',
      '/projects/project-2/before/before-7.jpg',
      '/projects/project-2/before/before-8.jpg',
      '/projects/project-2/before/before-9.jpg',
      '/projects/project-2/before/before-10.jpg',
      '/projects/project-2/before/before-11.jpg',
      '/projects/project-2/before/before-12.jpg',
    ],
    afterGallery: [
      '/projects/project-2/after/after-1.jpg',
      '/projects/project-2/after/after-2.jpg',
      '/projects/project-2/after/after-3.jpg',
      '/projects/project-2/after/after-4.jpg',
      '/projects/project-2/after/after-5.jpg',
      '/projects/project-2/after/after-6.jpg',
      '/projects/project-2/after/after-7.jpg',
      '/projects/project-2/after/after-8.jpg',
      '/projects/project-2/after/after-9.jpg',
      '/projects/project-2/after/after-10.jpg',
      '/projects/project-2/after/after-11.jpg',
      '/projects/project-2/after/after-12.jpg',
    ],
  },
  {
    id: 'project-3',
    code: 'TR-FT-03',
    title: 'تصميم وتنفيذ نافورة مائية راقصة ومسطحات عاكسة',
    category: 'pool',
    categoryLabel: 'العناصر المائية والنوافير',
    location: 'المركز المالي، أبوظبي',
    area: '250 متر مربع',
    year: '2024',
    duration: '60 يوم عمل',
    status: 'upcoming',
    summary: 'مشروع مائي معماري ضخم يضم مسطحات مائية عاكسة وشلالات جدارية ونفاثات تفاعلية مبرمجة بأنظمة DMX — جاري استكمال التوثيق الفوتوغرافي لرفعه قريباً.',
    beforeDescription: 'موقع تجاري تحت الإنشاء.',
    afterDescription: 'عنصر مائي حركي متكامل مع إضاءات ليلية مبرمجة.',
    comparisonPairs: [],
    transformationScope: [],
    features: ['مسطحات مائية عاكسة', 'نفاثات تفاعلية', 'جرانيت أسود مصقول', 'أنظمة تحكم ذكية'],
    beforeGallery: [],
    afterGallery: [],
  },
];
