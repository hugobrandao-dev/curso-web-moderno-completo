function comparaComThis(param) {
    console.log(this === param)
}

comparaComThis(global) // Objeto global no node também se chama global.

const obj = {}
comparaComThis = comparaComThis.bind(obj) // Indica o obj como novo contexto para o this dentro da função.

comparaComThis(global)
comparaComThis(obj)

/**
 * Se tratando do node, o contexto léxico são os arquivos (módulos)
 */
comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // A arrow function tem "PRIORIDADE" sobre o bind
comparaComThisArrow(module.exports)