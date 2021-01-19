const somarValores = (acumulador, proximo) => acumulador + proximo

function calcularMedia(valores) {
    const somatorio = valores.reduce(somarValores)
    const media = somatorio / valores.length

    return media
}

console.log(calcularMedia([0,10]))
console.log(calcularMedia([1,2,3,4,5]))