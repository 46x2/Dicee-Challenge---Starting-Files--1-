// Step 1: Generate random numbers for both dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Step 2: Use the random numbers to pick out random dice images
var randomImageSource1 = "/images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "/images/dice" + randomNumber2 + ".png";

// Step 3: Place these images inside the left and right <img> elements
document.querySelector(".img1").setAttribute("src", randomImageSource1);
document.querySelector(".img2").setAttribute("src", randomImageSource2);

// Step 4: Use an if statement to determine the winner and update the <h1> text
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "It's a Draw!";
}

// Test it out in the console
console.log("Player 1 rolled: " + randomNumber1);
console.log("Player 2 rolled: " + randomNumber2);
console.log("Left dice image source: " + randomImageSource1);
console.log("Right dice image source: " + randomImageSource2);


