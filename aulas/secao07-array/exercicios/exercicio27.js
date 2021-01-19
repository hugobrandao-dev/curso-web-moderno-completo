function inverterChaveValor(objeto) {
    let novoObjeto = {}
    for (let chave in objeto) {
        novoObjeto[objeto[chave]] = chave
    }

    return novoObjeto
}

const objetoReformatado = inverterChaveValor({
    a: 1,
    b: 2,
    c: 3
})

console.log(objetoReformatado)