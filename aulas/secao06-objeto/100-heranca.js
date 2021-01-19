function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const objeto1 = new MeuObjeto()
const objeto2 = new MeuObjeto()

console.log(objeto1.__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // Object é a raiz de qualquer cadeira de protótipos de objetos.