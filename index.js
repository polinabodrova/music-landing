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
let currentFeedbackIndex = 0;
const feedbacks = [
  {
    text: "This guy makes bangers! He took the things I gave him and he made a track that came out better than I'd imagine.",
    picture: "circle-cropped-1.png",
    name: "Brascomb",
  },
  {
    text: "You are doing an incredible thing. If you’re looking to take your music to the next level, with a real pro sound, this is the guy!",
    picture: "circle-cropped-2.png",
    name: "Jack",
  },
  {
    text: "I loved the communication and the final result. Very happy working with him. I would totally recommend.",
    picture: "circle-cropped-3.png",
    name: "Anna",
  },
];

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

function loadFeedback(el) {
  const feedbackText = document.querySelector(".feedback__text");
  const img = document.querySelector(".feedback__nameimg-img-src");
  const name = document.querySelector(".feedback__nameimg-name");
  feedbackText.innerHTML = `${el.text}`;
  img.src = `img/${el.picture}`;
  name.innerHTML = `${el.name}`;
}

function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  currentFeedbackIndex--;
  if (currentFeedbackIndex < 0) {
    currentFeedbackIndex = feedbacks.length - 1;
  }
  loadSong(songs[currentSongIndex]);
  loadFeedback(feedbacks[currentFeedbackIndex]);
  playSong();
}
prevButton.addEventListener("click", prevSong);

function nextSong() {
  currentSongIndex++;
  if (currentSongIndex > songs.length - 1) {
    currentSongIndex = 0;
  }
  currentFeedbackIndex++;
  if (currentFeedbackIndex > feedbacks.length - 1) {
    currentFeedbackIndex = 0;
  }
  loadSong(songs[currentSongIndex]);
  loadFeedback(feedbacks[currentFeedbackIndex]);
  playSong();
}
nextButton.addEventListener("click", nextSong);

audio.addEventListener("ended", nextSong);

function updateProgress(e) {
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
// feedback

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
