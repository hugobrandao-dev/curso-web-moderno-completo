/**
 * Escrever um algoritmo que percorre um vetor de inteiros, conta 
 * quantos números negativos há nesse vetor e imprime a quantidade no 
 * console.
 */

function verificarNumerosNegativos(vetor) {
    let quantidadeNegativos = 0
    for (let indice in vetor) {
        if (vetor[indice] < 0) {
            quantidadeNegativos++
        }
    }
    return quantidadeNegativos
}

const vetor = [-10,5,-9,4,2,3,-1]

console.log(`Foram encotrados ${verificarNumerosNegativos(vetor)} valores negativos.`)