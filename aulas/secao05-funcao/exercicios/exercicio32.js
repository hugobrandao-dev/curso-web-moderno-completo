/**
 * Construir um algoritmo que calcule a média aritmética dos valores 
 * de um vetor inteiros.
 */

const calcularMediaVetor = (vetor) => {
    let somatorio = 0
    let quantidadeValores = vetor.length
    let media = null
    for (let indice in vetor) {
        somatorio += vetor[indice]
    }
    media = (somatorio / quantidadeValores).toFixed(1)
    return media
}

const vetor = [10,6,4,3,7,1,0]

console.log(`A média de valores é ${calcularMediaVetor(vetor)}`)