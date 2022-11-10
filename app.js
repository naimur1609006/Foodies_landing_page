const navBar = document.querySelector(".fa-bars");
const navItems = document.querySelector(".nav-items");

navBar.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
