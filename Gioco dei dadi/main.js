// Genera un numero casuale da 1 a 6 per il giocatore e per il computer
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 6) + 1;
}

// Calcola il punteggio del giocatore e del computer
const punteggioGiocatore = generaNumeroCasuale();
const punteggioComputer = generaNumeroCasuale();

// Stampa i punteggi
console.log("Il punteggio del giocatore è: " + punteggioGiocatore);
console.log("Il punteggio del computer è: " + punteggioComputer);

// Determina il vincitore
if (punteggioGiocatore > punteggioComputer) {
    console.log("Hai vinto!");
} else if (punteggioComputer > punteggioGiocatore) {
    console.log("Ha vinto il computer.");
} else {
    console.log("È un pareggio.");
}
