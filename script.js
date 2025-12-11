const bgMusic = document.getElementById("bg-music");
const bg2Music = document.getElementById("bg2-music");

// UNLOCK AUDIO ON FIRST CLICK ANYWHERE
document.addEventListener(
  () => {
    if (bgMusic.paused) {
      bgMusic.play().catch((err) => console.log("Audio blocked:", err));
    }
  },
  { once: true }
);

function noLight() {
  document.getElementById("break").classList.add("hidden-image");
  const breakSound = new Audio("Sounds/shattered-glass-sfx.wav");
  breakSound.play();
  console.log("Chandelier clicked!");
}

function blackJack() {
  console.log("Blackjack clicked!");
  const cardSound = new Audio("Sounds/a-card-deck-shuffle.wav");
  cardSound.play();
}

function whiskeyDrink() {
  console.log("Drink clicked!");
  const drinkSound = new Audio("Sounds/Gunshot_Sound.wav");
  drinkSound.play();
  document.getElementById("drink").src = "images/Bartender copy.png";
}

function disgusting() {
  console.log("Spit clicked!");
  const spitSound = new Audio("Sounds/Spit-sound.mp3");
  spitSound.play();
}
