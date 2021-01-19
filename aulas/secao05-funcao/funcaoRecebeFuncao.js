function executarOutraFuncao(outraFuncao) {
    outraFuncao()
}

executarOutraFuncao(function() {
    console.log('OPA!! Segunda função executada!!!')
})