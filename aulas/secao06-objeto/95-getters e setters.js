const sequencia = {
    _valor: 0, // O _, por convensão, indica que a variável é privada.
    get valor() { return ++this._valor },
    set valor(novoValor) {
        if (novoValor > this._valor)
            this._valor = novoValor
        else {
            console.log('ERRO: O valor inválido.')
        }
    }
}

console.log(sequencia.valor)
sequencia.valor = 5
console.log(sequencia.valor)
sequencia.valor = 3
Object.freeze(sequencia)
sequencia.valor = 30
console.log(sequencia.valor)