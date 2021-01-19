function calcularPreco(codigo, quantidade) {
    if (quantidade >= 1) {
        let preco = null
        let alimento = null
        switch (codigo) {
            case 100:
                preco = 3.00
                alimento = 'Cachorro Quente'
                break
            case 200:
                preco = 4.00
                alimento = 'Hambúrguer Simples'
                break
            case 300:
                preco = 5.50
                alimento = 'Cheeseburguer'
                break
            case 400:
                preco = 7.50
                alimento = 'Bauru'
                break
            case 500:
                preco = 3.50
                alimento = 'Refrigerante'
                break
            case 600:
                preco = 2.80
                alimento = 'Suco'
                break
            default:
                console.log('Código inválido')
        }
        if (preco !== null && alimento !== null){
            let total = preco * quantidade
            console.log(`${quantidade}x ${alimento} = R$${total.toFixed(2).replace('.', ',')}`)
        }
    } else {
        console.error('Quantidade inválida.')
    }
}

for (let i = 0; i <= 600; i += 100)
    calcularPreco(i, (i/100))