"use strict";
//intro splash page
// const intro = document.getElementById("initial-page");
// window.addEventListener("DOMContentLoaded", function () {
//   const logoSpans = document.querySelectorAll(".initial-page__logo-name");
//   setTimeout(() => {
//     //
//     logoSpans.forEach((el, index) => {
//       setTimeout(() => {
//         el.classList.add("logo-active");
//       }, (index + 1) * 500);
//     });
//     setTimeout(() => {
//       logoSpans.forEach((el, index) => {
//         setTimeout(() => {
//           el.classList.remove("logo-active");
//           el.classList.add("logo-bottom");
//         }, (index + 1) * 5);
//       });
//     }, 3000);
//     setTimeout(() => {
//       intro.style.filter = "blur(2rem)";
//       intro.style.top = "-100%";
//     }, 3000);
//   });
// });
//Random pics for intro screen
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomNumber(1, 5));
// intro.style.backgroundImage = `url(/initial-page-img/${getRandomNumber(
//   1,
//   5
// )}.jpg)`;
////NAVBAR
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");
  console.log(navLinks);
  console.log(burger);
  console.log(nav);
  burger.addEventListener("click", function () {
    console.log("blabla");
    nav.classList.toggle("nav-active");
  });
  navLinks.forEach((el, index) => {
    el.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2}s`;
  });
};
navSlide();
///
// const navToggle = document.querySelector(".nav__container-toggle");
// const menu = document.querySelector(".nav__container");
// const items = document.querySelectorAll(".nav__container-item");
// console.log(items);

//For mobile version
// navToggle.addEventListener("click", function () {
//   const navContainer = document.querySelector(".nav__container ");
//   let elements = Array.from(items);
//   let check = elements.every((el) => el.classList.contains("active"));
//   if (!check) {
//     items.forEach((item) => item.classList.add("active"));
//     navToggle.innerHTML = "<a href='#'><i class='fas fa-times'></i></a>";
//     navContainer.style.backgroundColor = "black";
//     navContainer.style.height = "100vh";
//   } else {
//     items.forEach((item) => item.classList.remove("active"));
//     navToggle.innerHTML = "<a href='#'><i class='fas fa-bars'></i></a>";
//     navContainer.style.backgroundColor = "transparent";
//     navContainer.style.height = "-100vh";
//   }
// });
