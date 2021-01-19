Array.prototype.forEach2 = function(funcao) {
    for (let indice = 0; indice < this.length; indice++) {
        funcao(this[indice], indice, this)
    }
}

function exibirAprovados(nome, indice, aprovados) {
    console.log(`${aprovados} tem ${nome} no índice ${indice}.`)
}


const aprovados = ['Tobias', 'Geremias', 'Josias', 'Dinora']

aprovados.forEach2(exibirAprovados)