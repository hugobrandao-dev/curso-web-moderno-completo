/**
 * Faça um algoritmo que calcule o fatorial de um número.
 */

function calcularFatorial(numero) {
    let resultado = 1
    for (let num = numero; num >= 1; num--) {
        resultado *= num
    }

    return resultado
}

console.log(calcularFatorial(10))