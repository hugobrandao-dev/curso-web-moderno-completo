/**
 * Elabore duas funções que recebem três parâmetros: capital inicial,
 * taxa de juros e tempo de aplicação. A primeira função retornará o 
 * motante da aplicação financeira sob o regime de juros simples e a 
 * segunda retornará o valor da aplicação sob o regime de juros 
 * compostos.
 */

function retornarComJurosCompostos(capInicial, taxaJuros, tempoAplicacao) {
    let jurosDecimal = taxaJuros / 100
    let montante = (capInicial * Math.pow((1 + jurosDecimal), tempoAplicacao)).toFixed(2)
    return 'R$'.concat(montante)
}

console.log(retornarComJurosCompostos(1400,7,2))

function retornarComJurosSimples(capInicial, taxaJuros, tempoAplicacao) {
    let jurosDecimal = taxaJuros / 100
    let jurosBruto = (capInicial * jurosDecimal * tempoAplicacao).toFixed(2)
    return 'R$'.concat(capInicial + jurosBruto)
}

console.log(retornarComJurosSimples(4500,4,10))