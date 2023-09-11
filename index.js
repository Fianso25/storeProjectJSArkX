const navMenu = document.querySelector(".navv-menu");
const fabar = document.querySelector(".fa-bars");
const faXmark = document.querySelector(".fa-xmark");

fabar.addEventListener("click", () => {
  fabar.classList.toggle("fa-xmark");
  navMenu.classList.toggle("active");
});

const Items = document.querySelectorAll(".navv-item");

const closeMobileMenu = () => {
  navMenu.style.display = "none";
};
