function Carro(velocidadeMaxima = 200, aceleracao = 5) {
    let velocidadeAtual = 0 // velocidadeAtual só é acessível dentro da função.

    /**
     * this irá permitir o acesso a essas funções pelo objeto criado a
     * partir dessa função construtura.
     */
    this.acelerar = function() {
        if (velocidadeAtual + aceleracao <= velocidadeMaxima) {
            velocidadeAtual += aceleracao
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(400, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())