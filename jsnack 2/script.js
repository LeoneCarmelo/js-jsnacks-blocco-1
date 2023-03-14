/* SNACK 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const firstWord = prompt('Insert a word')
const secondWord= prompt('Insert another word')

if(firstWord.length < secondWord.length) {
    console.log(`the shortest word is ${firstWord} and the longest is ${secondWord}`)  
} else if (secondWord.length < firstWord.length) {
    console.log(`the shortest word is ${secondWord} and the longest is ${firstWord}`)  
} else {
    console.log('the length of both words are the same')
}