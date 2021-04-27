//Script Tamagotchi

// Variable
var hungry = 1;
var joy = 5;
var energy = 10;

// Fonction
function eat() {
  if (hungry >= 0 && joy >= 0) {
    hungry -= 1;
    joy = joy - 1;
    energy += 2;
  } else {
    console.log("Impossible.");
  }
}

function play(faim, joie, energie) {
  if (energy >= 0 && hungry >= 0) {
    hungry += 1;
    joy += 1;
    energy -= 2;
  } else {
    console.log("Impossible.");
  }
}

function poop() {
  setInterval(function () {
    var relieve = document.getElementById("poop");
    relieve.style.display = "inline";
  }, 6000);
}
relieve.onload = poop();

function score() {
  elmHungry.innerText = hungry;
  elmJoy.innerText = joy;
  elmEnergy.innerText = energy;
}

//Règles de jeux
function rules() {
  if (joy < 0 || hungry > 5 || energy < 0) {
    const ban = document.createElement("div");
    ban.innerText = "DEAD";
    const status = document.getElementById("status");
    status.appendChild(ban);
  }
}

//Sélection des éléments
var game = document.getElementById("play");
var eating = document.getElementById("eat");
var elmHungry = document.getElementById("fm");
var elmJoy = document.getElementById("happy");
var elmEnergy = document.getElementById("eng");
var relieve = document.getElementById("poop");

//Jouer
game.addEventListener("click", function () {
  play();
  rules();
  score();
});

//Manger
eating.addEventListener("click", function (e) {
  eat();
  rules();
  score();
});

//Propreté
relieve.addEventListener("click", function () {
  relieve.style.display = "none";
});
