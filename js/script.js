//console.log('CIAO MONDO');
/****************************************
 * Descrizione
- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, 
  se il numero è presente nella lista dei numeri generati la partita termina altrimenti 
  continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un numero “vietato” 
   o raggiunge il numero massimo possibile di numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio,
  cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il
 range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50

Consiglio:
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante
 * ***************************************
 */


// scompattiamo l'eserciizo in tre parti
// 1 - creazione delle bombe   

// varibile per il numero massimo (es: 100)
var numeroMassimo = 100;

// poi la variabile per il numero delle bombe (es: 16)
var numeroBombe = 16;


