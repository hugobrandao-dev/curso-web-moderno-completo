const fabricantesCarros = ['Mercedez', 'Audi', 'BMW', 'Honda', 'Toyota']

/**
 * Por padrão, o forEach sempre passará, respectivamente, [item, 
 * indice, o array] para a função a ser executada. Neste caso, somente
 * os parâmetros [item, indice] são usados.
 */
const imprimirFabricantesCarros = (fabricante, indice) => console.log(`${ indice + 1 }º - ${ fabricante }`)

fabricantesCarros.forEach(imprimirFabricantesCarros)
fabricantesCarros.forEach(function(valor, index, nomeArray) {
    console.log(`Index: ${ index }; Valor: ${ valor } de ${ nomeArray }`)
})
fabricantesCarros.forEach((valor, index) => {
    console.log(`Valor ${valor} no index ${ index }`)
})