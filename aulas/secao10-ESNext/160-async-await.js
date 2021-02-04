const { Console } = require('console')
const http = require('http')

function getTurma(letraTurma) {
    let letraTurmaFormatada = letraTurma.toUpperCase()
    let url = `http://files.cod3r.com.br/curso-js/turma${letraTurmaFormatada}.json`

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

// Recurso do ES8
// Objetivo de simplificar o uso de promises
let obterAlunos = async () => {
    const turmaA = await getTurma('a')
    const turmaB = await getTurma('b')
    const turmaC = await getTurma('c')

    return [].concat(turmaA, turmaB, turmaC)
} // Retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))