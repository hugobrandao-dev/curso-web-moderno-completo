function filtrarPorQuantidadesDeDigitos(vetor, digitos) {
    let valores = vetor.filter(function(valor){
        return valor.toString().length === digitos
    })

    return valores
}

console.log(filtrarPorQuantidadesDeDigitos([38,2,365,10,125,11], 2))
console.log(filtrarPorQuantidadesDeDigitos([5,9,1,125,11], 1))