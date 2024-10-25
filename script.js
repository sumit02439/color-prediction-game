// Color options ki list
const colors = ["Red", "Green", "Blue", "Yellow"];

// Color prediction check karne ka function
function predictColor(playerChoice) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const result = document.getElementById("result");

  if (playerChoice === randomColor) {
    result.innerHTML = `🎉 Congratulations! You guessed it right! The color was ${randomColor}.`;
    result.style.color = "green";
  } else {
    result.innerHTML = `❌ Sorry, the color was ${randomColor}. Try again!`;
    result.style.color = "red";
  }
}
