const verificarPlanoSaude = (idade) => {
    let pagamentoTotal = 100
    if (idade < 10) {
        pagamentoTotal += 80
    } else if (idade < 30) {
        pagamentoTotal += 50
    } else if (idade < 60) {
        pagamentoTotal += 95
    } else {
        pagamentoTotal += 130
    }

    return `R$${pagamentoTotal.toFixed(2).replace('.', ',')}`
}

for (let idade = 5; idade <= 80; idade += 10)
    console.log(`${idade} anos = ${verificarPlanoSaude(idade)}`)