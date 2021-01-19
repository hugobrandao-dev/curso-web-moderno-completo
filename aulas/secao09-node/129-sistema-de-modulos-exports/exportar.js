console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1

exports.b = 2
exports = {
    nome: 'Josias'
}
module.exports.c = 3

console.log(module.exports)
module.exports = {
    nome: 'Dinorá'
}