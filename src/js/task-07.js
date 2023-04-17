const rangeInputRef = document.querySelector('#font-size-control')
const textToChangeRef = document.querySelector('#text')
// *

rangeInputRef.addEventListener('input', onRangeChange)

function onRangeChange(event) {
    textToChangeRef.style.fontSize = `${event.currentTarget.value}px`
}
// *