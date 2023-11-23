
/***************************************************************
JAVASCRIPT
****************************************************************/
'use strict';
// Snack 2
// - arrayTeams di oggetti teamFootball con key: {nome: "a scelta", puntiFatti: 0, falliSubiti: 0}.
// - per {puntiFatti: generoNumeroRandom; a falliSubiti: generoNumeroRandom}.
// - generare un nuovo arrayNomiFalliSubitiTeams con elementi nomi e falliSubiti (_usare destructuring_).
// - stampiamo arrayNomiFalliSubitiTeams tutto in console.




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

//generazione punti e falli random
arrayTeamsFootball.forEach((element) => {
    element.falliSubiti = Math.floor(Math.random() * 10) + 1;
    element.puntiFatti = Math.floor(Math.random() * 10) + 1;
});

//nuovo array
const result = arrayTeamsFootball.map((arrayTeamsFootball) => {
    const { team, falliSubiti } = arrayTeamsFootball;
    return {
        team,
        falliSubiti
    }
});

console.log(result);