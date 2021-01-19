let isAtivo = 1

/* 
    A presente de apenas uma "!" tenta converter o valor de uma variável de tipo qualquer para
    o tipo boolean, porém também inverterá o valor da mesma (CONVERTE E INVERTE), sendo
    assim, para pegarmos o valor booleano original que representa o valor da variável, podemos
    utilizar uma exclamação extra.
    OBS: O uso dessas exclamações não modifica o valor verdadeiro da variável.
*/

console.log(!!isAtivo)

console.log("-> Os verdadeiros:")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
// Aqui o valor de "false" é STRING (NÃO houve conversão do CONTEÚDO DA STRING).
console.log(!!"false")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("-> Os falsos:")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("-> Para finalizar:")
/*
    Caso haja algum valor verdadeiro (sua conversão resulte em verdadeiro), 
    neste caso o último, o JavaScript irá retorná-lo. Podemos utilizar quando
    temos um valor padrão para algo.
*/
console.log('' || null || 0 || 'Isso é verdadeiro')
console.log(!!('' || null || 0 || ' '))