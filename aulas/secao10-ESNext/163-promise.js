function esperarPor(tempoSegundos = 2000) {
    return new Promise(resolve => {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempoSegundos)
    })
}

/*
    Está apresentando um erro. Caso seja resolvido, editar o README
    também (05/02/2021)
*/
esperarPor() // Primeira execução. Somente essa aceita o parâmetro
    .then(esperarPor) // Segunda execução
    .then(esperarPor) // Terceira execução
