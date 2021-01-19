/**
 * Abaixo está o código que eu desenvolvi. Depois de ver a versão do professor, percebi que
 * minha função callback (callbackCarosFrageis), apesar do resultado ser o mesmo, não retorna 
 * true ou false e seu o objeto, como ocorre no filter interno de Arrays, sendo assim,
 * particularmente, considero que a forma que fiz ESTÁ ERRADA.
 */

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

function meuFilter(vetor, funcao) {
    let novoVetor = []

    for (let indice = 0; indice < vetor.length; indice++) {
        let produto = funcao(vetor[indice], indice, vetor)
        if (typeof produto === 'object')
            novoVetor.push(produto)
    }

    return novoVetor
}

function callbackCarosFrageis(produto) {
    if (produto.preco >= 500 && produto.fragil) {
        return produto
    }
}

const produtosSelecionados = meuFilter(produtos, callbackCarosFrageis)

console.log(produtosSelecionados)

Array.prototype.meuFilter = function(funcao) {
    let novoArray = []

    for (let indice = 0; indice < this.length; indice++) {
        let produto = funcao(this[indice], indice, this)
        if (typeof produto === 'object') {
            novoArray.push(produto)
        }
    }

    return novoArray
}

const produtosSelecionados2 = produtos.meuFilter(callbackCarosFrageis)

console.log(produtosSelecionados2)

/**
 * Abaixo está um novo código, cuja callback retorna true ou false, sendo tratadas
 * posteriormente dentro do "meuFilter"
 */

Array.prototype.meuNovoFilter = function(funcao) {
    let novoVetor = []

    for (let indice = 0; indice < this.length; indice++) {
        if (funcao(this[indice], indice, this)) {
            novoVetor.push(this[indice])
        }
    }

    return novoVetor
}

function callbackCarosFrageis2(produto) {
    return (produto.preco >= 500 && produto.fragil)
}

const produtosSelecionados3 = produtos.meuNovoFilter(callbackCarosFrageis2)

console.log(produtosSelecionados3)

Array.prototype.meuNovoFilter2 = function(funcao) {
    let novoVetor = []

    for (let indice = 0; indice < this.length; indice++) {
        if (funcao(this[indice], indice, this)) {
            novoVetor.push(this[indice])
        }
    }

    return novoVetor
}

const verificarPreco = preco => preco >= 500
const verificarFragilidade = fragil => fragil

const callbackCarosFrageis3 = function(produto) {
    return (verificarPreco(produto.preco) && verificarFragilidade(produto.fragil))
}

const produtosSelecionados4 = produtos.meuNovoFilter2(callbackCarosFrageis3)

console.log(produtosSelecionados4)