/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button ayant l'id "myButton" du HTML.

var myButton = document.getElementById("myButton");

// ------ TODO 2 ------
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.

myButton.innerHTML = "N'importe quoi";


// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.

var paragraphs = document.getElementsByTagName("p");

// ------ TODO 4 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".

var blueParagraph = document.getElementsByClassName("blue");

function getElementsbyTagNameAndClassNameDoubleForLoop(tagName, className) {
    var withRightTag = document.getElementsByTagName(tagName);
    var withRightClass = document.getElementsByClassName(className);
    var result = [];
    for (var i = 0 ; i < withRightTag.length ; i++) {
        var el = withRightTag[i];
        for ( var j = 0 ; j < withRightClass.length; j++) {
            if (withRightClass[j] === el) {
                result.push(el);
            }
        }
    }
    return result;
}

function getElementsbyTagNameAndClassNameSingleForLoop(tagName, className) {
    var withRightTag = document.getElementsByTagName(tagName);
    var result = [];
    for (var i = 0 ; i < withRightTag.length ; i++) {
        var el = withRightTag[i];
        if (el.className === className) {
            result.push(el);
        }
    }
    return result;
}

function getElementsbyTagNameAndClassNameSimple(tagName, className) {
    return document.querySelector(tagName + "." + className);
}




// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".

var hideMe = document.getElementById("hideMe");


// ------ TODO 6 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.
hideMe.style.display = 'none';
