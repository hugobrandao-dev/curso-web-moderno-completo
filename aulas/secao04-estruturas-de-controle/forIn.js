const nomeDeAnimais = ['Cachorro', 'Gato', 'Coelho', 'Galinha']

for (i in nomeDeAnimais) {
    console.log(i, nomeDeAnimais[i])
}

const cachorro = {
    nome: 'Rabito',
    idade: 4,
    peso: 200
}

console.log('\nInformações do cachorro:')
for (c in cachorro) {
    console.log(`${ c } = ${ cachorro[c] }`)
}