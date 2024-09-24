const str = document.querySelector(".start");
const Svg = document.querySelector("#mySvg");
str.addEventListener("click", (e) => {
  str.style.width = "0px";
  Svg.style.filter = "blur(0px)";
  Svg.style.background = "inherit";
  Svg.style.transition = "all 0.5s";
});

let beat = new Audio("ticktick.mp3");
let bell = new Audio("bell.mp3");
// bell.play();
let second = document.querySelector(".el1");
let minute = document.querySelector(".el2");
let hour = document.querySelector(".el3");

(function start() {
  setInterval((e) => {
    beat.play();
    const d = new Date();
    let ho = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    second.style.transform = `rotate(${sec * 6}deg)`;

    // 24 format checking
    if (ho > 12) {
      ho = (ho % 12) * 30;
      hour.style.transform = `rotate(${ho}deg)`;
    }

    // 'Hour stick' will go 5degree ahead in every 10 minutes
    if (min < 10) {
      ho = ho * 30;
      hour.style.transform = `rotate(${ho}deg)`;
    } else if (min >= 10 && min < 20) {
      ho = ho * 30;
      ho += 5;
      hour.style.transform = `rotate(${ho}deg)`;
    } else if (min >= 20 && min < 30) {
      ho = ho * 30;
      ho += 10;
      hour.style.transform = `rotate(${ho}deg)`;
    } else if (min >= 30 && min < 40) {
      ho = ho * 30;
      ho += 15;
      hour.style.transform = `rotate(${ho}deg)`;
    } else if (min >= 40 && min < 50) {
      ho = ho * 30;
      ho += 20;
      hour.style.transform = `rotate(${ho}deg)`;
    } else if (min <= 59) {
      ho = ho * 30;
      ho += 25;
      hour.style.transform = `rotate(${ho}deg)`;
    }

    // 'Minute stick' will go 5degree ahead in every 10 seconds
    if (sec < 10) {
      min = min * 6;
      minute.style.transform = `rotate(${min}deg)`;
    } else if (sec >= 10 && sec < 20) {
      min = min * 6;
      min++;
      minute.style.transform = `rotate(${min}deg)`;
    } else if (sec >= 20 && sec < 30) {
      min = min * 6;
      min += 2;
      minute.style.transform = `rotate(${min}deg)`;
    } else if (sec >= 30 && sec < 40) {
      min = min * 6;
      min += 3;
      minute.style.transform = `rotate(${min}deg)`;
    } else if (sec >= 40 && sec < 50) {
      min = min * 6;
      min += 4;
      minute.style.transform = `rotate(${min}deg)`;
    } else if (sec <= 59) {
      min = min * 6;
      min += 5;
      minute.style.transform = `rotate(${min}deg)`;
    }
  }, 1000);
})();

// const d = new Date();
// let ho = d.getHours();
// switch(ho){
//   case 11:
//     bell.play();
//     setTimeout(e=>{bell.pause()},15000);
// }
