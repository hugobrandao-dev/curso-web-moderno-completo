const times = new Set()

times.add('Fluminense')
times.add('Flamengo').add('São Paulo')
times.add('Curitiba')
times.add('Flamengo') // Será ignorado

console.log(times)
console.log(times.size) // Sem parênteses mesmo
console.log('Tem vasco: ' + times.has('vasco')) // Verifica se há um valor
console.log('Tem flamengo: ' + times.has('flamengo')) // flamengo != Flamengo
console.log('Tem curitiba: ' + times.has('Curitiba'))
times.delete('São Paulo')
console.log(times)

//Outra forma de criar um Set()
const nomes = ['Tobias', 'Josias', 'Jeremias', 'Dinorá']
const nomesSet = new Set(nomes)
console.log(nomesSet)