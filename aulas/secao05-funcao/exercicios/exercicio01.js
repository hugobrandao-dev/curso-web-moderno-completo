/**
 * Crie uma função que dado dois valores (passados como parâmetros)
 * mostre no console a soma, subtração, multiplicação e divisão desses 
 * valores.
*/

function operarValores(num1, num2) {
    return {
        soma: num1 + num2,
        subtracao: num1 - num2,
        multiplicacao: num1 * num2,
        divisao: num1 / num2
    }
}

console.log(operarValores(7,4))
