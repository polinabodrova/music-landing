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
    text: "He is doing an incredible thing. If you’re looking to take your music to the next level, with a real pro sound, this is the guy!",
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
  if (!context) {
    animationPrepare();
  }
  audio.play();
  animationLoop();
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
  player.style.backgroundImage = `url(./img/${song}.svg)`;
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
////////
////////
////////
// music round
// let context;
// let analyzer;
// function animationPrepare() {
//   context = new AudioContext(); // creating audio context
//   const source = context.createMediaElementSource(audio); //creating audio source
//   const analyzer = context.createAnalyser(); //creating audio analyzer
//   source.connect(analyzer); // connecting the source to the analyzer and back
//   source.connect(context.destination);
//   loop();
// }

// function loop() {
//   window.requestAnimationFrame(loop);
//   const dataArray = new Uint8Array(analyzer.frequencyBinCount);
//   analyzer.getByteFrequencyData(dataArray); //
//   const roundAnimation = document.querySelector(
//     ".work-page__main-img-animation"
//   );
//   roundAnimation.style.minHeight = dataArray[55] + "px";
//   roundAnimation.style.width = dataArray[55] + "px";
// }
//////////
//////////
//////////
//THIS CODE KEEP
let analyzer;
let context;
function animationPrepare() {
  context = new AudioContext();
  analyzer = context.createAnalyser();
  let src = context.createMediaElementSource(audio);
  src.connect(analyzer);
  analyzer.connect(context.destination);
  animationLoop();
}
function animationLoop() {
  if (!audio.paused) {
    window.requestAnimationFrame(animationLoop);
  }
  let array = new Uint8Array(analyzer.frequencyBinCount);
  analyzer.getByteFrequencyData(array);
  const roundAnimation = document.querySelector(
    ".work-page__main-animation-block"
  );
  roundAnimation.style.minHeight = array[200] / 3 + "rem";
  roundAnimation.style.width = array[200] / 3 + "rem";
}
//////////////
const navToggle = document.querySelector(".nav__container-toggle");
const menu = document.querySelector(".nav__container");
const items = document.querySelectorAll(".nav__container-item");
console.log(items);

//Contact form
const form = document.querySelector(".contact-page form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("boum");
});
let mail = new FormData(form);

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
