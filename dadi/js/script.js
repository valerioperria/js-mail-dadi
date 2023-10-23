// generatore di numeri randomico per il computer
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(`Computer ${computerNumber}`);

// generatore di numeri randomico per l'utente
const myNumber = Math.floor(Math.random() * 6) + 1;
console.log(`Utente ${myNumber}`);

// confronto
if (computerNumber > myNumber) {

    console.log("YOU LOST");

} else if (computerNumber < myNumber) {

    console.log("YOU WON");

} else {

    console.log("DRAW");
}