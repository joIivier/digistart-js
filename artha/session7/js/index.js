// Ouvrez index.html dans un navigateur.
// Au milieu, le bouton "GO" contient un évènement "onclick",
// qui exécute la fonction go() ci-dessous.

// Merci d'écrire vos lignes de code dans l'espace en dessous de chaque consigne.
var winner = null
var gameover = false
var redscore = 0
var yellowscore = 0
var winnerlist = []


function go() {





  // ---TODO--- 1
  // La page que nous voulons cacher a l'id "landing-page".
  // Ecrivez ci-dessous le code pour ajouter le style "display: none" à cet élément.

var landingPage = document.getElementById("landing-page");
landingPage.style.display = "none";


  // ---TODO--- 2
  // Celle que nous voulons afficher a l'id "game-page"
  // Ecrivez ci-dessous le code pour ajouter le style "display: flex" à cet élément.

var gamePage = document.getElementById("game-page");
gamePage.style.display = "flex";


  // ---TODO--- 3
  // Maintenant que la page de jeu s'est affichée,
  // il faut ajouter la classe "animation"
  // à l'élément ayant l'id "bipbip".
  // Cela permettra à bipbip de traverser l'écran avant que
  // les coyottes ne commencent à le poursuivre.

var bipbip = document.getElementById("bipbip");
bipbip.classList.add("animation");

}


// ---TODO--- 4
// Ajouter un "écouteur d'évènement" au document.
// L'évènement écouté est `keydown`, et la fonction exécutée est
// celle que nous nous allons créer juste après.

document.addEventListener("keydown", onKeyDown);




// Nous allons maintenant préparer la fonction `onKeyDown()`,
// qui sera exécutée par le TODO 4.
// Il s'agit de tout ce que nous voulons exécuter lorsqu'une
// touche du clavier a été appuyée.
function onKeyDown(event) {

  // ---TODO--- 5-A
  // Je commence par créer 2 variables `redCoyote` et
  // `yellowCoyote` qui vont récupérer les deux personnages.

  var redCoyote = document.getElementById("red");
  var yellowCoyote = document.getElementById("yellow");


  // Je crée 2 variables `leftRed` et `leftYellow`, qui sont
  // les positions des deux personnages.
  // Pour connaître leur position, j'utilise leur propriété CSS `left`.
  var leftRed = window.getComputedStyle(redCoyote).getPropertyValue("left");
  var leftYellow = window.getComputedStyle(yellowCoyote).getPropertyValue("left");

  console.log(leftRed)
  console.log(leftYellow)

  // ---TODO--- 5-B
  // Traduire ce pseudo code :

  // Si le keyCode de mon event vaut 39,
  // alors j'assigne la propriété "left" de "redCoyote" à leftRed + 10px.
  // Exemple: comment ajouter 10 px à 40px
  // var exampleInPx = "40px";
  // var exampleAsNumber = parseInt(exampleInPx);
  // var examplePlus10 = exampleAsNumber + 10;
  // var examplePlus10px = examplePlus10 + "px";

  var parsedleftRed = parseInt(leftRed);
  var parsedleftYellow = parseInt(leftYellow);

  var newleftRed = parsedleftRed;
  var newleftYellow = parsedleftYellow;

  if (event.keyCode === 39){

    newleftRed = parsedleftRed + 100;
    redCoyote.style.left = newleftRed + "px";



      // Sinon, si le keyCode de mon event vaut 90,
      // alors j'assigne la propriété "left" de "redCoyote" à leftRed + 10px.



  } else if(event.keyCode === 90) {
  newleftYellow = parsedleftYellow + 100;
  yellowCoyote.style.left = newleftYellow + "px";
} else if (event.keyCode === 37){
  newleftRed = parsedleftRed - 100;
  redCoyote.style.left = newleftRed + "px";
} else if(event.keyCode === 83) {
  newleftYellow = parsedleftYellow - 100;
  yellowCoyote.style.left = newleftYellow + "px";
}

  // ---TODO--- 5-C
  // Traduire ici ce pseudo code :

  // Si la valeur `left` du redCoyote (nous avons créé plus
  // haut la variable `leftRed`) est supérieure à la largeur de la fenêtre,
  // alors une alerte d'affiche avec le texte `Coyote rouge gagne !`

  // Sinon, si la valeur `left` du yellowCoyote (nous avons créé plus
  // haut la variable `leftYellow`) est supérieure à la largeur de la fenêtre,
  // alors une alerte d'affiche avec le texte `Coyote jaune gagne !`



  if (newleftRed > window.innerWidth && winner === null){
  alert("Coyote rouge gagne !");
  winner = "red";
  redscore++
  winnerlist.push("red")
  } else if (newleftYellow > window.innerWidth && winner === null){
      alert("Coyote jaune gagne !");
      winner = "yellow";
      yellowscore++
      winnerlist.push("yellow")
    } else if (newleftRed > window.innerWidth && winner !== null && winner !== "red" && gameover === false){
      alert("Coyote rouge a perdu !");
      gameover = true;
      end();
      } else if (newleftYellow > window.innerWidth && winner !== null && winner !== "yellow" && gameover === false){
          alert("Coyote jaune a perdu !");
          gameover = true;
          end();
        }

        function end() {

          var gamePage = document.getElementById("game-page");
          gamePage.style.display = "none";
          
          var landingPage = document.getElementById("landing-page");
          landingPage.style.display = "flex";
          
          
          yellowCoyote.style.left = "0px";
          redCoyote.style.left = "0px";
          winner = null
          gameover = false
          }


}

function score(){

alert("red :" + redscore + "yellow :" + yellowscore)

}

function winnerboard(){
var winnerString = " "
for (var i=0 ; i<winnerlist.length ; i++){

  winnerstring = winnerstring + "partie " + (i + 1) + " " + winnerlist[i] + " "; 

}
alert(winnerlist)

}

// ---BONUS---

// Changez les touches qui permettent aux personnes d'avancer,
// et modifier le texte explicatif dans `index.html`.

// Lorsque le perdant termine sa course, ajouter une alerte
// qui indique quel coyotte a perdu.

// Ecrire une fonction qui permet de recommencer une partie lorsque
// le premier coyotte arrive à la fin de la course.









