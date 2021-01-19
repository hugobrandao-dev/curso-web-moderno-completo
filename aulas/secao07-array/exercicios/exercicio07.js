function verificarValor(numero, minimo, maximo, inclusivo = true) {
    if (inclusivo) {
        minimo--
        maximo++
    }
    if (numero > minimo && numero < maximo) {
        return true
    } else {
        return false
    }
}

console.log(verificarValor(15, 5, 15, true))