const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const precosProdutos = carrinho.map(function(produto) {
    return `R$${parseFloat(JSON.parse(produto).preco).toFixed(2).replace('.', ',')}`
})

console.log(precosProdutos)