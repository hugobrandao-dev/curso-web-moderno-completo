const pessoa = {
    nome: 'Rebeca',
    idade: 26,
    peso: 60
}

// Pega SOMENTE AS CHAVES
console.log(Object.keys(pessoa))

// Pega SOMENTE OS VALORES
console.log(Object.values(pessoa))

// Separa cada chave/valor em arrays
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(conjunto => {
    console.log(`${conjunto[0]} -> ${conjunto[1]}`)
})

// A saída do exemplo abaixo é a mesma que tem acima, a de baixo usa o destructuring
/*
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${ chave } -> ${ valor }`)
})
*/

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '05/12/1994'
})

console.log(pessoa.dataNascimento)
pessoa.dataNascimento = '06//12/1994'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const primeiro = {a: 4}
const segundo = {b: 2}
const terceiro = {a:7, c: 1}
const resultado = Object.assign(primeiro, segundo, terceiro)
console.log(resultado)