function somar() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(somar())
console.log(somar(4,7,1))
console.log(somar(5,3,8,7))
console.log(somar(1.9,2.6,8.1))
console.log(somar('Testando', 1, 2, 3))
console.log(somar('a', 'b', 'c'))