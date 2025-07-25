const navbarToggle = () => {
  const toggleMenu = document.querySelector(".hamburger");
  const nav_links = document.querySelector("ul");
  // navbar toggle
  toggleMenu.addEventListener("click", () => {
    if (nav_links.classList.contains("active")) {
      nav_links.classList.remove("active");
    } else {
      nav_links.classList.add("active");
    }
  });
};
navbarToggle()