const pessoa = {
    nome: 'Tobias',
    idade: 32
}

Object.seal(pessoa)

console.log(`Extensível: ${Object.isSealed(pessoa)}`)

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 30
console.log(pessoa)