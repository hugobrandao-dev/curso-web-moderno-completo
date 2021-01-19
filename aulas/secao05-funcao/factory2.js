function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1 // Ou como valor padrão no parâmetro.
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))