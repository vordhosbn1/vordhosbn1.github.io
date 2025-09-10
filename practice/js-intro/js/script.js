document.querySelector("#dateButton").addEventListener("click", displayDate );
document.querySelector("#timeButton").addEventListener("click", displayTime );

let today = new Date();
let year = today.getFullYear;

    // console.log(today);
    // console.log(today);


let month = getMonthName(today.getMonth());
console.log(month);

function getMonthName(monthIndex){
    if (monthIndex === 8) {
        return("September!");
    } else {
        return("Not September!");
    }
}

// displayDate();
// displayTime();

function displayDate(){
    let dateElement = document.querySelector("#date");
    dateElement.textContent = today.toDateString();

}

function displayTime(){
    let timeElement = document.querySelector("#time");
    timeElement.textContent = today.toLocaleTimeString();
}

console.log(today);
console.dir(year);


