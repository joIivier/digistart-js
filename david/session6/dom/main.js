/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button ayant l'id "myButton" du HTML.
var buttonElement = document.getElementById("myButton");



// ------ TODO 2 ------
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.
buttonElement.innerHTML = "Bye Bye Konexio";



// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.

var myParagraphe = document.getElementsByTagName("p");



// ------ TODO 4 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".
var paragrapheBlue = document.getElementsByClassName("blue");
console.log(paragrapheBlue);


// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".
var paragrapheWhite = document.getElementById("hideMe");



// ------ TODO 6 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.


