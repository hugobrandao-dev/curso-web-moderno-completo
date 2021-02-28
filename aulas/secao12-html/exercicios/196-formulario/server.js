const express = require('express')
const app = express()

// Faz o tratamento de dados do formulário
const bp = require('body-parser')

// Faz o parse da URL encoded (?)
app.use(bp.urlencoded({ extended: true }))

app.post('/usuarios', (requisicao, resposta) => {

    /*
        Retornará um objeto chave/valor onde CHAVE=NAME e o 
        VALOR=VALUE dos elementos html do formulário;
    */
    console.log(requisicao.body)
    resposta.send('<h2>Submetido com sucesso!!</h2>')
})

// Escutará a porta
app.listen(3003)
