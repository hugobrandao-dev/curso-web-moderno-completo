function analisarNotaAluno(nota) {
    if (nota < 0 || nota > 100) {
        console.log(`Nota: ${nota} é INVÁLIDA.`)
    } else {
        if (nota < 38) {
            console.log(`Reprovado, ${ nota } impossível de arredondar.`)
        } else {
            // Nota + o que falta para o próximo número divisível por 5.
            let novaNota = nota + (5 - nota % 5)
            // A diferença entre próximo divisível por 5 e a nota real é menor que três?
            if (novaNota - nota < 3) {
                console.log(`Aprovado, nota arredondada de ${ nota } para ${ novaNota }.`)
            } else {
                console.log(`Aprovado, nota ${ nota } não arredondada.`)
            }
        }
    }
}

for (let i = 35; i < 45; i += 1) {
    analisarNotaAluno(i)
}