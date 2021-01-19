function separarObjeto(objeto, ...chavesRetiradas) {
    let chavesObjeto = Object.keys(objeto)
    let novoObjeto = {}
    for (let chave of chavesObjeto) {
        if (chavesRetiradas.indexOf(chave) === -1) {
            novoObjeto[chave] = objeto[chave]
        }
    }
    return novoObjeto
}

const objeto = {
    id: 20,
    nome: 'Hugo',
    idade: 21,
    altura: 1.89,
    peso: 80,
    descricao: 'Não preenchido'
}

const meuNovoObjeto = separarObjeto(objeto, 'idade', 'altura', 'peso')

console.log(meuNovoObjeto, Object.is(objeto, meuNovoObjeto))