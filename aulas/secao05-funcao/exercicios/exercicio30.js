function verificarMaiorMenorValor(vetor) {
    let maiorValor = null
    let menorValor = null
    if (vetor.length > 0) {
        maiorValor = vetor[0]
        menorValor = vetor[0]
    }

    for (indice in vetor) {
        if (vetor[indice] > maiorValor) {
            maiorValor = vetor[indice]
        } else if (vetor[indice] < menorValor) {
            menorValor = vetor[indice]
        }
    }

    return {maiorValor, menorValor}
}

const vetor = [16,8,4,6,2,7,5]
const { maiorValor: maior, menorValor: menor} = verificarMaiorMenorValor(vetor)

console.log(maior, menor)