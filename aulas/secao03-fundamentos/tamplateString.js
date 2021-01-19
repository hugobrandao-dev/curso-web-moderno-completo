const nome = "Hugo"
const concatenacao = "Olá, "+ nome +"!"
console.log(concatenacao)
// Os templates consideram o enter e a tabulação
console.log(`
    Olá, 
    ${ nome }!
`)