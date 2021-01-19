const moduloA = require('./moduloA')
const { mostrarBiografia } = require('./moduloB')
const moduloB = require('./moduloB')

console.log(moduloA.nome)
console.log(moduloA.idade)
console.log(moduloA.altura)

console.log(moduloB.nome)
console.log(moduloB.idade)
console.log(moduloB.altura)
console.log(moduloB.mostrarBiografia())