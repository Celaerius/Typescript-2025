// Exercice: Tuples 

// Crée une fonction qui accepte un tableau de tuples contenant un nom (string) et un âge (number).
// Stocker le typage du tuple dans un type alias nommé `Personne`.
type Personne = [string, number];

const tuples: Personne[] = [
    ["Alice", 30],
    ["Bob", 25],
    ["Charlie", 35],
];

// La fonction doit trier les tuples par âge croissant et retourner le tableau trié.
function trierParAge(tuples: Personne[]): Personne[] {
    return tuples.sort((a, b) => a[1] - b[1]);
}

const tuplesTries = trierParAge(tuples);

console.log(tuplesTries); // Output: [ [ 'Bob', 25 ], [ 'Alice', 30 ], [ 'Charlie', 35 ] ]