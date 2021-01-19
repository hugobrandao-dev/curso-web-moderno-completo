const valores = [5,4,3,2,1]

const callBackValoresMultiplicados = (valor, indice) => valor * indice
const callBackValoresSomados = (valor, indice) => valor + indice
const callBackValoresFormatados = (valor) => `R$${parseFloat(valor).toFixed(2).replace('.', ',')}`

const valoresMultiplicados = valores.map(callBackValoresMultiplicados)
const valoresSomados = valoresMultiplicados.map(callBackValoresSomados)
const valoresFormatados = valoresSomados.map(callBackValoresFormatados)

console.log(valoresFormatados)