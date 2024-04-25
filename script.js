const players = [];
let currentPlayerIndex = 0;
const mimes = [
  "Nager",
  "Courir",
  "Sauter",
  "Voler (comme un oiseau)",
  "Manger",
  "Boire",
  "Dormir",
  "Rire",
  "Pleurer",
  "Chanter",
  "Jouer de la guitare",
  "Conduire",
  "Pêcher",
  "Jouer au football",
  "Faire du vélo",
  "Jardiner",
  "Peindre",
  "Lire",
  "Écrire",
  "Cuisiner",
  "Faire de la magie",
  "Jouer aux échecs",
  "Escalader",
  "Faire du yoga",
  "Méditer",
  "Regarder la télévision",
  "Prendre une photo",
  "Applaudir",
  "Gratter",
  "Taper à la machine",
  "Soulever des poids",
  "Faire du jogging",
  "Se brosser les dents",
  "Se coiffer",
  "Se laver les mains",
  "Marcher le chien",
  "Réparer quelque chose",
  "Danser",
  "Tricoter",
  "Surfer sur Internet",
  "Faire du skateboard",
  "Jouer du piano",
  "Siffler",
  "Chevaucher un cheval",
  "Faire des bulles de savon",
  "Ramasser des feuilles",
  "Lancer un frisbee",
  "Jouer à la marelle",
  "Attraper un papillon",
  "Faire des pompes",
];
let gameActive = false;

function addPlayer() {
  const playerName = `Joueur ${players.length + 1}`;
  const player = {
    name: playerName,
    score: 0,
  };
  players.push(player);
  updatePlayersDisplay();
  document.getElementById("startGame").style.display = "block";
}

function updatePlayersDisplay() {
  const playersDiv = document.getElementById("players");
  playersDiv.innerHTML = "";
  players.forEach((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.className = "player";
    playerDiv.textContent = `${player.name} : ${player.score} points`;
    playersDiv.appendChild(playerDiv);
  });
}

function startGame() {
  gameActive = true;
  document.getElementById("gameArea").style.display = "block";
  startTurn();
}

function startTurn() {
  if (currentPlayerIndex >= players.length) {
    currentPlayerIndex = 0; // Reset pour un nouveau tour
  }
  const currentPlayer = players[currentPlayerIndex];
  const randomIndex = Math.floor(Math.random() * mimes.length);
  const mime = mimes[randomIndex];
  document.getElementById(
    "currentMime"
  ).textContent = `Mime à deviner: ${mime}`;
  document.getElementById(
    "turnInfo"
  ).textContent = `C'est au tour de ${currentPlayer.name} de mimer!`;
  currentPlayerIndex++;
}

function mimeGuessed() {
  if (!gameActive) return;
  players[currentPlayerIndex % players.length].score++; // Seul le devineur gagne un point
  updatePlayersDisplay();
  startTurn();
}

function mimeNotGuessed() {
  if (!gameActive) return;
  startTurn(); // Pas de points attribués
}

document.getElementById("addPlayer").addEventListener("click", addPlayer);
document.getElementById("startGame").addEventListener("click", startGame);
document.getElementById("foundMime").addEventListener("click", mimeGuessed);
document
  .getElementById("notFoundMime")
  .addEventListener("click", mimeNotGuessed);
