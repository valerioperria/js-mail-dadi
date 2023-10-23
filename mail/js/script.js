// mails ammesse
const mailAdmitted = ["pippo@mail.com", "pluto@mail.com", "paperino@mail.com", "topolino@mail.com"];

// allert richiesta mail utente
const userMail = prompt("inserisci la tua mail");
console.log(userMail);

// valore booleano
let accepted = false;

// ciclo for per il confronto
for (let i = 0; i < mailAdmitted.length; i++) {

    const curMail = mailAdmitted[i];

    if (curMail === userMail) {
        accepted = true;
    }
}

// accettazione
if (accepted) {

    console.log("Accepted");

} else {

    console.log("Not Accepted. Try again.")
}