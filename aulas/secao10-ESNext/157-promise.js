/*
* Esse exemplo apenas simula, através do setTimeout(), uma requisição
* que demora algum tempo para ser tratada.
*/

function falarDepoisDe(segundos, mensagem) {
    /*
     * Resolve e reject são funções
    */
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mensagem) // O resolve aceita somente um parâmetro.
            //reject(mensagem)
        }, segundos * 1000)
    })
}

falarDepoisDe(4, 'Tobias é irmão de Dinorá')
    .then(mensagem => {
        return mensagem.concat(', que é irmã de Jeremias')
    }).then(mensagem => { // Podemos encadear vários .then()
        return mensagem.concat(', que é primo de Josias.')
    }).then(mensagem => {
        console.log(mensagem)
    })
    .catch(mensagem => { // Só pode ser encadeada.
        console.log(mensagem.concat('.'))
    })
