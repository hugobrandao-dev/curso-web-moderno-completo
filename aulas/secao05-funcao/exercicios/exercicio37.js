/**
 * Escreva duas funções, uma para progressão aritmética e uma para
 * progressão geométrica que recebam como parâmetros um números n 
 * (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os 
 * n termos bem como a soma dos elementos.
 */

function calcularProgressaoAritmetica(termos, primeiro, razao) {
    let valor = primeiro
    let somatorio = 0
    for (let contador = 0; contador < termos; contador++) {
        somatorio += valor
        console.log(valor)
        valor += razao
    }
    console.log(`Somatório: ${somatorio}`)
}

function calcularProgressaoGeometrica(termos, primeiro, razao) {
    let valor = primeiro
    let somatorio = 0
    for (let contador = 0; contador < termos; contador++) {
        somatorio += valor
        console.log(valor)
        valor *= razao
    }
    console.log(`Somatório: ${somatorio}`)
}

calcularProgressaoAritmetica(5, 2, 4)
calcularProgressaoGeometrica(5,2,3)
