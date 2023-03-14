/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const firstNumber = prompt('Inserisci il primo numero')
const secondNumber = prompt('inserisci il secondo numero')

if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else if (secondNumber > firstNumber) {
    console.log(secondNumber)
} else {
    console.log('Both numbers are the same')
}