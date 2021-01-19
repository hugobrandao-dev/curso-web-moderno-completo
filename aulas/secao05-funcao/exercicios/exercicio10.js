/**
 * Crie uma função que verifica se um número inteiro passado como
 * parâmetro é divisível por 3 e retorne true ou false.
 */

function verificarValorDivisivel(valor) {
    return valor % 3 === 0 ? true : false
}

for (let v = 1; v <= 10; v++) 
    console.log(`${ v } - ${ verificarValorDivisivel(v) }`)