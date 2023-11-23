/***************************************************************
JAVASCRIPT
****************************************************************/

'use strict';
// Bonus Snack 3
// - Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// - La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usare i metodi degli array foreach o filter.

function nuovoArray (array, aMin, bMax) {
    switch (true) {
        case !Array.isArray(array):
        case aMin > bMax:
        case aMin < 0 || bMax > array.length - 1:
         return -1;

        default: 
            return array.filter((element, index) => index >= aMin && index <= bMax);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

const result1 = nuovoArray(numbers, 2, 4);
const result2 = nuovoArray(numbers, 4, 7);
const result3 = nuovoArray(numbers, -5, 4);
const result4 = nuovoArray(numbers,1, 5);
const result5 = nuovoArray('pippo', 5, 2);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);