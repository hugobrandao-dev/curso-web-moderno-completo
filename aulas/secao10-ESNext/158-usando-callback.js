const nodeHttp = require('http')

const getTurma = (letra, callback) => {
    let letraMaiuscula = letra.toUpperCase()
    const url = `http://files.cod3r.com.br/curso-js/turma${letraMaiuscula}.json`

    nodeHttp.get(url, res => {
        let resultado = ''

        /*
            Faz a interceptação dos dados uma vez que eles chegam em partes.
        */
        res.on('data', dados => {
            resultado += dados // Faz a união entre as partes.
        })

        /*
            Executa quando não houver mais dados para chegar.
        */
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

getTurma('a', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
    getTurma('b', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))
        getTurma('c', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})