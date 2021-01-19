function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`Consegui converter o ${ valor }`)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(4)
seForVerdadeEuFalo('teste')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})