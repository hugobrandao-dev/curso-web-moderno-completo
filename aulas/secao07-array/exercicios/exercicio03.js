function calcularSalario(quantidadeHoras, valorHora) {
    let salario = quantidadeHoras * valorHora
    let salarioFormatado = salario.toFixed(2).replace('.', ',')
    return `Salário igual a R$${salarioFormatado}`
}

console.log(calcularSalario(120, 30))