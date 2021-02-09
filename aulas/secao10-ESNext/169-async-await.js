function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(_ => {
            resolve()
        }, tempo)
    })
}

function getValor() {
    return new Promise(resolve => {
        setTimeout(_ => {
            resolve(10)
        }, 5000)
    })
}

/*
    OU
async function getValorRapidamente() {
    return 20 // async converte "automaticamente" para uma Promise
}
*/

/*
    Sem o await, todos os console.log serão executados de uma vez e as 
    promises seriam resolvidas todas de uma vez e depois de 1.5s (as 
    promises seriam "colocadas lado a lado" no processo de execução).
*/
async function executar() {
    let valor = await getValor()

    await esperarPor(1500)
    console.log(`Async/await ${valor + 1}`)

    await esperarPor(1500)
    console.log(`Async/await ${valor + 2}`)

    await esperarPor(1500)
    console.log(`Async/await ${valor + 3}`)

    return 4
}

executar()
    .then(console.log)

/*
    OU

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}
*/