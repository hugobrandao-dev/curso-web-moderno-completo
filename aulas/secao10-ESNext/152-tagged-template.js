function separarCaracteresValores(caracteres, ...valores) {
    console.log(caracteres)
    console.log(valores)
    return 'Sucesso na separação'
}

const nome = 'Dinorá'
const idade = 41

// Tagged Template só funcinorá se chamarmos a função sem os parênteres
console.log(separarCaracteresValores `${nome} tem ${idade} anos de idade.`)