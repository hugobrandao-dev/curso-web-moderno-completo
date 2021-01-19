function inverterValor(valor) {
    if (typeof valor === 'boolean') {
        return !valor
    } else if (typeof valor === 'number') {
        return (valor * -1)
    } else {
        return `ATENÇÃO: Somente parâmetros numéricos e booleanos são avaliados.`
    }
}

console.log(inverterValor(true))