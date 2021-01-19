const fileSystem = require('fs')

const meuObjeto = {
    nome: 'Tobias',
    idade: 38,
    altura: 1.89,
}

fileSystem.writeFile(__dirname + '/meuObjeto.json', JSON.stringify(meuObjeto), erro => {
    console.log(erro || 'Arquivo gerado com sucesso.')
})