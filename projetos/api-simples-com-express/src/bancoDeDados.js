const gerarId = {
    _gerar: 1,
    get gerar() {
        return this._gerar++
    }
}

const produtos = {
    /*
    id: {
        id
        produto,
        preco
    }
    */
}

function getProduto(id) {
    return produtos[id] || {}
}

function setProduto(produto) {
    if (!produto.id) {
        produto.id = gerarId.gerar
    }
    produtos[produto.id] = produto
    return produto
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports= {
    getProduto,
    getProdutos,
    setProduto
}