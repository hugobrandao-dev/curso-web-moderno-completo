const multiplicarValorMaior = (valor, multiplicador) => valor * multiplicador
function multiplicarValor(vetor, multiplicador) {
    for (let indice in vetor) {
        vetor[indice] = vetor[indice] > 5 ? multiplicarValorMaior(vetor[indice], multiplicador) : vetor[indice] * multiplicador
    }

    return vetor
}

let vetor = [3,4,7,2,1]

console.log(multiplicarValor(vetor, 3))