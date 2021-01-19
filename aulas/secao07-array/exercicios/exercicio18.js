const somarPrecos = (acumulador, proximo) => {
    return acumulador.preco + proximo.preco
}

function cadastrarProdutoServico(elementos) {
    let somatorioPrecos = elementos.reduce(somarPrecos)
    // console.log(typeof somatorioPrecos)
    let somatorioPrecosFormatado = `R$${somatorioPrecos.toFixed(2).replace('.', ',')}`
    return somatorioPrecosFormatado
}

const produtosServicos1 = [
    {
        nome: 'Jornal Oline',
        categoria: 'Informação',
        preco: 89.99
    },
    {
        nome: 'Cinema',
        categoria: 'Entretenimento',
        preco: 150
    }
]

const produtosServicos2 = [
    {
        nome: 'Galaxy S20',
        categoria: 'Eletrônicos',
        preco: 3599.99
    },
    {
        nome: 'Macbook Pro',
        categoria: 'Eletrônico',
        preco: 30999.90
    }
]

console.log(cadastrarProdutoServico(produtosServicos1))
console.log(cadastrarProdutoServico(produtosServicos2))