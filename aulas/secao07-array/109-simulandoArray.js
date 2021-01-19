const meuObjeto = {0: 'Tobias', 1: 'Josias', 2: 'Clementina'}

Object.defineProperty(meuObjeto, 'converterParaArray', {
    value: function() {
        return Object.values(this)
    },
    enumerable: false
})

console.log(meuObjeto.converterParaArray())