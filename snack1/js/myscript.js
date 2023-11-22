/***************************************************************
JAVASCRIPT
****************************************************************/
'use strict';
// Snack 1
// - arrayItems di oggetti 'itemBiciDaCorsa';
// - ogni itemBiciDaCorsa con key: nome e peso, e rispettivi valori.
// - stampare in DOM itemBiciDaCorsa con key.peso minore; usare destructuring e template literal.

/* FUNCTIONS */

function getLightBike(array) {
    let bici = array[0];

    array.forEach((element) => {
        // console.log(element);
        if (element.peso < bici.peso ) {
            bici = element;
        }
    })

    return bici;
}

/* OPERATIONS */

//arrayItems
const arrayItems = [
    {
    'nome': 'Atala',
    'peso': 40
    },
    {
    'nome': 'Bianchi',
    'peso': 30
    },
    {
    'nome': 'Bottecchia',
    'peso': 20
    },
    {
    'nome': 'Carrera',
    'peso': 41
    },
    {
    'nome': 'Cinelli',
    'peso': 15
    }
];

const biciModelloLeggero = getLightBike(arrayItems);

//elemento DOM
const divDom = document.getElementById('bici-leggera');

console.log(biciModelloLeggero);
//elemento template litteral da innestare in DOM
divDom.innerHTML += `<div class="result">
                        <h2>Modello ${biciModelloLeggero.nome}</h2>
                        <span>Peso ${biciModelloLeggero.peso} grammi</span>
                    </div>`;