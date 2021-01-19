function Pessoa1(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${ this.nome }.`)
    }
}

const pessoa1 = new Pessoa1('Tobias')
console.log(pessoa1.nome)
pessoa1.falar()