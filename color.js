var numSquares = 6;
// this function creates an array of colors as "rgb(255, 0, 0)" form.
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var chosenColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function() {
  hard.classList.remove("selected");
  easy.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  chosenColor = pickColor();
  colorDisplay.textContent = chosenColor;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.background = "none";
    }
  }
});

hard.addEventListener("click", function() {
  easy.classList.remove("selected");
  hard.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  chosenColor = pickColor();
  colorDisplay.textContent = chosenColor;

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].style.background = "block";
  }
});

resetButton.addEventListener("click", function() {
  resetButton.textContent = "Play again ?"
    ? (resetButton.textContent = "New Color")
    : (resetButton.textContent = "New Color");
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  chosenColor = pickColor();
  //change color display to match the display
  colorDisplay.textContent = chosenColor;
  // change color of array
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#232323";
});

colorDisplay.textContent = chosenColor;
// add initial color when page is loded.
for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  // add click listeners to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;

    if (clickedColor === chosenColor) {
      resetButton.textContent = "Play again ?"
        ? (resetButton.textContent = "New Color")
        : (resetButton.textContent = "New Color");
      messageDisplay.textContent = "Correct :D ";
      resetButton.textContent = "Play again ?";
      h1.style.background = clickedColor;
      changeColor(clickedColor);
    } else {
      this.style.background = "#232323";
      resetButton.textContent = " New color";
      messageDisplay.textContent = " try again ";
    }
  });
  var changeColor = function(color) {
    // loop through all quares
    for (var i = 0; i < squares.length; i++) {
      // change each color to match the given color
      squares[i].style.background = color;
    }
  };
}
// color picker function

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    // get randomColor and push into array

    arr.push(randomColor());
  }
  // return that array at the end
  return arr;
}

function randomColor() {
  // need to pick red ,green or blue (0-255)

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
