function mesExtenso(mesValor) {
    if (mesValor > 0 && mesValor < 13) {
        const meses = {
            1: 'Janeiro',
            2: 'Fevereiro',
            3: 'Março',
            4: 'Abril',
            5: 'Maio',
            6: 'Junho',
            7: 'Julho',
            8: 'Agosto',
            9: 'Setembro',
            10: 'Outubro',
            11: 'Novembro',
            12: 'Dezembro'
        }
        return meses[mesValor]
    } else {
        return `Mês inválido`
    }
}

console.log(mesExtenso(13))