/**
 * Construa uma função que receberá duas String de tamanhos variados e 
 * que retornará True ou False caso todos os caracteres 
 * (independentemente de ser maiúsculo ou minúsculo) estejam contidos 
 * em ambas palavras.
 */

function verificarCaracteresComuns(string1, string2) {
    let primeiraString = string1.toLowerCase()
    let segundaString = string2.toLowerCase()
    let temCaracteresComuns = true
    for (let caracter of primeiraString) {
        if (segundaString.indexOf(caracter) === -1 && temCaracteresComuns) {
            temCaracteresComuns = !temCaracteresComuns
        }
    }
    return temCaracteresComuns
}

const string1 = 'Tobias'
const string2 = 'saiboS'

console.log(`Têm os mesmos caracteres: ${verificarCaracteresComuns(string1, string2)}`)