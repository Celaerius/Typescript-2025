"use strict";
const nom = "Jean";
const age = 30;
let isConnected = true;
let giganombre = 1234567890123456789012345678901234567890n;
let variableUndifiened = undefined;
let variableNull = null;
let maDate = new Date();
let variable = 42;
variable = variable || 42;
let b = "undefined";
let a = 0;
// attention cette ligne génère une erreur de type car b peut être une string donc pas compatible avec le type number de a
// a = b || 42;
let valeur;
// attention: pas possible car string et number n'ont pas toISOString() !
// valeur.toISOString();
if (typeof valeur === "string") {
    console.log(valeur.repeat(3));
}
if (valeur instanceof Date) {
    console.log(valeur.toISOString());
}
//tableau de nombres
let nombres = [1, 2, 3, 4, 5];
for (let nombre of nombres) {
    console.log(nombre);
}
//tableau de chaines de caractères
let chaines = ["un", "deux", "trois", "quatre"];
for (let chaine of chaines) {
    console.log(chaine);
}
// tableau mixte
let tableau = [1, "deux", 3, "quatre"];
for (let element of tableau) {
    console.log(element);
}
// matrice (tableau de tableaux)
let matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
//syntaxe alternative pour les tableaux
//let matriceAlt: Array<Array<number>> = [
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9],
//];
let maFonction = (a) => {
    console.log("Ceci est une fonction", a);
};
maFonction(42);
function monAutreFonction() {
}
//print? est un paramètre optionnel
function additionner(a, b = 10, print) {
    if (print) {
        console.log(`La somme de ${a} et ${b} est ${a + b}`);
    }
    return a + b;
}
additionner(5, 15, true);
function infiniteAdditionner(...param) {
    let a = 0;
    for (const parameter of param) {
        a += parameter;
    }
    return a;
}
const result = infiniteAdditionner(5, 10, 15, 20, 25);
console.log(`La somme est: ${result}`);
function notFinishedSubstract(message, ...param) {
}
console.log(`Bonjour, ${nom}. Vous avez ${age} ans.`);
