/**
 * Este programa filterá de um array os produtos que forem acima de 
 * R$500,00 e forem frágeis.
 */

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const produtosCarosFrageis = produtos.filter(function(produto){
    return (produto.preco >= 500 && produto.fragil)
})

console.log(produtosCarosFrageis)