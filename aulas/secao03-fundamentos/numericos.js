// Mesmo com ponto o flutuando "0", o JavaScript interpretará como INTEIRO
const peso1 = 1.0
const peso2 = Number('2.0')
const num3 = Number('1.2')

console.log(peso1, peso2, num3)

// .isInteger verifica se o número é INTEIRO.
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(num3))

const avaliacao1 = 8.5
const avaliacao2 = 8.0

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// O .toFixed() apenas maquia variável, não alterando o valor original.
console.log(media.toFixed(2))
console.log(media)

// Em caso de queremos extrair o binários do valor de uma variável ou constante, passamos o parâmetro "2" para a função .toString().
console.log(media.toString(2))