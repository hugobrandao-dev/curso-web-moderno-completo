function verificarValores(valores) {
    let quantidadeDentro = 0
    let quantidadeFora = 0
    for (let valor of valores) {
        if (valor >= 10 && valor <= 20) {
            quantidadeDentro++
        } else {
            quantidadeFora++
        }
    }
    console.log(`Há ${quantidadeDentro} valores DENTRO do intervalo.`)
    console.log(`${quantidadeFora} valores estão FORA do intervalo.`)
}

verificarValores([50,21,11,14,16,30,80])