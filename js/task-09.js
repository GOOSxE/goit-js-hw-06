// *

const bodyUrl = document.querySelector("body");
const changeBgBtnUrl = document.querySelector(".change-color");
const OutlogSpanUrl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// *

changeBgBtnUrl.addEventListener("click", getRandomBgColor);

function getRandomBgColor() {
  let randomHexColor = getRandomHexColor();
  bodyUrl.style.backgroundColor = randomHexColor;
  OutlogSpanUrl.textContent = randomHexColor;
}
// *
