const nom: string = "Jean";
const age: number = 30;
let isConnected: boolean = true;
let giganombre: bigint = 1234567890123456789012345678901234567890n;
let variableUndifiened: undefined = undefined;
let variableNull: null = null;

let maDate = new Date();

let variable: string | number | undefined = 42;
variable = variable || 42;

let b: number | string = "undefined";
let a: number = 0;

// attention cette ligne génère une erreur de type car b peut être une string donc pas compatible avec le type number de a
// a = b || 42;

let valeur: string | number | Date;

// attention: pas possible car string et number n'ont pas toISOString() !
// valeur.toISOString();

if (typeof valeur === "string") {
    console.log(valeur.repeat(3));
}

if (valeur instanceof Date) {
    console.log(valeur.toISOString());
}

//tableau de nombres

let nombres: number[] = [1, 2, 3, 4, 5];

for (let nombre of nombres) {
    console.log(nombre);
}

//tableau de chaines de caractères

let chaines: string[] = ["un", "deux", "trois", "quatre"];

for (let chaine of chaines) {
    console.log(chaine);
}

// tableau mixte

let tableau: (string | number)[] = [1, "deux", 3, "quatre"];

for (let element of tableau) {
    console.log(element);
}

// matrice (tableau de tableaux)

let matrice: number[][] = [
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

let maFonction: (a: number) => void = (a) => {
    console.log("Ceci est une fonction", a);
};

maFonction(42);

function monAutreFonction(this: HTMLButtonElement) {

}

//print? est un paramètre optionnel
function additionner(a: number, b: number = 10, print?: boolean): number {
    if (print) {
        console.log(`La somme de ${a} et ${b} est ${a + b}`);
    }
    return a + b;
}

additionner(5, 15, true);

function infiniteAdditionner(...param: number[]): number {
    let a = 0;
    for (const parameter of param) {
        a += parameter;
    }
    return a;
}
const result = infiniteAdditionner(5, 10, 15, 20, 25);
console.log(`La somme est: ${result}`);

function notFinishedSubstract(message: string, ...param: number[]){

}


console.log(`Bonjour, ${nom}. Vous avez ${age} ans.`);