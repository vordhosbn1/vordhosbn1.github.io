document.querySelector("#quizBtn").addEventListener("click",gradeQuiz);


displayQ3Options();

function displayQ3Options(){

    let q3Options = ["font-color", "fontColor", "color", "textColor"];
    q3Options = _.shuffle(q3Options);

    for (let i of q3Options) {

        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "q3";
        inputElement.value = i;
        console.log(inputElement);

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#q3Options").append(labelElement);
        
    }


}

function gradeQuiz(){

    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer2 = document.querySelector("input[id=q2a]:checked").value;
    // let userAnswer3 = document.querySelector("input[id=q3Options]:checked").value;
    // let userAnswer4 = document.querySelector("input[name=q4]:checked").value;
    // let userAnswer5 = document.querySelector("input[name=q5]:checked").value;
    
    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; 

    // alert(userAnswer1);

    if (userAnswer1 == "color") {
        // alert("test");
        feedback.textContent = "Right"; 
        feedback.style.color = "green";

    } else {

        feedback.textContent = "Wrong";
        feedback.style.color = "red";

    }
        if (userAnswer2 == "Neither") {
        // alert("test");
        feedback.textContent = "Right"; 
        feedback.style.color = "green";

    } else {

        feedback.textContent = "Wrong";
        feedback.style.color = "red";

    }

}

// let result = "Your score is " + correctAnswers + "out of 5.";
