/* ==========================================================================
   إعدادات الموقع — نقطة التعديل الوحيدة لبيانات التواصل
   عدّل هنا فقط، وكل الصفحات بتتحدّث تلقائياً.
   ========================================================================== */

window.SITE = {

  /* رقم الواتساب بصيغة دولية بدون + وبدون مسافات */
  whatsapp: '970595702839',
  /* الرقم كما يُعرض للزائر */
  phoneDisplay: '+970 59 570 2839',

  email: 'alahramdesign@outlook.com',

  social: {
    facebook:  'https://www.facebook.com/AlAhram.Advertising.Publicity',
    instagram: 'https://www.instagram.com/alahram.design',
    tiktok:    'https://www.tiktok.com/@alahram.design'
  },

  address: {
    ar: 'فلسطين – الخليل – واد الهرية – مقابل مسجد صحابة رسول الله – بجانب مصنع نيروخ',
    en: 'Palestine – Hebron – Wadi Al-Hariya – opposite Sahabat Rasoul Allah Mosque, next to Nayrukh Factory'
  },

  /* استبدل هذا برابط الموقع الدقيق من Google Maps عند توفّره */
  mapQuery: 'واد الهرية، الخليل، فلسطين',

  hours: {
    ar: 'يومياً من 10:00 صباحاً حتى 10:00 مساءً',
    en: 'Daily, 10:00 AM – 10:00 PM'
  },

  /* عملة الأسعار المعروضة في الكتالوج */
  currency: '₪',

  /* سنة التأسيس — اتركها فارغة إذا ما بدك تظهر */
  founded: ''
};

/* ---- مساعدات الواتساب --------------------------------------------------- */

/** يبني رابط واتساب مع رسالة جاهزة */
window.waLink = function (message) {
  var base = 'https://wa.me/' + window.SITE.whatsapp;
  return message ? base + '?text=' + encodeURIComponent(message) : base;
};

/** رسالة «اطلب عرض سعر» لعنصر معيّن */
window.waQuote = function (itemName, lang) {
  if (lang === 'en') {
    return 'Hello Al-Ahram Advertising 👋\nI would like a price quote for: ' + itemName + '\nCould you send me the details?';
  }
  return 'السلام عليكم، الأهرام للدعاية والإعلان 👋\nبدي عرض سعر لـ: ' + itemName + '\nممكن ترسلوا لي التفاصيل؟';
};
