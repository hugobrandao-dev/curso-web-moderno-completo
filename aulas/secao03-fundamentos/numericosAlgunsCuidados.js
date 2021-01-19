// Quando menor o número denominador, maior é o resultado (se for zero, tendo ao infinito [Infinity])
console.log(7 / 0)

// O JavaScript verifica e converte a string, caso ele seja somente número, para fazer o cálculo.
console.log("10", 2)
console.log("10.5" / 2)

// NÃO será mostrado duas vezes
console.log("Show!" * 2)

/*
    NÃO trará um valor exato, isso porque, para ter MAIOR VELOCIDADE na obtenção de um 
    resultado satisfatório, é usado uma ESPECIFICAÇÃO cujo IMPRECISÃO É ACEITAVEL.
*/
console.log(0.1 + 0.7)

// Dará erro, caso tentemos converter o "10" sem os parênteses.
console.log((10).toString())

// A string tem preferência sobre cálculos, no uso do operador de soma.
console.log('3' + 2)