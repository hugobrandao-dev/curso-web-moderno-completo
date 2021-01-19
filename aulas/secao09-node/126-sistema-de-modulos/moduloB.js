module.exports = {
    nome: 'Josias',
    idade: 34,
    altura: 1.90,
    mostrarBiografia() {
        return `${this.nome} tem ${this.idade} anos e ${this.altura}m de altura.`
    }
}