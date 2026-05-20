const cursor =
document.querySelector(".cursor-light");


// CURSOR LIGHT

document.addEventListener("mousemove", e => {

  cursor.style.left =
  e.clientX + "px";

  cursor.style.top =
  e.clientY + "px";

});


// TIMER

let hours = 0;
let minutes = 0;
let seconds = 0;

let timer;
let running = false;


const h =
document.getElementById("hours");

const m =
document.getElementById("minutes");

const s =
document.getElementById("seconds");

const laps =
document.getElementById("laps");


// UPDATE DISPLAY

function updateDisplay(){

  h.innerHTML =
  String(hours).padStart(2,"0");

  m.innerHTML =
  String(minutes).padStart(2,"0");

  s.innerHTML =
  String(seconds).padStart(2,"0");

}


// START

document.getElementById("start")
.addEventListener("click", () => {

  if(!running){

    running = true;

    timer = setInterval(() => {

      seconds++;

      if(seconds === 60){

        seconds = 0;
        minutes++;

      }

      if(minutes === 60){

        minutes = 0;
        hours++;

      }

      updateDisplay();

    },1000);

  }

});


// PAUSE

document.getElementById("pause")
.addEventListener("click", () => {

  clearInterval(timer);

  running = false;

});


// RESET

document.getElementById("reset")
.addEventListener("click", () => {

  clearInterval(timer);

  running = false;

  hours = 0;
  minutes = 0;
  seconds = 0;

  updateDisplay();

  laps.innerHTML = "";

});


// MEMORY SAVE

document.getElementById("lap")
.addEventListener("click", () => {

  if(running){

    const memory =
    document.createElement("div");

    memory.classList.add("memory");

    memory.innerHTML =

    `MEMORY —
    ${h.innerHTML} :
    ${m.innerHTML} :
    ${s.innerHTML}`;

    laps.prepend(memory);

  }

});