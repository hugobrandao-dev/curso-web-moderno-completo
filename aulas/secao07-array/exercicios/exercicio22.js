function verificarSorte(valorUsuario) {
    let valorSorteado = Math.ceil(Math.random() * 10)
    if (valorUsuario === valorSorteado) {
        console.log(`Parabéns ! O número sorteado foi o ${valorSorteado}`)
    } else {
        console.log(`Que pena! O número sorteado foi o ${valorSorteado}`)
    }
}

for (let i = 1; i <= 10; i ++)
    verificarSorte(i)