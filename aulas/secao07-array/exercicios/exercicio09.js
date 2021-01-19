function repetirValor(valor, quantidade) {
    let resultado = []
    for (let repeticao = 1; repeticao <= quantidade; repeticao++) {
        resultado.push(valor)
    }
    return resultado
}

console.log(repetirValor(8, 5))