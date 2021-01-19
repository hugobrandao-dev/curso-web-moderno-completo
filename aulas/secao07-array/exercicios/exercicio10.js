function repetirSimbolo(quantidade) {
    let resultado = ''
    for (let vezes = 1; vezes <= quantidade; vezes++) {
        resultado += '+'
    }
    return resultado
}

console.log(repetirSimbolo(4))