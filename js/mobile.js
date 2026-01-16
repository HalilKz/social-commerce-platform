const mobileBtn = document.getElementById("mobile-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileactions = document.querySelectorAll(".action-mobile");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu-active");
});

mobileactions.forEach((action) => {
  action.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile-menu-active");
  });
});
