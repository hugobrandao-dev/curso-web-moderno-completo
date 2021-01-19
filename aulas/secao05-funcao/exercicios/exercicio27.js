function calcularAnosNecessarios(criancaMenor, criancaMaior) {
    let anosNecessarios = 0
    while (criancaMenor.altura <= criancaMaior.altura) {
        criancaMenor.altura += criancaMenor.taxaCrescimento
        criancaMaior.altura += criancaMaior.taxaCrescimento
        anosNecessarios++
    }
    return anosNecessarios
}

function calcularTaxaCrescimento(crianca1, crianca2) {
        let anosNecessarios = null
        if ((crianca1.altura < crianca2.altura) && (crianca1.taxaCrescimento > crianca2.taxaCrescimento)) {
            anosNecessarios = calcularAnosNecessarios(crianca1, crianca2)
        } else if ((crianca2.altura < crianca1.altura) && (crianca2.taxaCrescimento > crianca1.taxaCrescimento)) {
            anosNecessarios = calcularAnosNecessarios(crianca2, crianca1)
        } else {
            console.log('Não há possibilidade de criança menor ultrapassar a maior')
        }
        if (anosNecessarios !== null) {
            console.log(`Serão necessários ${anosNecessarios} anos para a menor ultrapassar a maior.`)
        }
}

const crianca1 = {
    altura: 110,
    taxaCrescimento: 1
}

const crianca2 = {
    altura: 120,
    taxaCrescimento: 0.5
}

calcularTaxaCrescimento(crianca1, crianca2)