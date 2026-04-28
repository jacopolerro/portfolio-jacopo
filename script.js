document.documentElement.classList.add("js");

const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");
const navbar = document.querySelector(".navbar");
const navAnchors = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id], header[id]");

function closeMenu() {
    menuToggle.classList.remove("is-active");
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.classList.toggle("is-active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
});

navAnchors.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

const revealElements = document.querySelectorAll(".reveal");

function showReveal(element) {
    element.classList.add("visible");
    revealObserver.unobserve(element);
}

function revealVisibleElements() {
    revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
            showReveal(element);
        }
    });
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            showReveal(entry.target);
        }
    });
}, {
    rootMargin: "0px 0px -6% 0px",
    threshold: 0.04
});

revealElements.forEach((element) => {
    const delay = element.getAttribute("data-delay");
    if (delay) {
        element.style.setProperty("--delay", `${delay}ms`);
    }
    revealObserver.observe(element);
});

window.addEventListener("scroll", revealVisibleElements, { passive: true });
window.addEventListener("resize", revealVisibleElements);
revealVisibleElements();

const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }

        const id = entry.target.getAttribute("id");
        navAnchors.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
    });
}, {
    rootMargin: "-38% 0px -55% 0px",
    threshold: 0
});

sections.forEach((section) => activeObserver.observe(section));

function updateNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();
