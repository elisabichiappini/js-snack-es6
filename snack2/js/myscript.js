/***************************************************************
JAVASCRIPT
****************************************************************/
'use strict';
// Snack 2
// - arrayTeams di oggetti teamFootball con key: {nome: "a scelta", puntiFatti: 0, falliSubiti: 0}.
// - per {puntiFatti: generoNumeroRandom; a falliSubiti: generoNumeroRandom}.
// - generare un nuovo arrayNomiFalliSubitiTeams con elementi nomi e falliSubiti (_usare destructuring_).
// - stampiamo arrayNomiFalliSubitiTeams tutto in console.

/* FUNCTIONS */
function teamFootball (array) {
    let details;

    array.forEach((element) => {
        // let puntiFatti = element['puntiFatti'];
        // puntiFatti = numeroRandom();
        // console.log(puntiFatti);
        // let falliSubiti = element['falliSubiti'];
        // falliSubiti = numeroRandom();
        // console.log(falliSubiti);
        element['puntiFatti'] = numeroRandom();
        element['falliSubiti'] = numeroRandom();
        const { team, falliSubiti } = element;
        console.log(element);
        console.log(team);
        console.log(falliSubiti);
        }
    )
    return details;
}


function numeroRandom() {
    return Math.floor(Math.random() * 10) + 1;
}

function nomIFalli (...myArgoments) {
    console.log(myArgoments);
}

/* OPERATIONS */

const arrayTeamsFootball = [
    {'team': 'Juventus',
    'puntiFatti': 0,
    'falliSubiti': 0
    },
    {'team': 'Inter',
    'puntiFatti': 0,
    'falliSubiti': 0
    },
    {'team': 'Milan',
    'puntiFatti': 0,
    'falliSubiti': 0
    },
]

const teamDetails = teamFootball(arrayTeamsFootball);

let teamPuntiFatti = arrayTeamsFootball.filter(teamFootball => team, puntiFatti)
console.log(teamPuntiFatti);