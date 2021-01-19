let vetorPilha = [1,2,3,4,5]
let vetorAdiciona = [6,7,8,9,10]

for (let indice in vetorAdiciona) {
    vetorPilha.push(vetorAdiciona[indice])
    delete vetorAdiciona[indice]
    console.log(vetorPilha)
    console.log(vetorAdiciona)
}