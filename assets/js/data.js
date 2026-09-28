/* ==========================================================================
   محتوى الموقع — الخدمات، المنتجات، الأعمال
   ---------------------------------------------------------------------------
   لإضافة منتج جديد: انسخ أي سطر من products وغيّر id و cat و img و ar و en.
   الصور: ضع الصورة في assets/img/products/<img>.jpg
          ونسخة مصغّرة في assets/img/products/thumb/<img>.jpg
   إذا تركت img فارغة، بيظهر مكانها أيقونة أنيقة بدل صورة مكسورة.
   ========================================================================== */

window.DATA = {

  /* ---------------------------------------------------------------- الخدمات */
  services: [
    {
      id: 'print',
      icon: 'printer',
      ar: {
        title: 'الطباعة والمطبوعات',
        desc: 'طباعة أوفست وديجيتال بدقة عالية، لكل ما تحتاجه من ورق يحمل اسمك — من الكرت الشخصي إلى الكتالوج الكامل.',
        items: ['كروت شخصية', 'بروشورات وفلايرز', 'فواتير ودفاتر', 'مغلفات وأوراق رسمية', 'كتالوجات ومنيوهات', 'أكياس نايلون وورقية', 'ملصقات وستيكرات', 'كروت أفراح ومناسبات']
      },
      en: {
        title: 'Printing & Publications',
        desc: 'High-precision offset and digital printing — everything from a single business card to a full product catalogue.',
        items: ['Business cards', 'Brochures & flyers', 'Invoice books', 'Envelopes & letterheads', 'Catalogues & menus', 'Nylon & paper bags', 'Labels & stickers', 'Wedding & event cards']
      }
    },
    {
      id: 'signage',
      icon: 'sign',
      ar: {
        title: 'اللوحات واللافتات والدعاية الخارجية',
        desc: 'واجهة محلك هي أول إعلان يشوفه الزبون. ننفّذ اللافتات والحروف واللوحات بخامات تتحمّل الشمس والشتا.',
        items: ['لافتات محلات', 'حروف بارزة ومضيئة', 'نيون ولد', 'شوادر وبانرات', 'رول أب وستاندات', 'تغليف سيارات', 'لوحات إرشادية', 'ستيكر واجهات وزجاج']
      },
      en: {
        title: 'Signage & Outdoor Advertising',
        desc: 'Your storefront is the first ad a customer sees. We build signs, letters and boards from materials that survive sun and rain.',
        items: ['Shop signage', '3D & illuminated letters', 'Neon & LED', 'Banners & shaders', 'Roll-ups & stands', 'Vehicle wraps', 'Wayfinding signs', 'Window & glass vinyl']
      }
    },
    {
      id: 'design',
      icon: 'palette',
      ar: {
        title: 'التصميم الجرافيكي والهوية البصرية',
        desc: 'شعار يُذكر، وهوية بصرية متماسكة تظهر بنفس الشكل على الكرت والواجهة والسوشال ميديا.',
        items: ['تصميم شعارات', 'هوية بصرية كاملة', 'دليل استخدام الشعار', 'تصاميم سوشال ميديا', 'تصميم منيوهات', 'تصميم عبوات وتغليف', 'إعلانات مطبوعة ورقمية', 'تصوير ومونتاج منتجات']
      },
      en: {
        title: 'Graphic Design & Brand Identity',
        desc: 'A logo that gets remembered, and a coherent identity that looks the same on the card, the storefront and the feed.',
        items: ['Logo design', 'Full brand identity', 'Brand guidelines', 'Social media design', 'Menu design', 'Packaging design', 'Print & digital ads', 'Product photography & retouch']
      }
    },
    {
      id: 'promo',
      icon: 'gift',
      ar: {
        title: 'الهدايا الدعائية والتسويق الرقمي',
        desc: 'هدية عليها اسمك تفضل عند الزبون شهور. ونديرلك حضورك الرقمي عشان اسمك يوصل أبعد من محلك.',
        items: ['أكواب وكاسات سبلميشن', 'تيشيرتات مطبوعة', 'دروع تكريم', 'أقلام وأجندات', 'براويز وهدايا مصوّرة', 'إدارة صفحات', 'إعلانات ممولة', 'تصوير منتجات']
      },
      en: {
        title: 'Promotional Gifts & Digital Marketing',
        desc: 'A gift with your name stays with a customer for months. And we run your digital presence so your name travels further than your shop.',
        items: ['Sublimation mugs & tumblers', 'Printed T-shirts', 'Award shields', 'Branded pens & notebooks', 'Photo frames & keepsakes', 'Social media management', 'Paid ads', 'Product photography']
      }
    },
    {
      id: 'supplies',
      icon: 'roll',
      ar: {
        title: 'مستلزمات الطباعة — جملة ومفرق',
        desc: 'نورّد المطابع والمحلات بالخامات الأصلية: أحبار وأوراق وفينيل ورولات — بكميات تناسب المحل الصغير والمطبعة الكبيرة.',
        items: ['أحبار عادية وسبلميشن', 'ورق صور وسبلميشن', 'ورق ستيكر لاصق', 'فينيل حراري وقص', 'رولات شوادر وبانر', 'رولات ستيكر', 'ألبومات صور', 'براويز بكل المقاسات']
      },
      en: {
        title: 'Printing Supplies — Wholesale & Retail',
        desc: 'We supply print houses and shops with genuine materials: inks, papers, vinyl and rolls — in quantities that suit both a small shop and a large press.',
        items: ['Standard & sublimation inks', 'Photo & sublimation paper', 'Adhesive sticker paper', 'Heat transfer & cut vinyl', 'Banner & shader rolls', 'Sticker rolls', 'Photo albums', 'Frames in every size']
      }
    }
  ],

  /* ---------------------------------------------------------------- العروض
     عروض الباقات المميّزة — تظهر في قسم مستقل بالصفحة الرئيسية.
     `img` اختياري: حطّ البوستر في assets/img/offers/<img>.jpg وبيظهر جنب العرض.
     لإخفاء عرض مؤقتاً احذف سطره أو خلّي `active: false`. */
  offers: [
    {
      id: 'wedding',
      img: 'offer-wedding',
      price: 400,
      ar: {
        title: 'بكج الأعراس',
        tagline: 'نصنع حضورك في كل مناسبة',
        items: ['بوسترين بتصميم مخصّص باسم العريس', '1000 فنجان قهوة مطبوع', 'عباية عريس مطبوعة']
      },
      en: {
        title: 'Wedding Package',
        tagline: 'We make your presence felt at every occasion',
        items: ['Two custom banners with the groom’s name', '1,000 printed coffee cups', 'A printed groom’s robe']
      }
    },
    {
      id: 'starter',
      img: 'offer-starter',
      price: 2400,
      ar: {
        title: 'العرض الشامل',
        tagline: 'كل اللي بتحتاجه لتبدأ مشروع طباعة سبلميشن من الصفر',
        items: ['طابعة إيبسون L3210', 'مكبس حراري 5 في 1', 'حبر سبلميشن', 'ورق سبلميشن']
      },
      en: {
        title: 'The Complete Bundle',
        tagline: 'Everything you need to start a sublimation printing business from scratch',
        items: ['Epson L3210 printer', '5-in-1 heat press', 'Sublimation ink', 'Sublimation paper']
      }
    }
  ],

  /* --------------------------------------------------------- تصنيفات المنتجات */
  productCats: [
    { id: 'photoframes', ar: 'فريمات صور',        en: 'Photo Frames' },
    { id: 'frames',   ar: 'براويز وهدايا',        en: 'Frames & Gifts' },
    { id: 'papers',   ar: 'أوراق طباعة',          en: 'Printing Papers' },
    { id: 'inks',     ar: 'أحبار وسبلميشن',       en: 'Inks & Sublimation' },
    { id: 'vinyl',    ar: 'فينيل حراري وقص',      en: 'Vinyl & HTV' },
    { id: 'rolls',    ar: 'رولات شوادر وستكرز',   en: 'Banner & Sticker Rolls' },
    { id: 'albums',   ar: 'ألبومات صور',          en: 'Photo Albums' },
    { id: 'gifts',    ar: 'هدايا دعائية',         en: 'Promotional Gifts' },
    { id: 'machines', ar: 'طابعات وماكينات',      en: 'Printers & Machines' },
    { id: 'usb',      ar: 'فلاشات USB',            en: 'USB Flash Drives' }
  ],

  /* ------------------------------------------------------------- المنتجات */
  products: [
    /* ---- فريمات صور (أقسام فرعية حسب المقاس) ---- */
    /* --- مقاس 15×10 سم --- */
    { id: 'fr44', cat: 'photoframes', img: 'frame-44', code: 'B29', price: 19, group: { ar: 'مقاس 15×10 سم', en: 'Size 15×10 cm' }, ar: { name: 'فريم الهلال العصري', desc: 'فريم صور بمقاس 15×10 سم.' }, en: { name: 'Modern Crescent Frame', desc: 'Photo frame, 15×10 cm.' } },
    { id: 'fr45', cat: 'photoframes', img: 'frame-45', code: 'B29', price: 19, group: { ar: 'مقاس 15×10 سم', en: 'Size 15×10 cm' }, ar: { name: 'فريم ورق الشجر الذهبي', desc: 'فريم صور بمقاس 15×10 سم.' }, en: { name: 'Gold Leaf Frame', desc: 'Photo frame, 15×10 cm.' } },
    { id: 'fr46', cat: 'photoframes', img: 'frame-46', code: 'B29', price: 19, group: { ar: 'مقاس 15×10 سم', en: 'Size 15×10 cm' }, ar: { name: 'فريم ورق الشجر الأسود', desc: 'فريم صور بمقاس 15×10 سم.' }, en: { name: 'Black Leaf Frame', desc: 'Photo frame, 15×10 cm.' } },
    { id: 'fr47', cat: 'photoframes', img: 'frame-47', code: 'B27', price: 18, group: { ar: 'مقاس 15×10 سم', en: 'Size 15×10 cm' }, ar: { name: 'فريم الصور العائلية', desc: 'فريم صور بمقاس 15×10 سم.' }, en: { name: 'Family Photo Frame', desc: 'Photo frame, 15×10 cm.' } },
    { id: 'fr49', cat: 'photoframes', img: 'frame-49', code: 'B26', price: 31, group: { ar: 'مقاس 15×10 سم', en: 'Size 15×10 cm' }, ar: { name: 'فريم خشبي سبلميشن', desc: 'فريم صور بمقاس 15×10 سم.' }, en: { name: 'Sublimation Wood Frame', desc: 'Photo frame, 15×10 cm.' } },
    { id: 'fr57', cat: 'photoframes', img: 'frame-57', code: 'B20', price: 19, group: { ar: 'مقاس 15×10 سم', en: 'Size 15×10 cm' }, ar: { name: 'فريم الورد المعلق', desc: 'فريم صور بمقاس 15×10 سم.' }, en: { name: 'Hanging Rose Frame', desc: 'Photo frame, 15×10 cm.' } },
    { id: 'fr58', cat: 'photoframes', img: 'frame-58', code: 'B20', price: 19, group: { ar: 'مقاس 15×10 سم', en: 'Size 15×10 cm' }, ar: { name: 'فريم الورد المعلق', desc: 'فريم صور بمقاس 15×10 سم.' }, en: { name: 'Hanging Rose Frame', desc: 'Photo frame, 15×10 cm.' } },
    { id: 'fr75', cat: 'photoframes', img: 'frame-75', code: 'B9', price: 21, group: { ar: 'مقاس 15×10 سم', en: 'Size 15×10 cm' }, ar: { name: 'فريم الكتاب الثلاثي', desc: 'فريم صور بمقاس 15×10 سم.' }, en: { name: 'Triple Book Frame', desc: 'Photo frame, 15×10 cm.' } },
    { id: 'fr76', cat: 'photoframes', img: 'frame-76', code: 'B9', price: 21, group: { ar: 'مقاس 15×10 سم', en: 'Size 15×10 cm' }, ar: { name: 'فريم الكتاب الثلاثي', desc: 'فريم صور بمقاس 15×10 سم.' }, en: { name: 'Triple Book Frame', desc: 'Photo frame, 15×10 cm.' } },
    { id: 'fr77', cat: 'photoframes', img: 'frame-77', code: 'B8', price: 24, group: { ar: 'مقاس 15×10 سم', en: 'Size 15×10 cm' }, ar: { name: 'فريم الكتاب الثلاثي العريض', desc: 'فريم صور بمقاس 15×10 سم.' }, en: { name: 'Wide Triple Book Frame', desc: 'Photo frame, 15×10 cm.' } },
    { id: 'fr78', cat: 'photoframes', img: 'frame-78', code: 'B7', price: 21, group: { ar: 'مقاس 15×10 سم', en: 'Size 15×10 cm' }, ar: { name: 'فريم الكتاب الثلاثي', desc: 'فريم صور بمقاس 15×10 سم.' }, en: { name: 'Triple Book Frame', desc: 'Photo frame, 15×10 cm.' } },

    /* --- مقاس 18×13 سم --- */
    { id: 'fr13', cat: 'photoframes', img: 'frame-13', code: 'B43', price: 6, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم أخضر كلاسيك', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Classic Green Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr14', cat: 'photoframes', img: 'frame-14', code: 'B43', price: 7, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم ذهبي', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Gold Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr15', cat: 'photoframes', img: 'frame-15', code: 'B43', price: 7, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم رمادي غامق', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Dark Grey Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr16', cat: 'photoframes', img: 'frame-16', code: 'B42', price: 7, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم ذهبي لامع', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Glossy Gold Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr25', cat: 'photoframes', img: 'frame-25', code: 'B38', price: 18, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم الأطفال الخشبي', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Kids Wooden Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr26', cat: 'photoframes', img: 'frame-26', code: 'B38', price: 18, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم الأطفال الخشبي', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Kids Wooden Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr27', cat: 'photoframes', img: 'frame-27', code: 'B37', price: 17, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم الصور الهادئة المضيء', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Soft Photo Frame — Illuminated', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr28', cat: 'photoframes', img: 'frame-28', code: 'B37', price: 17, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم الصور الهادئة المضيء', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Soft Photo Frame — Illuminated', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr32', cat: 'photoframes', img: 'frame-32', code: 'B34', price: 19, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم الكتاب المزدوج', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Double Book Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr33', cat: 'photoframes', img: 'frame-33', code: 'B34', price: 19, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم الكتاب المزدوج', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Double Book Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr34', cat: 'photoframes', img: 'frame-34', code: 'B34', price: 21, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم الصور الثلاثية', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Triple Photo Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr35', cat: 'photoframes', img: 'frame-35', code: 'B34', price: 21, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم الصور الثلاثية', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Triple Photo Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr36', cat: 'photoframes', img: 'frame-36', code: 'B33', price: 19, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم اللوحات المزدوج', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Double Panel Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr37', cat: 'photoframes', img: 'frame-37', code: 'B31', price: 8, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم أبيض ورمادي', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'White & Grey Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr38', cat: 'photoframes', img: 'frame-38', code: 'B31', price: 8, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم أبيض وسكني', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'White & Taupe Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr39', cat: 'photoframes', img: 'frame-39', code: 'B30', price: 8, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم رمادي كلاسيكي', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Classic Grey Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr40', cat: 'photoframes', img: 'frame-40', code: 'B30', price: 8, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم بني غامق', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Dark Brown Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr41', cat: 'photoframes', img: 'frame-41', code: 'B30', price: 8, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم أطفال', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Kids Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr50', cat: 'photoframes', img: 'frame-50', code: 'B24', price: 19, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم مزدوج خشبي', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Double Wood Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr51', cat: 'photoframes', img: 'frame-51', code: 'B24', price: 19, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم مزدوج خشبي', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Double Wood Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr53', cat: 'photoframes', img: 'frame-53', code: 'B20', price: 18, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم مزدوج عريض', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Wide Double Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr56', cat: 'photoframes', img: 'frame-56', code: 'B20', price: 18, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم مزدوج عريض', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Wide Double Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr72', cat: 'photoframes', img: 'frame-72', code: 'B11', price: 20, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم شباك سكني', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Taupe Window Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr73', cat: 'photoframes', img: 'frame-73', code: 'B11', price: 20, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم شباك خشبي', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Wooden Window Frame', desc: 'Photo frame, 18×13 cm.' } },
    { id: 'fr74', cat: 'photoframes', img: 'frame-74', code: 'B10', price: 20, group: { ar: 'مقاس 18×13 سم', en: 'Size 18×13 cm' }, ar: { name: 'فريم شباك زهري', desc: 'فريم صور بمقاس 18×13 سم.' }, en: { name: 'Floral Window Frame', desc: 'Photo frame, 18×13 cm.' } },

    /* --- مقاس 20×15 سم --- */
    { id: 'fr17', cat: 'photoframes', img: 'frame-17', code: 'B41', price: 8, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم الخشب الداكن', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Dark Wood Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr18', cat: 'photoframes', img: 'frame-18', code: 'B41', price: 8, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم الخشب الرمادي', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Grey Wood Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr19', cat: 'photoframes', img: 'frame-19', code: 'B41', price: 8, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم رمادي عصري', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Modern Grey Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr20', cat: 'photoframes', img: 'frame-20', code: 'B41', price: 8, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم خشبي فاتح', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Light Wood Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr21', cat: 'photoframes', img: 'frame-21', code: 'B41', price: 8, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم بني كلاسيكي', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Classic Brown Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr31', cat: 'photoframes', img: 'frame-31', code: 'B35', price: 5, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم عريض تلزيق', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Wide Snap Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr42', cat: 'photoframes', img: 'frame-42', code: 'B30', price: 8, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم بني أنيق', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Elegant Brown Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr43', cat: 'photoframes', img: 'frame-43', code: 'B30', price: 8, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم رمادي أنيق', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Elegant Grey Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr48', cat: 'photoframes', img: 'frame-48', code: 'B25', price: 16, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم الحب الذهبي', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Gold Love Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr52', cat: 'photoframes', img: 'frame-52', code: 'B25', price: 17, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم زجاجي أسود', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Black Glass Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr54', cat: 'photoframes', img: 'frame-54', code: 'B20', price: 18, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم مزدوج عريض', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Wide Double Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr55', cat: 'photoframes', img: 'frame-55', code: 'B20', price: 18, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم مزدوج عريض', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Wide Double Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr59', cat: 'photoframes', img: 'frame-59', code: 'B18', price: 8, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم بني غامق', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Dark Brown Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr60', cat: 'photoframes', img: 'frame-60', code: 'B19', price: 7, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم فضي لامع', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Glossy Silver Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr61', cat: 'photoframes', img: 'frame-61', code: 'B17', price: 8, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم رمادي فضي', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Silver Grey Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr62', cat: 'photoframes', img: 'frame-62', code: 'B16', price: 8.5, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم بني أنيق', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Elegant Brown Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr63', cat: 'photoframes', img: 'frame-63', code: 'B16', price: 8.5, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم سكني أنيق', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Elegant Taupe Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr64', cat: 'photoframes', img: 'frame-64', code: 'B15', price: 17, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم الخشب الدافئ', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Warm Wood Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr65', cat: 'photoframes', img: 'frame-65', code: 'B14', price: 18, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم الخشبي الفاتح المضيء', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Light Wood Frame — Illuminated', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr66', cat: 'photoframes', img: 'frame-66', code: 'B14', price: 18, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم الخشبي الغامق المضيء', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Dark Wood Frame — Illuminated', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr67', cat: 'photoframes', img: 'frame-67', code: 'B15', price: 17, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم الخشب الدافئ', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Warm Wood Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr68', cat: 'photoframes', img: 'frame-68', code: 'B13', price: 17, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم الخشب السكني', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Taupe Wood Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr69', cat: 'photoframes', img: 'frame-69', code: 'B13', price: 17, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم الخشب الفاتح', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Light Wood Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr70', cat: 'photoframes', img: 'frame-70', code: 'B12', price: 19, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم مزدوج خشبي', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Double Wood Frame', desc: 'Photo frame, 20×15 cm.' } },
    { id: 'fr71', cat: 'photoframes', img: 'frame-71', code: 'B12', price: 19, group: { ar: 'مقاس 20×15 سم', en: 'Size 20×15 cm' }, ar: { name: 'فريم مزدوج خشبي', desc: 'فريم صور بمقاس 20×15 سم.' }, en: { name: 'Double Wood Frame', desc: 'Photo frame, 20×15 cm.' } },

    /* --- مقاس 25×20 سم --- */
    { id: 'fr24', cat: 'photoframes', img: 'frame-24', code: 'B39', price: 15, group: { ar: 'مقاس 25×20 سم', en: 'Size 25×20 cm' }, ar: { name: 'فريم القلب المضيء', desc: 'فريم صور بمقاس 25×20 سم.' }, en: { name: 'Illuminated Heart Frame', desc: 'Photo frame, 25×20 cm.' } },

    /* --- مقاس 28×22 سم --- */
    { id: 'fr22', cat: 'photoframes', img: 'frame-22', code: 'B40', price: 17, group: { ar: 'مقاس 28×22 سم', en: 'Size 28×22 cm' }, ar: { name: 'فريم القلب تاج المضيء', desc: 'فريم صور بمقاس 28×22 سم.' }, en: { name: 'Crown Heart Frame — Illuminated', desc: 'Photo frame, 28×22 cm.' } },
    { id: 'fr23', cat: 'photoframes', img: 'frame-23', code: 'B40', price: 17, group: { ar: 'مقاس 28×22 سم', en: 'Size 28×22 cm' }, ar: { name: 'فريم القلب المعلق المضيء', desc: 'فريم صور بمقاس 28×22 سم.' }, en: { name: 'Hanging Heart Frame — Illuminated', desc: 'Photo frame, 28×22 cm.' } },

    /* --- مقاس 40×30 سم --- */
    { id: 'fr29', cat: 'photoframes', img: 'frame-29', code: 'B36', price: 11, group: { ar: 'مقاس 40×30 سم', en: 'Size 40×30 cm' }, ar: { name: 'فريم عريض تلزيق', desc: 'فريم صور بمقاس 40×30 سم.' }, en: { name: 'Wide Snap Frame', desc: 'Photo frame, 40×30 cm.' } },
    { id: 'fr30', cat: 'photoframes', img: 'frame-30', code: 'B36', price: 8.5, group: { ar: 'مقاس 40×30 سم', en: 'Size 40×30 cm' }, ar: { name: 'فريم رفيع تلزيق', desc: 'فريم صور بمقاس 40×30 سم.' }, en: { name: 'Slim Snap Frame', desc: 'Photo frame, 40×30 cm.' } },

    /* --- مقاس 70×50 سم --- */
    { id: 'fr79', cat: 'photoframes', img: 'frame-79', code: 'B5', price: 50, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم أسود', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Black Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr80', cat: 'photoframes', img: 'frame-80', code: 'B6', price: 50, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم أبيض', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'White Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr81', cat: 'photoframes', img: 'frame-81', code: 'B5', price: 50, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم سكني', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Taupe Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr82', cat: 'photoframes', img: 'frame-82', code: 'B5', price: 50, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم بيج', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Beige Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr83', cat: 'photoframes', img: 'frame-83', code: 'B4', price: 35, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم خشبي فاتح', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Light Wood Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr84', cat: 'photoframes', img: 'frame-84', code: 'B4', price: 35, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم سكني', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Taupe Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr85', cat: 'photoframes', img: 'frame-85', code: 'B4', price: 35, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم خشبي غامق', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Dark Wood Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr86', cat: 'photoframes', img: 'frame-86', code: 'B3', price: 40, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم أبيض', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'White Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr87', cat: 'photoframes', img: 'frame-87', code: 'B2', price: 40, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم أسود', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Black Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr88', cat: 'photoframes', img: 'frame-88', code: 'B2', price: 40, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم سكني', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Taupe Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr89', cat: 'photoframes', img: 'frame-89', code: 'B2', price: 40, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم بيج', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Beige Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr90', cat: 'photoframes', img: 'frame-90', code: 'B2', price: 40, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم كحلي', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Navy Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr91', cat: 'photoframes', img: 'frame-91', code: 'B1', price: 35, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم خشبي فاتح', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Light Wood Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr92', cat: 'photoframes', img: 'frame-92', code: 'B1', price: 35, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم أسود', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Black Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr93', cat: 'photoframes', img: 'frame-93', code: 'B1', price: 35, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم رمادي فاتح', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Light Grey Frame', desc: 'Photo frame, 70×50 cm.' } },
    { id: 'fr94', cat: 'photoframes', img: 'frame-94', code: 'B1', price: 35, group: { ar: 'مقاس 70×50 سم', en: 'Size 70×50 cm' }, ar: { name: 'فريم خشبي غامق', desc: 'فريم صور بمقاس 70×50 سم.' }, en: { name: 'Dark Wood Frame', desc: 'Photo frame, 70×50 cm.' } },

    /* ---- براويز وهدايا (صور حقيقية) ---- */
    { id: 'p01', cat: 'frames', img: 'lamp-acrylic-wood',        ar: { name: 'إضاءة أكريليك بقاعدة خشب',        desc: 'ألواح أكريليك مطفية تُطبع عليها صورتك مع إضاءة دافئة وقاعدة خشب طبيعي.' }, en: { name: 'Acrylic Photo Lamp — Wood Base', desc: 'Frosted acrylic panels printed with your photo, warm lighting and a natural wood base.' } },
    { id: 'p02', cat: 'frames', img: 'rose-box-acrylic',         ar: { name: 'صندوق أكريليك بوردة محفوظة',       desc: 'وردة طبيعية محفوظة داخل صندوق أكريليك شفاف — هدية تدوم سنوات.' }, en: { name: 'Acrylic Preserved-Rose Box', desc: 'A real preserved rose inside a clear acrylic box — a gift that lasts for years.' } },
    { id: 'p03', cat: 'frames', img: 'frame-wood-couple',        ar: { name: 'برواز خشبي بعرائس وورد',           desc: 'برواز خشبي بمشهد مجسّم وإكليل ورد، مع عبارة I love you محفورة.' }, en: { name: 'Wooden Frame with Figures & Flowers', desc: 'Wooden frame with a 3D scene and flower wreath, “I love you” engraved on the base.' } },
    { id: 'p04', cat: 'frames', img: 'heart-dome-led',           ar: { name: 'قبة قلب زجاجية بوردة مضيئة',       desc: 'قلب زجاجي يضم وردة وإضاءة LED ناعمة على قاعدة خشب محفورة.' }, en: { name: 'LED Heart Dome with Rose', desc: 'A glass heart holding a rose and soft LED lighting on an engraved wooden base.' } },
    { id: 'p05', cat: 'frames', img: 'flower-bag-led',           ar: { name: 'حقيبة أكريليك مضيئة بالورد',        desc: 'حقيبة أكريليك شفافة معبّأة بالورد والمجسّمات مع إضاءة داخلية.' }, en: { name: 'Illuminated Acrylic Flower Bag', desc: 'A clear acrylic bag filled with flowers and figurines, lit from inside.' } },
    { id: 'p06', cat: 'frames', img: 'frame-birthday-acrylic',   ar: { name: 'برواز أكريليك لعيد ميلاد',          desc: 'لوح أكريليك مطبوع بتصميم تهنئة على قاعدة خشب — يتخصّص بالاسم والتاريخ.' }, en: { name: 'Acrylic Birthday Greeting Frame', desc: 'Printed acrylic panel on a wooden base — personalised with a name and date.' } },
    { id: 'p07', cat: 'frames', img: 'heart-globe-music',        ar: { name: 'قلب زجاجي دوّار بالموسيقى',          desc: 'كرة قلب زجاجية بمجسّم عروسين تدور مع صندوق موسيقى.' }, en: { name: 'Musical Rotating Heart Globe', desc: 'A glass heart globe with a rotating couple figurine and built-in music box.' } },
    { id: 'p08', cat: 'frames', img: 'frames-wood-mini-hearts',  ar: { name: 'براويز خشبية مصغّرة بقلوب',         desc: 'طقم براويز صغيرة بمجسّمات وقلوب — للمكتب أو رف الغرفة.' }, en: { name: 'Mini Wooden Heart Frames', desc: 'A set of small frames with figurines and hearts — for a desk or a shelf.' } },
    { id: 'p09', cat: 'frames', img: 'frame-wood-bouquet',       ar: { name: 'برواز خشبي بباقة ورد',              desc: 'برواز عميق يجمع صورتك مع باقة ورد صناعي مرتّبة يدوياً.' }, en: { name: 'Wooden Frame with Bouquet', desc: 'A deep frame combining your photo with a hand-arranged silk bouquet.' } },
    { id: 'p10', cat: 'frames', img: 'frame-diamond-led',        ar: { name: 'برواز ألماسي مضيء لصور الأعراس',     desc: 'برواز بشكل ماسة مع إضاءة وقاعدة معدنية — الأكثر طلباً لصور الزفاف.' }, en: { name: 'Diamond LED Wedding Frame', desc: 'A diamond-shaped lit frame on a metal base — our most requested wedding piece.' } },
    { id: 'p11', cat: 'frames', img: 'frame-wood-sections',      ar: { name: 'طقم براويز خشبية مقسّمة',            desc: 'أربعة أقسام في برواز واحد: صور ومجسّمات وورد بترتيب واحد متناسق.' }, en: { name: 'Sectioned Wooden Frame Set', desc: 'Four compartments in one frame: photos, figurines and flowers in one composition.' } },
    { id: 'p12', cat: 'frames', img: 'frame-round-rose-gold',    ar: { name: 'برواز دائري بإكليل ورد وقاعدة ذهبية', desc: 'برواز دائري محاط بورد أحمر على قاعدة ذهبية لامعة.' }, en: { name: 'Round Rose-Wreath Frame, Gold Base', desc: 'A round frame ringed with red roses on a polished gold base.' } },
    { id: 'p13', cat: 'frames', img: 'shadowbox-wood-love',      ar: { name: 'صندوق برواز خشبي عميق',              desc: 'شادو بوكس خشبي بمشهد مجسّم وباقة — يُطلب بتصميم مخصّص.' }, en: { name: 'Deep Wooden Shadow Box', desc: 'A wooden shadow box with a 3D scene and bouquet — made to order.' } },
    { id: 'p14', cat: 'frames', img: 'frame-acrylic-rose-heart', ar: { name: 'برواز أكريليك بقلب ورد',             desc: 'قلب من الورد داخل إطار أكريليك مع حروف LOVE مجسّمة.' }, en: { name: 'Acrylic Frame with Rose Heart', desc: 'A rose heart inside an acrylic frame with raised LOVE lettering.' } },
    { id: 'p15', cat: 'frames', img: 'frame-crystal-round',      ar: { name: 'برواز كريستال دائري بقاعدة ذهبية',   desc: 'إطار كريستالي مشعّ يعكس الضوء، على قاعدة ذهبية ثابتة.' }, en: { name: 'Round Crystal Frame, Gold Base', desc: 'A radiant crystal frame that catches the light, on a solid gold base.' } },
    { id: 'p16', cat: 'frames', img: 'frame-round-pink-led',     ar: { name: 'برواز دائري مضيء بورد وردي',         desc: 'برواز دائري بورد وردي وإضاءة خفيفة — هدية خطوبة وأعياد ميلاد.' }, en: { name: 'Round LED Frame with Pink Roses', desc: 'A round frame with pink roses and soft lighting — for engagements and birthdays.' } },
    { id: 'p17', cat: 'frames', img: 'frames-gold-mini-set',     ar: { name: 'طقم براويز ذهبية مصغّرة',            desc: 'خمسة براويز صغيرة بأشكال قلب وبيضاوي — تُباع كطقم أو مفرد.' }, en: { name: 'Mini Gold Frame Set', desc: 'Five small heart and oval frames — sold as a set or individually.' } },
    { id: 'p18', cat: 'frames', img: 'frames-gold-oval-led',     ar: { name: 'براويز بيضاوية ذهبية مضيئة',         desc: 'براويز بيضاوية بإطار ذهبي وإضاءة، بقواعد كريستال.' }, en: { name: 'Oval Gold LED Frames', desc: 'Oval frames with gold trim and lighting, on crystal bases.' } },
    { id: 'p19', cat: 'frames', img: 'lantern-gold-rose',        ar: { name: 'فانوس ذهبي ببرواز وقبة ورد',         desc: 'فانوس معدني ذهبي يحمل صورتك تحت قبة ورد محفوظ.' }, en: { name: 'Gold Lantern Frame with Rose Dome', desc: 'A gold metal lantern holding your photo beneath a preserved-rose dome.' } },
    { id: 'p20', cat: 'frames', img: 'lamp-crystal-table',       ar: { name: 'إضاءة كريستال للطاولة',              desc: 'أباجورة كريستال ببرواز صورة — قطعة ديكور وهدية بنفس الوقت.' }, en: { name: 'Crystal Table Lamp', desc: 'A crystal table lamp with a built-in photo frame — décor and gift in one.' } },
    { id: 'p21', cat: 'frames', img: 'frame-woodbox-roses',      ar: { name: 'برواز صندوق خشبي بالورد',            desc: 'برواز صندوقي خشبي بصورة محاطة بورد صناعي مرتّب.' }, en: { name: 'Wooden Box Frame with Roses', desc: 'A wooden box frame with a photo surrounded by arranged silk roses.' } },
    { id: 'p22', cat: 'frames', img: 'frame-acrylic-wood-love',  ar: { name: 'برواز أكريليك بقاعدة خشب',           desc: 'لوح أكريليك مطبوع بصورتك على قاعدة خشب — بسيط وأنيق.' }, en: { name: 'Acrylic Frame on Wood Base', desc: 'An acrylic panel printed with your photo on a wooden base — simple and elegant.' } },

    /* ---- ألبومات صور (أقسام فرعية حسب الحجم والسعة) ---- */
    /* --- جلد 15×20 — 120 صورة --- */
    { id: 'al01', cat: 'albums', img: 'album-leather-15x20-120-01', group: { ar: 'جلد 15×20 — 120 صورة', en: 'Leather 15×20 — 120 Photos' }, ar: { name: 'تصميم 1', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×20 سم، يتّسع لـ120 صورة. بنافذة صورة على الغلاف.' }, en: { name: 'Design 1', desc: 'Padded faux-leather album with PP pockets, 15×20 cm, holds 120 photos. Cover photo window.' } },
    { id: 'al02', cat: 'albums', img: 'album-leather-15x20-120-02', group: { ar: 'جلد 15×20 — 120 صورة', en: 'Leather 15×20 — 120 Photos' }, ar: { name: 'تصميم 2', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×20 سم، يتّسع لـ120 صورة. بنافذة صورة على الغلاف.' }, en: { name: 'Design 2', desc: 'Padded faux-leather album with PP pockets, 15×20 cm, holds 120 photos. Cover photo window.' } },
    { id: 'al03', cat: 'albums', img: 'album-leather-15x20-120-03', group: { ar: 'جلد 15×20 — 120 صورة', en: 'Leather 15×20 — 120 Photos' }, ar: { name: 'تصميم 3', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×20 سم، يتّسع لـ120 صورة. بنافذة صورة على الغلاف.' }, en: { name: 'Design 3', desc: 'Padded faux-leather album with PP pockets, 15×20 cm, holds 120 photos. Cover photo window.' } },
    { id: 'al04', cat: 'albums', img: 'album-leather-15x20-120-04', group: { ar: 'جلد 15×20 — 120 صورة', en: 'Leather 15×20 — 120 Photos' }, ar: { name: 'تصميم 4', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×20 سم، يتّسع لـ120 صورة. بنافذة صورة على الغلاف.' }, en: { name: 'Design 4', desc: 'Padded faux-leather album with PP pockets, 15×20 cm, holds 120 photos. Cover photo window.' } },
    { id: 'al05', cat: 'albums', img: 'album-leather-15x20-120-05', group: { ar: 'جلد 15×20 — 120 صورة', en: 'Leather 15×20 — 120 Photos' }, ar: { name: 'تصميم 5', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×20 سم، يتّسع لـ120 صورة. بنافذة صورة على الغلاف.' }, en: { name: 'Design 5', desc: 'Padded faux-leather album with PP pockets, 15×20 cm, holds 120 photos. Cover photo window.' } },
    { id: 'al06', cat: 'albums', img: 'album-leather-15x20-120-06', group: { ar: 'جلد 15×20 — 120 صورة', en: 'Leather 15×20 — 120 Photos' }, ar: { name: 'تصميم 6', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×20 سم، يتّسع لـ120 صورة. بنافذة صورة على الغلاف.' }, en: { name: 'Design 6', desc: 'Padded faux-leather album with PP pockets, 15×20 cm, holds 120 photos. Cover photo window.' } },
    { id: 'al07', cat: 'albums', img: 'album-leather-15x20-120-07', group: { ar: 'جلد 15×20 — 120 صورة', en: 'Leather 15×20 — 120 Photos' }, ar: { name: 'تصميم 7', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×20 سم، يتّسع لـ120 صورة. بنافذة صورة على الغلاف.' }, en: { name: 'Design 7', desc: 'Padded faux-leather album with PP pockets, 15×20 cm, holds 120 photos. Cover photo window.' } },
    { id: 'al08', cat: 'albums', img: 'album-leather-15x20-120-08', group: { ar: 'جلد 15×20 — 120 صورة', en: 'Leather 15×20 — 120 Photos' }, ar: { name: 'تصميم 8', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×20 سم، يتّسع لـ120 صورة. بنافذة صورة على الغلاف.' }, en: { name: 'Design 8', desc: 'Padded faux-leather album with PP pockets, 15×20 cm, holds 120 photos. Cover photo window.' } },
    { id: 'al09', cat: 'albums', img: 'album-leather-15x20-120-09', group: { ar: 'جلد 15×20 — 120 صورة', en: 'Leather 15×20 — 120 Photos' }, ar: { name: 'تصميم 9', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×20 سم، يتّسع لـ120 صورة. بنافذة صورة على الغلاف.' }, en: { name: 'Design 9', desc: 'Padded faux-leather album with PP pockets, 15×20 cm, holds 120 photos. Cover photo window.' } },
    { id: 'al10', cat: 'albums', img: 'album-leather-15x20-120-10', group: { ar: 'جلد 15×20 — 120 صورة', en: 'Leather 15×20 — 120 Photos' }, ar: { name: 'تصميم 10', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×20 سم، يتّسع لـ120 صورة. بنافذة صورة على الغلاف.' }, en: { name: 'Design 10', desc: 'Padded faux-leather album with PP pockets, 15×20 cm, holds 120 photos. Cover photo window.' } },
    { id: 'al11', cat: 'albums', img: 'album-leather-15x20-120-11', group: { ar: 'جلد 15×20 — 120 صورة', en: 'Leather 15×20 — 120 Photos' }, ar: { name: 'تصميم 11', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×20 سم، يتّسع لـ120 صورة. بنافذة صورة على الغلاف.' }, en: { name: 'Design 11', desc: 'Padded faux-leather album with PP pockets, 15×20 cm, holds 120 photos. Cover photo window.' } },

    /* --- جلد 15×21 — 160 صورة --- */
    { id: 'al12', cat: 'albums', img: 'album-leather-15x21-160-01', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 1', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 1', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al13', cat: 'albums', img: 'album-leather-15x21-160-02', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 2', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 2', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al14', cat: 'albums', img: 'album-leather-15x21-160-03', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 3', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 3', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al15', cat: 'albums', img: 'album-leather-15x21-160-04', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 4', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 4', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al16', cat: 'albums', img: 'album-leather-15x21-160-05', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 5', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 5', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al17', cat: 'albums', img: 'album-leather-15x21-160-06', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 6', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 6', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al18', cat: 'albums', img: 'album-leather-15x21-160-07', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 7', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 7', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al19', cat: 'albums', img: 'album-leather-15x21-160-08', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 8', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 8', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al20', cat: 'albums', img: 'album-leather-15x21-160-09', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 9', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 9', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al21', cat: 'albums', img: 'album-leather-15x21-160-10', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 10', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 10', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al22', cat: 'albums', img: 'album-leather-15x21-160-11', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 11', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 11', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al23', cat: 'albums', img: 'album-leather-15x21-160-12', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 12', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 12', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al24', cat: 'albums', img: 'album-leather-15x21-160-13', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 13', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 13', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al25', cat: 'albums', img: 'album-leather-15x21-160-14', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 14', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 14', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al26', cat: 'albums', img: 'album-leather-15x21-160-15', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 15', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 15', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al27', cat: 'albums', img: 'album-leather-15x21-160-16', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 16', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 16', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al28', cat: 'albums', img: 'album-leather-15x21-160-17', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 17', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 17', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },
    { id: 'al29', cat: 'albums', img: 'album-leather-15x21-160-18', group: { ar: 'جلد 15×21 — 160 صورة', en: 'Leather 15×21 — 160 Photos' }, ar: { name: 'تصميم 18', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ160 صورة. تصاميم ونقشات متعددة.' }, en: { name: 'Design 18', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 160 photos. Several cover designs and embossings.' } },

    /* --- جلد 15×21 — 200 صورة --- */
    { id: 'al30', cat: 'albums', img: 'album-leather-15x21-200-01', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 1', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 1', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al31', cat: 'albums', img: 'album-leather-15x21-200-02', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 2', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 2', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al32', cat: 'albums', img: 'album-leather-15x21-200-03', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 3', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 3', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al33', cat: 'albums', img: 'album-leather-15x21-200-04', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 4', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 4', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al34', cat: 'albums', img: 'album-leather-15x21-200-05', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 5', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 5', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al35', cat: 'albums', img: 'album-leather-15x21-200-06', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 6', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 6', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al36', cat: 'albums', img: 'album-leather-15x21-200-07', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 7', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 7', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al37', cat: 'albums', img: 'album-leather-15x21-200-08', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 8', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 8', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al38', cat: 'albums', img: 'album-leather-15x21-200-09', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 9', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 9', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al39', cat: 'albums', img: 'album-leather-15x21-200-10', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 10', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 10', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al40', cat: 'albums', img: 'album-leather-15x21-200-11', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 11', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 11', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al41', cat: 'albums', img: 'album-leather-15x21-200-12', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 12', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 12', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },
    { id: 'al42', cat: 'albums', img: 'album-leather-15x21-200-13', group: { ar: 'جلد 15×21 — 200 صورة', en: 'Leather 15×21 — 200 Photos' }, ar: { name: 'تصميم 13', desc: 'ألبوم بغلاف جلد صناعي مبطّن وجيوب PP، مقاس 15×21 سم، يتّسع لـ200 صورة — الأكبر سعة في سلسلة الجلد.' }, en: { name: 'Design 13', desc: 'Padded faux-leather album with PP pockets, 15×21 cm, holds 200 photos — the largest in the leather range.' } },

    /* --- كرتون 13×18 — 100 صورة --- */
    { id: 'al43', cat: 'albums', img: 'album-carton-13x18-100-01', group: { ar: 'كرتون 13×18 — 100 صورة', en: 'Card 13×18 — 100 Photos' }, ar: { name: 'تصميم 1', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ100 صورة.' }, en: { name: 'Design 1', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 100 photos.' } },
    { id: 'al44', cat: 'albums', img: 'album-carton-13x18-100-02', group: { ar: 'كرتون 13×18 — 100 صورة', en: 'Card 13×18 — 100 Photos' }, ar: { name: 'تصميم 2', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ100 صورة.' }, en: { name: 'Design 2', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 100 photos.' } },

    /* --- كرتون 13×18 — 120 صورة --- */
    { id: 'al45', cat: 'albums', img: 'album-carton-13x18-120-01', group: { ar: 'كرتون 13×18 — 120 صورة', en: 'Card 13×18 — 120 Photos' }, ar: { name: 'تصميم 1', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ120 صورة.' }, en: { name: 'Design 1', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 120 photos.' } },
    { id: 'al46', cat: 'albums', img: 'album-carton-13x18-120-02', group: { ar: 'كرتون 13×18 — 120 صورة', en: 'Card 13×18 — 120 Photos' }, ar: { name: 'تصميم 2', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ120 صورة.' }, en: { name: 'Design 2', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 120 photos.' } },
    { id: 'al47', cat: 'albums', img: 'album-carton-13x18-120-03', group: { ar: 'كرتون 13×18 — 120 صورة', en: 'Card 13×18 — 120 Photos' }, ar: { name: 'تصميم 3', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ120 صورة.' }, en: { name: 'Design 3', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 120 photos.' } },
    { id: 'al48', cat: 'albums', img: 'album-carton-13x18-120-04', group: { ar: 'كرتون 13×18 — 120 صورة', en: 'Card 13×18 — 120 Photos' }, ar: { name: 'تصميم 4', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ120 صورة.' }, en: { name: 'Design 4', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 120 photos.' } },

    /* --- كرتون 13×18 — 160 صورة --- */
    { id: 'al49', cat: 'albums', img: 'album-carton-13x18-160-01', group: { ar: 'كرتون 13×18 — 160 صورة', en: 'Card 13×18 — 160 Photos' }, ar: { name: 'تصميم 1', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ160 صورة.' }, en: { name: 'Design 1', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 160 photos.' } },
    { id: 'al50', cat: 'albums', img: 'album-carton-13x18-160-02', group: { ar: 'كرتون 13×18 — 160 صورة', en: 'Card 13×18 — 160 Photos' }, ar: { name: 'تصميم 2', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ160 صورة.' }, en: { name: 'Design 2', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 160 photos.' } },
    { id: 'al51', cat: 'albums', img: 'album-carton-13x18-160-03', group: { ar: 'كرتون 13×18 — 160 صورة', en: 'Card 13×18 — 160 Photos' }, ar: { name: 'تصميم 3', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ160 صورة.' }, en: { name: 'Design 3', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 160 photos.' } },
    { id: 'al52', cat: 'albums', img: 'album-carton-13x18-160-04', group: { ar: 'كرتون 13×18 — 160 صورة', en: 'Card 13×18 — 160 Photos' }, ar: { name: 'تصميم 4', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ160 صورة.' }, en: { name: 'Design 4', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 160 photos.' } },
    { id: 'al53', cat: 'albums', img: 'album-carton-13x18-160-05', group: { ar: 'كرتون 13×18 — 160 صورة', en: 'Card 13×18 — 160 Photos' }, ar: { name: 'تصميم 5', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ160 صورة.' }, en: { name: 'Design 5', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 160 photos.' } },

    /* --- كرتون 13×18 — 200 صورة --- */
    { id: 'al54', cat: 'albums', img: 'album-carton-13x18-200-01', group: { ar: 'كرتون 13×18 — 200 صورة', en: 'Card 13×18 — 200 Photos' }, ar: { name: 'تصميم 1', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ200 صورة.' }, en: { name: 'Design 1', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 200 photos.' } },
    { id: 'al55', cat: 'albums', img: 'album-carton-13x18-200-02', group: { ar: 'كرتون 13×18 — 200 صورة', en: 'Card 13×18 — 200 Photos' }, ar: { name: 'تصميم 2', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ200 صورة.' }, en: { name: 'Design 2', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 200 photos.' } },
    { id: 'al56', cat: 'albums', img: 'album-carton-13x18-200-03', group: { ar: 'كرتون 13×18 — 200 صورة', en: 'Card 13×18 — 200 Photos' }, ar: { name: 'تصميم 3', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ200 صورة.' }, en: { name: 'Design 3', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 200 photos.' } },
    { id: 'al57', cat: 'albums', img: 'album-carton-13x18-200-04', group: { ar: 'كرتون 13×18 — 200 صورة', en: 'Card 13×18 — 200 Photos' }, ar: { name: 'تصميم 4', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ200 صورة.' }, en: { name: 'Design 4', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 200 photos.' } },
    { id: 'al58', cat: 'albums', img: 'album-carton-13x18-200-05', group: { ar: 'كرتون 13×18 — 200 صورة', en: 'Card 13×18 — 200 Photos' }, ar: { name: 'تصميم 5', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ200 صورة.' }, en: { name: 'Design 5', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 200 photos.' } },
    { id: 'al59', cat: 'albums', img: 'album-carton-13x18-200-06', group: { ar: 'كرتون 13×18 — 200 صورة', en: 'Card 13×18 — 200 Photos' }, ar: { name: 'تصميم 6', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ200 صورة.' }, en: { name: 'Design 6', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 200 photos.' } },
    { id: 'al60', cat: 'albums', img: 'album-carton-13x18-200-07', group: { ar: 'كرتون 13×18 — 200 صورة', en: 'Card 13×18 — 200 Photos' }, ar: { name: 'تصميم 7', desc: 'ألبوم بغلاف كرتون مطبوع بتصاميم ملوّنة، مقاس 13×18 سم، يتّسع لـ200 صورة.' }, en: { name: 'Design 7', desc: 'Printed card-cover album with colourful designs, 13×18 cm, holds 200 photos.' } },

    /* --- ألبومات مطبوعة حسب الطلب --- */
    { id: 'alc1', cat: 'albums', img: '', group: { ar: 'ألبومات مطبوعة حسب الطلب', en: 'Custom Printed Albums' }, ar: { name: 'ألبوم صور ديجيتال', desc: 'ألبوم مطبوع بصفحات سميكة تُفتح بشكل مسطّح — بمقاسات 20×30 و30×45 وغيرها.' }, en: { name: 'Digital Photo Album', desc: 'Printed album with thick lay-flat pages — 20×30, 30×45 and other sizes.' } },
    { id: 'alc2', cat: 'albums', img: '', group: { ar: 'ألبومات مطبوعة حسب الطلب', en: 'Custom Printed Albums' }, ar: { name: 'ألبوم أفراح فاخر', desc: 'غلاف جلد أو خشب محفور بالاسم مع علبة حفظ — لصور الزفاف والخطوبة.' }, en: { name: 'Premium Wedding Album', desc: 'Leather or engraved-wood cover with a presentation box — for weddings and engagements.' } },
    { id: 'alc3', cat: 'albums', img: '', group: { ar: 'ألبومات مطبوعة حسب الطلب', en: 'Custom Printed Albums' }, ar: { name: 'ألبوم مدارس ورياض أطفال', desc: 'ألبومات تخرّج وصور صفوف بكميات — تصميم موحّد للمدرسة كلها.' }, en: { name: 'School & Kindergarten Album', desc: 'Graduation and class albums in bulk — one unified design for the whole school.' } },

    /* ---- أوراق طباعة ---- */
    { id: 'pa01', cat: 'papers', img: 'paper-a3-glossy-inkjet-200', ar: { name: 'ورق A3 لامع للإنك جيت — 200غم', desc: 'سلسلة ضد الماء بمقاس A3، 20 ورقة بوزن 200 غم ودقة 5760dpi — للبوسترات والأعمال الكبيرة.' }, en: { name: 'A3 Glossy Inkjet Paper — 200gsm', desc: 'Waterproof series in A3, 20 sheets at 200 gsm, 5760 dpi — for posters and large-format work.' } },
    { id: 'pa02', cat: 'papers', img: 'paper-a3-twoface-glossy',    ar: { name: 'ورق A3 لامع وجهين', desc: 'لامع من الوجهين، A3 (297×420 مم). أوزان من 100 حتى 300 غم وعبوات 20 و50 و100 ورقة — طباعة فورية وجفاف سريع.' }, en: { name: 'A3 Two-Face Glossy Paper', desc: 'Glossy on both sides, A3 (297×420 mm). 100–300 gsm in 20, 50 and 100-sheet packs — instant print, quick dry.' } },
    { id: 'pa03', cat: 'papers', img: 'paper-a4-twoface-glossy',    ar: { name: 'ورق A4 لامع وجهين', desc: 'لامع من الوجهين، A4 (210×297 مم). أوزان من 115 حتى 300 غم — ضد الماء وسريع الجفاف ويشتغل مع كل أحبار الإنك جيت.' }, en: { name: 'A4 Two-Face Glossy Paper', desc: 'Glossy on both sides, A4 (210×297 mm). 115–300 gsm — waterproof, quick-drying, works with all inkjet inks.' } },
    { id: 'pa04', cat: 'papers', img: 'paper-a4-sticker-glossy',    ar: { name: 'ورق تلزيق ستيكر لامع — A4', desc: 'ورق لاصق لامع بظهر تلزيق، 50 ورقة بوزن 135 غم ودقة 5760dpi — مقاومة عالية للماء ويشتغل مع كل طابعات الإنك جيت.' }, en: { name: 'A4 Glossy Sticker Paper', desc: 'Glossy self-adhesive stock, 50 sheets at 135 gsm, 5760 dpi — highly water resistant, fits all inkjet printers.' } },

    /* ---- ورق صور ---- */
    { id: 'pa10', cat: 'papers', img: 'photo-a4-twoface-glossy',   ar: { name: 'ورق صور A4 لامع وجهين', desc: 'ورق صور لامع من الوجهين، A4 (210×297 مم). أوزان من 160 حتى 250 غم بعبوات 20 و50 و100 ورقة — ضد الماء ولمعة إضافية.' }, en: { name: 'A4 Two-Face Glossy Photo Paper', desc: 'Photo stock glossy on both sides, A4 (210×297 mm). 160–250 gsm in 20, 50 and 100-sheet packs — waterproof with extra shine.' } },
    { id: 'pa11', cat: 'papers', img: 'photo-a4-inkjet-180',       ar: { name: 'ورق صور A4 — 180غم', desc: 'ورق تحميض لامع ضد الماء، 20 ورقة بوزن 180 غم — الخيار اليومي للمحلات والاستخدام العام.' }, en: { name: 'A4 Photo Paper — 180gsm', desc: 'Waterproof glossy photo stock, 20 sheets at 180 gsm — the everyday choice for shops.' } },
    { id: 'pa12', cat: 'papers', img: 'photo-a4-inkjet-240',       ar: { name: 'ورق صور A4 — 240غم', desc: 'نفس السلسلة بوزن أثقل 240 غم يعطي صلابة وملمس أقرب لصورة الاستوديو. 20 ورقة.' }, en: { name: 'A4 Photo Paper — 240gsm', desc: 'The same series at a heavier 240 gsm for a stiffer, more studio-like feel. 20 sheets.' } },
    { id: 'pa13', cat: 'papers', img: 'photo-a4-rc-satin-260',     ar: { name: 'ورق صور A4 ساتان RC — 260غم', desc: 'طبقة راتنجية RC بلمسة ساتان نصف لامعة، 20 ورقة بوزن 260 غم ودقة 5760dpi — جفاف فوري ومقاوم للماء.' }, en: { name: 'A4 RC Satin Photo Paper — 260gsm', desc: 'Resin-coated with a semi-gloss satin finish, 20 sheets at 260 gsm, 5760 dpi — instant dry and waterproof.' } },
    { id: 'pa14', cat: 'papers', img: 'photo-4r-glossy-230',       ar: { name: 'ورق صور 4R لامع — 230غم', desc: 'مقاس 4R (102×152 مم)، 100 ورقة بوزن 230 غم — لمعة عالية وجفاف سريع ومقاوم للماء.' }, en: { name: '4R Glossy Photo Paper — 230gsm', desc: '4R (102×152 mm), 100 sheets at 230 gsm — high gloss, quick drying and waterproof.' } },
    { id: 'pa15', cat: 'papers', img: 'photo-4r-rc-satin-260',     ar: { name: 'ورق صور 4R ساتان RC — 260غم', desc: 'مقاس 4R (102×152 مم)، 100 ورقة بوزن 260 غم بلمسة ساتان — الأنسب لطباعة صور الاستوديو بالكمية.' }, en: { name: '4R RC Satin Photo Paper — 260gsm', desc: '4R (102×152 mm), 100 sheets at 260 gsm with a satin finish — best for studio photo printing in volume.' } },
    { id: 'pa16', cat: 'papers', img: 'photo-5r-glossy-230',       ar: { name: 'ورق صور 5R لامع — 230غم', desc: 'مقاس 5R (127×178 مم)، 100 ورقة بوزن 230 غم — يشتغل مع كل طابعات الإنك جيت بدقة 5760dpi.' }, en: { name: '5R Glossy Photo Paper — 230gsm', desc: '5R (127×178 mm), 100 sheets at 230 gsm — works with every inkjet printer at 5760 dpi.' } },
    { id: 'pa17', cat: 'papers', img: 'photo-5r-rc-crystal-260',   ar: { name: 'ورق صور 5R كريستال RC — 260غم', desc: 'مقاس 5R (127×178 مم)، 100 ورقة بوزن 260 غم — مقاوم للاصفرار، بياض إضافي، وألوان ثابتة.' }, en: { name: '5R RC Crystal Photo Paper — 260gsm', desc: '5R (127×178 mm), 100 sheets at 260 gsm — anti-yellowing, extra white, colour-stable.' } },
    /* ---- ورق ميتسوبيشي (صناعة يابانية) ---- */
    { id: 'mt01', cat: 'papers', img: 'mitsubishi-4x6-glossy',    ar: { name: 'ورق ميتسوبيشي — 4×6 إنش لامع', desc: 'ورق صور ياباني مغلّف بالراتنج (RC) من سلسلة TrueFoto Plus. مقاس 4×6 إنش (102×152 مم)، 100 ورقة، سطح لامع — جفاف فوري وخالٍ من الأحماض ويعمّر طويلاً.' }, en: { name: 'Mitsubishi Photo Paper — 4"×6" Glossy', desc: 'Japanese resin-coated photo paper from the TrueFoto Plus series. 4"×6" (102×152 mm), 100 sheets, glossy — instant drying, acid-free and long-lasting.' } },
    { id: 'mt02', cat: 'papers', img: 'mitsubishi-5x7-luster',    ar: { name: 'ورق ميتسوبيشي — 5×7 إنش لاستر', desc: 'سطح لاستر (نصف لامع) بطبقة Dye/E-base وملمس Perfect Touch. مقاس 5×7 إنش (127×178 مم)، 100 ورقة — ألوان زاهية ومقاوم للماء.' }, en: { name: 'Mitsubishi Photo Paper — 5"×7" Luster', desc: 'Luster (semi-gloss) surface with a Dye/E-base coating and Perfect Touch feel. 5"×7" (127×178 mm), 100 sheets — vivid colour and water resistant.' } },
    { id: 'mt03', cat: 'papers', img: 'mitsubishi-6x8-250',       ar: { name: 'ورق ميتسوبيشي — 6×8 إنش 250غم', desc: 'مقاس 6×8 إنش (152×203 مم)، 100 ورقة بوزن 250 غم — متوفر بسطحين: لامع (Glossy) ولاستر (Lustre).' }, en: { name: 'Mitsubishi Photo Paper — 6"×8" 250gsm', desc: '6"×8" (152×203 mm), 100 sheets at 250 gsm — available in two finishes: Glossy and Lustre.' } },
    { id: 'mt04', cat: 'papers', img: 'mitsubishi-a3-lustre-260', ar: { name: 'ورق ميتسوبيشي — A3 لاستر 260غم', desc: 'مقاس A3، 20 ورقة بوزن 260 غم بسطح لاستر — ورق مغلّف بالراتنج يشتغل مع كل طابعات الإنك جيت. للبوسترات والتكبير.' }, en: { name: 'Mitsubishi Photo Paper — A3 Lustre 260gsm', desc: 'A3, 20 sheets at 260 gsm with a lustre surface — resin-coated stock that works with all inkjet printers. For posters and enlargements.' } },
    { id: 'mt05', cat: 'papers', img: 'mitsubishi-a4-255',        ar: { name: 'ورق ميتسوبيشي — A4 255غم', desc: 'سلسلة TrueFoto Flex-System، مقاس A4 (210×297 مم)، 20 ورقة بوزن 255 غم — جفاف فوري، ضد الماء، وألوان تدوم.' }, en: { name: 'Mitsubishi Photo Paper — A4 255gsm', desc: 'TrueFoto Flex-System series, A4 (210×297 mm), 20 sheets at 255 gsm — instant drying, waterproof and long-lasting colour.' } },

    { id: 'pa20', cat: 'papers', img: 'paper-thermal-fax-roll', ar: { name: 'رولات ورق حراري', desc: 'رولات ورق حراري لأجهزة الفاكس وطابعات الفواتير والكاشير — بعروض وأقطار مختلفة.' }, en: { name: 'Thermal Paper Rolls', desc: 'Thermal paper rolls for fax machines and receipt/POS printers — in various widths and diameters.' } },
    { id: 'pa18', cat: 'papers', img: '', ar: { name: 'ورق سبلميشن', desc: 'ورق نقل حراري بنسبة تحرير عالية للحبر — نتيجة ألوان أوضح بعد الكبس.' }, en: { name: 'Sublimation Transfer Paper', desc: 'High ink-release transfer paper — brighter, cleaner colour after pressing.' } },
    { id: 'pa19', cat: 'papers', img: '', ar: { name: 'ورق كوشيه وبرستول', desc: 'للبروشورات والكتالوجات والكروت — أوزان من 130 إلى 350 غم.' }, en: { name: 'Coated Art & Bristol Paper', desc: 'For brochures, catalogues and cards — 130 to 350 gsm.' } },

    /* ---- أحبار ---- */
    { id: 'ik01', cat: 'inks', img: 'ink-epson-057',     ar: { name: 'حبر إبسون أصلي — 057', desc: 'عبوات EcoTank أصلية بستة ألوان: أسود، سماوي، سماوي فاتح، أرجواني، أرجواني فاتح، أصفر.' }, en: { name: 'Epson Genuine Ink — 057', desc: 'Genuine EcoTank bottles in six colours: BK, C, LC, M, LM, Y.' } },
    { id: 'ik02', cat: 'inks', img: 'ink-epson-103',     ar: { name: 'حبر إبسون أصلي — 103', desc: 'عبوات EcoTank أصلية بأربعة ألوان: أسود، سماوي، أرجواني، أصفر — الأكثر طلباً لطابعات المكتب.' }, en: { name: 'Epson Genuine Ink — 103', desc: 'Genuine EcoTank bottles in four colours: BK, C, M, Y — the most requested for office printers.' } },
    { id: 'ik03', cat: 'inks', img: 'ink-epson-108',     ar: { name: 'حبر إبسون أصلي — 108', desc: 'عبوات EcoTank أصلية بستة ألوان — لطابعات الصور اللي بدها تدرّج ألوان ناعم.' }, en: { name: 'Epson Genuine Ink — 108', desc: 'Genuine EcoTank bottles in six colours — for photo printers that need smooth gradation.' } },
    { id: 'ik04', cat: 'inks', img: 'ink-jojo-premium',  ar: { name: 'حبر جوجو بديل الأصلي', desc: 'حبر بديل لطابعات إبسون بستة ألوان، عبوة 100 مل بفوهة تعبئة — بديل اقتصادي بجودة ألوان عالية.' }, en: { name: 'JoJo Compatible Ink', desc: 'Compatible six-colour ink for Epson printers, 100 ml bottles with a refill nozzle — economical with strong colour.' } },
    { id: 'ik05', cat: 'inks', img: 'ink-sublimation',   ar: { name: 'حبر سبلميشن', desc: 'حبر تسامي بأربعة ألوان (أسود، سماوي، أرجواني، أصفر) عبوة 100 مل — للطباعة على الأكواب والتيشيرتات والألواح المطلية.' }, en: { name: 'Sublimation Ink', desc: 'Four-colour dye-sublimation ink (BK, C, M, Y) in 100 ml bottles — for mugs, T-shirts and coated panels.' } },
    { id: 'ik06', cat: 'inks', img: '', ar: { name: 'حبر إيكو سولفنت', desc: 'لطابعات الشوادر والستيكر الخارجي — مقاوم للماء والشمس.' }, en: { name: 'Eco-Solvent Ink', desc: 'For banner and outdoor sticker printers — water and UV resistant.' } },
    { id: 'ik07', cat: 'inks', img: '', ar: { name: 'حبر بيجمنت', desc: 'حبر صبغي يقاوم البهتان — للمستندات والصور اللي بدها تعمّر.' }, en: { name: 'Pigment Ink', desc: 'Fade-resistant pigment ink — for documents and photos meant to last.' } },

    /* ---- مكابس وماكينات ---- */
    /* --- طابعات --- */
    { id: 'pr01', cat: 'machines', img: 'printer-epson-l3250', contain: true, group: { ar: 'طابعات', en: 'Printers' }, ar: { name: 'طابعة إيبسون L3250', desc: 'طابعة A4 متعددة الوظائف — طباعة ونسخ ومسح ضوئي — بخزانات حبر وأربعة ألوان وواي فاي. الأنسب للمكتب والاستخدام اليومي.' }, en: { name: 'Epson L3250 Printer', desc: 'A4 all-in-one — print, scan and copy — with refillable ink tanks, four colours and Wi-Fi. Best for office and everyday use.' } },
    { id: 'pr02', cat: 'machines', img: 'printer-epson-l8050', contain: true, group: { ar: 'طابعات', en: 'Printers' }, ar: { name: 'طابعة إيبسون L8050', desc: 'طابعة صور بمقاس A3 وستة ألوان بخزانات حبر — تدرّج ألوان ناعم وطباعة بلا حواف. تُجهَّز للسبلميشن عند الطلب.' }, en: { name: 'Epson L8050 Printer', desc: 'A3 photo printer with six colours and refillable tanks — smooth gradation and borderless printing. Can be set up for sublimation on request.' } },
    { id: 'pr03', cat: 'machines', img: 'printer-epson-l18050', contain: true, group: { ar: 'طابعات', en: 'Printers' }, ar: { name: 'طابعة إيبسون L18050', desc: 'الأكبر في السلسلة — طباعة صور حتى مقاس A3+ بستة ألوان وخزانات حبر. للاستوديوهات والمطابع اللي بدها مقاسات أكبر.' }, en: { name: 'Epson L18050 Printer', desc: 'The largest in the range — photo printing up to A3+ with six colours and refillable tanks. For studios and print shops needing bigger formats.' } },

    /* --- مكابس حرارية --- */
    { id: 'mc01', cat: 'machines', img: 'press-heat-5in1', group: { ar: 'مكابس حرارية', en: 'Heat Presses' }, ar: { name: 'مكبس حراري 5 × 1', desc: 'مكبس بخمس قطع: لوح مسطح للتيشيرتات، وقوالب للأكواب والصحون والقبعات — مع تحكم رقمي بالحرارة والوقت. للسبلميشن والفينيل الحراري.' }, en: { name: '5-in-1 Combo Heat Press', desc: 'Five attachments: a flat platen for shirts plus mug, plate and cap elements — with digital heat and timer control. For sublimation and heat transfer vinyl.' } },

    /* ---- فينيل حراري وقص ---- */
    { id: 'p60', cat: 'vinyl', img: 'vinyl-htv-black',      ar: { name: 'فينيل حراري PU', desc: 'فينيل حراري مرن للتيشيرتات والملابس الرياضية — يُقصّ ويُكبس بالحرارة، ويتحمّل الغسيل المتكرر. متوفر بألوان متعددة.' }, en: { name: 'PU Heat Transfer Vinyl', desc: 'Flexible HTV for T-shirts and sportswear — cut, weed and heat-press. Survives repeated washing. Available in many colours.' } },
    { id: 'p62', cat: 'vinyl', img: 'vinyl-cut-red',        ar: { name: 'فينيل قص لاصق', desc: 'فينيل لاصق بألوان متعددة لقص الحروف والشعارات — للواجهات والزجاج والسيارات، داخلي وخارجي.' }, en: { name: 'Cut Vinyl', desc: 'Self-adhesive vinyl in a wide colour range for cutting letters and logos — storefronts, glass and vehicles, indoor and outdoor.' } },
    { id: 'p64', cat: 'vinyl', img: 'vinyl-black-gloss',    ar: { name: 'فينيل أسود لامع', desc: 'رول فينيل أسود بسطح لامع — للحروف والخطوط والتغليف على الواجهات والزجاج.' }, en: { name: 'Gloss Black Vinyl', desc: 'Black vinyl roll with a gloss surface — for lettering, striping and wrapping on storefronts and glass.' } },
    { id: 'p65', cat: 'vinyl', img: 'vinyl-chrome-silver',  ar: { name: 'فينيل فضي كروم', desc: 'فينيل بسطح مرآوي لامع — للمسات المعدنية على اللافتات وتغليف السيارات والديكور.' }, en: { name: 'Chrome Silver Vinyl', desc: 'Mirror-finish vinyl — for metallic accents on signage, vehicle wraps and décor.' } },
    { id: 'p63', cat: 'vinyl', img: 'vinyl-one-way-vision', ar: { name: 'فينيل وان واي فيجن (مثقّب)', desc: 'فينيل مثقّب أبيض من الخارج وأسود من الداخل — تشوف من الداخل للخارج وما حدا بيشوفك. لواجهات الزجاج ونوافذ السيارات.' }, en: { name: 'One-Way Vision Vinyl', desc: 'Perforated film, white on the printed face and black behind — you see out, no one sees in. For glass storefronts and car windows.' } },
    { id: 'p61', cat: 'vinyl', img: '', ar: { name: 'فينيل فليكس وفلوك', desc: 'ملمس مخملي أو لامع للتصاميم اللي بدها تبرز عن القماش.' }, en: { name: 'Flex & Flock Vinyl', desc: 'Velvet or gloss finish for designs that should stand off the fabric.' } },
    { id: 'p66', cat: 'vinyl', img: 'vinyl-transfer-tape',  ar: { name: 'شريط نقل (ترانسفر تيب)', desc: 'شريط لاصق شفاف يُستخدم لرفع الحروف المقصوصة ونقلها على السطح دفعة واحدة بدون ما يختلّ ترتيبها.' }, en: { name: 'Application Transfer Tape', desc: 'Clear adhesive tape that lifts cut lettering and transfers it to the surface in one piece, keeping the layout intact.' } },

    /* ---- رولات شوادر وستكرز ---- */
    { id: 'p70', cat: 'rolls', img: 'roll-banner-frontlit', ar: { name: 'رول شادر فرونت لايت', desc: 'شادر PVC منسوج للطباعة الخارجية — بأوزان وعروض مختلفة حسب الحاجة. الخيار الأساسي للافتات والبانرات.' }, en: { name: 'Frontlit Banner Roll', desc: 'Woven PVC banner stock for outdoor printing — various weights and widths. The staple for signs and banners.' } },
    { id: 'p72', cat: 'rolls', img: 'roll-sticker-white',   ar: { name: 'رول ستيكر لاصق لامع', desc: 'رول ستيكر أبيض بسطح لامع وظهر لاصق — للطباعة والقص، داخلي وخارجي، بعروض مختلفة.' }, en: { name: 'Glossy Self-Adhesive Sticker Roll', desc: 'White sticker roll with a gloss face and adhesive back — for print-and-cut, indoor and outdoor, in multiple widths.' } },
    { id: 'p74', cat: 'rolls', img: 'roll-sticker-matte',   ar: { name: 'رول ستيكر مطفي', desc: 'رول ستيكر أبيض بسطح مطفي بدون انعكاس — للملصقات والعبوات واللوحات الداخلية.' }, en: { name: 'Matte Sticker Roll', desc: 'White sticker roll with a non-reflective matte face — for labels, packaging and indoor signage.' } },
    { id: 'p71', cat: 'rolls', img: '', ar: { name: 'رول شادر بلوك أوت', desc: 'شادر معتم بطبقة سوداء داخلية — يمنع ظهور الطباعة من الوجه الثاني.' }, en: { name: 'Blockout Banner Roll', desc: 'Opaque banner with a black core — stops print showing through from behind.' } },
    { id: 'p73', cat: 'rolls', img: '', ar: { name: 'رول مش (شبك)', desc: 'شادر مثقّب يمرّر الهواء — للواجهات والسواتر في الأماكن المكشوفة.' }, en: { name: 'Mesh Banner Roll', desc: 'Perforated banner that lets wind through — for facades and exposed fencing.' } },

    /* ---- هدايا دعائية ---- */
    /* --- دروع تكريم --- */
    { id: 'sh01', cat: 'gifts', img: 'shield-wood-arched',        group: { ar: 'دروع تكريم', en: 'Award Shields' }, ar: { name: 'درع خشبي بحواف مقوّسة', desc: 'درع من الخشب الطبيعي بحواف مقوّسة ولوح ذهبي يُحفر أو يُطبع عليه الإهداء، مع علبة تقديم مبطّنة.' }, en: { name: 'Arched Wooden Shield', desc: 'Natural wood shield with curved edges and a gold plate for engraving or printing, in a lined presentation box.' } },
    { id: 'sh02', cat: 'gifts', img: 'shield-wood-light',         group: { ar: 'دروع تكريم', en: 'Award Shields' }, ar: { name: 'درع خشبي فاتح بلوح ذهبي', desc: 'درع بخشب فاتح اللون ولوح ذهبي مستطيل — مساحة واسعة للنص والشعار. يشمل علبة التقديم.' }, en: { name: 'Light Wood Shield — Gold Plate', desc: 'Light-toned wood with a rectangular gold plate — generous space for text and logo. Presentation box included.' } },
    { id: 'sh03', cat: 'gifts', img: 'shield-wood-dark-engraved', group: { ar: 'دروع تكريم', en: 'Award Shields' }, ar: { name: 'درع خشبي داكن بإطار محفور', desc: 'خشب داكن بإطار زخرفي محفور حول مساحة النص — مظهر رسمي للمناسبات والتكريمات الرسمية.' }, en: { name: 'Dark Wood Shield — Engraved Border', desc: 'Dark wood with an engraved decorative border framing the text area — a formal look for official occasions.' } },
    { id: 'sh04', cat: 'gifts', img: 'shield-oval-gold',          group: { ar: 'دروع تكريم', en: 'Award Shields' }, ar: { name: 'درع بيضاوي ذهبي بإطار مزخرف', desc: 'لوح بيضاوي ذهبي داخل إطار مزخرف بالأبيض والذهبي — من الأفخم في التشكيلة. مع علبة تقديم.' }, en: { name: 'Oval Gold Shield — Ornate Frame', desc: 'An oval gold plate inside a white-and-gold ornate frame — the most premium in the range. Presentation box included.' } },
    { id: 'sh05', cat: 'gifts', img: 'shield-arch-ornate',        group: { ar: 'دروع تكريم', en: 'Award Shields' }, ar: { name: 'درع بتصميم القوس بزخارف ذهبية', desc: 'درع على شكل قوس بزخارف ذهبية على الجانبين ولوح ذهبي للنص، داخل علبة تقديم مبطّنة.' }, en: { name: 'Arch Shield — Gold Ornaments', desc: 'Arch-shaped shield with gold ornaments on both sides and a gold text plate, in a lined presentation box.' } },
    { id: 'sh06', cat: 'gifts', img: '',                          group: { ar: 'دروع تكريم', en: 'Award Shields' }, ar: { name: 'درع أكريليك وكريستال', desc: 'دروع أكريليك وكريستال محفورة بالليزر مع علبة مخمل.' }, en: { name: 'Acrylic & Crystal Shield', desc: 'Laser-engraved acrylic and crystal awards with a velvet presentation box.' } },

    /* --- كاسات وزجاجات سبلميشن --- */
    { id: 'tm01', cat: 'gifts', img: 'tumbler-smart-display', group: { ar: 'كاسات وزجاجات سبلميشن', en: 'Sublimation Drinkware' }, ar: { name: 'كاسة سبلميشن ذكية بشاشة حرارة', desc: 'كاسة ستانلس بغطاء فيه شاشة تعرض درجة حرارة المشروب وزر فتح بضغطة. تحافظ على الحرارة، ومتانتها تدوم — تُطبع بتصميمك أو شعار شركتك.' }, en: { name: 'Smart Sublimation Tumbler — Temperature Display', desc: 'Stainless tumbler with a lid that displays the drink temperature and a one-press opening button. Keeps heat, built to last — printed with your design or company logo.' } },
    { id: 'tm02', cat: 'gifts', img: 'tumbler-clear-lid',    group: { ar: 'كاسات وزجاجات سبلميشن', en: 'Sublimation Drinkware' }, ar: { name: 'كاسة سبلميشن بغطاء شفاف', desc: 'كاسة ستانلس بغطاء شفاف مقبّب وسطح أبيض جاهز للطباعة — تحافظ على حرارة مشروبك بتصميم أنيق وعصري.' }, en: { name: 'Sublimation Tumbler — Clear Lid', desc: 'Stainless tumbler with a domed clear lid and a white print-ready surface — keeps your drink hot, in a sleek modern shape.' } },
    { id: 'tm03', cat: 'gifts', img: 'bottle-thermal',       group: { ar: 'كاسات وزجاجات سبلميشن', en: 'Sublimation Drinkware' }, ar: { name: 'زجاجة سبلميشن حرارية', desc: 'زجاجة ستانلس مزدوجة الجدار بغطاء محكم — تحافظ على البارد بارد والساخن ساخن، وسطحها كامل مساحة للطباعة.' }, en: { name: 'Sublimation Thermal Bottle', desc: 'Double-walled stainless bottle with a sealed cap — keeps cold drinks cold and hot drinks hot, with a full-surface print area.' } },
    { id: 'tm04', cat: 'gifts', img: 'mug-handle-cork',      group: { ar: 'كاسات وزجاجات سبلميشن', en: 'Sublimation Drinkware' }, ar: { name: 'كاسة سبلميشن بيد وقاعدة فلين', desc: 'كاسة ستانلس بيد مريحة وقاعدة فلين تمنع الانزلاق، مع غطاء شفاف — للمكتب والبيت.' }, en: { name: 'Sublimation Mug — Handle & Cork Base', desc: 'Stainless mug with a comfortable handle and a non-slip cork base, plus a clear lid — for the desk and the home.' } },
    { id: 'tm05', cat: 'gifts', img: 'tumbler-sublimation',  group: { ar: 'كاسات وزجاجات سبلميشن', en: 'Sublimation Drinkware' }, ar: { name: 'كاسة ستانلس بقاعدة خشب', desc: 'كاسة ستانلس حافظة للحرارة بقاعدة خشب، تُطبع بتصميمك أو شعار شركتك.' }, en: { name: 'Stainless Tumbler — Wood Base', desc: 'Insulated stainless tumbler with a wood base, printed with your design or company logo.' } },
    { id: 'tm06', cat: 'gifts', img: '',                     group: { ar: 'كاسات وزجاجات سبلميشن', en: 'Sublimation Drinkware' }, ar: { name: 'مج سيراميك سبلميشن', desc: 'أكواب سيراميك أبيض وملوّن وسحري — بالحبة أو بالكمية للشركات.' }, en: { name: 'Ceramic Sublimation Mug', desc: 'White, coloured and magic ceramic mugs — single or in bulk for companies.' } },

    /* --- هدايا وطباعة على الطلب --- */
    { id: 'gf03', cat: 'gifts', img: '', group: { ar: 'هدايا وطباعة على الطلب', en: 'Custom-Printed Gifts' }, ar: { name: 'تيشيرت مطبوع', desc: 'طباعة فينيل حراري أو DTF على تيشيرتات وهوديز — للفرق والفعاليات.' }, en: { name: 'Printed T-Shirt', desc: 'HTV or DTF printing on tees and hoodies — for teams and events.' } },
    { id: 'gf04', cat: 'gifts', img: '', group: { ar: 'هدايا وطباعة على الطلب', en: 'Custom-Printed Gifts' }, ar: { name: 'أقلام وأجندات مطبوعة', desc: 'هدايا مكتبية بشعارك — أقلام، أجندات، حافظات كروت، ميداليات.' }, en: { name: 'Branded Pens & Notebooks', desc: 'Desk gifts with your logo — pens, notebooks, card holders, keychains.' } },

    /* ---- فلاشات USB (أقسام فرعية حسب الماركة) ---- */
    /* --- سانديسك --- */
    { id: 'fl01', cat: 'usb', img: 'usb-sandisk-glide-16',  group: { ar: 'سانديسك', en: 'SanDisk' }, ar: { name: 'SanDisk Cruzer Glide 3.0 — 16GB', desc: 'فلاشة USB 3.0 بموصل منزلق — بدون غطاء ينفصل ويضيع. تخزين سريع وموثوق وآمن، مع برنامج SanDisk SecureAccess لحماية ملفاتك الخاصة بكلمة سر.' }, en: { name: 'SanDisk Cruzer Glide 3.0 USB Flash Drive — 16GB', desc: 'USB 3.0 drive with a sliding connector — no cap to lose. Fast, reliable and secure storage, with SanDisk SecureAccess software to password-protect private files.' } },
    { id: 'fl02', cat: 'usb', img: 'usb-sandisk-glide-32',  group: { ar: 'سانديسك', en: 'SanDisk' }, ar: { name: 'SanDisk Cruzer Glide 3.0 — 32GB', desc: 'فلاشة USB 3.0 بموصل منزلق — بدون غطاء ينفصل ويضيع. تخزين سريع وموثوق وآمن، مع برنامج SanDisk SecureAccess لحماية ملفاتك الخاصة بكلمة سر.' }, en: { name: 'SanDisk Cruzer Glide 3.0 USB Flash Drive — 32GB', desc: 'USB 3.0 drive with a sliding connector — no cap to lose. Fast, reliable and secure storage, with SanDisk SecureAccess software to password-protect private files.' } },
    { id: 'fl03', cat: 'usb', img: 'usb-sandisk-ultra-64',  group: { ar: 'سانديسك', en: 'SanDisk' }, ar: { name: 'SanDisk Ultra USB 3.0 — 64GB', desc: 'فلاشة USB 3.0 بسرعة قراءة تصل إلى 130 ميجابايت/ثانية — تنقل فيلماً كاملاً أسرع بكثير من فلاشة USB 2.0. مع برنامج SecureAccess لحماية ملفاتك الخاصة.' }, en: { name: 'SanDisk Ultra USB 3.0 Flash Drive — 64GB', desc: 'USB 3.0 drive with read speeds up to 130 MB/s — transfers a full-length movie faster than a USB 2.0 drive. Includes SecureAccess software to help keep private files private.' } },
    { id: 'fl04', cat: 'usb', img: 'usb-sandisk-ultra-128', group: { ar: 'سانديسك', en: 'SanDisk' }, ar: { name: 'SanDisk Ultra USB 3.0 — 128GB', desc: 'فلاشة USB 3.0 بسرعة قراءة تصل إلى 130 ميجابايت/ثانية — أسرع حتى 10 مرّات من فلاشات USB 2.0، وتنقل فيلماً كاملاً بأقل من 40 ثانية. مع برنامج SecureAccess.' }, en: { name: 'SanDisk Ultra USB 3.0 Flash Drive — 128GB', desc: 'USB 3.0 drive with read speeds up to 130 MB/s — up to 10× faster than USB 2.0 drives, and transfers a full-length movie in less than 40 seconds. Includes SecureAccess software.' } },

    /* --- ليكسار --- */
    { id: 'fl05', cat: 'usb', img: 'usb-lexar-v100-32',     group: { ar: 'ليكسار', en: 'Lexar' }, ar: { name: 'Lexar JumpDrive V100 — 32GB', desc: 'فلاشة USB 3.0 بسرعة قراءة تصل إلى 100 ميجابايت/ثانية وجسم منزلق بدون غطاء. مع برنامج تشفير يحمي ملفاتك بكلمة سر.' }, en: { name: 'Lexar JumpDrive V100 USB 3.0 — 32GB', desc: 'USB 3.0 drive with read speeds up to 100 MB/s and a capless sliding body. Securely encrypts your files with password protection.' } },
    { id: 'fl06', cat: 'usb', img: 'usb-lexar-v100-64',     group: { ar: 'ليكسار', en: 'Lexar' }, ar: { name: 'Lexar JumpDrive V100 — 64GB', desc: 'فلاشة USB 3.0 بسرعة قراءة تصل إلى 100 ميجابايت/ثانية وجسم منزلق بدون غطاء. مع برنامج تشفير يحمي ملفاتك بكلمة سر.' }, en: { name: 'Lexar JumpDrive V100 USB 3.0 — 64GB', desc: 'USB 3.0 drive with read speeds up to 100 MB/s and a capless sliding body. Securely encrypts your files with password protection.' } },
    { id: 'fl07', cat: 'usb', img: 'usb-lexar-v100-128',    group: { ar: 'ليكسار', en: 'Lexar' }, ar: { name: 'Lexar JumpDrive V100 — 128GB', desc: 'فلاشة USB 3.0 بسرعة قراءة تصل إلى 100 ميجابايت/ثانية وجسم منزلق بدون غطاء. مع برنامج تشفير يحمي ملفاتك بكلمة سر.' }, en: { name: 'Lexar JumpDrive V100 USB 3.0 — 128GB', desc: 'USB 3.0 drive with read speeds up to 100 MB/s and a capless sliding body. Securely encrypts your files with password protection.' } },
  ],

  /* ---------------------------------------------------------- تصنيفات الأعمال */
  workCats: [
    { id: 'brand',    ar: 'هوية وشعارات',      en: 'Identity & Logos' },
    { id: 'cards',    ar: 'كروت ودعوات',       en: 'Cards & Invitations' },
    { id: 'stickers', ar: 'ستيكرات ولوحات',    en: 'Stickers & Signage' },
    { id: 'greeting', ar: 'تهاني ودروع',       en: 'Greetings & Awards' },
    { id: 'print',    ar: 'مطبوعات وتغليف',    en: 'Print & Packaging' }
  ],

  /* --------------------------------------------------------------- الأعمال */
  works: [
    /* ---- هوية وشعارات ---- */
    { img: 'almas-logo',          cat: 'brand', contain: true, ar: { t: 'شعار ألماس بروستد — النسخة النهائية', c: 'ألماس بروستد' },        en: { t: 'Almas Broasted Logo — Final', c: 'Almas Broasted' } },
    { img: 'almas-sketch-1',      cat: 'brand', ar: { t: 'سكتش الشعار — المرحلة الأولى', c: 'ألماس بروستد' },                              en: { t: 'Logo Sketch — First Pass', c: 'Almas Broasted' } },
    { img: 'almas-sketch-2',      cat: 'brand', ar: { t: 'سكتش الشعار — التنقيح', c: 'ألماس بروستد' },                                     en: { t: 'Logo Sketch — Refined', c: 'Almas Broasted' } },
    { img: 'yaqeen-identity',     cat: 'brand', ar: { t: 'الهوية البصرية الكاملة', c: 'اليقين للأدوات الكهربائية والصحية' },                en: { t: 'Full Brand Identity', c: 'Al-Yaqeen Tools' } },
    { img: 'yaqeen-logo-gold',    cat: 'brand', contain: true, ar: { t: 'شعار اليقين — النسخة الذهبية', c: 'اليقين للأدوات الكهربائية والصحية' }, en: { t: 'Al-Yaqeen Logo — Gold', c: 'Al-Yaqeen Tools' } },
    { img: 'yaqeen-logo-blue',    cat: 'brand', contain: true, ar: { t: 'شعار اليقين — النسخة الزرقاء', c: 'اليقين للأدوات الكهربائية والصحية' }, en: { t: 'Al-Yaqeen Logo — Blue', c: 'Al-Yaqeen Tools' } },
    { img: 'yaqeen-logo-white',   cat: 'brand', contain: true, ar: { t: 'شعار اليقين — النسخة البيضاء', c: 'اليقين للأدوات الكهربائية والصحية' }, en: { t: 'Al-Yaqeen Logo — White', c: 'Al-Yaqeen Tools' } },
    { img: 'yaqeen-logo-sketch',  cat: 'brand', contain: true, ar: { t: 'سكتش شعار اليقين', c: 'اليقين للأدوات الكهربائية والصحية' },      en: { t: 'Al-Yaqeen Logo Sketch', c: 'Al-Yaqeen Tools' } },

    /* ---- كروت ودعوات ---- */
    { img: 'wedding-maymouna-light', cat: 'cards', ar: { t: 'كرت زفاف — أفراح ميمونة', c: 'طباعة كروت الأفراح' },      en: { t: 'Wedding Card — Maymouna', c: 'Wedding Card Printing' } },
    { img: 'wedding-maymouna-dark',  cat: 'cards', ar: { t: 'كرت زفاف — أفراح ميمونة (نسخة داكنة)', c: 'طباعة كروت الأفراح' }, en: { t: 'Wedding Card — Maymouna (Dark)', c: 'Wedding Card Printing' } },
    { img: 'wedding-timeless',       cat: 'cards', ar: { t: 'دعوات زفاف — Timeless Elegance', c: 'طباعة كروت الأفراح' }, en: { t: 'Wedding Invitations — Timeless Elegance', c: 'Wedding Card Printing' } },
    { img: 'wedding-luxury-sk',      cat: 'cards', ar: { t: 'دعوات زفاف فاخرة — S & K', c: 'طباعة كروت الأفراح' },      en: { t: 'Luxury Wedding Invitations — S & K', c: 'Wedding Card Printing' } },
    { img: 'card-mxman',             cat: 'cards', ar: { t: 'بزنس كارد', c: 'MXMAN للملابس الرجالية' },                 en: { t: 'Business Card', c: 'MXMAN Menswear' } },
    { img: 'card-abu-turkey',        cat: 'cards', ar: { t: 'بزنس كارد', c: 'محلات أبو تركي لمواد البناء' },            en: { t: 'Business Card', c: 'Abu-Turkey Building Materials' } },
    { img: 'card-mio-kids',          cat: 'cards', ar: { t: 'بزنس كارد', c: 'Mio Kids' },                                en: { t: 'Business Card', c: 'Mio Kids' } },
    { img: 'card-ahram-mobile',      cat: 'cards', ar: { t: 'بزنس كارد', c: 'الأهرام لمستلزمات التصوير والموبايل' },     en: { t: 'Business Card', c: 'Al-Ahram Mobile & Photo' } },

    /* ---- ستيكرات ولوحات ---- */
    { img: 'tahan-quality',        cat: 'stickers', wide: true, ar: { t: 'ستيكر واجهة «جودة وطعم» — 561 × 90 سم', c: 'مول الطحّان' },   en: { t: 'Storefront Sticker “Quality & Taste” — 561 × 90 cm', c: 'Tahan Mall' } },
    { img: 'tahan-welcome',        cat: 'stickers', wide: true, ar: { t: 'ستيكر «أهلاً وسهلاً» — 501 × 91 سم', c: 'مول الطحّان' },      en: { t: 'Welcome Sticker — 501 × 91 cm', c: 'Tahan Mall' } },
    { img: 'tahan-products',       cat: 'stickers', wide: true, ar: { t: 'ستيكر تشكيلة المنتجات — 496 × 86 سم', c: 'مول الطحّان' },     en: { t: 'Product Range Sticker — 496 × 86 cm', c: 'Tahan Mall' } },
    { img: 'tahan-pastry',         cat: 'stickers', wide: true, ar: { t: 'ستيكر المعجنات والحلويات — 328 × 86 سم', c: 'مول الطحّان' },  en: { t: 'Pastry & Sweets Sticker — 328 × 86 cm', c: 'Tahan Mall' } },
    { img: 'tahan-chicken-plates', cat: 'stickers', wide: true, ar: { t: 'ستيكر أطباق الدجاج — 326 × 59 سم', c: 'مول الطحّان' },        en: { t: 'Chicken Plates Sticker — 326 × 59 cm', c: 'Tahan Mall' } },
    { img: 'tahan-hot-drinks',     cat: 'stickers', wide: true, ar: { t: 'ستيكر المشروبات الساخنة — 243 × 146 سم', c: 'مخبز الطحّان' }, en: { t: 'Hot Drinks Sticker — 243 × 146 cm', c: 'Tahan Bakery' } },
    { img: 'tahan-icecream-1',     cat: 'stickers', wide: true, ar: { t: 'ستيكر الآيس كريم — 250 × 90 سم', c: 'مخبز الطحّان' },         en: { t: 'Ice Cream Sticker — 250 × 90 cm', c: 'Tahan Bakery' } },
    { img: 'tahan-icecream-2',     cat: 'stickers', wide: true, ar: { t: 'ستيكر الحلويات والآيس كريم — 250 × 90 سم', c: 'مخبز الطحّان' }, en: { t: 'Sweets & Ice Cream Sticker — 250 × 90 cm', c: 'Tahan Bakery' } },
    { img: 'tahan-pickles-2',      cat: 'stickers', contain: true, ar: { t: 'ستيكر تشكيلة المخللات — 78 × 146 سم', c: 'مخللات الطحّان' }, en: { t: 'Pickles Range Sticker — 78 × 146 cm', c: 'Tahan Pickles' } },
    { img: 'tahan-pickles-1',      cat: 'stickers', contain: true, ar: { t: 'ستيكر مخللات الطحّان — 70 × 146 سم', c: 'مخللات الطحّان' },  en: { t: 'Tahan Pickles Sticker — 70 × 146 cm', c: 'Tahan Pickles' } },
    { img: 'tahan-prices',         cat: 'stickers', contain: true, ar: { t: 'ستيكر استفسار الأسعار — 79 × 242 سم', c: 'مخبز الطحّان' },   en: { t: 'Price Enquiry Sticker — 79 × 242 cm', c: 'Tahan Bakery' } },

    /* ---- تهاني ودروع ---- */
    { img: 'greet-graduation-ashhab', cat: 'greeting', contain: true, ar: { t: 'تهنئة تخرّج مطبوعة على درع', c: 'المهندس محمد الأشهب' },   en: { t: 'Graduation Greeting on an Award Shield', c: 'Eng. Mohammad Al-Ashhab' } },
    { img: 'greet-euro-gl',           cat: 'greeting', contain: true, ar: { t: 'تهنئة افتتاح مطبوعة على درع', c: 'شركة جي إل للبلاستيك ← EURO' }, en: { t: 'Opening Greeting on an Award Shield', c: 'GL Plastics → EURO' } },
    { img: 'greet-mundo-moda',        cat: 'greeting', contain: true, ar: { t: 'تهنئة افتتاح مطبوعة على درع', c: 'سمارت لينك ← MUNDO MODA' },     en: { t: 'Opening Greeting on an Award Shield', c: 'Smart Link → MUNDO MODA' } },
    { img: 'greet-euro-ahram',        cat: 'greeting', ar: { t: 'تصميم تهنئة افتتاح', c: 'الأهرام لمستلزمات التصوير والموبايل ← EURO' },          en: { t: 'Opening Greeting Design', c: 'Al-Ahram Mobile & Photo → EURO' } },

    /* ---- مطبوعات وتغليف ---- */
    { img: 'almas-menu-1', cat: 'print', ar: { t: 'تصميم وطباعة المنيو', c: 'ألماس بروستد' },        en: { t: 'Menu Design & Print', c: 'Almas Broasted' } },
    { img: 'almas-menu-2', cat: 'print', ar: { t: 'المنيو — الوجه الثاني', c: 'ألماس بروستد' },       en: { t: 'Menu — Reverse Side', c: 'Almas Broasted' } },
    { img: 'vertex-box',   cat: 'print', ar: { t: 'تصميم علبة المنتج', c: 'VERTEX' },                 en: { t: 'Product Box Design', c: 'VERTEX' } }
  ]
};
