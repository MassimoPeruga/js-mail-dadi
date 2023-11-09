'use strict';
// Lista degli invitati
const listaInvitati = ["pippo@esempio.com", "pluto@esempio.com", "paperino@esempio.com", "tizio@esempio.com", "caio@esempio.com", "sempronio@esempio.com"];

// Chiedi all'utente di inserire la sua email
const emailUtente = prompt("Inserisci la tua email:");

// Inizializza una variabile per tenere traccia dell'esito del controllo
let emailTrovata = false;

// Ciclo per verificare se l'email è nella lista degli invitati
for (let i = 0; i < listaInvitati.length; i++) {
    if (emailUtente === listaInvitati[i]) {
        emailTrovata = true;
        break; // Esce dal ciclo se l'email è stata trovata
    }
}

// Stampa il messaggio appropriato
if (emailTrovata) {
    console.log("Questa mail fa parte della lista.");
    alert("Questa mail fa parte della lista.");
} else {
    console.log("Questa mail non fa parte della lista.");
    alert("Questa mail non fa parte della lista.");
}
