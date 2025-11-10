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