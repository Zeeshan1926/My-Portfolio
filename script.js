// script.js

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Typing Effect
  const typingElement = document.querySelector(".typing");
  const words = ["Web Developer", "Software Engineer", "Freelancer"];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, letterIndex--);
    } else {
      typingElement.textContent = currentWord.substring(0, letterIndex++);
    }

    if (!isDeleting && letterIndex === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 300);
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 150);
    }
  }

  typeEffect();
});

// Toggle mobile navbar
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
