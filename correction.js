
// les variables du tamagotchi 
var life = 10;
var food = 3; 
var joy = 2;


// fonctions 

// manger
function eat(){

    if(food >= 0 && joy >= 0  ){
        life += 2;
        food -= 1;
        joy -= 1;
    }
    else{
        console.log('impossible de modifier les valeurs ');
    }
    

}
// jouer
function play(){

    if(life >= 0 && food >= 0  ){
        life -= 2;
        food -= 1;
        joy += 1;
    }else{
        console.log('impossible de modifier les valeurs ');
    }
    

}

// verifier les régles
function checkRules(){
   if(joy < 0 || food > 5 || life < 0 ){
     const ban = document.createElement('div');
     ban.innerText = "Tu as fait mourrir le tamagotchi tu as un serieux probleme dressage !";
     const status = document.getElementById('status');
     status.appendChild(ban);
   }
}
// fonction de mise à jour du DOM
function updateDom(){

  spanEat.innerText = food;
  spanJoy.innerText = joy;
  spanLife.innerText = life;
}

// selection des éléments 
let bEat = document.getElementById('beat');
let bPlay = document.getElementById('bplay');

let spanEat = document.getElementById('food');
let spanJoy = document.getElementById('joy');
let spanLife = document.getElementById('life');


// Les ecouteurs d'evenement
bEat.addEventListener("click",function(e){

    eat(); 
    checkRules();
    updateDom();
    
    
});

bPlay.addEventListener("click",function(e){
    play(); 
    checkRules();
    updateDom();
 
});

updateDom();

