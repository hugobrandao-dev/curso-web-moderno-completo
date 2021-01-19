/**
 * Utilizando a estrutura do switch faça um programa que simule uma 
 * calculadora básica. O programa recebe como parâmetro dois valores 
 * numéricos e uma string referente à operação e a realize com os
 * valores numéricos na ordem que foram inseridos. Por exemplo: 
 * Calculadora (2, '+' ,3). A função efeturaá a soma de 2 e 3. Dica: 
 * Os sinais das operações são: '', '', '', ''. Crie um caso default 
 * para operações inválidas.
 */

function fazerOperacao(num1, num2, operacao) {
    if (typeof(num1) == 'number' && typeof(num2) == 'number' && typeof(operacao) == 'string') {
        let resultado = null
        switch (operacao) {
            case '+':
                resultado = num1 + num2
                break
            case '-':
                resultado = num1 - num2
                break
            case '*':
                resultado = num1 * num2
                break
            case '/':
                resultado = num1 / num2
                break
            default:
                console.warn('Operação inválida.')
        }
        if (resultado !== null) {
            console.log(`${num1} ${operacao} ${num2} = ${resultado}`)
        }
    } else {
        console.log('Parâmetros inválidos.')
    }
}

fazerOperacao(9,3,'/')