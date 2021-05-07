var buttons = document.getElementsByClassName("color-btn");
var resetBtn = document.getElementById("reset-btn");
var colorTag = document.getElementById("color-value");

console.log(buttons)

buttons = Object.values(buttons)

let colorValues = []

function setButtonColour(button, red, green, blue) {
  button.setAttribute(
    "style",
    "background-color: rgb(" + red + "," + green + "," + blue + ");"
  );
  colorValues.push("rgb(" + red + "," + green + "," + blue + ")")
}

buttons.forEach(button => setButtonColour(button, getRandomNumberUpToANumber(255), getRandomNumberUpToANumber(255), getRandomNumberUpToANumber(255)))

function getRandomNumberUpToANumber(biggest) {
  return Math.floor(Math.random() * (biggest + 1));
}

colorTag.textContent = colorValues[getRandomNumberUpToANumber(colorValues.length - 1)]



/*buttons.addEventListener("click", function () {
  document.body.style.backgroundColor = createRGBColorFromValues(
    getRandomNumberUpToANumber(255),
    getRandomNumberUpToANumber(255),
    getRandomNumberUpToANumber(255)
  );
  color.textContent = `RGB(${redGlobal}, ${greenGlobal}, ${blueGlobal})`;
});
*/
// buttons.forEach((button) =>
//   button.setAttribute(
//     "style",
//     "background-color: rgb(" + 255 + "," + 255 + "," + 0 + ");"
//   )
// );
