const aprovados = ['Josias', 'Jeremias', 'Tobias', 'Dinora']

const exibirAprovado = (nome, indice, funcao) => console.log(`Em ${funcao} temos ${nome} na ${indice + 1}ª posição.`)

aprovados.forEach(function(nome, indice, funcao) {
    console.log(`Em ${funcao} temos ${nome} na ${indice + 1}ª posição.`)
})