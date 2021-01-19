const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 100,
    acelerar(aceleracao) {
        if (this.velocidadeAtual + aceleracao < this.velocidadeMaxima) {
            this.velocidadeAtual += aceleracao
        } else {
            this.velocidadeAtual = this.velocidadeMaxima
        }
    },
    status() {
        return `${this.velocidadeAtual} / ${this.velocidadeMaxima}km/h`
    }
}

const ferrari = {
    marca: 'Ferrari',
    modelo: '812 Superfast 2020',
    velocidadeMaxima: 340, // Sobreará (shadowing) a velocidadeMaxima definida no objeto 'carro'
    status() {
        return `${this.marca}: ${this.modelo} -> ${super.status()}`
    }
}

const ford = {
    marca: 'Ford',
    modelo: 'GT 2020',
    velocidadeMaxima: 347, // Sobreará (shadowing) a velocidadeMaxima definida no objeto 'carro'
    status() {
        return `${this.marca}: ${this.modelo} -> ${super.status()}`
    }
}

const smart = {
    marca: 'Smart',
    modelo: 'EQ Cabrio',
    status() {
        return `${this.marca}: ${this.modelo} -> ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
//console.log(ferrari.velocidadeAtual)
//ferrari.acelerar(20)
console.log(ferrari.status())

Object.setPrototypeOf(ford, carro)
console.log(ford.velocidadeAtual)
ford.acelerar(40)
console.log(ford.status())

Object.setPrototypeOf(smart, carro)
smart.acelerar(25)
console.log(smart.velocidadeAtual)
console.log(smart.status())

console.log(Object.keys(ferrari))