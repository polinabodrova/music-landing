"use strict";
//intro splash
const intro = document.getElementById("initial-page");
const logo = document.querySelector(".initial-page__logo");
const logoSpans = document.querySelectorAll(".initial-page__logo-name");
console.log(logoSpans);
console.log(intro);
// window.addEventListener("DOMContentLoaded", function () {
//   setTimeout(() => {
//     //
//     logoSpans.forEach((el, index) => {
//       setTimeout(() => {
//         el.classList.add("logo-active");
//       }, (index + 1) * 400);
//     });
//     setTimeout(() => {
//       logoSpans.forEach((el, index) => {
//         setTimeout(() => {
//           el.classList.remove("logo-active");
//           el.classList.add("logo-bottom");
//         }, (index + 1) * 500);
//       });
//     }, 2000);
//     setTimeout(() => {
//       intro.style.top = "-100vh";
//     }, 2400);
//   });
// });
//player
const player = document.querySelector(".player"); //background-img
const audio = document.querySelector(".player__main-audio");
const barDiv = document.querySelector(".player__main-progress");
const line = document.querySelector(".player__main-progress-line");

const prevButton = document.querySelector(".player__main-controls-prev");
const nextButton = document.querySelector(".player__main-controls-next");

const playButton = document.querySelector(".fa-play-circle");
const pauseButton = document.querySelector(".fa-pause");

let currentSongIndex = 0;
const songs = ["na_zare", "melody", "waiting"];

function playSong() {
  playButton.classList.add("notactive");
  pauseButton.classList.remove("notactive");
  audio.play();
}
playButton.addEventListener("click", playSong);

function pauseSong() {
  pauseButton.classList.add("notactive");
  playButton.classList.remove("notactive");
  audio.pause();
}
pauseButton.addEventListener("click", pauseSong);

function loadSong(song) {
  audio.src = `tracks/${song}.mp3`;
  player.style.backgroundImage = `url(./img/${song}.jpg)`;
}

function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  loadSong(songs[currentSongIndex]);
  playSong();
}
prevButton.addEventListener("click", prevSong);

function nextSong() {
  currentSongIndex++;
  if (currentSongIndex > songs.length - 1) {
    currentSongIndex = 0;
  }
  loadSong(songs[currentSongIndex]);
  playSong();
}

nextButton.addEventListener("click", nextSong);

// function updatedBar(e) {
//   const { duration, currentTime } = e.target;
//   const percentProgress = (currentTime / duration) * 100;
//   bar.style.width = `${percentProgress}%`;
// }

// function setBar() {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = audio.duration;
//   audio.currentTime = (clickX / width) * duration;
// }

// audio.addEventListener("timeupdate", updatedBar);
// bar.addEventListener("click", setBar);
// barDiv.addEventListener("change", function () {
//   audio.currentTime = barDiv.value;
// });

audio.addEventListener("ended", nextSong);

function updateProgress(e) {
  // console.log(e.target.duration);
  // console.log(e.target.currentTime);
  const { duration, currentTime } = e.target;
  const progressPercent = (currentTime * 100) / duration;
  line.style.width = `${progressPercent}%`;
}
audio.addEventListener("timeupdate", updateProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
barDiv.addEventListener("click", setProgress);
//////////////
const navToggle = document.querySelector(".nav__container-toggle");
const menu = document.querySelector(".nav__container");
const items = document.querySelectorAll(".nav__container-item");
console.log(items);

//For mobile version
// navToggle.addEventListener("click", function () {
//   let elements = Array.from(items);
//   let check = elements.every((el) => el.classList.contains("active"));
//   if (!check) {
//     items.forEach((item) => item.classList.add("active"));
//     navToggle.innerHTML = "<a href='#'><i class='fas fa-times'></i></a>";
//   } else {
//     items.forEach((item) => item.classList.remove("active"));
//     navToggle.innerHTML = "<a href='#'><i class='fas fa-bars'></i></a>";
//   }
// });
//

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
