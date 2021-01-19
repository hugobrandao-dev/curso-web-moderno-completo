class Pessoa1 {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${ this.nome }`)
    }
}

let pessoa1 = new Pessoa1('Tobias')
pessoa1.falar()

// No navegador usar document.getElementsByTagName('body')[0].onclick = pessoa1.falar

const Pessoa2 = nome => {
    return {
        nome,
        falar() {
            console.log(`Meu nome é ${ nome }`)
        }
    }
}

let pessoa2 = Pessoa2('Josias')
pessoa2.falar()
// No navegador usar document.getElementsByTagName('body')[0].onclick = pessoa1.falar