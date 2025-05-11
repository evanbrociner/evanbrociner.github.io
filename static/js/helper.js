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

  // Handle image loading animations
  const images = document.querySelectorAll("img");

  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.addEventListener("load", () => {
          img.classList.add("loaded");
        });
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    // Store the src in data-src and remove src to prevent immediate loading
    img.dataset.src = img.src;
    img.removeAttribute("src");
    imageObserver.observe(img);
  });

  // Add smooth transitions between pages
  const transitionDuration = 300;

  function fadeOut() {
    const content = document.querySelector("main");
    content.style.opacity = "0";
    return new Promise(resolve => setTimeout(resolve, transitionDuration));
  }

  function fadeIn() {
    const content = document.querySelector("main");
    content.style.opacity = "1";
  }

  // Handle internal navigation
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.addEventListener("click", async e => {
      e.preventDefault();
      await fadeOut();
      window.location.href = link.href;
    });
  });

  // Fade in on page load
  fadeIn();

  // Add tactile feedback to interactive elements
  const interactiveElements = document.querySelectorAll("button, .resource-card, .nav-menu a");

  interactiveElements.forEach(element => {
    element.addEventListener("mousedown", () => {
      element.style.transform = "scale(0.98)";
    });

    element.addEventListener("mouseup", () => {
      element.style.transform = "";
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "";
    });
  });
});
