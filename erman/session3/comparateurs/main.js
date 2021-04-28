 /* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin


var neighbourAge;
neighbourAge = 75;

// 2. Créer une variable myAge qui contient votre âge

var myAge;
myAge = 36;




// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".

console.log(neighbourAge >= myAge);
console.log(neighbourAge < myAge);
console.log((neighbourAge-39) === myAge);
console.log(neighbourAge !== myAge);
console.log(neighbourAge <= myAge);





// ------ TODO 2 ------
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

function showGreaterNumber (a,b) {
    if (a > b){
    console.log(a);
    }
    else {

    console.log(b)
    }
    
}



// 2. L'exécuter avec les paramètres de votre choix.

showGreaterNumber (20,21)


// ------ TODO 3 ------
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.

function isBetween1000And3000(number) {
if (1000 <= number && number <= 3000) {
console.log(true);
}
else {
    console.log (false);
}
}

isBetween1000And3000(500);
isBetween1000And3000(1500);
isBetween1000And3000(3500);


// 2. L'exécuter avec le paramètre de votre choix.
