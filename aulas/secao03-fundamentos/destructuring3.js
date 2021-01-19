function gerarValores({min = 5, max = 15}) {
    console.log(`MÍNIMO: ${ min }`)
    console.log(`MÁXIMO: ${ max }`)
    for (let c = 0; c <= 10; c++) {
        /**
        * Como o Math.floor arredonda para baixo, precisamos somar + 1
        * no valor máximo para que ele tenha a mesma change de ser "sorteado"
        * do que os outros valores.
        */
        let valor = Math.floor(Math.random() * ((max + 1) - min)) + min;
        if (valor === min || valor === max) {
            console.log(`${ valor } LIMITE ATINGIDO!!!`)
        } else {
            console.log(valor)
        }
    }
}

let obj = { min: 10, max: 20}
gerarValores(obj)
gerarValores({ min: 20, max: 10 })