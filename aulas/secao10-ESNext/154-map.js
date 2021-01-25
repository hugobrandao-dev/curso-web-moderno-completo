const tecnologias = new Map()

// React e angular são chaves que tem objetos como seus valores.
tecnologias.set('react', {
    framework: false
})
tecnologias.set('angular', {
    framework: true
})

console.log(tecnologias.react) // Não funcionará
console.log(tecnologias.get('react'))
console.log(tecnologias.get('angular').framework)

// O corpo de uma estrutura map criada diretamente é delimitada por []
const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
    ['deletar', 'Isso será deletado']
])

console.log()

chavesVariadas.delete('deletar') // Deleta uma chave/valor
console.log(chavesVariadas.has(123)) // Verifica se há uma chave

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

