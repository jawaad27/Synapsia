/* ==========================
   MENU BURGER
========================== */

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}


/* ==========================
   SOUS-MENU NEUROFEEDBACK (mobile)
========================== */

const dropdownParentLink = document.querySelector(".dropdown > a");

if (dropdownParentLink) {
    dropdownParentLink.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdownParentLink.parentElement.classList.toggle("open");
        }
    });
}


/* ==========================
   SLIDER
========================== */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

if (slides.length > 0) {
    setInterval(() => {
        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");
    }, 6000);
}


/* ==========================
   WIDGET MESSAGE
========================== */

const sendBtn = document.querySelector(".widget-send");

if (sendBtn) {
    sendBtn.addEventListener("click", () => {
        alert("Merci pour votre message ! Je vous réponds dès que possible.");
    });
}


/* ==========================
   HEADER MASQUÉ AU SCROLL
========================== */

const header = document.querySelector("header");
let lastScroll = 0;

if (header) {
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });
}