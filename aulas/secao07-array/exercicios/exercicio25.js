
function buscarPalavrasSemelhantes(palavra, vetorPalavras) {
    let palavrasSemelhantes = vetorPalavras.filter(function(palavraVetor){
        return palavraVetor.indexOf(palavra) !== -1
    })
    return palavrasSemelhantes
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavrasSemelhantes('python', ['javascript', 'java', 'c++']))