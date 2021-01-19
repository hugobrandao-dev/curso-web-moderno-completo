const pai = {nome: 'Pedro', corCabelo: 'Preto'}
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        enumerable: true,
        writable: false,
        value: 'Bia'
    }
})
console.log(filha2.nome)
filha2.nome = 'Carla'
filha2.descrever = _ => `${this.nome} tem o cabelo ${this.corCabelo}`
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    let resposta =  filha2.hasOwnProperty(key) ? key : `${key} é herança.`
    console.log(resposta)
}
