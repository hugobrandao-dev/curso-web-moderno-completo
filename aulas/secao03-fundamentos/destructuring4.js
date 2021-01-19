function gerarValores([min = 5, max = 15]) {
    if (min > max) {
        [min, max] = [max, min]
    }
    console.log(`MÁXIMO: ${ max }`)
    console.log(`MÍNIMO: ${ min }`)

    for (let c = 1; c <=10; c++) {
        let valor = Math.floor(Math.random() * ((max + 1) - min)) + min
        if (valor === min || valor === max) {
            console.log(`${ valor } LIMITE ATINGITO!!`)
        } else {
            console.log(valor)
        }
    }
}

let meuArray = [40, 20]
gerarValores(meuArray)