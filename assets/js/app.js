/* ==========================================================================
   الأهرام للدعاية والإعلان — منطق الواجهة
   الهيدر، تبديل اللغة، رسم الشبكات، الفلاتر، البحث، اللايت بوكس،
   حركات السكرول، وروابط الواتساب.
   ========================================================================== */
(function () {
  'use strict';

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  /* ======================================================================
     الأيقونات — SVG مرسومة بخط واحد لتبقى متناسقة
     ====================================================================== */
  var ICONS = {
    printer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 17h10v4H7z"/><circle cx="18" cy="12.5" r=".8" fill="currentColor" stroke="none"/></svg>',
    sign:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15v7"/><rect x="3" y="4" width="18" height="9" rx="1.5"/><path d="M7 8.5h6M7 11h3"/><path d="M8.5 22h7"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.6-.4-1 0-.9.7-1.6 1.6-1.6h1.9A4.8 4.8 0 0 0 21 11c0-4.4-4-8-9-8Z"/><circle cx="7.5" cy="11" r="1.1" fill="currentColor" stroke="none"/><circle cx="11" cy="7.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" stroke="none"/></svg>',
    gift:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="12" rx="1.6"/><path d="M2.5 9h19M12 9v12"/><path d="M12 9S10.5 3.8 8 4.2C6.4 4.5 6 6 6.6 7.3 7.4 8.9 12 9 12 9Zm0 0s1.5-5.2 4-4.8C17.6 4.5 18 6 17.4 7.3 16.6 8.9 12 9 12 9Z"/></svg>',
    roll:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="7" cy="7" rx="4" ry="4"/><path d="M7 3h10a4 4 0 0 1 0 8H7"/><path d="M17 11v10M11 11v6"/><circle cx="7" cy="7" r="1.2"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"/><path d="M12.04 2C6.6 2 2.17 6.43 2.16 11.88c0 1.74.46 3.45 1.33 4.95L2 22l5.3-1.39a9.9 9.9 0 0 0 4.73 1.21h.01c5.44 0 9.87-4.43 9.88-9.88 0-2.64-1.03-5.12-2.9-6.99A9.8 9.8 0 0 0 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.25-4.36c0-4.53 3.69-8.21 8.22-8.21a8.16 8.16 0 0 1 8.2 8.22c0 4.53-3.68 8.21-8.2 8.21Z"/></svg>',
    mail:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 7 8.2 5.6a1.5 1.5 0 0 0 1.6 0L21 7"/></svg>',
    pin:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    clock:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.2 2"/></svg>',
    search:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>',
    zoom:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6M11 8.5v5M8.5 11h5"/></svg>',
    close:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5-7 7 7 7"/></svg>',
    facebook:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
    tiktok:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2h-3v13.2a2.6 2.6 0 1 1-2.2-2.57V9.5a5.7 5.7 0 1 0 5.2 5.68V8.9a6.8 6.8 0 0 0 4 1.3V7.13a3.9 3.9 0 0 1-4-3.9V2Z"/></svg>',
    frame:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1.6"/><rect x="6.2" y="6.2" width="11.6" height="11.6" rx="1"/><path d="m7.8 15.6 3-3.4 2.2 2.4 2-2.2 2.2 3.2"/><circle cx="9.6" cy="9.4" r="1"/></svg>'
  };

  function icon(name) { return ICONS[name] || ''; }

  function generalGreeting(lang) {
    return lang === 'en'
      ? 'Hello Al-Ahram Advertising 👋 I would like to ask about your services.'
      : 'السلام عليكم، الأهرام للدعاية والإعلان 👋 بدي أستفسر عن خدماتكم.';
  }

  /* ======================================================================
     إعدادات الموقع في الصفحة
     ====================================================================== */
  function applyConfig() {
    var S = window.SITE, lang = window.currentLang();

    var text = {
      email:   S.email,
      phone:   S.phoneDisplay,
      address: S.address[lang] || S.address.ar,
      hours:   S.hours[lang] || S.hours.ar,
      year:    new Date().getFullYear()
    };
    $$('[data-cfg]').forEach(function (el) {
      var k = el.getAttribute('data-cfg');
      if (text[k] !== undefined) el.textContent = text[k];
    });

    var links = {
      whatsapp:  window.waLink(generalGreeting(lang)),
      email:     'mailto:' + S.email,
      facebook:  S.social.facebook,
      instagram: S.social.instagram,
      tiktok:    S.social.tiktok,
      maps:      'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(S.mapQuery)
    };
    $$('[data-cfg-href]').forEach(function (el) {
      var k = el.getAttribute('data-cfg-href');
      if (links[k]) el.setAttribute('href', links[k]);
    });

    /* أيقونات ثابتة داخل الصفحة */
    $$('[data-icon]').forEach(function (el) {
      if (!el.getAttribute('data-icon-done')) {
        el.innerHTML = icon(el.getAttribute('data-icon'));
        el.setAttribute('data-icon-done', '1');
      }
    });

    /* الخريطة */
    var map = $('[data-map]');
    if (map && !map.getAttribute('data-map-done')) {
      map.innerHTML = '<iframe title="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
        + 'src="https://www.google.com/maps?q=' + encodeURIComponent(S.mapQuery) + '&output=embed"></iframe>';
      map.setAttribute('data-map-done', '1');
    }
  }

  /* ======================================================================
     الهيدر والقائمة
     ====================================================================== */
  function initHeader() {
    var header = $('.header');
    var burger = $('.burger');
    var nav    = $('.nav');

    if (header) {
      var onScroll = function () {
        header.classList.toggle('is-stuck', window.scrollY > 12);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    if (burger && nav) {
      burger.addEventListener('click', function () {
        var open = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!open));
        nav.classList.toggle('is-open', !open);
        document.body.classList.toggle('no-scroll', !open);
      });
      nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          burger.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
          document.body.classList.remove('no-scroll');
        }
      });
    }

    /* الصفحة الحالية */
    var here = location.pathname.split('/').pop() || 'index.html';
    $$('.nav a, .footer a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === here) a.setAttribute('aria-current', 'page');
    });

    /* زر اللغة */
    var sw = $('.lang-switch');
    if (sw) {
      sw.addEventListener('click', function () {
        window.setLang(window.currentLang() === 'ar' ? 'en' : 'ar');
      });
    }
  }

  function paintLangSwitch() {
    var sw = $('.lang-switch');
    if (!sw) return;
    var ar = window.currentLang() === 'ar';
    sw.innerHTML =
      '<span class="' + (ar ? 'lang-switch__on' : '') + '">ع</span>' +
      '<span class="lang-switch__sep">/</span>' +
      '<span class="' + (!ar ? 'lang-switch__on' : '') + '">EN</span>';
    sw.setAttribute('aria-label', ar ? 'Switch to English' : 'التبديل إلى العربية');
    sw.setAttribute('title', sw.getAttribute('aria-label'));
  }

  /* ======================================================================
     أزرار الواتساب
     ====================================================================== */
  function quoteButton(itemName, extraClass) {
    var href = window.waLink(window.waQuote(itemName, window.currentLang()));
    return '<a class="btn btn--wa btn--sm ' + (extraClass || '') + '" href="' + esc(href) + '" '
      + 'target="_blank" rel="noopener">' + icon('whatsapp') + '<span>' + esc(window.t('cta.quoteShort')) + '</span></a>';
  }

  function initFab() {
    var fab = $('.fab');
    if (!fab) return;
    fab.setAttribute('href', window.waLink(generalGreeting(window.currentLang())));
  }

  /* قائمة الخدمات في الفوتر — مبنية من data.js حتى تبقى متطابقة */
  function renderFooterServices() {
    var host = $('[data-render="footer-services"]');
    if (!host) return;
    var lang = window.currentLang();
    host.innerHTML = window.DATA.services.map(function (s) {
      return '<li><a href="services.html#' + esc(s.id) + '">' + esc((s[lang] || s.ar).title) + '</a></li>';
    }).join('');
  }

  /* ======================================================================
     رسم الخدمات
     ====================================================================== */
  function renderServices() {
    var host = $('[data-render="services"]');
    if (!host) return;
    var lang = window.currentLang();
    var limit = parseInt(host.getAttribute('data-limit') || '0', 10);
    var full = host.getAttribute('data-full') === 'true';
    var list = window.DATA.services.slice(0, limit || undefined);

    host.innerHTML = list.map(function (s, i) {
      var c = s[lang] || s.ar;
      return '<article class="card card--service reveal"' + (full ? ' id="' + esc(s.id) + '"' : '') + ' style="--d:' + (i * 70) + 'ms">'
        + '<span class="card__index">0' + (i + 1) + '</span>'
        + '<span class="card__icon">' + icon(s.icon) + '</span>'
        + '<h3 class="card__title">' + esc(c.title) + '</h3>'
        + '<p class="card__desc">' + esc(c.desc) + '</p>'
        + (full
            ? '<ul class="tag-list">' + c.items.map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('') + '</ul>'
            : '')
        + '<div class="card__foot">' + quoteButton(c.title) + '</div>'
        + '</article>';
    }).join('');
  }

  /* ======================================================================
     العروض
     ====================================================================== */
  function renderOffers() {
    var host = $('[data-render="offers"]');
    if (!host) return;
    var lang = window.currentLang();
    var list = (window.DATA.offers || []).filter(function (o) { return o.active !== false; });

    host.innerHTML = list.map(function (o, i) {
      var c = o[lang] || o.ar;
      var quote = window.waLink(lang === 'en'
        ? 'Hello Al-Ahram Advertising 👋\nI’m interested in the “' + c.title + '” offer (' + window.SITE.currency + o.price + ').\nCould you send me the details?'
        : 'السلام عليكم، الأهرام للدعاية والإعلان 👋\nمهتم بعرض «' + c.title + '» (' + o.price + ' ' + window.SITE.currency + ').\nممكن ترسلوا لي التفاصيل؟');

      return '<article class="offer reveal" style="--d:' + (i * 110) + 'ms">'
        + '<span class="offer__badge">' + esc(window.t('offers.badge')) + '</span>'
        + (o.img
            ? '<div class="offer__poster" hidden><img src="assets/img/offers/' + esc(o.img) + '.jpg" alt="' + esc(c.title) + '"></div>'
            : '')
        + '<div class="offer__body">'
        + '<h3 class="offer__title">' + esc(c.title) + '</h3>'
        + '<p class="offer__tagline">' + esc(c.tagline) + '</p>'
        + '<p class="offer__price"><span class="offer__num">' + esc(o.price) + '</span>'
        + '<span class="offer__cur">' + esc(window.SITE.currency) + '</span></p>'
        + '<ul class="offer__items">'
        + c.items.map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('')
        + '</ul>'
        + '<a class="btn btn--gold btn--block" href="' + esc(quote) + '" target="_blank" rel="noopener">'
        + icon('whatsapp') + '<span>' + esc(window.t('offers.cta')) + '</span></a>'
        + '</div></article>';
    }).join('');

    /* البوستر مخفي لحد ما تتحمّل الصورة فعلياً — لا فراغ ولا صورة مكسورة
       لو كان الاسم غلط. (خلّي `img` فاضية في data.js لو ما في بوستر بعد.) */
    $$('.offer__poster', host).forEach(function (box) {
      var im = box.querySelector('img');
      if (!im) return;
      if (im.complete && im.naturalWidth > 0) { box.hidden = false; return; }
      im.addEventListener('load', function () { box.hidden = false; });
      im.addEventListener('error', function () { box.remove(); });
    });
  }

  /* ======================================================================
     رسم المنتجات + الفلاتر + البحث
     ====================================================================== */
  var productState = { cat: 'all', q: '' };

  /* اسم المنتج الكامل — يضم القسم الفرعي والكود، عشان رسالة عرض السعر تكون واضحة
     ويقدر الموظف يلاقي الصنف على الرف مباشرة */
  function productLabel(p, lang) {
    var c = p[lang] || p.ar;
    var out = c.name;
    if (p.group) out = (p.group[lang] || p.group.ar) + ' — ' + out;
    if (p.code) out += ' (' + p.code + ')';
    return out;
  }

  function priceTag(p, lang) {
    if (!p.price && p.price !== 0) return '';
    var n = p.price;
    return lang === 'en'
      ? '<span class="price">' + esc(window.SITE.currency + n) + '</span>'
      : '<span class="price">' + esc(n + ' ' + window.SITE.currency) + '</span>';
  }

  function productCard(p, i) {
    var lang = window.currentLang();
    var c = p[lang] || p.ar;
    var cat = window.DATA.productCats.filter(function (x) { return x.id === p.cat; })[0];
    var catLabel = p.group ? (p.group[lang] || p.group.ar) : (cat ? (cat[lang] || cat.ar) : '');

    var media = p.img
      ? '<img src="assets/img/products/thumb/' + p.img + '.jpg" alt="' + esc(c.name) + '" loading="lazy" width="620" height="775">'
      : '<span class="ph">' + icon('frame') + '<span class="ph__label">' + esc(window.t('products.soon')) + '</span></span>';

    /* `contain: true` للصور اللي ما بتحتمل القص (زي صور الأجهزة المربّعة) */
    var mediaCls = 'card__media' + (p.contain ? ' card__media--contain' : '');

    return '<article class="card card--product reveal" style="--d:' + ((i % 8) * 55) + 'ms">'
      + (p.img
          ? '<button class="' + mediaCls + '" type="button" data-product-zoom="' + esc(p.id) + '" aria-label="' + esc(c.name) + '">'
            + media + '<span class="card__zoom">' + icon('zoom') + '</span></button>'
          : '<div class="' + mediaCls + '">' + media + '</div>')
      + '<div class="card__body">'
      + '<span class="card__meta">' + esc(catLabel) + (p.code ? ' · ' + esc(p.code) : '') + '</span>'
      + '<h3 class="card__name">' + esc(c.name) + '</h3>'
      + (p.price || p.price === 0
          ? '<p class="card__price">' + priceTag(p, lang) + '</p>'
          : '<p class="card__desc">' + esc(c.desc) + '</p>')
      + '<div class="card__foot">' + quoteButton(productLabel(p, lang), 'btn--block') + '</div>'
      + '</div></article>';
  }

  function filteredProducts() {
    var lang = window.currentLang();
    var q = productState.q.trim().toLowerCase();
    return window.DATA.products.filter(function (p) {
      if (productState.cat !== 'all' && p.cat !== productState.cat) return false;
      if (!q) return true;
      var c = p[lang] || p.ar, o = p.ar;
      var hay = c.name + ' ' + c.desc + ' ' + o.name + ' ' + (p.en ? p.en.name : '');
      if (p.group) hay += ' ' + p.group.ar + ' ' + (p.group.en || '');
      if (p.code) hay += ' ' + p.code;
      return hay.toLowerCase().indexOf(q) > -1;
    });
  }

  /* مقتطف الصفحة الرئيسية: منتج من كل تصنيف أولاً حتى تبان تشكيلة الكتالوج،
     وبعدها نكمّل العدد من الباقي. الصور فقط — بدون بطاقات «الصورة قريباً». */
  function featuredProducts(limit) {
    var withImg = window.DATA.products.filter(function (p) { return p.img; });
    var picked = [];
    var seen = {};
    withImg.forEach(function (p) {
      if (!seen[p.cat] && picked.length < limit) { seen[p.cat] = 1; picked.push(p); }
    });
    withImg.forEach(function (p) {
      if (picked.indexOf(p) === -1 && picked.length < limit) picked.push(p);
    });
    return picked;
  }

  /* يرسم عنواناً فرعياً كل ما تغيّر الـgroup — هيك كل حجم ألبوم بيصير قسم مستقل
     داخل الشبكة نفسها بدون ما نغيّر بنية الفلاتر */
  function withGroupHeadings(list) {
    var lang = window.currentLang();
    var html = '';
    var last = null;
    list.forEach(function (p, i) {
      var g = p.group ? (p.group[lang] || p.group.ar) : null;
      if (g && g !== last) {
        html += '<h3 class="grid__heading">' + esc(g) + '</h3>';
        last = g;
      } else if (!g) {
        last = null;
      }
      html += productCard(p, i);
    });
    return html;
  }

  function renderProducts() {
    var host = $('[data-render="products"]');
    if (!host) return;
    var limit = parseInt(host.getAttribute('data-limit') || '0', 10);
    var list = limit ? featuredProducts(limit) : filteredProducts();

    /* المقتطف في الصفحة الرئيسية يخلط التصنيفات، فالعناوين الفرعية بتشوّش فيه */
    host.innerHTML = list.length
      ? (limit ? list.map(productCard).join('') : withGroupHeadings(list))
      : '<p class="empty-state" style="grid-column:1/-1">' + esc(window.t('products.none')) + '</p>';

    var count = $('[data-count="products"]');
    if (count) count.textContent = window.t('products.count', { n: list.length });

    bindProductZoom(list);
    observeReveal(host);
  }

  function renderProductFilters() {
    var host = $('[data-render="product-filters"]');
    if (!host) return;
    var lang = window.currentLang();
    var cats = [{ id: 'all', ar: window.t('common.all'), en: window.t('common.all') }].concat(window.DATA.productCats);

    host.innerHTML = cats.map(function (c) {
      var on = productState.cat === c.id;
      return '<button type="button" data-cat="' + esc(c.id) + '" aria-pressed="' + on + '">'
        + esc(c[lang] || c.ar) + '</button>';
    }).join('');

    $$('button', host).forEach(function (b) {
      b.addEventListener('click', function () {
        productState.cat = b.getAttribute('data-cat');
        renderProductFilters();
        renderProducts();
      });
    });
  }

  function initProductSearch() {
    var input = $('[data-search="products"]');
    if (!input) return;
    input.addEventListener('input', function () {
      productState.q = input.value;
      renderProducts();
    });
  }

  /* ======================================================================
     رسم الأعمال + الفلاتر
     ====================================================================== */
  var workState = { cat: 'all' };

  function workCard(w, i) {
    var lang = window.currentLang();
    var c = w[lang] || w.ar;
    /* الشعارات والستيكرات الطويلة تُعرض كاملة بدل ما تنقص من الأطراف */
    var mediaCls = 'card__media' + (w.contain ? ' card__media--contain' : '');
    return '<article class="card card--work reveal' + (w.wide ? ' card--wide' : '') + '" style="--d:' + ((i % 8) * 55) + 'ms">'
      + '<button class="' + mediaCls + '" type="button" data-work-zoom="' + i + '" aria-label="' + esc(c.t) + '">'
      + '<img src="assets/img/portfolio/thumb/' + w.img + '.jpg" alt="' + esc(c.t) + ' — ' + esc(c.c) + '" loading="lazy" width="640" height="640">'
      + '<span class="card__zoom">' + icon('zoom') + '</span></button>'
      + '<div class="card__body">'
      + '<span class="card__meta">' + esc(c.c) + '</span>'
      + '<h3 class="card__name">' + esc(c.t) + '</h3>'
      + '</div></article>';
  }

  function filteredWorks() {
    return window.DATA.works.filter(function (w) {
      return workState.cat === 'all' || w.cat === workState.cat;
    });
  }

  /* مقتطف الرئيسية: عمل من كل تصنيف أولاً حتى تبان تشكيلة الأعمال،
     وبدون الأعمال العريضة لأنها تاخذ عمودين وتكسر ترتيب الصف */
  function featuredWorks(limit) {
    var pool = window.DATA.works.filter(function (w) { return !w.wide; });
    var picked = [];
    var seen = {};
    pool.forEach(function (w) {
      if (!seen[w.cat] && picked.length < limit) { seen[w.cat] = 1; picked.push(w); }
    });
    pool.forEach(function (w) {
      if (picked.indexOf(w) === -1 && picked.length < limit) picked.push(w);
    });
    return picked;
  }

  function renderWorks() {
    var host = $('[data-render="works"]');
    if (!host) return;
    var limit = parseInt(host.getAttribute('data-limit') || '0', 10);
    var list = limit ? featuredWorks(limit) : filteredWorks();

    host.innerHTML = list.length
      ? list.map(workCard).join('')
      : '<p class="empty-state" style="grid-column:1/-1">' + esc(window.t('portfolio.none')) + '</p>';

    var count = $('[data-count="works"]');
    if (count) count.textContent = window.t('portfolio.count', { n: list.length });

    bindWorkZoom(list);
    observeReveal(host);
  }

  function renderWorkFilters() {
    var host = $('[data-render="work-filters"]');
    if (!host) return;
    var lang = window.currentLang();
    var cats = [{ id: 'all', ar: window.t('common.all'), en: window.t('common.all') }].concat(window.DATA.workCats);

    host.innerHTML = cats.map(function (c) {
      var on = workState.cat === c.id;
      return '<button type="button" data-cat="' + esc(c.id) + '" aria-pressed="' + on + '">'
        + esc(c[lang] || c.ar) + '</button>';
    }).join('');

    $$('button', host).forEach(function (b) {
      b.addEventListener('click', function () {
        workState.cat = b.getAttribute('data-cat');
        renderWorkFilters();
        renderWorks();
      });
    });
  }

  /* ======================================================================
     اللايت بوكس
     ====================================================================== */
  var lb = { items: [], index: 0, el: null, lastFocus: null };

  function buildLightbox() {
    if (lb.el) return lb.el;
    var el = document.createElement('div');
    el.className = 'lightbox';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.innerHTML =
      '<button class="lightbox__btn lightbox__close" type="button" data-lb="close">' + icon('close') + '</button>'
      + '<button class="lightbox__btn lightbox__prev" type="button" data-lb="prev">' + icon('chevron') + '</button>'
      + '<button class="lightbox__btn lightbox__next" type="button" data-lb="next" style="transform:scaleX(-1)">' + icon('chevron') + '</button>'
      + '<figure class="lightbox__fig">'
      + '<img class="lightbox__img" alt="">'
      + '<figcaption class="lightbox__cap"></figcaption>'
      + '</figure>';
    document.body.appendChild(el);

    el.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-lb]');
      if (btn) {
        var act = btn.getAttribute('data-lb');
        if (act === 'close') closeLightbox();
        if (act === 'prev') step(-1);
        if (act === 'next') step(1);
        return;
      }
      if (e.target === el) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!el.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') step(document.documentElement.dir === 'rtl' ? -1 : 1);
      else if (e.key === 'ArrowLeft')  step(document.documentElement.dir === 'rtl' ? 1 : -1);
    });

    lb.el = el;
    return el;
  }

  function openLightbox(items, index) {
    var el = buildLightbox();
    lb.items = items;
    lb.index = index;
    /* لا نحفظ عنصراً داخل اللايت بوكس نفسه كنقطة رجوع */
    if (!el.contains(document.activeElement)) lb.lastFocus = document.activeElement;
    paintLightbox();
    el.classList.add('is-open');
    document.body.classList.add('no-scroll');
    $('[data-lb="close"]', el).focus();
    var many = items.length > 1;
    $('[data-lb="prev"]', el).style.display = many ? '' : 'none';
    $('[data-lb="next"]', el).style.display = many ? '' : 'none';
  }

  function paintLightbox() {
    var it = lb.items[lb.index];
    if (!it) return;
    var img = $('.lightbox__img', lb.el);
    img.src = it.src;
    img.alt = it.title;
    $('.lightbox__cap', lb.el).innerHTML =
      '<strong>' + esc(it.title) + '</strong>' + (it.sub ? '<small>' + esc(it.sub) + '</small>' : '');
    $('[data-lb="close"]', lb.el).setAttribute('aria-label', window.t('common.close'));
    $('[data-lb="prev"]', lb.el).setAttribute('aria-label', window.t('common.prev'));
    $('[data-lb="next"]', lb.el).setAttribute('aria-label', window.t('common.next'));
  }

  function step(dir) {
    if (!lb.items.length) return;
    lb.index = (lb.index + dir + lb.items.length) % lb.items.length;
    paintLightbox();
  }

  function closeLightbox() {
    if (!lb.el) return;
    lb.el.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    if (lb.lastFocus && lb.lastFocus.focus) lb.lastFocus.focus();
  }

  function bindWorkZoom(list) {
    var lang = window.currentLang();
    var items = list.map(function (w) {
      var c = w[lang] || w.ar;
      return { src: 'assets/img/portfolio/' + w.img + '.jpg', title: c.t, sub: window.t('portfolio.client') + ': ' + c.c };
    });
    $$('[data-work-zoom]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openLightbox(items, parseInt(btn.getAttribute('data-work-zoom'), 10));
      });
    });
  }

  function bindProductZoom(list) {
    var lang = window.currentLang();
    var withImg = list.filter(function (p) { return p.img; });
    var items = withImg.map(function (p) {
      var c = p[lang] || p.ar;
      return { src: 'assets/img/products/' + p.img + '.jpg', title: productLabel(p, lang), sub: c.desc };
    });
    $$('[data-product-zoom]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-product-zoom');
        var idx = 0;
        withImg.forEach(function (p, i) { if (p.id === id) idx = i; });
        openLightbox(items, idx);
      });
    });
  }

  /* ======================================================================
     نموذج طلب عرض السعر
     ====================================================================== */
  function initForm() {
    var form = $('[data-form="quote"]');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var lang = window.currentLang();
      var name = form.elements.name.value.trim();
      var phone = form.elements.phone.value.trim();
      var service = form.elements.service.value;
      var details = form.elements.details.value.trim();
      var err = $('[data-form-error]', form);

      if (!name || !details) {
        if (err) { err.textContent = window.t('form.required'); err.hidden = false; }
        return;
      }
      if (err) err.hidden = true;

      var msg = lang === 'en'
        ? 'Hello Al-Ahram Advertising 👋\n\n'
          + 'Name: ' + name + '\n'
          + (phone ? 'Phone: ' + phone + '\n' : '')
          + (service ? 'Service: ' + service + '\n' : '')
          + '\nDetails:\n' + details
        : 'السلام عليكم، الأهرام للدعاية والإعلان 👋\n\n'
          + 'الاسم: ' + name + '\n'
          + (phone ? 'رقم التواصل: ' + phone + '\n' : '')
          + (service ? 'الخدمة: ' + service + '\n' : '')
          + '\nالتفاصيل:\n' + details;

      window.open(window.waLink(msg), '_blank', 'noopener');
    });
  }

  function renderServiceOptions() {
    var sel = $('[data-render="service-options"]');
    if (!sel) return;
    var lang = window.currentLang();
    /* نحفظ الاختيار بالموقع مش بالقيمة — لأن القيم نفسها بتتغيّر مع اللغة */
    var idx = sel.selectedIndex;
    sel.innerHTML = '<option value="">' + esc(window.t('form.servicePh')) + '</option>'
      + window.DATA.services.map(function (s) {
          var title = (s[lang] || s.ar).title;
          return '<option value="' + esc(title) + '">' + esc(title) + '</option>';
        }).join('')
      + '<option value="' + esc(window.t('form.serviceOther')) + '">' + esc(window.t('form.serviceOther')) + '</option>';
    if (idx > 0 && idx < sel.options.length) sel.selectedIndex = idx;
  }

  /* ======================================================================
     حركات السكرول
     ====================================================================== */
  /* فحص موقع مباشر بدل IntersectionObserver.
     السبب: لو ما اشتغل الـobserver لأي سبب، المحتوى بيضل مخفي تماماً —
     وهذا أسوأ من فقدان الحركة. هالطريقة تعتمد على قياس مباشر فما بتفشل. */
  var revealTicking = false;

  function revealPass() {
    revealTicking = false;
    var h = window.innerHeight || document.documentElement.clientHeight;
    $$('.reveal:not(.is-in)').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < h * 0.92 && r.bottom > 0) el.classList.add('is-in');
    });
  }

  /* throttle عبر setTimeout وليس requestAnimationFrame:
     الـrAF ما بينفّذ لما تكون الصفحة مش مرسومة (تبويب خلفي / معاينة مخفية) */
  function scheduleReveal() {
    if (revealTicking) return;
    revealTicking = true;
    setTimeout(revealPass, 40);
  }

  function observeReveal() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      $$('.reveal:not(.is-in)').forEach(function (n) { n.classList.add('is-in'); });
      return;
    }
    revealPass();
  }

  function initReveal() {
    window.addEventListener('scroll', scheduleReveal, { passive: true });
    window.addEventListener('resize', scheduleReveal);
    window.addEventListener('load', scheduleReveal);
    /* شبكة أمان: إذا صار أي خلل، أظهر كل شي بعد ٣ ثوانٍ بدل ما يضل مخفي */
    setTimeout(function () {
      $$('.reveal:not(.is-in)').forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < (window.innerHeight || 800)) el.classList.add('is-in');
      });
    }, 3000);
  }

  /* ======================================================================
     الإقلاع
     ====================================================================== */
  function renderAll() {
    window.applyI18n();
    applyConfig();
    paintLangSwitch();
    initFab();
    renderServices();
    renderOffers();
    renderProductFilters();
    renderProducts();
    renderWorkFilters();
    renderWorks();
    renderServiceOptions();
    renderFooterServices();
    observeReveal();
  }

  function boot() {
    window.setLang(window.initialLang, true);   /* يضبط lang/dir ثم يطبّق النصوص */
    initHeader();
    initReveal();
    initProductSearch();
    initForm();
    renderAll();
    /* إعادة رسم كل شي عند تبديل اللغة — نفس دالة الرسم الأولى
       حتى ما ينسى أي قسم جديد يُضاف لاحقاً */
    document.addEventListener('langchange', renderAll);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
