class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    adicionarLancamentos(...valores) {
        valores.forEach(lancamento => this.lancamentos.push(lancamento))
    }

    calcularLancamentos() {
        let resultado = 0
        this.lancamentos.forEach(lancamento => resultado += parseFloat(lancamento.valor))
        return `R$${resultado.toFixed(2).replace('.', ',')}`
    }
}

const salario = new Lancamento('Salário', 4500)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(12,2020)
contas.adicionarLancamentos(salario, contaDeLuz)
console.log(contas.calcularLancamentos())