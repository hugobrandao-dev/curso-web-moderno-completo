const primeiroArray = [10, 6, 7, 5]
let [n1, , n3, n4 = 0] = primeiroArray
console.log(n1, n3, n4)

const segundoArray = [[3, 5, 8, 1], [11, 14, 17, 12]]
/**
 * Dentro do meu array:
 * 1º - Será ignorado o primeiro array
 * 2º - Do segundo array pulará o primeiro e o segundo valor
 * 3º - Do segundo array pegará o terceiro e o quarto valor,
 * tendo o último o 0 como valor padrão (caso não haja valor).
 */
let [, [, , v3, v4 = 0]] = segundoArray
console.log(v3, v4)