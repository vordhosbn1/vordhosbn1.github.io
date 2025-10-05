
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", displayCounty);
document.querySelector("#password").addEventListener("focus", suggestPassword);
document.querySelector("#passwordSugBtn").addEventListener("click", suggestPassword);
document.querySelector("#username").addEventListener("input", checkUser);
document.querySelector("#password2").addEventListener("input", matchPasswords);
document.querySelector("#signupForm").addEventListener("submit", validateForm);


displayStates();
displayCounty(); //shouldnt show anything until a state is chosen
// have no idea how to make it so that entering does not have the console.log show 

async function displayCity() {
  let zipCode = document.querySelector("#zip").value.trim();
  let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;


  let zipMsg = document.querySelector("#zipMsg");
  document.querySelector("#city").textContent = "";
  document.querySelector("#lat").textContent  = "";
  document.querySelector("#long").textContent = "";
  zipMsg.textContent = "";

  if (!/^\d{5}$/.test(zipCode)) {
    zipMsg.textContent = "Enter a 5-digit zip";
    zipMsg.style.color = "crimson";
    return;
  }

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (!data || !data.city) {
      zipMsg.textContent = "Zip code not found";
      zipMsg.style.color = "crimson";
      return;
    }
    document.querySelector("#city").textContent = data.city;
    document.querySelector("#lat").textContent  = data.latitude;
    document.querySelector("#long").textContent = data.longitude;
    zipMsg.textContent = "Found";
    zipMsg.style.color = "green";
  } catch (error) {
    zipMsg.textContent = "Lookup failed";
    zipMsg.style.color = "crimson";
  }
}

async function displayStates() {
  let url = "https://csumb.space/api/allStatesAPI.php";
  try {
    let response = await fetch(url);
    let data = await response.json();

    let sel = document.querySelector("#state");
    sel.innerHTML = '<option value="">-- Select State --</option>';

    for (let i of data) {
      let optionElement = document.createElement("option");
      optionElement.textContent = i.state + " (" + i.usps + ")";
      optionElement.value = i.usps.toLowerCase();
      sel.append(optionElement);
    }
  } catch (error) {
    document.querySelector("#state").innerHTML =
      '<option value="">(failed to load states)</option>';
  }
}

async function displayCounty() {
  let st = document.querySelector("#state").value;
  let url = "https://csumb.space/api/countyListAPI.php?state=" + st;

  let countySel = document.querySelector("#county");
  countySel.innerHTML = '<option value="">-- Select County --</option>';
  if (!st) return;

  try {
    let response = await fetch(url);
    let data = await response.json();

    for (let item of data) {
      let optionElement = document.createElement("option");
      const name = item.county; //forgot county lol
      optionElement.textContent = name;
      optionElement.value = name;
      countySel.append(optionElement);
    }
  } catch (error) {
    countySel.innerHTML = '<option value="">(failed to load counties)</option>';
  }
}


async function suggestPassword() {
  let url = "https://csumb.space/api/suggestedPassword.php?length=8";
  let box = document.querySelector("#passwordSug");
  box.textContent = "Loading...";
  try {
    let response = await fetch(url);
    let data = await response.json();
    box.textContent = data.password || "(no suggestion)";
  } catch (error) {
    box.textContent = "Suggestion failed!";
  }
}

async function checkUser() {
  let user = document.querySelector("#username").value.trim();
  let url = "https://csumb.space/api/usernamesAPI.php?username=" + user;
  let span = document.querySelector("#userSpan");
  span.textContent = "";
  span.style.color = "";

  if (user.length === 0) return;

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (data.available == false) {
      span.textContent = "Not available";
      span.style.color = "crimson";
    } else {
      span.textContent = "Available";
      span.style.color = "green";
    }
  } catch (error) {
    span.textContent = "Check failed";
    span.style.color = "crimson";
  }
}

function matchPasswords() {
  let p1 = document.querySelector("#password").value;
  let p2 = document.querySelector("#password2").value;
  let msg = document.querySelector("#pwMsg");
  msg.textContent = "";
  msg.style.color = "";
  if (p1.length === 0 && p2.length === 0) return;

  if (p1 === p2) {
    msg.textContent = "Passwords match";
    msg.style.color = "green";
  } else {
    msg.textContent = "Passwords do not match";
    msg.style.color = "crimson";
  }
}


function validateForm(e) {
  e.preventDefault();

  let problems = [];
  let u = document.querySelector("#username").value.trim();
  let p1 = document.querySelector("#password").value;
  let p2 = document.querySelector("#password2").value;

  if (u.length < 3) problems.push("Username must be at least 3 characters.");
  if (p1.length < 6) problems.push("Password must be at least 6 characters.");
  if (p1 !== p2) problems.push("Passwords must match.");

  if (problems.length) {
    alert(problems.join("\n"));
    return;
  }
  alert("Form passed basic validations!");
}
