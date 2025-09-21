// Event listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);


let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;
const MAX_ATTEMPTS = 7;

initializeGame(); 

function initializeGame() {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  console.log("Random number:", randomNumber); //check

  attempts = 0;
  document.querySelector("#playerGuess").value = "";
  document.querySelector("#playerGuess").focus();
  document.querySelector("#feedback").textContent = "";
  document.querySelector("#guesses").textContent = "";
  document.querySelector("#attemptsLeft").textContent = "Attempts left: " + (MAX_ATTEMPTS - attempts);
  document.querySelector("#guessBtn").style.display = "inline-block";
  document.querySelector("#resetBtn").style.display = "none";
  document.querySelector("#wins").textContent   = "Wins: " + wins;
  document.querySelector("#losses").textContent = "Losses: " + losses;
}

function checkGuess() {
  const feedback = document.querySelector("#feedback");
  feedback.textContent = "";            
  feedback.style.color = "inherit";

  const raw = document.querySelector("#playerGuess").value.trim();
  const guess = Number(raw);


  if (!Number.isInteger(guess) || guess < 1 || guess > 99) {
    feedback.textContent = "Enter a whole number between 1 and 99.";
    feedback.style.color = "crimson";
    return;
  }
  attempts++;

  document.querySelector("#guesses").textContent += (attempts > 1 ? " " : "") + guess;
  document.querySelector("#attemptsLeft").textContent = "Attempts left: " + (MAX_ATTEMPTS - attempts);


  if (guess === randomNumber) {
    feedback.textContent = "You won! The number was " + randomNumber + ".";
    feedback.style.color = "darkgreen";
    wins++;
    document.querySelector("#wins").textContent = "Wins: " + wins;
    endRound();
    return;
  }

 
  if (attempts >= MAX_ATTEMPTS) {
    feedback.textContent = "You lost. The number was " + randomNumber + ".";
    feedback.style.color = "crimson";
    losses++;
    document.querySelector("#losses").textContent = "Losses: " + losses;
    endRound();
    return;
  }

  //hint put in, could put different colors for the number but
  if (guess > randomNumber) {
    feedback.textContent = "Too high — try a lower number.";
    feedback.style.color ="red";
  } else {
    feedback.textContent = "Too low — try a higher number.";
    feedback.style.color = "orange";
  }



  document.querySelector("#playerGuess").select();
}

function endRound() {
  document.querySelector("#guessBtn").style.display = "none";
  document.querySelector("#resetBtn").style.display = "inline-block";
}
