// Verifica se -a está setada como flag dentro do array "argv"
const flag = process.argv.indexOf('-a') !== -1

if (flag) {
    process.stdout.write('Olá, anônimo.\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nomeUsuario = data.toString().replace('\n', '')

        process.stdout.write(`Prazer em conhecê-lo(a): ${nomeUsuario}.\n`)
        process.exit()
    })
}