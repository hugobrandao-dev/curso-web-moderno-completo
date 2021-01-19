/**
 * Desenvolva uma função JavaScript para que ela receba um valor, como 
 * 0,300000000... e retorne R$ 0,30 (observe a vírgula e o ponto)
 */

function formatarValor(valor) {
    return 'R$'.concat(valor.toFixed(2).replace('.', ','))
}

console.log(formatarValor(Math.PI))