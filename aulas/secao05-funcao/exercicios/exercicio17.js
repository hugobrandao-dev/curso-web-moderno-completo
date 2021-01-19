function calcularNovoSalario(plano, salario) {
    if (typeof(plano) === 'string' && typeof(salario) === 'number') {
        let novoSalario = null
        let porcentagemAumento = null
        switch (plano) {
            case 'a': case 'A':
                porcentagemAumento = 10
                novoSalario = salario * (1 + (porcentagemAumento / 100))
                break
            case 'b': case 'B':
                porcentagemAumento = 15
                novoSalario = salario * (1 + (porcentagemAumento / 100))
                break
            case 'c': case 'C':
                porcentagemAumento = 20
                novoSalario = salario * (1 + (porcentagemAumento / 100))
                break
            default:
                console.log('Plano inválido.')
        }
        if (novoSalario !== null && porcentagemAumento !== null) {
            console.log(`Salário anterior: R$${salario}`)
            console.log(`Aumento percentual: ${porcentagemAumento}%`)
            console.log(`Novo salário: R$${novoSalario.toFixed(2)}`)
        }
    } else {
        console.error('Parâmetros inválidas.')
    }
}

calcularNovoSalario('C', 1500)