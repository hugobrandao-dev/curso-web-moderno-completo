const http = require('http')

function fazerRequisicaoAlunos(letra) {
    let letraMaiuscula = letra.toUpperCase()
    let url = `http://files.cod3r.com.br/curso-js/turma${letraMaiuscula}.json`

    return new Promise((resolve, reject) => {
        http.get(url, requisicao => {
            let resposta = ''
    
            requisicao.on('data', dados => {
                resposta += dados
            })
    
            requisicao.on('end', _ => {
                try {
                    resolve(JSON.parse(resposta))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

let classes = ['a', 'b', 'c']

Promise.all(classes.map(valor => {
    return fazerRequisicaoAlunos(valor)
}))
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(error => console.log(error.message))