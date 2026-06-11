// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date();
yearEl.textContent = currentYear.getFullYear();

// make mobile navigation work
const navigationBtn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

navigationBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
