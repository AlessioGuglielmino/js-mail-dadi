// ELENCO MAIL CON ACCESSO
const mailAccepted = [
  "master@mail.it",
  "financial@mail.it",
  "head@mail.it",
  "admin@mail.it",
];
// VARIABILE MESSAGGIO ESITO ACCESSO

// PRENDO LA MAIL INSERITA DALL'UTENTE
// const userMail = prompt("inserisci la tua mail per accedere");
const inputUserMail = document.getElementById("user-mail");
const sendButton = document.getElementById("send-button");
const messaggio = document.getElementById("messaggio");

sendButton.addEventListener("click", function () {
  const userMail = inputUserMail.value;
  let accesso = "Spiacenti, alla tua mail non è consentito l'accesso";
  // INIZIO IL CICLO PER VERIFICARE LA VALIDITA' DELLA MAIL

  for (let i = 0; i < mailAccepted.length; i++) {
    if (userMail == mailAccepted[i]) {
      accesso = "Benvenuto, accesso autorizzato";
    }
  }
  messaggio.innerHTML = accesso;
});
