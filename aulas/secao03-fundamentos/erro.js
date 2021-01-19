function tratarErros(error) {
    throw {
        nomeErro: error.name,
        mensagemErro: error.message,
        data: new Date
    }
}

function imprimirNomeGritado(pessoa) {
    try {
        console.log(`${ pessoa.noe.toUpperCase() }!!`)
    } catch (error) {
        tratarErros(error)
    } finally {
        console.log("O processo terminou.")
    }
}

const pessoa = {
    nome: 'Hugo'
}
imprimirNomeGritado(pessoa)