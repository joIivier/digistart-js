/* LES CONDITIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les conditions');

// ------ TODO 1 ------
// 1. Créer une variable color1 qui contient la valeur "rouge"

var color1 = "rouge";


// 2. Créer une variable color2 qui contient la valeur "green"

var color2 = "vert";


// 3. Ecrire une fonction prennant un argument et le comparant aux deux variables.
// En utilisant une condition (if) et des comparateurs (===, !==) :
// - si la variable est égale à "rouge", affichez "fraise" dans la console
// - si la variable est égale à "vert", affichez "pomme" dans la console

function printFruitOfColor(color) {
  if (color === "rouge") {
    console.log("fraise");
  } else if (color === "vert") {
    console.log("pomme");
  } else {
    console.log("Il n'y a pas de fruit de cette couleur.")
  }
}

printFruitOfColor("rouge")


// ------ TODO 2 ------
// Complétez l'exercice avancé 1 situé dans le dossier "exercice-avance-1"