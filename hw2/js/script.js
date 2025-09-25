const betEl = document.querySelector("#bet");
const bestOfEl = document.querySelector("#bestOf");
const rollBtn = document.querySelector("#rollBtn");
const resetBtn = document.querySelector("#resetBtn");

const msgEl = document.querySelector("#msg");
const bankEl = document.querySelector("#bank");
const scoreEl = document.querySelector("#score");
const roundInfoEl = document.querySelector("#roundInfo");
const attemptsLeftEl = document.querySelector("#attemptsLeft");
const historyList = document.querySelector("#historyList");

const pDie1 = document.querySelector("#pDie1");
const pDie2 = document.querySelector("#pDie2");
const cDie1 = document.querySelector("#cDie1");
const cDie2 = document.querySelector("#cDie2");
const pTotalEl = document.querySelector("#pTotal");
const cTotalEl = document.querySelector("#cTotal");
const playerPane = document.querySelector("#playerPane");
const cpuPane = document.querySelector("#cpuPane");


const diceImgs = [
  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
];


let bank = 100;
let wins = 0;
let losses = 0;
let playerRounds = 0;
let cpuRounds = 0;
let roundsToWin = 2;   //the default round will be at Bo3
let roundsPlayed = 0;

const randDie = () => Math.floor(Math.random() * 6) + 1;

function setDice(imgEl, value) {
  imgEl.src = diceImgs[value - 1];
  imgEl.alt = `die shows ${value}`;
}

function updateHUD() {
  bankEl.textContent = `Bank: $${bank}`;
  scoreEl.textContent = `Wins: ${wins} • Losses: ${losses}`;
  roundInfoEl.textContent = `Round ${roundsPlayed + 1}`;
  attemptsLeftEl.textContent = `Target: ${roundsToWin} wins`;
}

function resetRoundStyles() {
  playerPane.classList.remove("win", "lose");
  cpuPane.classList.remove("win", "lose");
}


function startMatch() {
// n / 2 since if you are bo3, then if you win 2-0, then you automatically "mercy"
  const N = parseInt(bestOfEl.value, 10);
  roundsToWin = Math.ceil(N / 2);
  playerRounds = 0;
  cpuRounds = 0;
  roundsPlayed = 0;
  historyList.innerHTML = "";
  msgEl.textContent = "Click “Roll” to start!";
  resetRoundStyles();
  setDice(pDie1, 1); setDice(pDie2, 1);
  setDice(cDie1, 1); setDice(cDie2, 1);
  pTotalEl.textContent = "0";
  cTotalEl.textContent = "0";
  rollBtn.disabled = false;
  updateHUD();
}

function finishMatch(playerWon) {

  const bet = Math.max(1, parseInt(betEl.value || "0", 10));
  if (playerWon) { bank += bet; wins++; msgEl.textContent = "Match win!"; }
  else { bank -= bet; losses++; msgEl.textContent = "Match lost. Try again!"; }
  rollBtn.disabled = true;
  updateHUD();
}

function rollRound() {
  resetRoundStyles();

  const d1 = randDie(), d2 = randDie();
  const e1 = randDie(), e2 = randDie();
  const pTotal = d1 + d2;
  const cTotal = e1 + e2;

  setDice(pDie1, d1); 
  setDice(pDie2, d2);
  setDice(cDie1, e1); 
  setDice(cDie2, e2);

  pTotalEl.textContent = String(pTotal);
  cTotalEl.textContent = String(cTotal);

  roundsPlayed++;

  if (pTotal > cTotal) {
    playerRounds++;
    playerPane.classList.add("win");
    cpuPane.classList.add("lose");
    msgEl.textContent = `You win the round ${playerRounds}–${cpuRounds}.`;
  } else if (pTotal < cTotal) {
    cpuRounds++;
    cpuPane.classList.add("win");
    playerPane.classList.add("lose");
    msgEl.textContent = `Computer wins the round ${playerRounds}–${cpuRounds}.`;
  } else {
    msgEl.textContent = "Tie! No one scores this round.";
  }

  const li = document.createElement("li");
  li.textContent = `R${roundsPlayed}: You ${pTotal} vs CPU ${cTotal}`;
  historyList.appendChild(li);

  if (playerRounds === roundsToWin) {
    finishMatch(true);
  } else if (cpuRounds === roundsToWin) {
    finishMatch(false);
  } else {
    updateHUD();
  }
}


rollBtn.addEventListener("click", rollRound);
resetBtn.addEventListener("click", startMatch);
bestOfEl.addEventListener("change", startMatch);




startMatch();
