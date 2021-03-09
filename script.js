// Movie Quote Generator

const randomize = arr => {
    let randomNum = Math.floor(Math.random()*(arr.length));
    return arr[randomNum];
};
const update = () => {
//Characters
const characterArray = [
    "Galadriel",
    "Arwen",
    "Gandalf",
    "Sam",
    "Hagrid",
    "Dumbledore",
    "Harry",
    "Luna",
    "Ned",
    "Ygritte",
    "Tywin",
    "Cersei",
    "Tyrion"
];
let randomCharacter1 = randomize(characterArray);
let randomCharacter2 = randomize(characterArray);

//Quotes 
const quoteArray = [
    "For the time will soon come when Hobbits will shape the fortunes of all.",
    "I would rather share one lifetime with you than face all the Ages of this world alone.",
    "You shall not pass!",
    `That there’s some good in this world, Mr. ${randomCharacter2}… and it’s worth fighting for.`,
    `Yer a wizard ${randomCharacter2}.`,
    `It is our choices, ${randomCharacter2}, that show what we truly are, far more than our abilities.`,
    "I solemnly swear I am up to no good.",
    "You’re just as sane as I am.",
    "Winter is coming.",
    `You know nothing, ${randomCharacter2} Snow.`,
    "A lion doesn't concern himself with the opinions of sheep.",
    "When you play the game of thrones, you win or you die",
    "Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you."
];

let randomQuote = randomize(quoteArray);

//Movies / TV series
const movieArray = [
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Lord of the Rings: The Two Towers",
    "The Lord of the Rings: Return of the King",
    "Harry Potter and the Philosophers Stone",
    "Harry Potter and the Chamber of Secrets",
    "Harry Potter and the Prizoner of Azkaban",
    "Harry Potter and the Order of the Phoenix",
    "A Game of Thrones (TV Series)"
];

let randomMovie= randomize(movieArray);

//insert into HTML

document.getElementById("quote").innerHTML = '"' + randomQuote + '"';
document.getElementById("character").innerHTML = "-" + randomCharacter1;
document.getElementById("movie").innerHTML= randomMovie;

//The below is for running only in JavaScript. I will however integrate this in HTML to make it look pretty
let output = `"${randomQuote}" \n \n -${randomCharacter1} \n ${randomMovie}`;

console.log(output)};

document.getElementById("myButton").addEventListener("click", update);






