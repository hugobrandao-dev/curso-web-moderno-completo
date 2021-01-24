/*
    Rest = juntar, spread = espalhar
    O nome que se dá depende da forma como se está utilizando o 
    operador.
*/

// Rest em funções
function calcularTotal(...valores) {
    let total = 0
    valores.forEach(valor => total += valor)
    return total
}

console.log(calcularTotal(2,3,8,4,1))

// Spread em objeto
const cachorro = {
    fazerBarulho() {
        console.log('Au au')
    }
}

const meuCachorro = {
    nome: 'Tobias',
    raca: 'Vira-lata',
    ...cachorro
}

console.log(cachorro)
console.log(meuCachorro)

// Spread em arrays
const aprovadosGrupoA = ['Tobias', 'Josias']

const aprovadosGrupoB = ['Jeremias', 'Dinorá', ...aprovadosGrupoA]

console.log(aprovadosGrupoA)
console.log(aprovadosGrupoB)