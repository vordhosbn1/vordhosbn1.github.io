document.querySelector("#guessBtn").addEventListener("click", onGuess);
document.querySelector("#resetBtn").addEventListener("click", resetGame);


let secret, tries, gameOver;
const MAX_TRIES = 7;
// didnt declare a const, it was reading it at index 0-> index 7 which is "6" instead of "7" here. 676767676767

startNewRound();

function startNewRound() {
  secret = Math.floor(Math.random() * 99) + 1; // 1..99
  tries = 0;
  gameOver = false;

  document.querySelector("#guessBox").value = "";
  document.querySelector("#guessBox").disabled = false;
  document.querySelector("#yourGuess").textContent = "";
  document.querySelector("#answers").textContent = "";
  document.querySelector("#guessBtn").style.display = "inline-block";
  document.querySelector("#resetBtn").style.display = "none";
  document.querySelector("#guessBox").focus();
}

function endGame(message, color) {
  const msg = document.querySelector("#yourGuess");
  msg.textContent = message;
  msg.style.color = color;

  gameOver = true;
  document.querySelector("#guessBox").disabled = true;
  document.querySelector("#guessBtn").style.display = "none";
  document.querySelector("#resetBtn").style.display = "inline-block";
}

function onGuess() {
  if (gameOver) return;

  const raw = document.querySelector("#guessBox").value.trim();
  const guess = Number(raw);


  if (!Number.isInteger(guess) || guess < 1 || guess > 99) {
    const msg = document.querySelector("#yourGuess");
    msg.textContent = "Enter a whole number from 1 to 99.";
    msg.style.color = "red";
    return;
    // shouldnt take up a guess since its outside of the range.
  }


  document.querySelector("#userGuesses").textContent += guess + " ";


  tries++;

 
  if (guess === secret) {
    endGame(`Congrats! You got it in ${tries} ${tries === 1 ? "try" : "tries"}.`, "green");
    return;
  }

  if (tries >= MAX_TRIES) {
    endGame(`Sorry, you lost! The number was ${secret}.`, "red");
    return;
  }

 
  const msg = document.querySelector("#yourGuess");
  if (guess < secret) {
    msg.textContent = `Too low. You have ${MAX_TRIES - tries} guesses left.`;
    msg.style.color = "blue"
  } else {
    msg.textContent = `Too high. You have ${MAX_TRIES - tries} guesses left.`;
    msg.style.color = "orange";
  }

  // optional: clear and refocus input
//   document.querySelector("#guessBox").value = "";
//   document.querySelector("#guessBox").focus();
}

function resetGame() {
  startNewRound();
}
