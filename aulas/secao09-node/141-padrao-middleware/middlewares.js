const middleware1 = (objeto, next) => {
    objeto.mw1 = 'OK'
    next()
}

const middleware2 = (objeto, next) => {
    objeto.mw2 = 'OK'
    next()
}

const middleware3 = objeto => {
    objeto.mw3 = 'OK'
}

function executor(objeto, ...cadeia) {
    const processoDeExecucao = indice => {
        cadeia && indice < cadeia.length && cadeia[indice](objeto, () => processoDeExecucao(indice + 1))
    }
    processoDeExecucao(0)
}

let meuObjeto = {}

executor(meuObjeto, middleware1, middleware2, middleware3)
console.log(meuObjeto)

executor(meuObjeto, middleware2, middleware1, middleware3)
console.log(meuObjeto)

executor(meuObjeto, middleware3, middleware2, middleware3)
console.log(meuObjeto)