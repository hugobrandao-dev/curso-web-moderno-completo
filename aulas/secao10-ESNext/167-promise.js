function gerarValorAleatorio(min, max, tempo) {
    if (min > max)
        [min, max] = [max, min]

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = (max - min + 1)
            const valor = Number.parseInt(Math.random() * fator + min)
            resolve(valor)
        }, tempo * 1000); // O valor em segundos é convertido para mili
    })
}

/*
    A função abaixo resultará em 4 valores que só serão mostrados quando todas as promises forem resolvidas.
*/
function gerarValoresAleatorios() {
    return Promise.all([
        gerarValorAleatorio(5, 10, 2),
        gerarValorAleatorio(10, 15, 4),
        gerarValorAleatorio(15, 20, 8),
        gerarValorAleatorio(20, 15, 10)
    ])
}

console.time('Tempo de execução da promise: ') // Inicia um temporizador

gerarValoresAleatorios()
    .then(console.log)
    /*
        A sentença abaixo para o temporizador, sendo que, a string que 
        vai dentro do método timeEnd() DEVE SER A MESMA STRING 
        presente no time(), neste caso 'promise'.
    */
    .then(() => console.timeEnd('Tempo de execução da promise: '))