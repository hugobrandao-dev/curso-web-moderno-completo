function verificarPresencaDeLetra(letra, frase) {
    let quantidadeLetra = 0

    for (let letraFrase of frase) {
        if (letra === letraFrase) {
            quantidadeLetra++
        }
    }

    return quantidadeLetra
}

console.log(verificarPresencaDeLetra('r', 'A sorte favorece os audazes'))
console.log(verificarPresencaDeLetra('c', 'Conhece-te a ti mesmo'))