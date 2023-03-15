/* Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

/* let total = 0
for (let i = 0; i < 10; i++) {
    total += Number(prompt('Insert a number'))
}
console.log(`The sum of all the inserted numbers is ${total}`) */

/* Snack 3 con While
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

let sum = 0
let j = 0
while (j < 10) {
    sum += Number(prompt('Insert a number'))
    j++
}
console.log(`The sum of all the inserted numbers is ${sum}`)