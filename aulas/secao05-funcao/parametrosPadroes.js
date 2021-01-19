/**
 * Este padrão é, ainda, muito usado em projetos, não só para parâmetros, mas também para
 * atribuir valor padrões as VARIÁVEIS INTERNAS.
 * NÃO UTILIZAR EM CASO EM QUE, QUALQUER UM DOS VALORES QUE VEM DO PARÂMETRO POSSA RECEBER 0. 
 * ISSO PORQUE, COMO 0 É false, SERIA ATRIBUIDO A VARIÁVEL O VALOR 1.
 */
function somar1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

function somar2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // Caso não pretenda correr o risco que haver alguma imcompatibilidade com browser antigos.
    return a + b + c
}

// Novo modo de atribuir valores padrões no ECMAScript 2015 e, também, MAIS RECOMENDÁVEL
function somar3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(somar1(4,3,0)) // Dará 4, OLHAR, ATENTAMENTE, A FUNÇÃO
console.log(somar2(6,8,4))
console.log(somar3(1,2,3))