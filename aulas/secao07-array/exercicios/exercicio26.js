function exibirSomenteConsoantes(palavra) {
    let vogais = 'aeiou'
    let somenteConsoantes = ''
    for (let letra of palavra) {
        if (vogais.indexOf(letra.toLowerCase()) === -1) {
            somenteConsoantes += letra
        }
    }

    return somenteConsoantes
}

console.log(exibirSomenteConsoantes('Cod3r'))
console.log(exibirSomenteConsoantes('Fundamentos'))