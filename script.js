// Contact details — not in HTML source to reduce casual scraping
const CONTACT = {
  phone1: { label: '+91 99225 56146', href: 'tel:+919922556146' },
  phone2: { label: '+91 88886 09664', href: 'tel:+918888609664' },
  whatsapp: { label: 'WhatsApp', href: 'https://wa.me/919922556146' },
  email: { label: 'dineshenterprises170@gmail.com', href: 'mailto:dineshenterprises170@gmail.com' },
};

const translations = {
  mr: {
    brand: 'दिनेश ठिबक',
    tagline: 'Dinesh Enterprises — बारामती',
    nav_home: 'मुख्यपृष्ठ',
    nav_about: 'आमच्याबद्दल',
    nav_features: 'वैशिष्ट्ये',
    nav_products: 'उत्पादने',
    nav_exchange: 'एक्सचेंज',
    nav_contact: 'संपर्क',
    hero_badge: 'विश्वासु आणि तत्पर सेवा',
    hero_title: 'दिनेश ठिबक',
    hero_subtitle: 'थेंब थेंब पाण्यानं.... पिक आलं जोमानं...',
    hero_company: 'Dinesh Enterprises — Dinesh Drip Irrigation System',
    hero_cta: 'जुनी नळी द्या आणि नवीन नळी घ्या',
    stat_discharge: 'डिस्चार्ज दर',
    stat_virgin: 'Virgin साहित्य',
    stat_isi: 'व Non-ISI',
    about_tag: 'Dinesh Enterprises',
    about_title: 'दिनेश ड्रिप इरिगेशन सिस्टम',
    about_desc: 'माळेगाव बु., बारामती (जि. पुणे) येथे स्थित — शेतकऱ्यांसाठी गुणवत्तापूर्ण ड्रिप सिंचन उपकरणे आणि सेवा. आधुनिक तंत्रज्ञान, उच्च दर्जाची साहित्य आणि विश्वासार्ह सेवा.',
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
    f4_title: 'विविध प्रकार',
    f4_desc: 'Inline, Online Lateral, Flat Drip — सर्व पिकांसाठी. सर्व आकार, ISI आणि Non-ISI उपलब्ध.',
    f5_title: 'फिल्टर विरहित',
    f5_desc: 'सोपी बांधणी, कमी देखभाल — फिल्टरशिवायही उत्तम कार्यक्षमता.',
    f6_title: 'विश्वासु सेवा',
    f6_desc: 'विश्वासु आणि तत्पर सेवा — शेताला भेट, योग्य सल्ला आणि बांधणी.',
    products_tag: 'उत्पादने',
    products_title: 'आमची उत्पादने',
    products_desc: 'Hydrogoal Drip, Flat Drip आणि संपूर्ण सिंचन उपकरणे',
    pc1_tag: 'गोल ड्रिप नळी',
    pc1_note: 'Best-in-class machinery, Advanced Technologies, High quality granules.',
    pc2_tag: 'फ्लॅट ड्रिप टेप',
    pc2_note: 'Best-in-class machinery, Advanced Technologies, 100% Virgin materials.',
    pc3_title: 'इतर सिस्टम',
    pc3_tag: 'सर्व पिकांसाठी',
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
    exchange_desc: 'तुमच्या जुन्या ड्रिप नळी आणा आणि नवीन, गुणवत्तापूर्ण नळी स्वस्त दरात मिळवा. ऊस पिकासाठी विशेष — फिल्टर विरहित, 8 लिटर डिस्चार्ज उपलब्ध.',
    exchange_cta: 'आता संपर्क साधा',
    contact_tag: 'संपर्क',
    contact_title: 'आमच्याशी बोला',
    contact_desc: 'अधिक माहिती, किंमत किंवा बांधणीसाठी संपर्क साधा',
    contact_phone: 'मोबाईल',
    contact_phone2: 'मोबाईल २',
    contact_wa: 'WhatsApp वर संदेश पाठवा',
    contact_masked: 'नंबर पाहण्यासाठी टॅप करा',
    contact_wa_masked: 'WhatsApp साठी टॅप करा',
    contact_email_masked: 'ईमेल पाहण्यासाठी टॅप करा',
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
    nav_products: 'Products',
    nav_exchange: 'Exchange',
    nav_contact: 'Contact',
    hero_badge: 'Trustworthy & Prompt Service',
    hero_title: 'Dinesh Thibak',
    hero_subtitle: 'Drop by drop of water... the crop grew vigorously...',
    hero_company: 'Dinesh Enterprises — Dinesh Drip Irrigation System',
    hero_cta: 'Give Old Pipes & Get New Pipes',
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
    f4_title: 'Wide Product Range',
    f4_desc: 'Inline, Online Lateral, Flat Drip — for all crops. All sizes, ISI and Non-ISI variants available.',
    f5_title: 'Filter-less System',
    f5_desc: 'Easy installation, low maintenance — excellent performance without filters.',
    f6_title: 'Trusted Service',
    f6_desc: 'Trustworthy and prompt service — field visits, proper advice, and installation.',
    products_tag: 'Products',
    products_title: 'Our Products',
    products_desc: 'Hydrogoal Drip, Flat Drip, and complete irrigation equipment',
    pc1_tag: 'Round Drip Pipe',
    pc1_note: 'Best-in-class machinery, Advanced Technologies, High quality granules.',
    pc2_tag: 'Flat Drip Tape',
    pc2_note: 'Best-in-class machinery, Advanced Technologies, 100% Virgin materials.',
    pc3_title: 'Other Systems',
    pc3_tag: 'For All Crops',
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
    contact_tag: 'Contact',
    contact_title: 'Talk to Us',
    contact_desc: 'Contact us for information, pricing, or installation',
    contact_phone: 'Mobile',
    contact_phone2: 'Mobile 2',
    contact_wa: 'Send a message on WhatsApp',
    contact_masked: 'Tap to reveal number',
    contact_wa_masked: 'Tap for WhatsApp',
    contact_email_masked: 'Tap to reveal email',
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

window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 20);
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const text = encodeURIComponent(
    `नाव/Name: ${name}\nफोन/Phone: ${phone}\nसंदेश/Message: ${message}`
  );
  window.open(`${CONTACT.whatsapp.href}?text=${text}`, '_blank');
  alert(translations[currentLang].form_success);
  e.target.reset();
});

function revealContact(button) {
  const key = button.dataset.contact;
  const info = CONTACT[key];
  if (!info) return;

  if (button.dataset.revealed !== 'true') {
    button.dataset.revealed = 'true';
    const mask = button.querySelector('.contact-mask');
    if (mask) {
      mask.textContent = info.label;
      mask.classList.add('contact-revealed');
    }
    return;
  }

  if (info.href.startsWith('tel:') || info.href.startsWith('mailto:')) {
    window.location.href = info.href;
  } else {
    window.open(info.href, '_blank', 'noopener');
  }
}

document.querySelectorAll('.contact-protected').forEach((button) => {
  button.addEventListener('click', () => revealContact(button));
});

document.getElementById('whatsappFloat').addEventListener('click', () => {
  window.open(CONTACT.whatsapp.href, '_blank', 'noopener');
});

const revealElements = document.querySelectorAll(
  '.feature-card, .product-card, .about-layout, .exchange-card, .contact-grid, .section-header, .product-gallery'
);
revealElements.forEach((el) => el.classList.add('reveal'));

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
