const listaAlunos = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
    Tobias: [6.6, 9, 8, 7.9]
}

function verificarQualMelhorAluno(objetoAlunos) {
    let listaAlunosFormatada = formatarAlunos(objetoAlunos)
    let listaAlunosComMedia = somarNotasAluno(listaAlunosFormatada)
    /*
    let melhorAluno = amostraDeAlunoDeMaiorMedia(listaAlunosComMedia)
    console.log(melhorAluno)
    */
    let listaMelhoresAlunos = compararAlunos(listaAlunosComMedia)
    let listaNomesMediasMelhoresAlunos = separarNomesEMedias(listaMelhoresAlunos)
    return listaNomesMediasMelhoresAlunos
}

console.log(verificarQualMelhorAluno(listaAlunos))

function separarNomesEMedias(melhoresAlunos) {
    let alunosEMedias = []
    const montarNovoObjetoNomeMedia = aluno => {
        let nomeMedia = {}
        nomeMedia.nome = aluno['nome']
        nomeMedia.media = aluno['media']
        return nomeMedia
    }
    alunosEMedias = alunosEMedias.concat(melhoresAlunos.map(montarNovoObjetoNomeMedia))
    return alunosEMedias
}

function formatarAlunos(objetoAlunos) {
    let listaAlunosFormatada = []
    for (let nome in objetoAlunos) {
        let aluno = {}
        aluno.nome = `${nome}`
        aluno.notas = objetoAlunos[nome]
        listaAlunosFormatada.push(aluno)
    }
    return listaAlunosFormatada
}

function somarNotasAluno(listaAlunosFormatada) {
    const somarNotas = (acumulada, proxima) => {
        return acumulada + proxima
    }
    const calcularMedia = aluno => {
        let soma = aluno.notas.reduce(somarNotas)
        let quantidadeNotas = aluno.notas.length
        aluno.media = soma / quantidadeNotas
    }
    listaAlunosFormatada.map(calcularMedia)
    return listaAlunosFormatada
}

function compararAlunos(listaAlunosComMedia) {
    let melhoresAlunos = []
    let amostraMelhorAluno = amostraDeAlunoDeMaiorMedia(listaAlunosComMedia)
    melhoresAlunos = melhoresAlunos.concat(listaAlunosComMedia.filter(aluno => {
        return aluno.media >= amostraMelhorAluno.media
    }))
    return melhoresAlunos
}

function amostraDeAlunoDeMaiorMedia(listaAlunosComMedia) {
    let amostraMelhorAluno = listaAlunosComMedia[0]
    for (aluno of listaAlunosComMedia) {
        if (aluno.media > amostraMelhorAluno.media) {
            amostraMelhorAluno = aluno
        }
    }
    return amostraMelhorAluno
}