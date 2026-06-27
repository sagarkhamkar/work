const WHATSAPP = '919921464280';

const translations = {
  mr: {
    brand: 'दिनेश ठिबक',
    tagline: 'Dinesh Enterprises — बारामती',
    nav_home: 'मुख्यपृष्ठ',
    nav_about: 'आमच्याबद्दल',
    nav_features: 'वैशिष्ट्ये',
    nav_system: 'सिस्टम',
    nav_products: 'उत्पादने',
    nav_exchange: 'एक्सचेंज',
    nav_contact: 'संपर्क',
    hero_badge: 'विश्वासु आणि तत्पर सेवा',
    hero_title: 'दिनेश ठिबक',
    hero_subtitle: 'थेंब थेंब पाण्यानं.... पिक आलं जोमानं...',
    hero_company: 'Dinesh Enterprises — Dinesh Drip Irrigation System',
    hero_cta: 'मोफत सल्ला व अंदाज मागवा',
    hero_cta2: 'उत्पादने पहा',
    stat_discharge: 'डिस्चार्ज दर',
    stat_virgin: 'Virgin साहित्य',
    stat_isi: 'व Non-ISI',
    about_tag: 'Dinesh Enterprises',
    about_title: 'दिनेश ठिबक सिंचन प्रणाली',
    about_desc: 'माळेगाव बु., बारामती (जि. पुणे) येथे स्थित — शेतकऱ्यांसाठी गुणवत्तापूर्ण ठिबक सिंचन उपकरणे आणि सेवा. आधुनिक तंत्रज्ञान, उच्च दर्जाची साहित्य आणि विश्वासार्ह सेवा.',
    ah1_title: 'उत्पादक',
    ah1_val: 'Dinesh Enterprises',
    ah2_title: 'स्थान',
    ah2_val: 'बारामती, पुणे',
    ah3_title: 'सेवा',
    ah3_val: 'बांधणी, सल्ला, विक्री',
    about_fb: 'Facebook वर आम्हाला फॉलो करा',
    features_tag: 'का निवडावे?',
    features_title: 'आमची वैशिष्ट्ये',
    features_desc: 'टिकाऊ साहित्य, आधुनिक तंत्रज्ञान आणि शेतकऱ्यांसाठी वाजवी किंमत',
    f1_title: 'उच्च दर्जाची साहित्य',
    f1_desc: 'टिकाऊ, उच्च दर्जाची साहित्य आणि चार छिद्र असलेले सँड गार्ड ड्रिपर. अत्याधुनिक तंत्रज्ञान आणि यंत्रसामग्री.',
    f2_title: 'कमी दाबात कार्यक्षम',
    f2_desc: 'कमी दाब आणि कमी गुणवत्तेच्या पाण्यासाठी योग्य. चार छिद्र ड्रिपरमुळे बंद होण्याची शक्यता कमी.',
    f3_title: 'बचत आणि जास्त उत्पादन',
    f3_desc: 'पाणी, खते, कीटकनाशके, मजुरी आणि बियाणे यामध्ये मोठी बचत — पिकाचे उत्पादन वाढते.',
    f5_title: 'फिल्टर विरहित',
    f5_desc: 'सोपी बांधणी, कमी देखभाल — फिल्टरशिवायही उत्तम कार्यक्षमता.',
    system_tag: 'पूर्ण सिंचन उपाय',
    system_title: 'Complete Drip Irrigation System — मुळाशी अचूक पाणी',
    system_desc: 'शेताच्या जमिनीचा उतार, पाण्याचा दाब, पिकाचा प्रकार आणि रांगांचे अंतर पाहून योग्य drip irrigation system निवडला जातो. उद्देश सोपा आहे — पाणी थेट मुळाशी, कमी वाया जाणे, आणि पिकाला नियमित ओलावा.',
    sb1: 'Root-zone watering',
    sb1_desc: 'मुळाशी मोजून पाणी',
    sb2: 'Water saving',
    sb2_desc: 'पाणी, खत आणि मजुरी बचत',
    sb3: 'Field support',
    sb3_desc: 'शेत पाहणी आणि बांधणी',
    flow1: 'Water Source',
    flow1_desc: 'विहीर / बोअर / टाकी',
    flow2: 'Filter & Mainline',
    flow2_desc: 'स्वच्छ पाणी आणि दाब नियंत्रण',
    flow3: 'Laterals & Drippers',
    flow3_desc: 'रांगेनुसार ठिबक नळी',
    flow4: 'Crop Root Zone',
    flow4_desc: 'मुळाशी नियमित ओलावा',
    comp1: 'Drip Lines',
    comp1_desc: 'शेतातील रांगांसाठी 12mm, 16mm, 20mm lateral lines.',
    comp2: 'Emitters / Drippers',
    comp2_desc: 'पिकाच्या गरजेनुसार 2, 4, 8 ltr/hr discharge options.',
    comp3: 'Filters & Valves',
    comp3_desc: 'चांगला flow, स्वच्छ पाणी आणि सोपे zone control.',
    comp4: 'Fittings & Accessories',
    comp4_desc: 'Connectors, venturi, joiners आणि field repair support.',
    crops_tag: 'पिकानुसार उपाय',
    crops_title: 'Real Farm Conditions साठी Irrigation System',
    crops_desc: 'ऊस, भाजीपाला, फळबाग आणि इतर पिकांसाठी योग्य spacing, discharge आणि lateral layout निवडण्यात मदत.',
    crop1_tag: 'Special',
    crop1: 'Sugarcane Drip Irrigation',
    crop1_desc: 'कमी दाबात चालणारी नळी, 8 ltr/hr पर्यंत discharge आणि ऊसासाठी मजबूत lateral options.',
    crop2_tag: 'Precision',
    crop2: 'Vegetable & Row Crops',
    crop2_desc: '20–50 cm spacing, मुळाशी नियमित ओलावा आणि पाण्याचा नियंत्रित वापर.',
    crop3_tag: 'Long life',
    crop3: 'Orchard & Garden',
    crop3_desc: 'फळबाग, द्राक्ष, फुले आणि nursery साठी stable water delivery.',
    products_tag: 'उत्पादने',
    products_title: 'आमची उत्पादने',
    products_desc: 'Hydrogoal Drip, Flat Drip आणि संपूर्ण सिंचन उपकरणे',
    pc1_tag: 'गोल ठिबक नळी',
    pc1_note: 'Best-in-class machinery, Advanced Technologies, High quality granules.',
    pc2_tag: 'फ्लॅट ठिबक टेप',
    pc2_note: 'Best-in-class machinery, Advanced Technologies, 100% Virgin materials.',
    pc3_title: 'इतर सिस्टम',
    pc3_tag: 'सर्व पिकांसाठी',
    cmp1_title: 'Hydrogoal — गोल ठिबक नळी',
    cmp1_desc: 'मजबूत गोल नळी, 2 / 4 / 8 ltr/hr discharge.',
    cmp2_title: 'Flat Drip — फ्लॅट ठिबक टेप',
    cmp2_desc: 'पातळ भिंतीची टेप, 2 / 4 ltr/hr discharge.',
    spec_sizes: 'आकार',
    spec_spacing: 'अंतर',
    spec_discharge: 'डिस्चार्ज',
    pl1: 'Inline Drip System',
    pl2: 'Online Lateral System',
    pl3: 'ऊस पिकासाठी विशेष किट',
    pl4: 'व्हेंच्युर, कनेक्टर, फिटिंग',
    pl5: 'ISI व Non-ISI — सर्व आकार',
    pl6: 'बांधणी आणि देखभाल सेवा',
    products_cta: 'अंदाज मागवा',
    exchange_label: 'खास ऑफर',
    exchange_title: 'जुनी नळी द्या आणि नवीन नळी घ्या',
    exchange_desc: 'तुमच्या जुन्या ठिबक नळी आणा आणि नवीन, गुणवत्तापूर्ण नळी स्वस्त दरात मिळवा. ऊस पिकासाठी विशेष — फिल्टर विरहित, 8 लिटर डिस्चार्ज उपलब्ध.',
    exchange_cta: 'आता संपर्क साधा',
    process_tag: 'आमची कामाची पद्धत',
    process_title: 'Farm Visit पासून Running Drip System पर्यंत',
    process_desc: 'फक्त माल विक्री नाही — शेतातील गरज समजून योग्य irrigation system बसवण्यावर भर.',
    ps1: 'Farm Visit',
    ps1_desc: 'पिक, जमीन, पाणी स्रोत आणि दाब समजून घेणे.',
    ps2: 'System Selection',
    ps2_desc: 'Hydrogoal, Flat Drip, spacing आणि discharge निवड.',
    ps3: 'Installation',
    ps3_desc: 'नळी, fittings, filter, valves आणि field layout बांधणी.',
    ps4: 'After Support',
    ps4_desc: 'वापर, देखभाल आणि repair support साठी मार्गदर्शन.',
    contact_tag: 'संपर्क',
    contact_title: 'आमच्याशी बोला',
    contact_desc: 'अधिक माहिती, किंमत किंवा बांधणीसाठी संपर्क साधा',
    contact_phone: 'मोबाईल',
    contact_phone2: 'मोबाईल २',
    contact_wa: 'WhatsApp वर संदेश पाठवा',
    contact_email: 'ईमेल',
    contact_location: 'कार्यालय',
    contact_address: 'माळेगाव बु., ता. बारामती, जि. पुणे — ४१३११५',
    contact_address_en: 'Near Malegaon Engineering College, Malegaon B.K., Baramati, Dist. Pune 413115',
    contact_fb: 'दिनेश ठिबक — बारामती',
    form_name: 'नाव',
    form_phone: 'फोन नंबर',
    form_message: 'संदेश',
    form_submit: 'WhatsApp वर पाठवा',
    footer_desc: 'Dinesh Enterprises — माळेगाव बु., बारामती, पुणे 413115',
    footer_company: 'Dinesh Enterprises',
    footer_rights: 'सर्व हक्क राखीव.',
    form_success: 'धन्यवाद! आम्ही लवकरच संपर्क साधू.',
  },
  en: {
    brand: 'Dinesh Thibak',
    tagline: 'Dinesh Enterprises — Baramati',
    nav_home: 'Home',
    nav_about: 'About',
    nav_features: 'Features',
    nav_system: 'System',
    nav_products: 'Products',
    nav_exchange: 'Exchange',
    nav_contact: 'Contact',
    hero_badge: 'Trustworthy & Prompt Service',
    hero_title: 'Dinesh Thibak',
    hero_subtitle: 'Drop by drop of water... the crop grew vigorously...',
    hero_company: 'Dinesh Enterprises — Dinesh Drip Irrigation System',
    hero_cta: 'Get a Free Quote & Advice',
    hero_cta2: 'View Products',
    stat_discharge: 'Discharge Rate',
    stat_virgin: 'Virgin Material',
    stat_isi: '& Non-ISI',
    about_tag: 'Dinesh Enterprises',
    about_title: 'Dinesh Drip Irrigation System',
    about_desc: 'Based in Malegaon B.K., Baramati (Dist. Pune) — quality drip irrigation equipment and services for farmers. Modern technology, premium materials, and reliable service.',
    ah1_title: 'Manufacturer',
    ah1_val: 'Dinesh Enterprises',
    ah2_title: 'Location',
    ah2_val: 'Baramati, Pune',
    ah3_title: 'Services',
    ah3_val: 'Installation, advice, sales',
    about_fb: 'Follow us on Facebook',
    features_tag: 'Why Choose Us?',
    features_title: 'Our Features',
    features_desc: 'Durable materials, modern technology, and fair pricing for farmers',
    f1_title: 'Premium Quality Materials',
    f1_desc: 'Durable, high-quality materials with four-hole sand guard drippers. State-of-the-art technology and machinery.',
    f2_title: 'Works at Low Pressure',
    f2_desc: 'Suitable for low pressure and low quality water. Four-hole dripper design significantly reduces clogging.',
    f3_title: 'Savings & Higher Yield',
    f3_desc: 'Major savings in water, fertilizer, pesticides, labor, and seeds — substantial increase in crop yield.',
    f5_title: 'Filter-less System',
    f5_desc: 'Easy installation, low maintenance — excellent performance without filters.',
    system_tag: 'Complete Irrigation Solution',
    system_title: 'Complete Drip Irrigation System — Precision at the Root Zone',
    system_desc: 'A suitable drip irrigation system is selected after understanding land slope, water pressure, crop type and row spacing. The goal is simple: water at the root zone, less wastage and steady moisture for the crop.',
    sb1: 'Root-zone watering',
    sb1_desc: 'Measured water at the roots',
    sb2: 'Water saving',
    sb2_desc: 'Save water, fertilizer and labor',
    sb3: 'Field support',
    sb3_desc: 'Farm visit and installation',
    flow1: 'Water Source',
    flow1_desc: 'Well / borewell / tank',
    flow2: 'Filter & Mainline',
    flow2_desc: 'Cleaner water and pressure control',
    flow3: 'Laterals & Drippers',
    flow3_desc: 'Crop-row based drip lines',
    flow4: 'Crop Root Zone',
    flow4_desc: 'Regular moisture near roots',
    comp1: 'Drip Lines',
    comp1_desc: '12mm, 16mm, 20mm lateral lines for field rows.',
    comp2: 'Emitters / Drippers',
    comp2_desc: '2, 4, 8 ltr/hr discharge options for crop needs.',
    comp3: 'Filters & Valves',
    comp3_desc: 'Better flow, cleaner water and simple zone control.',
    comp4: 'Fittings & Accessories',
    comp4_desc: 'Connectors, venturi, joiners and field repair support.',
    crops_tag: 'Crop-wise Solutions',
    crops_title: 'Irrigation System for Real Farm Conditions',
    crops_desc: 'Support for choosing the right spacing, discharge and lateral layout for sugarcane, vegetables, orchards and other crops.',
    crop1_tag: 'Special',
    crop1: 'Sugarcane Drip Irrigation',
    crop1_desc: 'Low-pressure friendly lines, up to 8 ltr/hr discharge and strong lateral options for sugarcane.',
    crop2_tag: 'Precision',
    crop2: 'Vegetable & Row Crops',
    crop2_desc: '20–50 cm spacing, steady root-zone moisture and controlled water usage.',
    crop3_tag: 'Long life',
    crop3: 'Orchard & Garden',
    crop3_desc: 'Stable water delivery for orchards, grapes, flowers and nurseries.',
    products_tag: 'Products',
    products_title: 'Our Products',
    products_desc: 'Hydrogoal Drip, Flat Drip, and complete irrigation equipment',
    pc1_tag: 'Round Drip Pipe',
    pc1_note: 'Best-in-class machinery, Advanced Technologies, High quality granules.',
    pc2_tag: 'Flat Drip Tape',
    pc2_note: 'Best-in-class machinery, Advanced Technologies, 100% Virgin materials.',
    pc3_title: 'Other Systems',
    pc3_tag: 'For All Crops',
    cmp1_title: 'Hydrogoal — Round Drip',
    cmp1_desc: 'Strong round pipe, 2 / 4 / 8 ltr/hr discharge.',
    cmp2_title: 'Flat Drip — Tape',
    cmp2_desc: 'Thin-wall tape, 2 / 4 ltr/hr discharge.',
    spec_sizes: 'Sizes',
    spec_spacing: 'Spacing',
    spec_discharge: 'Discharge',
    pl1: 'Inline Drip System',
    pl2: 'Online Lateral System',
    pl3: 'Special kit for sugarcane',
    pl4: 'Venturi, connectors & fittings',
    pl5: 'ISI & Non-ISI — all sizes',
    pl6: 'Installation & maintenance',
    products_cta: 'Get a Quote',
    exchange_label: 'Special Offer',
    exchange_title: 'Give Old Pipes & Get New Pipes',
    exchange_desc: 'Bring your old drip pipes and get new, quality pipes at discounted rates. Special for sugarcane — filter-less, 8L/hr discharge available.',
    exchange_cta: 'Contact Us Now',
    process_tag: 'How We Work',
    process_title: 'From Farm Visit to Running Drip System',
    process_desc: 'We focus on understanding field needs and fitting the right irrigation system, not just selling material.',
    ps1: 'Farm Visit',
    ps1_desc: 'Understand crop, soil, water source and pressure.',
    ps2: 'System Selection',
    ps2_desc: 'Choose Hydrogoal, Flat Drip, spacing and discharge.',
    ps3: 'Installation',
    ps3_desc: 'Install lines, fittings, filters, valves and field layout.',
    ps4: 'After Support',
    ps4_desc: 'Guidance for usage, maintenance and repair support.',
    contact_tag: 'Contact',
    contact_title: 'Talk to Us',
    contact_desc: 'Contact us for information, pricing, or installation',
    contact_phone: 'Mobile',
    contact_phone2: 'Mobile 2',
    contact_wa: 'Send a message on WhatsApp',
    contact_email: 'Email',
    contact_location: 'Office',
    contact_address: 'Malegaon B.K., Tal. Baramati, Dist. Pune — 413115',
    contact_address_en: 'Near Malegaon Engineering College, Malegaon B.K., Baramati, Dist. Pune 413115',
    contact_fb: 'Dinesh Thibak — Baramati',
    form_name: 'Name',
    form_phone: 'Phone Number',
    form_message: 'Message',
    form_submit: 'Send via WhatsApp',
    footer_desc: 'Dinesh Enterprises — Malegaon B.K., Baramati, Pune 413115',
    footer_company: 'Dinesh Enterprises',
    footer_rights: 'All rights reserved.',
    form_success: 'Thank you! We will contact you soon.',
  },
};

let currentLang = 'mr';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-en', lang === 'en');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.getElementById('langToggle').textContent = lang === 'mr' ? 'EN' : 'म';

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  if (nameInput) nameInput.placeholder = lang === 'mr' ? 'तुमचे नाव' : 'Your name';
  if (phoneInput) phoneInput.placeholder = '+91';
  if (messageInput) messageInput.placeholder = lang === 'mr' ? 'तुमचा संदेश...' : 'Your message...';
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLanguage(currentLang === 'mr' ? 'en' : 'mr');
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.getElementById('header').classList.toggle('scrolled', scrollY > 20);

  if (!prefersReducedMotion) {
    document.documentElement.style.setProperty('--hero-y', scrollY.toFixed(0));
  }
}, { passive: true });

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const text = encodeURIComponent(
    `नाव/Name: ${name}\nफोन/Phone: ${phone}\nसंदेश/Message: ${message}`
  );
  window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank');
  alert(translations[currentLang].form_success);
  e.target.reset();
});

const revealElements = document.querySelectorAll(
  '.feature-card, .product-card, .about-layout, .system-layout, .component-card, .crop-card, .process-step, .exchange-card, .contact-grid, .section-header, .drip-showcase, .showcase-item'
);
revealElements.forEach((el, index) => {
  el.classList.add('reveal');
  el.style.setProperty('--reveal-index', index % 6);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach((el) => observer.observe(el));

if (!prefersReducedMotion) {
  document.querySelectorAll('.feature-card, .product-card, .component-card, .crop-card, .process-step, .contact-form').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = x / rect.width;
      const py = y / rect.height;
      const tiltX = (0.5 - py) * 5;
      const tiltY = (px - 0.5) * 5;

      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
      card.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
      card.style.removeProperty('--mx');
      card.style.removeProperty('--my');
    });
  });
}
