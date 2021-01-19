const filtrarSomenteInteiros = valor => typeof(valor) === 'number'

function separarNumeros(vetor) {
    let vetorDeInteiros = vetor.filter(filtrarSomenteInteiros)
    return vetorDeInteiros
}

console.log(separarNumeros(['JavaScript', 1, '5', 'Web', 20]))
console.log(separarNumeros(['a', 'c']))