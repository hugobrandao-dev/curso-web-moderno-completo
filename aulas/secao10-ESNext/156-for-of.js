const assuntos = new Map([
    ['Map', {
        abordado: true
    }],
    ['Set', {
        abordado: true
    }],
    ['Promises', {
        abordado: false
    }]
])

for (let chave of assuntos.keys()) {
    console.log(chave)
}

for (let valor of assuntos.values()) {
    console.log(valor)
}

for (let [chave, valor] of assuntos.entries()) {
    console.log(chave, valor)
}