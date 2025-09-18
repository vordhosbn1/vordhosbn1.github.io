document.querySelector("#textColorBtn").addEventListener("click", changeColor);
document.querySelector("#textSizeBtn").addEventListener("click", changeSize);
document.querySelector("#bgColorBtn").addEventListener("click", changeBG);

function changeColor(){
    // have an alert to just make sure things are working
    // alert("color change");
    let color = document.querySelector("#textColor").value;
    document.querySelector("body").style.color = color;
}

function changeSize(){
    // have an alert to just make sure things are working
    // alert("color change");
    let size = document.querySelector("#textSize").value;
    document.querySelector("body").style.fontSize = size + "em";
}


function changeBG(){
    let bgColor = document.querySelector("#bgColor").value;
    document.querySelector("body").style.backgroundColor = bgColor;
}



