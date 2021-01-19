// A função retornará somente valores e indices pares

function separarSomentePares(valor, indice) {
    return (valor % 2 === 0 && indice % 2 === 0)
}

function vetorTotalmentePar(vetor) {
    let vetorTotalmentePar = vetor.filter(separarSomentePares)
    return vetorTotalmentePar
}

console.log(vetorTotalmentePar([1,2,3,4]))
console.log(vetorTotalmentePar([10,70,22,43]))