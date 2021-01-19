console.log(typeof Array, typeof new Array)
console.log(typeof Object, typeof new Function)

let animais = ['Gato', 'Cachorro', 'Sapo', 'Onça', 'Girafa', 'Elefante']

console.log(`Foram retirados: ${animais.splice(1,2)}`)
console.log(`Sobraram: ${animais}`)

animais.splice(2, 0,'Rinoceronte', 'Tartaruga')
console.log(`Novo array: ${animais}`)

animais.splice(0,1,'Coruja')
console.log(`Novo array: ${animais}`)