/* Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */
let total = 0
for (let i = 0; i < 10; i++) {
    total += Number(prompt('Insert a number'))
}
console.log(total)