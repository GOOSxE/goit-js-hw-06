// *
const rangeInputRef = document.querySelector("#font-size-control");
const textToChangeRef = document.querySelector("#text");

function fontSizeMaker() {
  textToChangeRef.style.fontSize = `${rangeInputRef.value}px`;
}
// *

fontSizeMaker();

rangeInputRef.addEventListener("input", fontSizeMaker);
// *
