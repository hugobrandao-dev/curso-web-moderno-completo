/**
 * Escreva uma função que receba dois vetores de igual tamanho e troque
 * seus elementos de modo que o primeiro elemento do vetorA passe a
 * ser o primeiro elemento do vetorB e vice versa e assim 
 * sucessivamente. Faça a troca sem utilizar variável auxiliar.
 */

function trocarValoresVetores(vetor1, vetor2) {
    if (vetor1.length === vetor2.length) {
        for (let indice = 0; indice < vetor1.length; indice++) {
            [vetor1[indice], vetor2[indice]] = [vetor2[indice], vetor1[indice]]
        }

        console.log(`Primeiro vetor: ${vetor1}`)
        console.log(`Segundo vetor: ${vetor2}`)
    } else {
        console.log('Os vetores tem dimensões diferentes.')
    }
}

const vetor1 = [6,4,8,1]
const vetor2 = [8,9,4,3]

trocarValoresVetores(vetor1, vetor2)