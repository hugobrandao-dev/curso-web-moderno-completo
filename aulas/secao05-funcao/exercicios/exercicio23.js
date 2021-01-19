function verificarMaiorNota(notas) {
    let maior = notas[0]
    for (nota of notas) {
        if (nota > maior) {
            maior = nota
        }
    }
    return maior
}

function verificarStatusAluno(mediaPonderada) {
    let status = null
    if (mediaPonderada >= 5) {
        status = 'Aprovado(a)'
    } else {
        status = 'Reprovado(a)'
    }
    return status
}

function verificarMediaAluno(codigo, notas) {
    if (notas.length === 3) {
        let maiorNota = verificarMaiorNota(notas)
        let somaPonderada = maiorNota * 4
        for (nota of notas) {
            if (nota !== maiorNota) {
                somaPonderada += nota * 3
            }
        }
        let mediaPonderada = somaPonderada / 10
        console.log(`Aluno ${codigo} com média ${mediaPonderada} -> ${verificarStatusAluno(mediaPonderada)}`)
    } else {
        console.warn(`Foram informadas ${notas.length}/3 notas.`)
    }
}

verificarMediaAluno(2, [8,6,7])
verificarMediaAluno(2, [5,6,3])