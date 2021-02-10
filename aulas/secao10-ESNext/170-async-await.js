function getNumeroEntreIntervalo(min, max, excecoes) {
    return new Promise((resolve, reject) => {
        let fator = max - min + 1
        let valor = Math.floor(Math.random() * fator + min)
        if (!excecoes.includes(valor)) {
            resolve(valor)
        } else {
            reject('Valor gerado presente nas exceções.')
        }
    })
}

async function getConjuntoNumeros(quantNumeros, tentativa) {
    const conjunto = []

    try {
        for (let numero = 0; numero < quantNumeros; numero++) {
            /*
                O await está indo na frente do getNumeroEntreIntervalo 
                porque é ele quem retorna uma promise e não conjunto.
                push
            */
            conjunto.push(await getNumeroEntreIntervalo(5,15,conjunto))
        }
        return conjunto
    } catch (error) {
        if (tentativa > 0){
            throw "Alguma coisa deu errado, foi impossível gerar o conjunto."
        } else {
            tentativa--
            return getNumeroEntreIntervalo(5,15,conjunto)
        }
    }
}

getConjuntoNumeros(5, 3)
    .then(console.log)
    .catch(console.log)
