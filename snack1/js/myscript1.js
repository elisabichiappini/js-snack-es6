/***************************************************************
JAVASCRIPT
****************************************************************/
'use strict';
// Snack 1
// - arrayItems di oggetti 'itemBiciDaCorsa';
// - ogni itemBiciDaCorsa con key: nome e peso, e rispettivi valori.
// - stampare in DOM itemBiciDaCorsa con key.peso minore; usare destructuring e template literal.


/* OPERATIONS */

//arrayItems
const arrayItems = [
    {
    'nome': 'Atala',
    'peso': 40
    },
    {
    'nome': 'Bianchi',
    'peso': 22
    },
    {
    'nome': 'Bottecchia',
    'peso': 20
    },
    {
    'nome': 'Carrera',
    'peso': 15
    },
    {
    'nome': 'Cinelli',
    'peso': 15
    }
];

let pesoMinimo = Number.MAX_VALUE;
console.log(pesoMinimo);

for (let i = 0; i < arrayItems.length; i++) {
    const bike = arrayItems[i];

    if (pesoMinimo = bike.peso) {
        pesoMinimo = bike.peso;
    }
}
const biciLeggera = arrayItems
.filter((bike) => {
    return bike.peso === pesoMinimo;
})
.map(
    (bike) => `la bici ${bike.nome} è tra le bici più leggere con un peso di ${bike.peso}`
)
.forEach((bike) => console.log(bike));
