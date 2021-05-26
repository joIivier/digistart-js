/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button ayant l'id "myButton" du HTML.

var buttonElement = document.getElementById("myButton");


// ------ TODO 2 ------
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.

buttonElement.innerHTML = "Bye bye Konexio !";

// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.

var myParagraphs = document.getElementsByTagName("p");

// ------ TODO 4 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".

var myBlueParagraph = document.getElementsByClassName("blue")[0];

// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".

var myHiddenParagraph = document.getElementById("hideMe");


// ------ TODO 6 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.

myHiddenParagraph.style.display = "none";
