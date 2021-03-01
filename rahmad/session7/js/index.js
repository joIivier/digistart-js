// Ouvrez index.html dans un navigateur.
// Au milieu, le bouton "GO" contient un évènement "onclick",
// qui exécute la fonction go() ci-dessous.

// Merci d'écrire vos lignes de code dans l'espace en dessous de chaque consigne.

var move = 100;

var players = [
  {
    id: 'red',
    keyId: 'key-1',
    key: 39,
    keyLabel: '&#8594;'
  },
  {
    id: 'yellow',
    keyId: 'key-2',
    key: 68,
    keyLabel: '"d"'
  }
];

// Représente le gagnant de la course. Tant qu'il n'y a pas de gagnant elle vaut null, sinon elle vaut "rouge" ou "jaune".
var winner = null;

function reset() {
  document.getElementById('landing-page').style.display = 'flex';
  document.getElementById('game-page').style.display = 'none';

  var redCoyote = document.getElementById('red');
  var yellowCoyote = document.getElementById('yellow');

  redCoyote.style.left = 0;
  yellowCoyote.style.left = 0;

  winner = null;
}

function go() {
  // ---TODO--- 1
  // La page que nous voulons cacher a l'id "landing-page".
  // Ecrivez ci-dessous le code pour ajouter le style "display: none" à cet élément.

  document.getElementById('landing-page').style.display = 'none';

  // ---TODO--- 2
  // Celle que nous voulons afficher a l'id "game-page"
  // Ecrivez ci-dessous le code pour ajouter le style "display: flex" à cet élément.

  document.getElementById('game-page').style.display = 'flex';


  // ---TODO--- 3
  // Maintenant que la page de jeu s'est affichée,
  // il faut ajouter la classe "animation"
  // à l'élément ayant l'id "bipbip".
  // Cela permettra à bipbip de traverser l'écran avant que
  // les coyottes ne commencent à le poursuivre.

  document.getElementById('bipbip').className = 'animation';

  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    document.getElementById(player.keyId).innerHTML = player.keyLabel;
  }
}


// ---TODO--- 4
// Ajouter un "écouteur d'évènement" au document.
// L'évènement écouté est `keydown`, et la fonction exécutée est
// celle que nous nous allons créer juste après.


document.addEventListener('keydown', onKeyDown);



// Nous allons maintenant préparer la fonction `onKeyDown()`,
// qui sera exécutée par le TODO 4.
// Il s'agit de tout ce que nous voulons exécuter lorsqu'une
// touche du clavier a été appuyée.
function onKeyDown(event) {

  // ---TODO--- 5-A
  // Je commence par créer 2 variables `redCoyote` et
  // `yellowCoyote` qui vont récupérer les deux personnages.

var redCoyote = document.getElementById('red');
var yellowCoyote = document.getElementById('yellow');


  // Je crée 2 variables `leftRed` et `leftYellow`, qui sont
  // les positions des deux personnages.
  // Pour connaître leur positiion, j'utilise leur propriété CSS `left`.
  var beforeLeftRed = window.getComputedStyle(redCoyote).getPropertyValue("left");
  var beforeLeftYellow = window
    .getComputedStyle(yellowCoyote)
    .getPropertyValue("left");

  // Exemple: comment ajouter 10 px à 40px
  // var exampleInPx = "40px";
  // var exampleAsNumber = parseInt(exampleInPx);
  // var examplePlus10 = exampleAsNumber + 10;
  // var examplePlus10px = examplePlus10 + "px";
  var leftRed = Number.parseInt(beforeLeftRed, 10);
  var leftYellow = Number.parseInt(beforeLeftYellow, 10);

  // ---TODO--- 5-B
  // Traduire ce pseudo code :

  // Si le keyCode de mon event vaut 39,
  // alors j'assigne la propriété "left" de "redCoyote" à leftRed + 10px.

  if (event.keyCode === players[0].key) {
    leftRed += move;
    redCoyote.style.left = leftRed + "px";
  }

  // Sinon, si le keyCode de mon event vaut 90,
  // alors j'assigne la propriété "left" de "redCoyote" à leftRed + 10px.

  if (event.keyCode === players[1].key) {
    leftYellow += move;
    yellowCoyote.style.left = leftYellow + "px";
  }

  // ---TODO--- 5-C
  // Traduire ici ce pseudo code :

  // Si la valeur `left` du redCoyote (nous avons créé plus
  // haut la variable `leftRed`) est supérieure à la largeur de la fenêtre,
  // alors une alerte d'affiche avec le texte `Coyote rouge gagne !`

  // Sinon, si la valeur `left` du yellowCoyote (nous avons créé plus
  // haut la variable `leftYellow`) est supérieure à la largeur de la fenêtre,
  // alors une alerte d'affiche avec le texte `Coyote jaune gagne !`

  if (leftRed > window.innerWidth && winner === null) {
    alert('Coyote rouge gagne !');
    winner = 'rouge';
  } else if (leftYellow > window.innerWidth && winner === null) {
    alert('Coyote jaune gagne !');
    winner = 'jaune';
  } else if (leftRed > window.innerWidth && winner !== null && winner !== 'rouge') {
    reset();
    alert('Coyote rouge perd !');
  } else if (leftYellow > window.innerWidth && winner !== null && winner !== 'jaune') {
    reset();
    alert('Coyote jaune perd !');
  }
}



// ---BONUS---

// Changez les touches qui permettent aux personnes d'avancer,
// et modifier le texte explicatif dans `index.html`.

// Lorsque le perdant termine sa course, ajouter une alerte
// qui indique quel coyotte a perdu.

// Ecrire une fonction qui permet de recommencer une partie lorsque
// le premier coyotte arrive à la fin de la course.
