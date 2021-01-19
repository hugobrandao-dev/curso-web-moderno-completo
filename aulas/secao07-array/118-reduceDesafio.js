/**
 * O programa analisará se todos os alunos do array de objetos SÃO BOLSISTAS
 */

const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: false},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: false}
]

// Desafio 1 - Todos os alunos são bolsistas
const todosBolsistas = alunos.map(function(aluno){
    return aluno.bolsista
}).reduce(function(ultimoTeste, proximoTeste){
    return ultimoTeste && proximoTeste // Os dois tem que ser true
})

console.log(`Todos os alunos são bolsistas? ${todosBolsistas}`)

// Desafio 2 - Algum aluno é bolsista
const algumBolsista = alunos.map(function(aluno){
    return aluno.bolsista
}).reduce(function(alunoAtual, proximoAluno){
    return alunoAtual || proximoAluno // Um dos dois tem que ser true
})

console.log(`Algum aluno é bolsista? ${algumBolsista}`)