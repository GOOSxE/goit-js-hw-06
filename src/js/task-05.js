// const inputRef = document.querySelector("#name-input")
// const spanRef = document.querySelector("#name-output")
// console.log(inputRef)

// // const inputValue = inputRef.value
// // console.log(inputValue)
// function onInputCHange(params) {

// }
// if (inputRef.value === ''){
//     spanRef.textContent = 'Anonymous'
// }else{
//     spanRef.textContent = inputRef.value;
// }


const inputRef = document.querySelector("#name-input")
const outputRef = document.querySelector("#name-output")

inputRef.addEventListener("input", onInputChange);
function onInputChange(event) {
  const inputValue = event.target.value.trim();
  outputRef.textContent = inputValue ? inputValue : "Anonymous";
}