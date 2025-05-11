window.onscroll = function () {
  updateProgressBar();
};

function updateProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

// Get all list items
const listItems = document.querySelectorAll(".list-group-item");

// Add click event listener to each item
listItems.forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault(); // Prevent default link behavior

    // Get the target section ID from the href attribute
    const targetId = item.getAttribute("href");

    // Scroll to the target section smoothly
    document.querySelector(targetId).scrollIntoView({behavior: "smooth"});
  });
});

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar",
  offset: 100,
  method: "auto" // or 'offset' for more precise scrolling
});

// Scroll animation observer
const animateOnScrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-on-scroll");
      animateOnScrollObserver.unobserve(entry.target);
    }
  });
}, {threshold: 0.1});

// Observe elements that should animate on scroll
document.querySelectorAll(".about-text, .profile-image-container, .resource-card").forEach(element => {
  animateOnScrollObserver.observe(element);
});

// Enhanced navigation highlighting
const navLinks = document.querySelectorAll(".nav-menu a");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;

  // Add/remove sticky class for nav
  const nav = document.querySelector(".nav-menu");
  if (st > 100) {
    nav.classList.add("nav-sticky");
  } else {
    nav.classList.remove("nav-sticky");
  }

  // Update active nav link
  const current = [...document.querySelectorAll("section")].find(section => section.offsetTop <= st + 60 && section.offsetTop + section.offsetHeight > st + 60);

  if (current) {
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current.id) {
        link.classList.add("active");
      }
    });
  }

  lastScrollTop = st;
});

// Smooth hover effect for resource cards
document.querySelectorAll(".resource-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

// Hero parallax effect
const hero = document.querySelector(".hero-section");
if (hero) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    hero.style.transform = `translate3d(0, ${rate}px, 0)`;
  });
}