const escola = [
    {
        nome: 'Turma P1',
        alunos: [
            {
                nome: 'Gustavo',
                nota: 8.1
            },
            {
                nome: 'Ana',
                nota: 9.3
            }
        ]
    },
    {
        nome: 'Turma P1',
        alunos: [
            {
                nome: 'Rebeca',
                nota: 8.9
            },
            {
                nome: 'Roberto',
                nota: 7.3
            }
        ]
    }
]

const getNotasAlunos = aluno => aluno.nota
const getAlunos = turma => turma.alunos.map(getNotasAlunos)

const alunos = escola.map(getAlunos)

console.log(alunos)

Array.prototype.flatMap = function(funcao) {
    let resultado = []
    for (let indice = 0; indice < this.length; indice++) {
        
    }
}