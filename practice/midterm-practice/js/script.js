
document.querySelector("#authorQuote").addEventListener("click", displayQuote)
document.querySelector("#authorInfo").addEventListener("click", displayInfo);


let data;
displayInfo();
// author

async function displayQuote() {
    let url = "https://csumb.space/api/famousQuotes/getRandomQuote.php";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    document.querySelector("h1").textContent = data.quoteText;
    document.querySelector("h2").textContent = `-${data.firstName} ${data.lastName}`;

}
// bio
async function displayInfo() {
    let url = "https://csumb.space/api/famousQuotes/getRandomQuote.php";
    let response = await fetch(url);
    let data = await response.json();
    let imageEl = document.querySelector("img");
    imageEl.src = data.picture;
    imageEl.width = 250;
    console.log(data);


    document.querySelector("#authorBio").textContent = data.bio;


}

// async function translateQuote() {
//     let url = "https://csumb.space/api/famousQuotes/translateQuote.php?lang=ES&quoteId=2";
//     let response = await fetch(url);
//     let data = await response.json();

//     const section = document.querySelector("#q5");
//     const feedback = section.querySelector(".feedback");
//     const labels = Array.from(section.querySelectorAll("label"));


//     labels.sort(() => Math.random() - 0.5);

//     const frag = document.createDocumentFragment();
//     labels.forEach(lab => frag.appendChild(lab));


//     section.insertBefore(frag, feedback);
// }

// function displayQ(){
//     let qOp = ["English","Spanish","French","Esperanto"];
//     qOp = _.shuffle(qOp);
//     for( let i of qOp){
//         let inputEle = document.createElement("input");
//         inputEle.type = "radio";
//         inputEle.name = "q1";
//         inputEle.value = i;
//         console.log(inputEle);
//         let labelEle = document.createElement("label");
//         labelEle.textContent = i;
//         labelEle.prepend(inputEle);
//         document.querySelector("#question").append(labelEle);
//     }
// }