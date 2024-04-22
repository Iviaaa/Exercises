// Declare some variables for each checkbox,
// just so that you don't have to repeat the 
// document.getElementbyId code over and over.
const defaultColor = "#0000ff";
let leftPicker;
let middlePicker;
let rightPicker;

window.addEventListener("load", startup, false);

function startup() {
  leftPicker = document.querySelector("#left");
  leftPicker.value = "#fc93e7";
  leftPicker.addEventListener("input", updateLeft, false);

  middlePicker = document.querySelector("#middle");
  middlePicker.value = "#97ffec";
  middlePicker.addEventListener("input", updateMiddle, false);

  rightPicker = document.querySelector("#right");
  rightPicker.value = "#d6ff76";
  rightPicker.addEventListener("input", updateRight, false);
}

function updateLeft(event) {
  const p = document.getElementsByClassName("red");
  console.log(p[0]);
  console.log(event.target.value);
  if (p[0]) {
    p[0].style.backgroundColor = event.target.value;
  }
}

function updateMiddle(event) {
  const p = document.getElementsByClassName("green");
  if (p[0]) {
    p[0].style.backgroundColor = event.target.value;
  }
}

function updateRight(event) {
  const p = document.getElementsByClassName("blue");
  if (p[0]) {
    p[0].style.backgroundColor = event.target.value;
  }
}