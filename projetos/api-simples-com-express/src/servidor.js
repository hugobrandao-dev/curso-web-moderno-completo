const porta = 3003

const express = require('express')
const app = new express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

/*
    Este get só será disparado em uma requisição (usar Postman).
    Os "next()" executam de forma sequencial no CÓDIGO.

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1')
    next()
})
*/

app.get('/produto/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produto', (req, res, next) => {
    res.send(bancoDeDados.setProduto({
        produto: req.body.produto,
        preco: req.body.preco
    }))
})

app.put('/produto/:id', (req, res, next) => {
    res.send(bancoDeDados.atualizarProduto({
        id: req.params.id,
        produto: req.body.produto,
        preco: req.body.preco
    }))
})

app.delete('/produto/:id', (req, res, next) => {
    res.send(bancoDeDados.excluirProduto(req.params.id))
})

/* .use atende a todas as requisições, independentes da seção acessada.

app.use('/produtos', (req, res, next) => {
    console.log('O .use foi executado aqui.')
    next()
})
*/

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

// Porta que será acessada para retornar o objeto de app.get
app.listen(porta, () => {
    console.log(`Servidor está sendo executado na porta ${porta}.`)
})