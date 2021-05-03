/* LES OPERATEURS LOGIQUES */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les opérateurs logiques');

// ------ TODO 1 ------
// Écrire le code pour obtenir la valeur booléenne des cas suivants:
// 1. faux ou faux
console.log(3>9 || 7>17);

// 2. vrai et vrai

console.log(4>0 && 6===6);

// 3. pas faux

console.log( !4===2);

// 4. pas pas vrai

console.log(!5===5);

// 5. pas pas faux

console.log(!6==8);


// ------ TODO 2 ------
// 1. Créer une variable var1 qui contient un booléen (true ou false).

var var1 = (3>6);
console.log(var1);


// 2. Créer une variable var2 qui contient la valeur inverse de var1 (opérateur PAS).


var var2 = (1>2);
console.log(var2);

// 3. Afficher dans la console l'opération logique var1 ET var2 et vérifier que le résultat
// affiché est bien égal à false.

console.log(var1===var2);



// ------ TODO 3 ------
// Écrire le code pour afficher les valeurs booléennes avec la fonction Boolean() pour:
console.log("todo 2") ;
// 1. "a"
console.log(Boolean ("a"));



// 2. ""

console.log(Boolean (""));

// 3. 1
console.log(Boolean(1));


// 4. 0
console.log(Boolean(0));


// 5. null
console.log(Boolean(null));


