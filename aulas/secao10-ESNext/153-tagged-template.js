/*
    A função abaixo é uma Tagged Template que, a princípio, separa 
    caracteres de templates string, mas no final os une na forma da 
    string original, que foi usada na chamada da função, e insere o
    valor de real somente na template string do tipo number.
*/
function inserirReal(caracteres, ...templateStrings) {
    //let resultado = []
    let resultado = ''
    templateStrings.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2).replace('.', ',')}`
        resultado = resultado.concat(caracteres[indice], valor)
        //resultado.push(caracteres[indice], valor)
    })
    return resultado
    //return resultado.join('')
}

const preco = 29.9
const precoParcela = 11

console.log(inserirReal `1x de ${preco} ou 3x de ${precoParcela}.`)