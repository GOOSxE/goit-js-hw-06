// *

const bodyUrl = document.querySelector("body");
const changeBgBtnUrl = document.querySelector(".change-color");
const OutlogSpanUrl = document.querySelector(".color");
// *

changeBgBtnUrl.addEventListener("click", getRandomBgColor);

function getRandomBgColor() {
  bodyUrl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  OutlogSpanUrl.textContent = bodyUrl.style.backgroundColor;
}
