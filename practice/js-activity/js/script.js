document.querySelector("#gradeBtn").addEventListener("click", gradeGrade);


let selectGrade = document.getElementById('#selectInput');

function gradeGrade(){

    let userGrade = document.querySelector("#selectInput").value;
    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; 

    // alert(userAnswer1);

    if (userGrade == "A+") {
        // alert("test");
        feedback.textContent = "A+"; 
        feedback.style.color = "green";

    } else if (userGrade == "B") {

        feedback.textContent = "B";
        feedback.style.color = "orange";

    }
       else if (userGrade == "C") {
        // alert("test");
        feedback.textContent = "C"; 
        feedback.style.color = "orange";

    } else if (userGrade == "D") {

        feedback.textContent = "D";
        feedback.style.color = "blue";

    }
    else if(userGrade == "F"   ){
        feedback.textContent = "F";
        feedback.style.color = "red";
    }
    else{
        feedback.textContent = ":("
    }

}