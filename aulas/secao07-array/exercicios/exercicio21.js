function retornarMenor(valores) {
    let menorValor = valores[0]
    for (let valor of valores) {
        menorValor = valor < menorValor ? valor : menorValor
    }

    return menorValor
}

console.log(retornarMenor([10,5,35,65]))
console.log(retornarMenor([5,-15,50,3]))