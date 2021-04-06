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

// uan variabile per le possibilità che ha il giocatore (N.B. no accenti nei nomi delle variabili)
var possibilita = numeroMassimo - numeroBombe;

// una variabile per la lista delle Bombe (array vuoto per il la prima parte)
var listaBombe = [];

// numeri consentiti di tentativi per il giocatore
var numeriConsentiti = [];

// variabile per la SCELTA DELL'UTENTE
var utente = 0;

// Genero le bombe ( fatti con 16 numeri casuali ma che sono Univoci però)
// meglio usare while 
while(listaBombe.length < numeroBombe){
  var bomba = numeroRandom(numeroMassimo); // prima inseriamo un numero es --> (34); poi è <-- da togliere poi il numero messo 
                                          // è mettiamo numeroRandom(con il NUMEROMASSIMO )
  // decisione --> ! come === false
  if(! listaBombe.includes(bomba)) {
   listaBombe.push(bomba);
  }
}
// questo è per creare una collezione di Array di numero Univoci

// per controllare
console.table("Liste bombe ", listaBombe);   // <-- lo vede male perchè c'è più di un paramentro .


/*****************************
 * Gioco 
 * Loop principale del gioco 
 * 
 * 
 * ( ora chiediamo all'untente i numeri "lo facciamo diventare interativo anche per lui");
 * - lui\lei mette un numero fino a 100, 'noi verifichiamo se è un numero delle bombe, oppure no';
 * - se non è nei numeri delle bombe lo mettiamo nei numeriConsentiti, poi così chiediamo un altro numero;
 * - controlliamo anche se è un numero che ci ha già inseritio prima, (così non può fare la ripetizione)
 * - (chiedi in numero, verifica, e verifica dell'iterazione);
 * - con due possibilità alla 'fine' (se ci arriva), o ha beccato la bomba, oppure ha finito le possibilità e così facendo ha vinto; 
 * ********************************************** */

/** perchè un while e non un for? N.B. --> perchè non abbiamo un numero prestabilito di volte per chiedere all'utente un numero
 dipende da se trova una bomba oppure no , quidni abbiamo bisogno di un loop che vada in modo più flessibile
 */

// desc. le condizioni, due componenti impo, 1- se siamo sotto il numero delle possibilità ( siamo sotto il nuemro delle posibilità? se si allora possimao entrare)
// 2 - la scelta attuale dell'utente --> e se si, la scelta non è una bomba

// come capire se siamo sotto il numero delle possibilità? num.Consentiti.length | su cosa basiamo il far? sul numero delle possibilità
// rapporto che diamo a questi due è? < perche devo andare fin che la lente non è uguale lui deve andare (se è = hai vinto il gioco) (includes -> per cercare al suo interno)

// Le due condizione per stare nel loop di gioco 1 vito ed esco, 2 ho preso perchè ho preso una bomba
while((numeriConsentiti.length < possibilità) && (! listaBombe.includes(utente)) ) {
  // scelta utente di inserimento, (sovrascriviamo la varibile dell'utente)
  utente = parseInt(prompt("Inserisci per favore un numero da 1 a " + numeroMassimo + '\nTentativi riusciti ' + numeriConsentiti.length + 'di ' + possibilità));


}
















/****************************************************************
 * Funzione utility
 ****************************************************************/
function nuemroRandom(max){
  return Math.floor(Math.random() * max ) + 1;
}
