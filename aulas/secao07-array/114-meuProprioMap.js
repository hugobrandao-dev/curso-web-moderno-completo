function meuMap(vetor, funcao) {
    let novoArray = []
    for (let indice = 0; indice < vetor.length; indice++) {
        novoArray.push(funcao(vetor[indice], indice, funcao))
    }
    return novoArray
}

const produtos = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

callBackObterPrecos = stringProduto => `R$${parseFloat(JSON.parse(stringProduto).preco).toFixed(2).replace('.', ',')}`

const precosProdutos = meuMap(produtos, callBackObterPrecos)

console.log(precosProdutos)

Array.prototype.meuMap = (funcao) => {
    let novoArray = []
    for (let indice = 0; indice < this.length; indice++) {
        novoArray.push(funcao(this[indice], indice, this))
    }
    return novoArray
}

function callBackPegarPrecosProdutos(produto) {
    let objetoProduto = JSON.parse(produto)
    let precoProduto = objetoProduto.preco
    let precoFormatado = parseFloat(precoProduto).toFixed(2).replace('.', ',')
    return `R$${precoFormatado}`
}

const precosProdutos2 = produtos.meuMap(callBackPegarPrecosProdutos)
console.log(precosProdutos)