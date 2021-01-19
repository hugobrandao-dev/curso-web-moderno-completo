const fileSystem = require('fs')

const caminho = __dirname + "/arquivoExemplo.json"

// Leitura síncrona do arquivo
const meuArquivo = fileSystem.readFileSync(caminho, 'utf-8')
console.log(meuArquivo)

// Leitura assíncrona do arquivo
fileSystem.readFile(caminho, 'utf-8', (erro, objetoJSON) => {
    const arquivo = JSON.parse(objetoJSON)
    console.log(arquivo)
})

// Leitura do arquivo através de uma importação simples
const arquivo = require('./arquivoExemplo.json')
console.log(arquivo)

// Leitura do diretório desse arquivo (arquivo atual)
const caminhoAtual = __dirname
fileSystem.readdir(caminhoAtual, (erro, arquivos) => {
    console.log(arquivos)
})