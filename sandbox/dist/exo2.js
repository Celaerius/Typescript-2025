"use strict";
// Exercice: Tuples 
const tuples = [
    ["Alice", 30],
    ["Bob", 25],
    ["Charlie", 35],
];
// La fonction doit trier les tuples par âge croissant et retourner le tableau trié.
function trierParAge(tuples) {
    return tuples.sort((a, b) => a[1] - b[1]);
}
const tuplesTries = trierParAge(tuples);
console.log(tuplesTries); // Output: [ [ 'Bob', 25 ], [ 'Alice', 30 ], [ 'Charlie', 35 ] ]
