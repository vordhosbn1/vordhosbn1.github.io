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

    let userGrade1 = document.querySelector("input[name=q1]:checked").value;
    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; 

    // alert(userAnswer1);

    if (userGrade1 == 100) {
        // alert("test");
        feedback.textContent = "A+"; 
        feedback.style.color = "green";

    } else if (userGrade1 == 75) {

        feedback.textContent = "C+";
        feedback.style.color = "orange";

    }
       else if (userAnswer2 == 50) {
        // alert("test");
        feedback.textContent = "D+"; 
        feedback.style.color = "orange";

    } else {

        feedback.textContent = "F";
        feedback.style.color = "red";

    }

}

// let result = "Your score is " + correctAnswers + "out of 5.";
