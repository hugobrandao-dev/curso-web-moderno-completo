function gerarNumeroEntreIntervalo(min, max) {
    if (min > max)
        [min, max] = [max, min]

    return new Promise(resolve => {
        const fator = max - min + 1
        const valor = Math.floor(Math.random() * fator + min)
        resolve(valor)
    })
}

gerarNumeroEntreIntervalo(5, 10)
    .then(valor => valor * 10)
    .then(valorX10 => `O número gerado foi ${valorX10}.`)
    .then(console.log)