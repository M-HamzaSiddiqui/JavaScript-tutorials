let max = 100,
  min = 0;

let number = Math.floor(Math.random() * (max - min + 1) + min);
number = Number.parseInt(number);
let score = 100;
console.log(number);

let button = document.getElementById("btn");

button.addEventListener('click', function () {
  if (button.innerHTML === "Play Again") {
    location.reload();
  } else {
    let userInput = document.getElementById("num").value;
    userInput = Number.parseInt(userInput);
    if (userInput === number) {
      document.getElementById("resPara").innerHTML =
        "Congratulations, Right Guess..";
      button.innerHTML = "Play Again";
    } else {
      document.getElementById("resPara").innerHTML = "Wrong guess, try again.";
    }
  }
});
