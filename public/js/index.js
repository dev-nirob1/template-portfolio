const navbarToggle = () => {
  const navbar = document.querySelector(".navbar");
  const toggleMenu = document.querySelector(".hamburger");
  const nav_links = document.querySelector("nav-links");
  // navbar toggle
  toggleMenu.addEventListener("click", () => {
    if (nav_links.classList.contains("active")) {
      nav_links.classList.remove("active");
    } else {
      nav_links.classList.add("active");
    }
  });

  // Add scroll animation to navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolling");
    } else {
      navbar.classList.remove("scrolling");
    }
  });
};
navbarToggle();
