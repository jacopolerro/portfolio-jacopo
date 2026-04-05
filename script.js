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

// Dynamic Background and Text Color on Scroll
function updateDynamicStyles() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = Math.min(scrollTop / scrollHeight, 1);

    // Interpolate background color: Light Purple (#f3e5f5) to Vibrant Purple (#4a148c)
    // RGB Light Purple: 243, 229, 245
    // RGB Vibrant Purple: 74, 20, 140
    const r = Math.round(243 - (243 - 74) * scrollPercent);
    const g = Math.round(229 - (229 - 20) * scrollPercent);
    const b = Math.round(245 - (245 - 140) * scrollPercent);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Professional Text Transition
    const textColor = scrollPercent > 0.4 ? '#ffffff' : '#2d3436';
    const mutedColor = scrollPercent > 0.4 ? 'rgba(255, 255, 255, 0.7)' : '#636e72';
    
    document.body.style.color = textColor;
    
    document.querySelectorAll('.hero h1, .section-title, .navbar .logo span, .nav-links a').forEach(el => {
        el.style.color = textColor;
    });

    document.querySelectorAll('.lead').forEach(el => {
        el.style.color = mutedColor;
    });

    // Navbar adaptation
    const navBg = scrollPercent > 0.1 
        ? `rgba(${r}, ${g}, ${b}, 0.8)` 
        : 'rgba(255, 255, 255, 0.05)';
    document.querySelector('.navbar').style.background = navBg;
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});

// Reveal Sections on Scroll (Immersive Effect)
const revealSections = () => {
    const sections = document.querySelectorAll('.section, .hero, .footer');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.85;
        
        if (sectionTop < triggerPoint) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        }
    });
};

// Set initial state for reveal
document.querySelectorAll('.section').forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(30px)';
});

window.addEventListener('scroll', () => {
    updateDynamicStyles();
    revealSections();
});

// Initial calls
updateDynamicStyles();
revealSections();

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
