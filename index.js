'use strict'
const text = document.querySelector('.contacts')
const audio = document.querySelector('.audio')

audio.addEventListener("canplaythrough", event => {
    /* аудио может быть воспроизведено; проиграть, если позволяют разрешения */
    myAudioElement.play();
  });


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