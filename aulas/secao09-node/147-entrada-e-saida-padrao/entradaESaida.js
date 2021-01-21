// Verifica se '-a' está setada como flag dentro do array "argv"
const flag = process.argv.indexOf('-a') !== -1

if (flag) {
    process.stdout.write('Olá, anônimo.\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {

        // Na saída do windows \r\n = Quebra de linha, no Unix é \n
        const nome = data.toString().replace('\r\n', '')
        process.stdout.write(`Prazer em conhecê-lo(a), ${nome}!!\n`)
        process.exit()
    })
}