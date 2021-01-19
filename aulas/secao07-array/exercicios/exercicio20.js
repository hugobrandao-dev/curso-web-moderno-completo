function calcularAreaTriangulo(base, altura) {
    let valor = (base * altura) / 2
    let valorFormatado = valor.toFixed(2).replace('.', ',')
    return valorFormatado
}

console.log(calcularAreaTriangulo(10,15))
console.log(calcularAreaTriangulo(7, 9))
console.log(calcularAreaTriangulo(9.25, 13.1))