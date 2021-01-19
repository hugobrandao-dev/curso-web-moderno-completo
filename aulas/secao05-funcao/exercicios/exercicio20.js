function calcularQuantidadeNota(valor) {
    if (valor >= 1) {
        let notasDisponiveis = ['100', '50', '10', '5', '1']
        for (nota in notasDisponiveis) {
            let valorConvertido = parseInt(notasDisponiveis[nota])
            if (valor / valorConvertido >= 1) {
                let inteiroDaDivisao = Math.floor(valor / parseInt(notasDisponiveis[nota]))
                console.log(`${inteiroDaDivisao} nota(s) de R$${valorConvertido.toFixed(2).replace('.', ',')}`)
                valor -= valorConvertido * inteiroDaDivisao
            }
        }
    } else {
        console.error('Quantidade inválida')
    }
}

calcularQuantidadeNota(456)