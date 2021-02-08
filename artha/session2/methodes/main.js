/* LES MÉTHODES */
console.log("Bienvenue dans la console javascript");
console.log("Vous êtes dans les exercices sur les méthodes");

// ------ TODO 1 ------
// TODO: ÉTAPE 1
// Écrire une variable du nom de votre choix, et de valeur de type String.

var a = "artha"


// TODO: ÉTAPE 2
// Afficher sa longueur dans la console grâce à la propriété "length".

console.log(a.length)


// ------ TODO 2 ------
// TODO: ÉTAPE 1
// Ajouter un espace au début ou à la fin de votre string.

a = " " + a



// TODO: ÉTAPE 2
// Afficher sa longueur dans la console, et observez la différence.

console.log(a.length)


// ------ TODO 3 ------
// TODO: ÉTAPE 1
// Écrire une nouvelle variable du nom de votre choix, et de valeur de type String.

var myStringB = "djoehana"


// TODO: ÉTAPE 2
// Afficher dans la console sa valeur en MAJUSCULES grâce à la méthode "toUpperCase".

console.log(myStringB.toUpperCase())


// ------ TODO 4 ------
// TODO: ÉTAPE 1
// Créer une fonction convertToUppercase qui prend en paramètre une chaîne
// de caractères et qui la renvoie en majuscule grâce à la méthode "toUpperCase".

function convertToUpperCase(str){
    return str.toUpperCase()


}



// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

console.log(convertToUpperCase("asura"))