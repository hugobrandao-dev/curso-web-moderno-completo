function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() > chanceErro) {
                resolve(valor)
            } else {
                reject('Ocorreu um erro!') // Esse "erro" é referente ao PARÂMETRO informado pelo usuário.
            }
        } catch (error) {
            reject(erro) // Esse erro é caso a FUNÇÃO dê problema.
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(valor => console.log(`Valor: ${valor}`))
    .then(
        valor => console.log(valor),
        /*
            error => { // Embora específico, será chamado em qualquer erro.
            console.log(`Erro específico: ${error}`)
            }
        */
    )
    .then(console.log('Quase fim!'))
    .catch(mensagemErro => console.log(`Erro geral: ${mensagemErro}`))
    .then(() => console.log('Fim!')) // Não há dados a partir do catch