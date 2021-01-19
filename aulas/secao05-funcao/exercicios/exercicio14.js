const verificarFruta = (fruta) => {
    let resposta = null
    switch (fruta) {
        case 'maçã': case 'maça':
            resposta = 'Não vendemos esta fruta aqui.'
            break
        case 'kiwi':
            resposta = 'Estamos com escassez de kiwis'
            break
        case 'melancia':
            resposta = 'Aqui está, são R$3,00 o kg'
            break
        default:
            resposta = `${fruta} NÃO é um parâmetro válido.`
    }

    return resposta
}

const frutas = ['melancia', 'melão', 'maça', 'banana', 'kiwi']
for (let fruta in frutas) {
    console.log(verificarFruta(frutas[fruta]))
}