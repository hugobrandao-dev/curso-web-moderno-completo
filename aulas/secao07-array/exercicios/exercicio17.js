function somarValoresVetor(vetor) {
    let somatorio = vetor.reduce(function(acumulador, proximo){
        return acumulador + proximo
    })
    return somatorio
}

const total = somarValoresVetor([10,10,10])
const total2 = somarValoresVetor([15, 15, 15, 15])

console.log(total)
console.log(total2)