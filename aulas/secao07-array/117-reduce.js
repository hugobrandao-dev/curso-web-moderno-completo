const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

const notasAlunos = alunos.map(function(aluno) {
    return aluno.nota
})

console.log(notasAlunos)

const somaNotas = notasAlunos.reduce(function(soma, proxima){
    return soma += proxima
})

console.log(somaNotas)

const valores = ['h', 'u', 'g', 'o']

const valoresSomados = valores.reduce(function(soma, proximo){
    return soma += proximo
})

console.log(valoresSomados)