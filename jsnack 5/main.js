/* 
Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const oddList = []
for(let i = 0; i < 6; i++) {
    const number = Number(prompt('Insert a number'))
    if (number % 2 != 0) {
        oddList.push(number)
    }
}
console.log(oddList)