document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const showNavbarOffset = 200; // Adjust this value based on when you want the navbar to appear

  window.addEventListener("scroll", function () {
    if (window.scrollY > showNavbarOffset) {
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.add("hidden");
    }
  });
});
