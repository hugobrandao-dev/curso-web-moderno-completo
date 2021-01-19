const pessoa1 = {
    saudacao: "Bom dia!!",
    /**
     * Novo meio (ECMAScript 2015) de declarar um função dentro de um
     * objeto.
     */
    falar() {
        console.log(this.saudacao)
    }
}

const pessoa2 = {
    saudacao: "Boa tarde!!",
    falar() {
        console.log(this.saudacao)
    }
}

const falar1 = pessoa1.falar // Conflito entre paradigma funcional e OO
falar1()

const falar2 = pessoa1.falar.bind(pessoa1)
falar2()
/**
 * Estou resolvendo um this que está dentro de pessoa1
 * no contexto de pessoa2 (pelo mesmo atributo)
 */
const falar3 = pessoa1.falar.bind(pessoa2)
falar3()