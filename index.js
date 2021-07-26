"use strict";
//intro splash
const intro = document.getElementById("initial-page");
const logo = document.querySelector(".initial-page__logo");
const logoSpans = document.querySelectorAll(".initial-page__logo-name");
console.log(logoSpans);
console.log(intro);
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    //
    logoSpans.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("logo-active");
      }, (index + 1) * 400);
    });
    setTimeout(() => {
      logoSpans.forEach((el, index) => {
        setTimeout(() => {
          el.classList.remove("logo-active");
          el.classList.add("logo-bottom");
        }, (index + 1) * 500);
      });
    }, 2000);
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2400);
  });
});

//////////////
const navToggle = document.querySelector(".nav__container-toggle");
const menu = document.querySelector(".nav__container");
const items = document.querySelectorAll(".nav__container-item");
console.log(items);

//For mobile version
navToggle.addEventListener("click", function () {
  let elements = Array.from(items);
  let check = elements.every((el) => el.classList.contains("active"));
  if (!check) {
    items.forEach((item) => item.classList.add("active"));
    navToggle.innerHTML = "<a href='#'><i class='fas fa-times'></i></a>";
  } else {
    items.forEach((item) => item.classList.remove("active"));
    navToggle.innerHTML = "<a href='#'><i class='fas fa-bars'></i></a>";
  }

  // if (menu.classList.contains("active")) {
  //   menu.classList.remove("active");
  //   navToggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
  // } else {
  //   item.classList.add("active");
  //   navToggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
  // }
});
// const text = document.querySelector('.contacts')
// const audio = document.querySelector('.audio')

// audio.addEventListener("canplaythrough", event => {
//     /* аудио может быть воспроизведено; проиграть, если позволяют разрешения */
//     myAudioElement.play();
//   });

// let counter = 0;
// const counterFn = () => {
// counter++;

// const sec = Math.trunc(counter/10)
// const miliSec = counter%10
// const min = Math.trunc(counter/1000)%60

// // const correctCounter = counter<=60? `${Math.trunc(counter/10)}.${counter}sec`:`${Math.trunc(counter/60)}.${counter%60}min`
// console.log(min)
// text.textContent = counter<600?`${sec}.${miliSec}s`:`${min}.${sec}min`;
// }
// text.textContent = counter;
// setInterval(counterFn, 100);
