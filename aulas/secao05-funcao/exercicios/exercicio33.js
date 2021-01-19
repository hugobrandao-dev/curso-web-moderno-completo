function unirVetores(vetor1, vetor2, vetor3) {
    return vetor1.concat(vetor2).concat(vetor3)
}

const vetorString = ['Tobias', 'Josias', 'Thomas', 'John']
const vetorInteiro = [10,4,6,7]
const vetorDouble = [5.6,9.4,4.3,7.4]

console.log(unirVetores(vetorInteiro, vetorDouble, vetorString))