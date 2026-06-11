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

// smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
