// Real Reveal Effect for Intro
const messages = [
    "Benvenuti nel mio spazio professionale.",
    "Studente al secondo anno di Ingegneria dell'Informazione per la Medicina Digitale presso l'Università degli Studi di Salerno.",
    "Appassionato di come l'innovazione tecnologica possa migliorare i sistemi sanitari e la vita delle persone."
];

let currentMessageIndex = 0;
let charIndex = 0;
let isTypingStarted = false;

function typeMessage() {
    if (currentMessageIndex < messages.length) {
        const currentElement = document.getElementById(`type-${currentMessageIndex + 1}`);
        if (currentElement && charIndex < messages[currentMessageIndex].length) {
            currentElement.textContent += messages[currentMessageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, 20);
        } else {
            currentMessageIndex++;
            charIndex = 0;
            setTimeout(typeMessage, 400);
        }
    }
}

// Start typing when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !isTypingStarted) {
            isTypingStarted = true;
            typeMessage();
        }
    });
}, { threshold: 0.5 });

const typingContainer = document.getElementById('typing-container');
if (typingContainer) observer.observe(typingContainer);

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

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        // Basic toggle
    });
}
