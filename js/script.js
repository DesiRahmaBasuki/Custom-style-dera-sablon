// Toggle class active pada navbar
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Pastikan elemen ada sebelum menambah event
if (hamburger && navbarNav) {
  // Ketika hamburger menu di klik
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation(); // Agar klik tidak langsung trigger event document
    navbarNav.classList.toggle("active");
  });

  // Klik di luar sidebar untuk menghilangkan nav
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
}
