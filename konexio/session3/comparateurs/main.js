/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------ 
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin

var neighbourAge = 40;


// 2. Créer une variable myAge qui contient votre âge

var myAge;
myAge = 33;


// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".

console.log(neighbourAge < myAge);
console.log(neighbourAge > myAge);
console.log(neighbourAge <= myAge);
console.log(neighbourAge >= myAge);
console.log(neighbourAge == myAge);
console.log(neighbourAge === myAge);
console.log(neighbourAge !== myAge);



// ------ TODO 2 ------ 
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

function showGreaterNumber(a, b) {
    if (a > b) {
        console.log(a);
    }
    if (a < b) {
        console.log(b);
    }
    if (a === b) {
        console.log("Ils sont égaux !!!")
    }
}

// 2. L'exécuter avec les paramètres de votre choix.

showGreaterNumber(1, 2);
showGreaterNumber(3, 2);
showGreaterNumber(3, 3);



// ------ TODO 3 ------ 
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.

function isBetween1000And3000(number) {
    return 1000<number && number<3000;
}

// 2. L'exécuter avec le paramètre de votre choix.

console.log(isBetween1000And3000(500));
console.log(isBetween1000And3000(1001));
console.log(isBetween1000And3000(4000));