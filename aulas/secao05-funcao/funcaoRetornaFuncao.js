function retornarOutraFuncao(num1, num2) {
    return function(num3) {
        return num1 + num2 + num3
    }
}

/**
 * No caso abaixo, o 9 será passado como parâmetro para a função de retorno 
 * da primeira função.
 */
console.log(retornarOutraFuncao(6, 8)(9))
console.log(retornarOutraFuncao(4, 2)(10))

/**
 * Armazeno o retorno (uma função) dentro de uma constante e depois chamo 
 * essa mesma constante já passando o parâmetro para execução da segunda função.
 */
const segundaSoma = retornarOutraFuncao(2, 8)
console.log(segundaSoma(1))