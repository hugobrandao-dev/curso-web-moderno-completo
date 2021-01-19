/**
* As regras para calculo dos anos bissextos são as seguintes:
* De 4 em 4 anos é ano bissexto;
* De 100 em 100 anos não é ano bissexto;
* De 400 em 400 anos é ano bissexto;
* Prevalecem as útlimas regras sobre as primeiras.
* Partindo daí elabore uma função que recebe um ano de calcula se ele 
* é ano bissexto, imprimindo no console a mesnagem e retornando true 
* ou false.
*/

function verificarAnoBissexto(inicio, fim, passos) {
    for (let ano = inicio; ano <= fim; ano += passos) {
        //let anoInteiro = ano parseInt(ano)
        if ((ano % 100 !== 0 && ano % 4 === 0) || (ano % 100 === 0 && ano % 400 === 0))
            console.log(`${ano} é bissexto.`)
        else
            console.log(`${ano} NÃO é bissexto.`)
    }
}

verificarAnoBissexto(1500, 2100, 100)