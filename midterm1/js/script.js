// event listeners
document.querySelector("#likeBtn").addEventListener("cilck", updateLikes);
document.querySelector("#dislikeBtn").addEventListener("click", updateLikes);
// document.querySelector("#displayQuestion").addEventListener("click", grade);
document.querySelector("#submitBtn").addEventListener("click", grade);
document.addEventListener("click", onLikeClick);
document.querySelector("#submitReport").addEventListener("click", report);
document.querySelector("#commentBtn").addEventListener("click", comments);


displayLikes();
report();

// functions
function onLikeClick(event) {


}

async function comments(){
    let url = "https://csumb.space/api/videoLikes.php?videoId=?videoId=FgtBWb2k5N8?si=eHtIuRcqHN24ZCuu&action=comments"
    try{
        let response = await fetch(url);
        let data = await response.json();
        document.querySelector("#showComments").textContent = data.comment;
        console.log();
    }catch (parseError){
        console.log("Parsing Error" + parseError);
    }
}

async function report() {
    let url = "https://csumb.space/api/videoLikes.php?videoId=?videoId=FgtBWb2k5N8?si=eHtIuRcqHN24ZCuu&action=report";
        try{
        let response = await fetch(url);
        let data = await response.json();
        console.log();
        }catch (error){
            console.log("error found" + error);
        }

        
        
        let options = ["Sexual Content", "Hate Speech", "Scam or gambling", "Underage content"];
        options = _.shuffle(options);

        for (let i = 0; i < flowers.length; i++) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "option";
            radio.value = options[i];
            console.log();

            let label = document.createElement("label");
            label.innerText = options[i];
            label.prepend(radio);

            document.querySelector("#radioDiv").appendChild(label);

            document.querySelector("#reportSubmission").textContent = "Thank you for submitting!"
    }
}
    


async function displayLikes() {
        let url = "https://csumb.space/api/videoLikes.php?videoId=FgtBWb2k5N8?si=eHtIuRcqHN24ZCuu";
        try {
            let response = await fetch(url);
            let data = await response.json();
            document.querySelector("#showLikes").textContent = "Total Likes: " + data.likes;
            console.log();
        } catch (error) {
            console.log("Network error" + error);
        }
    }

    async function updateLikes() {
        let url = "https://csumb.space/api/videoLikes.php?videoId=FgtBWb2k5N8?si=eHtIuRcqHN24ZCuu&action=action"
        try {
            let response = await fetch(url);
            let data = await response.json();
            console.log();
        } catch (parseError) {
            console.log("JSON parsing error" + parseError);
        }

    }

    function setFeedback(blockId, ok, msg) {
        const block = document.querySelector(blockId);
        const text = block.querySelector(".feedback .text");

        text.textContent = msg;
        text.style.color = ok ? "green" : "crimson";
    }


    function grade() {
        const o1 = document.querySelector('input[name="o1"]:checked');
        const o1ok = o1 && o1.value === "csumb";
        setFeedback("#o1", o1ok, o1ok ? "You're right!" : "The video was about CSUMB.");


    }




