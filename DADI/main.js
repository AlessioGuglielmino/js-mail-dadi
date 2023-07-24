// CREO COSTANTI PER IL RANGE MASSIMO DEI NUMERI GENERATI
const maxRandom = 6;
const minRandom = 1;

// const playerWin = "il player è il vincitore";
// const cpuWin = "la CPU è il vincitore";

const playerNumber = document.getElementById("player-number");
const cpuNumber = document.getElementById("cpu-number");
const result = document.getElementById("result");
const sendButton = document.getElementById("send-button");

// GENERO NUMERI CASUALI DA 1/6
sendButton.addEventListener("click", function () {
  const randomCpu = Math.floor(Math.random() * maxRandom) + minRandom;
  const randomPlayer = Math.floor(Math.random() * maxRandom) + minRandom;

  playerNumber.innerHTML = "Numero Player: " + randomPlayer;
  cpuNumber.innerHTML = "Numero CPU: " + randomCpu;

  // IMPOSTO I RISULTATI

  if (randomCpu > randomPlayer) {
    result.innerHTML = "CPU Winner";
  } else if (randomPlayer > randomCpu) {
    result.innerHTML = "Player Winner";
  } else {
    result.innerHTML = "Draw";
  }
});
