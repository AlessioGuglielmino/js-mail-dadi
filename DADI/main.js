const maxRandom = 6;
const minRandom = 1;

const randomCpu = Math.floor(Math.random() * maxRandom) + minRandom;
console.log(randomCpu);
const randomPlayer = Math.floor(Math.random() * maxRandom) + minRandom;
console.log(randomPlayer);

// randomCpu = randomCpu > minRandom;
// randomCpu = randomCpu < maxRandom;

if (randomCpu > randomPlayer) {
  console.log("cpu winner");
} else if (randomPlayer > randomCpu) {
  console.log("Player winner");
} else {
  console.log("Draw");
}
