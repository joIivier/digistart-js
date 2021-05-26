/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 3 sur les événements");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button du HTML.

var buttonElement = document.getElementById("myButton");



// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra modifier le texte du bouton par un nombre aléatoire.
// Pour obtenir un nombre aléatoire, utiliser Math.random().

// Si tu déclares la variable à l'extérieur de la fonction, le nombre ne sera calculé qu'une fois
// A la première lecture du fichier par l'ordinateur
// Si on veut changer le nombre à chaque fois, il faut créer le nombre dedans

//Merci beaucoup, J'ai compris maintenant! :)

// De rien :)

function pourTodo3() {
    var numeroRandom = Math.round(Math.random()*10);
    buttonElement.innerHTML = numeroRandom;
    
}




// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.

document.addEventListener("click", pourTodo3);


