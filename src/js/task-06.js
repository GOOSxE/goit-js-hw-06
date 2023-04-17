const inputRef = document.querySelector("#validation-input");
const inputCorrectLength = inputRef.getAttribute("data-length");
console.log(inputCorrectLength);
// *

inputRef.addEventListener("blur", onInputChange);
function onInputChange(event) {
  const valueLength = event.target.value.trim().length;
  if (valueLength === Number(inputCorrectLength)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
