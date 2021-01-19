/**
 * Ler um vetor de números inteiros e imprimir quantos são pares
 * e quantos são ímpares.
 */

function contarParesImpares(numeros) {
    let quantidadeImpar = 0
    let quantidadePar = 0
    for (numero of numeros) {
        if (numero % 2 === 0) {
            quantidadePar++
        } else {
            quantidadeImpar++
        }
    }
    console.log(`Pares: ${quantidadePar}`)
    console.log(`Ímpares: ${quantidadeImpar}`)
}

contarParesImpares([10,5,7,0,1,3])