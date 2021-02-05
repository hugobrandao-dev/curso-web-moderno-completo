/*
    A parte comentada desse arquivo foi feita pelo professor (versão do professor)
*/

const fileSystem = require('fs')
// const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        let caminhoFormatado = __dirname + String(caminho)
        let arquivo = fileSystem.readFileSync(caminhoFormatado, 'utf-8')
        /*
        LEITURA ASSÍNCRONA
        fileSystem.readFile(caminhoFormatado, (error, arquivo) => {
            resolve(arquivo.toString())
        })
        */
        console.log(typeof arquivo)
        resolve(arquivo)
    })
}

// let caminho = path.join(__dirname, 'dados.txt')

lerArquivo('/dados.txt')
    .then(console.log)
