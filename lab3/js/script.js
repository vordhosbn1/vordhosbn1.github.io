const ICON_OK = "https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg";
const ICON_X  = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_X.svg";

function setFeedback(blockId, ok, msg) {
  const block = document.querySelector(blockId);
  const icon  = block.querySelector(".feedback .icon");
  const text  = block.querySelector(".feedback .text");

  icon.src = ok ? ICON_OK : ICON_X;
  icon.style.width = "20px";
  icon.style.height = "20px";
  icon.style.display = "inline-block";
  icon.style.verticalAlign = "middle";

  text.textContent = msg;
  text.style.color = ok ? "green" : "crimson";
}


function clearAllFeedback() {
  document.querySelectorAll(".feedback .icon").forEach(i => { i.src = ""; i.style.display = "none"; });
  document.querySelectorAll(".feedback .text").forEach(t => { t.textContent = ""; t.style.color = ""; });
  document.querySelector("#congrats").textContent = "";
  document.querySelector("#scoreLine").textContent = "Score: 0 / 100";
}

function grade() {
  let score = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q1ok = q1 && q1.value === "emberlight";
  if (q1ok) score += 20;
  setFeedback("#q1", q1ok, q1ok ? "Correct." : "Emberlight is the best demonbane weapon.");

  const q2 = document.querySelector('input[name="q2"]:checked');
  const q2ok = q2 && q2.value === "cox";
  if (q2ok) score += 20;
  setFeedback("#q2", q2ok, q2ok ? "Correct." : "Chambers of Xeric is in Kourend.");

  const q3val = Number(document.querySelector("#q3num").value);
  const q3ok = q3val === 2277;
  if (q3ok) score += 20;
  setFeedback("#q3", q3ok, q3ok ? "Correct: 2277." : "Max total level is 2277.");

  const picked = Array.from(document.querySelectorAll('#q4 input[type="checkbox"]:checked'))
                      .map(i => i.value).sort();
  const needed = ["cerb", "hydra", "araxxor"].sort();
  const q4ok = picked.length === needed.length && picked.every((v, i) => v === needed[i]);
  if (q4ok) score += 20;
  setFeedback("#q4", q4ok, q4ok ? "Correct." : "Pick Cerberus, Alchemical Hydra, and Araxxor.");

  const q5 = document.querySelector('input[name="q5"]:checked');
  const q5ok = q5 && q5.value === "torva";
  if (q5ok) score += 20;
  setFeedback("#q5", q5ok, q5ok ? "Correct." : "Torva is melee BIS.");

  document.querySelector("#scoreLine").textContent = `Score: ${score} / 100`;
  const tries = Number(localStorage.getItem("osrsQuizTries") || "0") + 1;
  localStorage.setItem("osrsQuizTries", String(tries));
  document.querySelector("#triesLine").textContent = `Times taken: ${tries}`;
  if (score >= 80) document.querySelector("#congrats").textContent = "Great job! ";
}

function shuffleQ5() {
  const section = document.querySelector("#q5");
  const feedback = section.querySelector(".feedback");
  const labels = Array.from(section.querySelectorAll("label")); 


  labels.sort(() => Math.random() - 0.5);

  const frag = document.createDocumentFragment();
  labels.forEach(lab => frag.appendChild(lab));


  section.insertBefore(frag, feedback);
}

function resetForm() {
  document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(el => el.checked = false);
  const n = document.querySelector("#q3num"); if (n) n.value = "";
  clearAllFeedback();
  shuffleQ5();
}

(function init() {
  clearAllFeedback();
  shuffleQ5();
  const tries = Number(localStorage.getItem("osrsQuizTries") || "0");
  document.querySelector("#triesLine").textContent = `Times taken: ${tries}`;
  document.querySelector("#submitBtn").addEventListener("click", grade);
  document.querySelector("#resetBtn").addEventListener("click", resetForm);
})();
