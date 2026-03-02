// Interactive Background Canvas: Network node representing digital medicine connections
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let mouse = { x: null, y: null };

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
}

window.addEventListener('resize', resize);

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 0.5;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const numParticles = Math.min(Math.floor(width * height / 15000), 100); 
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                const opacity = 1 - (dist / 120);
                ctx.strokeStyle = `rgba(130, 80, 200, ${opacity * 0.2})`; 
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    if (mouse.x && mouse.y) {
        for (let i = 0; i < particles.length; i++) {
            const dx = particles[i].x - mouse.x;
            const dy = particles[i].y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                const opacity = 1 - (dist / 150);
                ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.5})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});
window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

resize();
animate();

// Real Typing Effect
const messages = [
    "> Inizializzazione dati in corso...",
    "Studente al secondo anno appassionato di come la tecnologia possa 'hackerare' i limiti della medicina tradizionale.",
    "Sto imparando a manipolare dati e sistemi per creare un ponte tra il codice binario e il DNA umano."
];

let currentMessageIndex = 0;
let charIndex = 0;
let isTypingStarted = false;

function typeMessage() {
    if (currentMessageIndex < messages.length) {
        const currentElement = document.getElementById(`type-${currentMessageIndex + 1}`);
        if (charIndex < messages[currentMessageIndex].length) {
            currentElement.textContent += messages[currentMessageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, 30);
        } else {
            currentMessageIndex++;
            charIndex = 0;
            setTimeout(typeMessage, 500);
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

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile Menu Logic
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple CSS toggle handled by adding/removing class
    });
}
