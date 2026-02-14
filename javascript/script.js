// 1. Scroll Progress Bar
window.onscroll = function () {
  updateProgressBar();
};
function updateProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-progress").style.width = scrolled + "%";
  // Trigger Reveal Animation
  reveal();
}
// 2. Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}
// 3. Typing Effect
const textElement = document.querySelector(".typing-text");
const words = ["Modern Tech", "Clean Code", "MERN Stack", "React & Node"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;
function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 100;
  } else {
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 150;
  }
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typeSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }
  setTimeout(type, typeSpeed);
}
document.addEventListener("DOMContentLoaded", type);
// 4. Scroll Reveal Animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
// 5. Snow Flakes
function createSnow() {
  const container = document.getElementById("snow-container");
  const snowflakeCount = 50;
  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    const size = Math.random() * 3 + 2 + "px";
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 5 + "s";
    snowflake.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(snowflake);
  }
}
createSnow();