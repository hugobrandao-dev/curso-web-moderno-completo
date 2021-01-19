function transformarObjetoParaArray(objeto) {
    let vetor = []
    for (let chave in objetoArray) {
        vetor.push([chave, objetoArray[chave]])
    }
    return vetor
}

const objetoArray = {
    nome: 'Maria',
    profissao: 'Desenvolvedora de software'
}

const meuVetor = transformarObjetoParaArray(objetoArray)

console.log(meuVetor)