document.addEventListener("DOMContentLoaded", function () {
  const players = [];
  const mimes = [
    "Imiter un kangourou",
    "Marcher comme un crabe",
    "Devenir une statue",
    "Agir comme un zombie",
    "Mimer un éléphant",
    "Jouer du violon",
    "Faire semblant de boxer",
    "Ramer dans une barque",
    "Imiter un lion en chasse",
    "Faire la girafe qui mange des feuilles",
    "Imiter un ours qui pêche",
    "Mimer un singe qui mange une banane",
    "Agir comme une poule qui picore",
    "Faire le flamant rose sur une patte",
    "Devenir un chameau dans le désert",
    "Faire du ski nautique",
    "Sauter à la corde",
    "Pratiquer l'escrime",
    "Jongler avec des balles",
    "Faire une pyramide humaine",
    "Se comporter comme un pingouin qui glisse",
    "Imiter un gorille qui bat sa poitrine",
    "Faire le cheval au galop",
    "Mimer une souris qui se faufile",
    "Agir comme un serpent qui rampe",
    "Faire le chien qui enterre un os",
    "Imiter un chat qui se lèche les pattes",
    "Jouer le magicien qui fait un tour",
    "Mimer un lapin qui mange une carotte",
    "Faire l'écureuil qui cache des noix",
    "Faire du trampoline",
    "Piloter un avion de chasse",
    "Naviguer en kayak",
    "Jouer une partie de tennis",
    "Pratiquer le karaté",
    "Faire de la plongée sous-marine",
    "Préparer un repas compliqué",
    "Résoudre un casse-tête",
    "Faire du deltaplane",
    "Se comporter comme un robot",
    "Réparer une voiture ancienne",
    "Devenir un caméléon qui change de couleur",
    "Imiter une grenouille qui saute",
    "Rouler en boule comme un hérisson",
    "Jouer aux fléchettes",
    "Sculpter une statue",
    "Soigner un animal comme un vétérinaire",
    "Planter des fleurs comme un jardinier",
    "Peindre un grand tableau",
    "Jouer avec un cerf-volant",
    "Pêcher à la ligne",
    "Faire du skateboard",
    "Marcher en équilibre sur une corde",
    "Construire une cabane dans un arbre",
    "Essayer de marcher sur les mains",
    "Conduire une voiture de course",
    "Jouer du saxophone",
    "Danser le tango",
    "Imiter un ours qui hiberne",
    "Faire un tour de magie",
    "Explorer comme un archéologue",
    "Sauter en parachute",
    "Se battre comme un gladiateur",
    "Mimer une personne âgée",
    "Faire une omelette",
    "Jouer au golf",
    "Faire de l'alpinisme",
    "Piloter un hélicoptère",
    "S'entraîner comme un astronaute",
    "Se préparer pour une soirée",
    "Jouer à la marelle",
    "Faire de la poterie",
    "Se perdre dans un labyrinthe",
    "Marcher avec des échasses",
    "Mimer un détective privé",
    "Réaliser un spectacle de marionnettes",
    "Jouer au cricket",
    "Faire de la sculpture sur glace",
    "S'habiller pour un bal masqué",
    "Effectuer une opération chirurgicale",
    "Faire du jet ski",
    "Mimer un chef d'orchestre",
    "Préparer des sushis",
    "Organiser une chasse au trésor",
    "Lire les nouvelles à la télé",
    "Devenir mime",
    "Essayer de dompter un lion",
    "Mimer un professeur en classe",
    "Réaliser un film",
    "Imiter un joueur de basketball",
    "Pratiquer le saut en longueur",
    "S'occuper d'un bébé",
    "Participer à une course de chevaux",
    "Faire de la gymnastique rythmique",
    "Jouer à la console de jeux",
    "Mettre en place un campement",
    "Effectuer une mission d'espionnage",
    "Faire du windsurf",
    "Être pris dans une tempête de sable",
    "Naviguer seul autour du monde",
    "Participer à une émission de télé-réalité",
    "Expérimenter avec des réactions chimiques",
    "Mimer un joueur de poker",
    "Jouer dans un orchestre symphonique",
    "Mimer un DJ en pleine action",
    "Préparer une pizza",
    "Faire de la randonnée en montagne",
    "Préparer un café",
    "Essayer de faire du breakdance",
    "Participer à un duel de cowboys",
    "Faire du roller",
    "Diriger un chantier de construction",
    "Participer à une bataille de boules de neige",
    "Essayer de lire un livre à l'envers",
    "Mimer une attaque de ninja",
    "Jouer aux échecs contre un ordinateur",
    "Faire de la luge",
    "Diriger une réunion d'affaires",
    "Mimer un espion",
    "Participer à un marathon",
    "Jouer dans un film d'horreur",
    "Effectuer un tour de magie compliqué",
    "Jouer au volley-ball",
    "Préparer un barbecue",
    "Faire une course de sacs",
    "Naviguer sur un radeau",
    "Effectuer un saut à l'élastique",
    "Décorer un gâteau",
    "Faire un discours politique",
    "Mimer un enfant qui joue",
    "Agir comme un touriste perdu",
    "Mimer un explorateur polaire",
    "Diriger une parade",
    "Jouer au billard",
    "Mimer un clown",
    "Essayer de s'évader d'une prison imaginaire",
    "Participer à une compétition de danse",
    "Faire du parapente",
    "Mimer quelqu'un qui court après un bus",
    "Préparer un cocktail",
    "Faire une sieste",
    "Jouer à la pétanque",
    "Mimer un pirate",
    "Diriger un orchestre",
    "Essayer de monter une tente",
    "Conduire un tracteur",
    "Mimer une personne qui fait du shopping",
    "Devenir un super héros",
    "Faire de la pêche sur glace",
    "Construire un château de sable",
    "Mimer un joueur de hockey",
    "Participer à une compétition de tir à l'arc",
    "Devenir une rock star sur scène",
    "Imiter un chef cuisinier",
    "Mimer un vendeur ambulant",
    "Réaliser un numéro de cirque",
    "Faire une promenade à vélo",
    "Jouer au baseball",
    "Faire du surf",
    "Se préparer pour un examen",
    "Participer à une émission de cuisine",
    "Mimer un entraîneur sportif",
    "Jouer du tambour",
    "Faire du ski",
    "Effectuer une danse folklorique",
    "Faire un numéro de jonglage",
    "Se faire passer pour un agent secret",
    "Mimer un catcheur",
    "Effectuer une opération de sauvetage",
    "Réaliser une œuvre d'art",
    "Faire une bataille de danse",
    "Mimer un agent de la circulation",
    "Devenir un photographe en safari",
  ];
  let currentPlayerIndex = 0;
  let gameActive = false;
  let timerId;
  let pointsToWin = 10; // Nombre de points pour gagner, modifiable par l'utilisateur

  function addPlayer() {
    const playerName = `Joueur ${players.length + 1}`;
    const player = {
      name: playerName,
      score: 0,
    };
    players.push(player);
    updatePlayersDisplay();
    document.getElementById("startGame").style.display = "block";
    document.getElementById("resetGame").style.display = "block";
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

  document.getElementById("addPlayer").addEventListener("click", addPlayer);
  document.getElementById("startGame").addEventListener("click", startGame);
  document.getElementById("resetGame").addEventListener("click", resetGame);
  document.getElementById("foundMime").addEventListener("click", mimeGuessed);
  document
    .getElementById("notFoundMime")
    .addEventListener("click", mimeNotGuessed);

  function startGame() {
    gameActive = true;
    document.getElementById("gameArea").style.display = "block";
    startTurn();
  }

  function resetGame() {
    clearInterval(timerId);
    gameActive = false;
    currentPlayerIndex = 0;
    players.forEach((player) => (player.score = 0));
    updatePlayersDisplay();
    document.getElementById("timer").textContent = "30"; // Reset timer display
    document.getElementById("gameArea").style.display = "none";
    alert("Le jeu a été réinitialisé.");
  }

  function startTurn() {
    if (currentPlayerIndex >= players.length) {
      currentPlayerIndex = 0;
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
    startTimer();
    currentPlayerIndex++;
  }

  function startTimer() {
    let timeLeft = 30;
    const timerElement = document.getElementById("timer");
    timerElement.textContent = timeLeft;
    timerId = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerId);
        timerElement.textContent = "Temps écoulé!";
        playSound();
      }
    }, 1000);
  }

  function playSound() {
    const sound = document.getElementById("endSound");
    sound.play().catch((e) => console.log("Erreur de lecture du son : ", e));
  }

  function mimeGuessed() {
    if (!gameActive) return;
    clearInterval(timerId);
    const playerIndex = currentPlayerIndex % players.length;
    players[playerIndex].score++;
    if (players[playerIndex].score >= pointsToWin) {
      alert(`${players[playerIndex].name} a gagné la partie !`);
      gameActive = false; // Arrêter le jeu
      return;
    }
    updatePlayersDisplay();
    startTurn();
  }

  function mimeNotGuessed() {
    if (!gameActive) return;
    clearInterval(timerId);
    startTurn();
  }

  window.setPointsToWin = function (points) {
    pointsToWin = points;
  };
});
