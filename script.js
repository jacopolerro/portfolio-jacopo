const translations = {
    it: {
        "nav-about": "Chi Sono",
        "nav-vision": "Visione",
        "nav-contact": "Contatti",
        "hero-badge": "Ingegneria dell'Informazione per la Medicina Digitale",
        "hero-title": "Innovazione Tecnologica <br>al servizio della Salute",
        "hero-lead": "Analisi dei dati e sistemi digitali per la medicina del futuro.",
        "hero-btn": "Scopri il profilo",
        "about-title": "Profilo Professionale",
        "about-p1": "Studente al secondo anno appassionato di come la tecnologia possa ottimizzare i processi clinici e diagnostici.",
        "about-p2": "Il mio obiettivo è integrare competenze informatiche avanzate con le necessità della medicina moderna.",
        "vision-title": "Aree di Competenza",
        "vision-1-title": "Bio-Informatica",
        "vision-1-desc": "Elaborazione di dati biologici per il supporto alle decisioni cliniche.",
        "vision-2-title": "Sistemi E-Health",
        "vision-2-desc": "Architetture digitali sicure per la gestione della salute.",
        "vision-3-title": "Innovazione MedTech",
        "vision-3-desc": "Ricerca sulle tecnologie emergenti applicate al settore medico.",
        "contact-title": "Contatti",
        "contact-desc": "Sei interessato a collaborare o vuoi saperne di più sul mio percorso?"
    },
    en: {
        "nav-about": "About Me",
        "nav-vision": "Vision",
        "nav-contact": "Contact",
        "hero-badge": "Information Engineering for Digital Medicine",
        "hero-title": "Technological Innovation <br>serving Health",
        "hero-lead": "Data analysis and digital systems for the medicine of the future.",
        "hero-btn": "Discover Profile",
        "about-title": "Professional Profile",
        "about-p1": "Second-year student passionate about how technology can optimize clinical and diagnostic processes.",
        "about-p2": "My goal is to integrate advanced IT skills with the needs of modern medicine.",
        "vision-title": "Areas of Expertise",
        "vision-1-title": "Bio-Informatics",
        "vision-1-desc": "Processing of biological data to support clinical decisions.",
        "vision-2-title": "Sistemi E-Health",
        "vision-2-desc": "Secure digital architectures for health management.",
        "vision-3-title": "MedTech Innovation",
        "vision-3-desc": "Research on emerging technologies applied to the medical sector.",
        "contact-title": "Contact",
        "contact-desc": "Are you interested in collaborating or want to know more about my journey?"
    }
};

let currentLang = localStorage.getItem('preferredLanguage') || 'it';

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key.includes('title') || key.includes('lead')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update active state in switcher
    document.getElementById('lang-it').classList.toggle('active', lang === 'it');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Language Switcher Events
document.getElementById('lang-it').addEventListener('click', () => {
    if (currentLang !== 'it') {
        currentLang = 'it';
        localStorage.setItem('preferredLanguage', 'it');
        updateContent('it');
    }
});

document.getElementById('lang-en').addEventListener('click', () => {
    if (currentLang !== 'en') {
        currentLang = 'en';
        localStorage.setItem('preferredLanguage', 'en');
        updateContent('en');
    }
});

// Initialize Language
updateContent(currentLang);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
