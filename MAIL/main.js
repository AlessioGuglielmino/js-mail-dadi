// ELENCO MAIL CON ACCESSO
const mailAccepted = [
  "master@mail.it",
  "financial@mail.it",
  "head@mail.it",
  "admin@mail.it",
];
// VARIABILE MESSAGGIO ESITO ACCESSO

let accesso = "Spiacenti, alla tua mail non è consentito l'accesso";

// PRENDO LA MAIL INSERITA DALL'UTENTE
const userMail = prompt("inserisci la tua mail per accedere");
// const userMail = document.getElementById("user-mail");
// const sendButton = document.getElementById("send-button");

// INIZIO IL CICLO PER VERIFICARE LA VALIDITA' DELLA MAIL

for (let i = 0; i < mailAccepted.length; i++)
  if (userMail == mailAccepted[i]) {
    accesso = "Benvenuto, accesso autorizzato";
  }
console.log(accesso);
