/* LES TYPES */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les types');

// ------ TODO 1 ------ 
// TODO: ÉTAPE 1
// Écrire 4 variables, 1 en dessous de chaque ligne avec leurs valeurs :
// - une variable qui s'appelle firstName de type string qui contient votre prénom

var firstName;
firstName ="Erman";



// TODO: ÉTAPE 2
// - une variable qui s'appelle age de type number qui contient votre age
var age;
age = 36;



// TODO: ÉTAPE 3
// - une variable qui s'appelle likeFootball de type boolean qui indique si vous aimez le football ou non
var likeFootball;
likeFootball = false;


// TODO: ÉTAPE 4
// - une variable qui s'appelle otherStuff de valeur null
var otherStuff;
otherStuff = null;




// ------ TODO 2 ------ 
// TODO: ÉTAPE 1
// Afficher dans la console la valeur et le type de chaque variable.
// Pour chaque variable, suivre cet exemple de pseudo code :
// "mon prénom, {name}, est de type {type de name}"
console.log("mon prénom, ", firstName, " est de type", typeof firstName );
console.log("mon age, ", age, " est de type", typeof age );
console.log("aime-je foot?, ", likeFootball, ", est de type", typeof likeFootball );
console.log("les autres trucs, ", otherStuff,  " est de type", typeof otherStuff );











// ------ TODO 3 ------ 
// TODO: ÉTAPE 1
// Créer une variable appellée myNumber et lui attribuer une valeur numérique (un nombre)

var myNumber;
myNumber = 150;




// TODO: ÉTAPE 2
// Afficher dans la console le type de myNumber.

console.log("le value de variable s'appelle myNumber est", myNumber,  "et le type de variable est", typeof myNumber );




// TODO: ÉTAPE 3
// Changer la valeur de myNumber à une string (une chaîne de caractères)

myNumber = "150";




// TODO: ÉTAPE 4
// Afficher dans la console le type de myNumber.
console.log("le value de variable s'appelle myNumber est", myNumber,  "et le type de variable est", typeof myNumber );





// ------ TODO 4 ------ 
// TODO: ÉTAPE 1
// Ecrire une 1ère variable qui contient la chaîne de caractères "10".

var firstVar;
firstVar = "10";
console.log("le value de variable s'appelle firstVar est", firstVar)



// TODO: ÉTAPE 2
// Ecrire une 2ème variable qui contient la chaîne de caractères "5".
var secondVar;
secondVar = "5";
console.log("le value de variable s'appelle secondVar est", secondVar)




// TODO: ÉTAPE 3
// Ecrire une 3ème variable qui contient la somme (c = a + b) de la 1ère et la 2ème variable.
var sumOfTwoVar;
sumOfTwoVar = firstVar + secondVar;




// TODO: ÉTAPE 4
// Afficher dans la console la valeur et le type de la 3ème variable.

console.log("le value de variable s'appelle sumOfTwoVar est", sumOfTwoVar,  "et le type de variable est", typeof sumOfTwoVar );




// TODO: ÉTAPE 5
// Que remarque-t-on ? Est-ce le type et le résultat attendu ? Pourquoi ?

console.log( "c'est le résultat que nous attendons, car nous avons assigné ces deux variables comme \"string\" en utilisant le guillemets. Si nous effaçons les guillemets de variables \"10\" et \"5\" de la valeur de sumOfTwo deviendra 15")



