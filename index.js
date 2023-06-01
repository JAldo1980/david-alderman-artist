// import { northernArt, northernArtOutput } from "./northern.js";
// import { sheepArt, sheepArtOutput } from "./sheep.js";

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  document.querySelector(".menu-modal").classList.toggle("show");
});
