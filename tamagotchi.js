//////// VARIABLE ///////
var hungry = 1;
var joy = 5;
var energy = 10;

//////// FONCTION ///////
function manger(){
    if (hungry >= 0 && joy >= 0 ) {
        hungry -= 1;
        joy = joy - 1;
        energy += 2;
    }
    else{
        console.log("Impossible.")
    }    
}

function jouer(faim,joie, energie){
    if(energy >= 0 && hungry >= 0 ){
        hungry +=  1;
        joy +=  1;
        energy -=  2;
    }
    else{
        console.log("Impossible.")
    }
}

function afficher(){
    elmHungry.innerText = hungry;
    elmJoy.innerText = joy;
    elmEnergy.innerText = energy;
}

////// regle /////

function regle(){
    if(joy < 0 || hungry > 5 || energy < 0){
        const ban = document.createElement('div');
     ban.innerText = "DEAD";
     const status = document.getElementById('status');
     status.appendChild(ban);
    }
}

//////// SELECTION ELEMENTS ///////
var game = document.getElementById("play");
var eating = document.getElementById("eat");

var elmHungry = document.getElementById("fm");
var elmJoy = document.getElementById("happy");
var elmEnergy = document.getElementById("eng");

/////////// JOUER////////////
game.addEventListener("click", function(){
    jouer();
    regle();
    afficher();    
});

/////////// MANGER////////////
eating.addEventListener("click", function(e){
    manger();
    regle();
    afficher();    
});


/////////// PROPRETÉE //////

function poop(){

    setInterval(function() {
    var sal = document.getElementById("poop");
    sal.style.display = "inline";
    }, 6000);
}

var sal = document.getElementById("poop");
sal.onload = poop();

sal.addEventListener("click", function(){
    sal.style.display = "none";
});



