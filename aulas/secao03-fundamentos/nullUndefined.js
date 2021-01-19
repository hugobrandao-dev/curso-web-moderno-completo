console.log("-> Variável = valor:")
/**
 * Declarei a variável, mas não a inicializei (não coloquei valor nela). NÃO É
 * RECOMENDÁVEL FAZER O USO DIRETAMENTE DO undifined NO NOSSO CÓDIGO, E SIM 
 * DEIXAR QUE A PRÓPRIA LINGUAGEM USE-A.
 */
let valor
console.log(valor)

/**
 * O null informa que a variável não apontará para lugar algum, também servindo para
 * "limpar" o valor de uma variável, embora seja recomendado iniciar um variável já
 * com algum valor.
 */
valor = null

console.log("-> Objeto = produto:")
const produto = {}
console.log(produto)
produto.preco = 3.0
console.log(produto)
delete produto.preco
console.log(produto.preco)