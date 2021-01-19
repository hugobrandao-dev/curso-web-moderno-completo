const produto = Object.preventExtensions({
    nome: null,
    preco: null,
    tag: null
})

console.log(`Extensível: ${Object.isExtensible(produto)}`)

produto.nome = 'Borracha'
produto.preco = 0.89
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)