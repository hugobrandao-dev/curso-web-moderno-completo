const valores = [10,16,19,25,22]

// Sem callback
const valoresAcimaDe18_1 = []
for (let valor in valores) {
    if (valores[valor] >= 18) {
        valoresAcimaDe18_1.push(valores[valor])
    }
}
console.log(valoresAcimaDe18_1)

// Com callback
const valoresAcimaDe18_2 = valores.filter(function(valor) {
    return valor >= 18
})
console.log(valoresAcimaDe18_2)

// Com callback e arrow function
const valoresAcimaDe18_3 = valores.filter(valor => valor >= 18)
console.log(valoresAcimaDe18_3)

// Com callback, arrow function e reutilização
const selecaoValoresAcimaDe18_4 = valor => valor >= 18
const valoresAcimaDe18_4 = valores.filter(selecaoValoresAcimaDe18_4)
console.log(valoresAcimaDe18_4)