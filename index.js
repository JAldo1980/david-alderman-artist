// hamburger

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  document.querySelector(".menu-modal").classList.toggle("show");
});
