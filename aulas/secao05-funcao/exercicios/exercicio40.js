function conceituarNotas() {
    for (let nota in arguments) {
        let conceito = null
        if (nota >= 0 && nota < 5) {
            conceito = 'D'
        } else if (nota < 7) {
            conceito = 'C'
        } else if (nota < 9) {
            conceito = 'B'
        } else if (nota <= 10) {
            conceito = 'A'
        } else {
            console.log('Nota inválida para ser avaliada.')
        }

        if (!!conceito) {
            console.log(`Nota conceito: ${conceito}`)
        }
    }
}

conceituarNotas(0,1,2,3,4,5,6,7,8,9,10,11)