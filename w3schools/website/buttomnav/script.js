// JavaScript for interactivity

// Select all nav items
const navItems = document.querySelectorAll(".nav-item");

// Add click event to each nav item
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all items
    navItems.forEach((nav) => nav.classList.remove("active"));
    // Add active class to the clicked item
    item.classList.add("active");
  });
});
