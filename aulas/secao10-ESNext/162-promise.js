const promise = new Promise(cumprida => {
    cumprida(['Josias', 'Jeremias', 'Tobias', 'Dinorá'])
})

function primeiroNome(listaNomes) {
    return listaNomes[0]
}

function primeiraLetra(nome) {
    return nome[0]
}

promise
    // then recebe algo e passa esse elemento para sua função interna.
    .then(primeiroNome) // arrayNomes -> then -> primeiroNome
    .then(primeiraLetra) // primeiroNome -> then -> primeiraLetra
    .then(console.log) // primeiraLetra -> then -> console.log

/*
OU (FAZ A MESMA COISA QUE O CÓDIGO ACIMA)

new Promise(cumprida => {
    cumprida(['Josias', 'Jeremias', 'Tobias', 'Dinorá'])
})
    .then(primeiroNome)
    .then(primeiraLetra)
    .then(console.log)
*/