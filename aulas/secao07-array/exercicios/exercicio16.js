const divisivel400Menos100 = ano => (ano % 100 === 0 && ano % 400 === 0)
const divisivelPor4E100 = ano => (ano % 100 !== 0 && ano % 4 === 0)

function verificarAnoBissexto(ano) {
    if (divisivel400Menos100(ano) || divisivelPor4E100(ano)) {
        return `O ano ${ano} é bissexto.`
    } else {
        return `O ano ${ano} NÃO é bissexto.`
    }
}

for (let ano = 2000; ano <= 2100; ano += 20) {
    console.log(verificarAnoBissexto(ano))
}