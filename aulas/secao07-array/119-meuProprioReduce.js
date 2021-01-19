/**
 * O método abaixo faz uso SOMENTE DA FUNÇÃO CALLBACK que é passada
 * como parâmetro.
 */
Array.prototype.meuReduce = function(funcao) {
    let acumulador = this[0]
    for (let indice = 1; indice < this.length; indice++) {
        acumulador = funcao(acumulador, this[indice])
    }
    return acumulador
}

const valores = [5,4,3,2,1]

const valoresSomados = valores.meuReduce(function(acumulado, proximo){
    return acumulado += proximo
})

console.log(valoresSomados)

/**
 * A função abaixo faz uso de dois parâmetros (semelhante ao reduce
 * original), sendo a função callback e a valor acumulado inicial.
 */

Array.prototype.meuReduce2 = function(funcao, valorInicial) {
   let acumulador = valorInicial || this[0] // Valor inicial ou o primeiro valor do array
   let inicio = valorInicial ? 0 : 1 // Caso haja valor inicial, o for começa do 0.
   for (let indice = inicio; indice < this.length; indice++) {
        acumulador = funcao(acumulador, this[indice])
   }
   return acumulador
}

function callBackSomarValores(total, proximo) {
    return total + proximo
}

const valoresSomados2 = valores.meuReduce2(callBackSomarValores, 25)

console.log(valoresSomados2)