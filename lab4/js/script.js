//Event Listeners
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#county").addEventListener("change", displayCounty);
document.querySelector("#passwordSug").addEventListener("click", suggestPassword);
document.querySelector("#userSpan").addEventListener("change", checkUser);

displayCounty();
displayStates();
// suggestPassword();
// checkUser();


async function displayCity() {
    let zipCode = document.querySelector("#zip").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            //console.log(data);
            document.querySelector("#city").textContent = data.city;
            document.querySelector("#lat").textContent = data.latitude;
            document.querySelector("#long").textContent = data.longitude;
        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
    //alert(zipCode)
}


async function displayStates() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);

            for (let i of data) {
                let optionElement = document.createElement("option");
                optionElement.textContent = i.state;
                optionElement.value = i.usps;

                document.querySelector("#state").append(optionElement);
            }

        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
    //alert(zipCode)
}


async function suggestPassword() {
    let password = document.querySelector("#password").value;
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);
            document.querySelector("#passwordSug").textContent = data.password;


        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
    //alert(zipCode)
}


async function checkUser() {
    let user = document.querySelector("#username").value;
    let url = "https://csumb.space/api/usernamesAPI.php?username=" + user;
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);

            if (data.available == false) {
                document.querySelector("#userSpan").textContent = "Not available";
                document.querySelector("#userSpan").style.color = "red";

            } else {
                document.querySelector("#userSpan").textContent = "Available"
                document.querySelector("#userSpan").style.color = "green";
            }


        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
    //alert(zipCode)
}


async function displayCounty() {
    let url = "https://csumb.space/api/countyListAPI.php?state=";
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);

            for (let i of data) {
                let optionElement = document.createElement("option");
                optionElement.textContent = i.county;
                optionElement.value = i.county;

                document.querySelector("#county").append(optionElement);
            }

        } catch (parseError) {
            console.log("JSON Parsing error " + parseError);
        }
    } catch (error) {
        console.log("Network error " + error);
    }
    //alert(zipCode)
}





