"use strict";

let pick = document.querySelector("#pick");
let img = document.createElement("img");
let timers = document.querySelector("h1");
img.src = "/img/0.jpg";
img.id = "img0";

pick.appendChild(img);

let q = 1;
pick.addEventListener("click", function () {
  if (q == 1) {
    img.src = "/img/1.jpg";
    img.id = "img1";
    q = 2;
  } else if (q == 2) {
    img.src = "/img/2.jpg";
    img.id = "img2";
    q = 3;
  } else if (q == 3) {
    img.src = "/img/3.jpg";
    img.id = "img3";
    q = 4;
  } else if (q == 4) {
    img.src = "/img/4.jpg";
    img.id = "img4";
    q = 5;
  } else if (q == 5) {
    img.src = "/img/5.jpg";
    img.id = "img5";
    q = 6;
  } else if (q == 6) {
    img.src = "/img/6.jpg";
    img.id = "img6";
    q = 7;
  } else if (q == 7) {
    img.src = "/img/7.jpg";
    img.id = "img7";
    q = 8;
  } else if (q == 8) {
    img.src = "/img/8.jpg";
    img.id = "img8";
    q = 1;
  }
});
let timer,
  counterVal = 0;

function counterStart() {
  if (timer) {
    clearInterval(timer);
    timers.innerHTML = "Timmer on click:" + counterVal;
  } else {
    timers.innerHTML = "Timmer on click:" + counterVal;
  }
  counterVal = 0;

  timer = setInterval(function () {
    counterVal++;
  }, 1000);
}

window.addEventListener("click", counterStart);
