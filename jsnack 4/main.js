/* Snack 4 (sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const invitedList = [
    'firstOne',
    'secondOne',
    'thirdOne',
    'fourthOne'
]

/*  FOR LOOP */
const guest = prompt('Please insert your name')
isthere = false
for(let i = 0; i < invitedList.length; i++) {
    if (guest == invitedList[i]) {
        isthere = true
        console.log('Please come inside')
    }
}

/* WHILE LOOP */
const newPerson = prompt('Please insert your name')
flag = false
let j = 0;
while( j < invitedList.length) {
    if (newPerson == invitedList[j]) {
        flag = true
        console.log('Please come inside')
    }
    j++
}