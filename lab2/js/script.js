document.querySelector("#guessBtn").addEventListener("click", guess);



let correctGuess = Math.floor(Math.random() * 99 + 1);
let numOfGuess = 6;


function endGame(msg, color){
    yourGuess.textContent = msg;
    yourGuess.style.color = color;
    gameOver = true;
    guessBtn.disabled = true;
    guessBox.disabled = true;

}

function guess(){
    
    let userGuess = document.querySelector("#guessBox").value;
    //alert(userGuess);
    document.querySelector("#answers").textContent += `${userGuess} `;
    if(numOfGuess > 0){
        if(userGuess >= 100){
            alert("Guess was too big.");
        } 
        if (userGuess <= 0){
            alert("Guess was too small.");
        }
        if (userGuess == correctGuess){
            document.querySelector("#yourGuess").textContent = "Your guess was correct.";
            document.querySelector("#yourGuess").style.color = "#39FF14"
        }
        if(userGuess > correctGuess){
            document.querySelector("#yourGuess").textContent = "Your guess was too high.";
            document.querySelector("#yourGuess").style.color = "orange"
        }
        if(userGuess < correctGuess){
            document.querySelector("#yourGuess").textContent = "Your guess was too low.";
            document.querySelector("#yourGuess").style.color = "blue"
        }
    }
    if(numOfGuess <= 0){
       document.querySelector("#yourGuess").textContent = "You lose!"
       document.querySelector("#yourGuess").style.color = "red"
       if(userGuess == correctGuess){
            document.querySelector("#yourGuess").textContent = "You still lose."
            // note, remove this later since we should be able to stop the game after the user even tries to go past 7 tries. 
            document.querySelector("#yourGuess").style.color = "red"
       }
    }
    numOfGuess--;
}