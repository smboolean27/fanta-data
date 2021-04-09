/*
  Partiamo analizzando il famoso "listone" del Fantacalcio!
  Lista che contiene tutti i calciatori della Serie A con tutte le statistiche (presenze, gol, ammonizioni ecc..) per ogni singolo giocatore
  Fonte: https://www.fantacalcio.it/quotazioni-fantacalcio
*/

/*
  Costruiamo un oggetto JS che rappresenti un calciatore con tutte le sue info
*/

const calciatore = {
  nome: "Fabio",
  cognome: "Quagliarella",
  squadra: "Sampdoria",
  ruolo: "Attaccante",
  statistiche: {
    media: 7,
    presenze: 24,
    ammonizioni: 1,
    espulsioni: 0,
    assist: 0,
    golFatti: 9,
    rigoriSegnati: 1,
    rigoriSbagliati: 1,
    golSubiti: 0,
    rigoriParati: 0
  }
};

/*
  Utilizziamo il ciclo for in per stampare tutte le statistiche (chiave e valore) del nostro Fabio Quagliarella
*/

for (var key in calciatore.statistiche) {
  console.log(key, calciatore.statistiche[key]);
}

/*
  Potremmo definire un oggetto di oggetti ruoli che contiene maggiori informazioni per ogni singolo ruolo
*/

const ruoli = {
  pt: {
    nome: "Portiere",
    descrizione: "Quello che para!"
  },
  de: {
    nome: "Difensore",
    descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  cc: {
    nome: "Centrocampista",
    descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  at: {
    nome: "Attaccante",
    descrizione: "Quello che fa gol!",
  }
};
// Stampiamo la descrizione del ruolo portiere
console.log("descrizione del ruolo portiere:", ruoli.pt.descrizione);
// Stampiamo tutto l'oggetto ruoli
console.log("oggetto ruoli:", ruoli);

// Creo la mia rosa di giocatori!
const calciatori = [
  {
    nome: "Fabio",
    cognome: "Quagliarella",
    squadra: "Sampdoria",
    ruolo: 'at', // col valore at creaiamo una sorta di collegamento/referenza con la proprieta' "at" dell'oggetto ruoli :)
    statistiche: {
      media: 7,
      presenze: 24,
      ammonizioni: 1,
      espulsioni: 0,
      assist: 0,
      golFatti: 9,
      rigoriSegnati: 1,
      rigoriSbagliati: 1,
      golSubiti: 0,
      rigoriParati: 0
    }
  },
  {
    nome: "Cristiano",
    cognome: "Ronaldo",
    squadra: "Juventus",
    ruolo: 'at',
    statistiche: {
      media: 7,
      presenze: 24,
      ammonizioni: 1,
      espulsioni: 0,
      assist: 0,
      golFatti: 9,
      rigoriSegnati: 1,
      rigoriSbagliati: 1,
      golSubiti: 0,
      rigoriParati: 0
    },
  },
  {
    nome: "Gigio",
    cognome: "Donnarumma",
    squadra: "Milan",
    ruolo: 'pt',
    statistiche: {
      media: 7,
      presenze: 24,
      ammonizioni: 1,
      espulsioni: 0,
      assist: 0,
      golFatti: 0,
      rigoriSegnati: 0,
      rigoriSbagliati: 0,
      golSubiti: 30,
      rigoriParati: 1
    }
  }
];

// Stampiamo alcune informazioni del primo calciatore
console.log("info primo calciatore:", calciatori[0].nome, calciatori[0].cognome, calciatori[0].ruolo);
// Stampiamo la descrizione del ruolo in base al ruolo del primo calciatore
console.log("descrizione del ruolo del primo calciatore:", ruoli[calciatori[0].ruolo].descrizione);

// Creo un array di soli attaccanti
const attaccanti = calciatori.filter((calciatore) => {
  return calciatore.ruolo == "at";
});
console.log("tutti gli attaccanti:", attaccanti);

// Creo un array di soli giocatori della Samp
const calciatoriSampdoria = calciatori.filter((calciatore) => {
  return calciatore.squadra == "Sampdoria";
});
console.log("tutti i calciatori della Samp:",calciatoriSampdoria);
