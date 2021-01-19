const porta = 3003

const express = require('express')
const app = new express()
/*
    Este get só será disparado em uma requisição (usar Postman).
    Os "next()" executam de forma sequencial no CÓDIGO.
*/
app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1')
    next()
})

// .use atende a todas as requisições, independentes da seção acessada.
app.use('/produtos', (req, res, next) => {
    console.log('O .use foi executado aqui.')
    next()
})

app.get('/produtos', (req, res, next) => {
    // A resposta será um objeto
    res.send({
        nome: 'Notebook',
        preco: 4321.56
    }) //  Há conversão para o JSON
})

/*
    Porta que será acessada para retornar o objeto de app.get
*/
app.listen(porta, () => {
    console.log(`Servidor está sendo executado na porta ${porta}.`)
})