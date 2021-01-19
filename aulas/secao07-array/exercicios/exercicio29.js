function buscarSegundoMaior(vetor) {
    for (let i in vetor) {
        for (let j in vetor) {
            if (vetor[i] > vetor[j]) {
                // let memoria = vetor[i]
                [vetor[i], vetor[j]] = [vetor[j], vetor[i]]
            }
        }
    }
    return vetor[1]
}

console.log(buscarSegundoMaior([12,16,1,5]))
console.log(buscarSegundoMaior([8,4,5,6]))