// Ouvrez index.html dans un navigateur.
// Au milieu, le bouton "GO" contient un évènement "onclick",
// qui exécute la fonction go() ci-dessous.
var winner = null;
var looser = null;

// Merci d'écrire vos lignes de code dans l'espace en dessous de chaque consigne.

function go() {
  // ---TODO--- 1
  // La page que nous voulons cacher a l'id "landing-page".
  // Ecrivez ci-dessous le code pour ajouter le style "display: none" à cet élément.
document.getElementById("landing-page").style.display ="none";



  // ---TODO--- 2
  // Celle que nous voulons afficher a l'id "game-page"
  // Ecrivez ci-dessous le code pour ajouter le style "display: flex" à cet élément.
document.getElementById("game-page").style.display="flex";



  // ---TODO--- 3
  // Maintenant que la page de jeu s'est affichée,
  // il faut ajouter la classe "animation"
  // à l'élément ayant l'id "bipbip".
  // Cela permettra à bipbip de traverser l'écran avant que
  // les coyottes ne commencent à le poursuivre.
document.getElementById("bipbip").className += "animation";


};


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
  var redCoyote = document.querySelector("#red",".coyotte");
  var yellowCoyote = document.querySelector("#yellow", ".coyotte");



  // Je crée 2 variables `leftRed` et `leftYellow`, qui sont
  // les positions des deux personnages.
  // Pour connaître leur positiion, j'utilise leur propriété CSS `left`.
  var leftRed = window.getComputedStyle(redCoyote).getPropertyValue("left");
  var leftYellow = window.getComputedStyle(yellowCoyote).getPropertyValue("left");



  // ---TODO--- 5-B
  // Traduire ce pseudo code :
 var redParse = parseInt(leftRed);
 var yellowParse = parseInt(leftYellow);
  // Si le keyCode de mon event vaut 39,
  // alors j'assigne la propriété "left" de "redCoyote" à leftRed + 10px.
  if    (event.keyCode === 65){
        leftRed = redParse + 10;
        redCoyote.style.left = leftRed + "px"
      }
  // Sinon, si le keyCode de mon event vaut 90,
  // alors j'assigne la propriété "left" de "redCoyote" à leftRed + 10px.
  else if (event.keyCode === 69){
          leftYellow = yellowParse + 10;
          yellowCoyote.style.left = leftYellow + "px"
      };



  // ---TODO--- 5-C
  // Traduire ici ce pseudo code :

  // Si la valeur `left` du redCoyote (nous avons créé plus
  // haut la variable `leftRed`) est supérieure à la largeur de la fenêtre,
  // alors une alerte d'affiche avec le texte `Coyote rouge gagne !`
  if (leftRed > window.innerWidth){alert("Coyote rouge gagne !")}
  // Sinon, si la valeur `left` du yellowCoyote (nous avons créé plus
  // haut la variable `leftYellow`) est supérieure à la largeur de la fenêtre,
  // alors une alerte d'affiche avec le texte `Coyote jaune gagne !`
  else if(leftYellow > window.innerWidth){alert("coyote jaune gagne !")};



};



// ---BONUS---

// Changez les touches qui permettent aux personnes d'avancer,
// et modifier le texte explicatif dans `index.html`.

// Lorsque le perdant termine sa course, ajouter une alerte
// qui indique quel coyotte a perdu.
winner = onKeyDown(event);


// Ecrire une fonction qui permet de recommencer une partie lorsque
// le premier coyotte arrive à la fin de la course.


// joueur 1 si haut  (38) puis bas (40), il avance de 100px
// joueur 2 si q (81)puis d (68), il avance de 100px

