const somar = function(num1, num2) {
    return num1 + num2
}

const imprimirResultado = function(a, b, operacao = somar) {
    console.log(operacao(a, b))
}

imprimirResultado(8, 9)

/**
 * Embora a função abaixo tenha uma função como parâmetro e O QUE
 * ELA FAZ, quem decide O QUE FAZER COM ELA é a função
 * imprimirResultado.
 * O QUE ELA FAZ != O QUE FAZER COM ELA
 */
imprimirResultado(7, 6, function(a, b) {
    return a - b
})
imprimirResultado(4, 2, somar)
imprimirResultado(8, 2, function(a, b) {
    return a * b
})
imprimirResultado(9, 3, (x, y) => x / y)