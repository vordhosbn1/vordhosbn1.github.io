
import { shuffle } from 'fast-shuffle'
const quotes = (await import("success-motivational-quotes")).default;

let letters = ["a", "b", "c", "d", "e"];
let shuffledLetters = shuffle(letters);

//note, alert does not work on Node.
// document.querySelector also does not work


console.log(letters);
console.log(shuffledLetters);


const displayQuote = () => {
    console.log(quotes.getTodaysQuote());
}



displayQuote();