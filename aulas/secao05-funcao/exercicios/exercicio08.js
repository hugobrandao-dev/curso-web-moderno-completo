/**
* Dada uma lista de string = 'pontuação1 pontuação2 pontuação3',
* escreva uma função que ao recebê-la irá comparar os valores uma a um
* e irá retornar um vetor com o número de vezes que ele bateu seu
* recorde de maior número de pontos e quando fez seu pior.
*/

function analisarJogadas(jogadas) {
    let conjuntoJogadas = converterJogadasParaInteiro(jogadas)
    let melhorPontuacao = conjuntoJogadas[0]
    let piorPontuacao = conjuntoJogadas[0]
    let piorJogo = ''
    let novoRecorde = 0

    for (let i in conjuntoJogadas) {
        if (conjuntoJogadas[i] > melhorPontuacao) {
            melhorPontuacao = conjuntoJogadas[i]
            novoRecorde++
        } else if (conjuntoJogadas[i] < piorPontuacao) {
            piorPontuacao = conjuntoJogadas[i]
            piorJogo = `${parseInt(i) + 1}º`
        }
    }

    return {novoRecorde, piorJogo}
}

function converterJogadasParaInteiro(jogadas) {
    let jogadasString = jogadas.split(' ')
    let jogadasInteiro = []
    for (let indice in jogadasString) {
        jogadasInteiro.push(parseInt(jogadasString[indice]))
    }

    return jogadasInteiro
}

let jogadas = '10 20 20 8 25 3 0 30 1'
console.log(analisarJogadas(jogadas))
console.log(analisarJogadas('30 14 15 35 11 16 12'))