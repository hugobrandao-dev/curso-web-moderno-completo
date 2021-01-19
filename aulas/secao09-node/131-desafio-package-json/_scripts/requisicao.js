const axios = require('axios')

module.exports.fazerRequisicao = function(url) {
    axios.get(url).then(response => {
        const filtrarPaisChina = funcionario => funcionario.pais === 'China'
        const filtrarGeneroFeminino = funcionario => funcionario.genero === 'F'
        const filtrarSalario = (funcionarioAtual, proximoFuncionario) => {
            return proximoFuncionario.salario < funcionarioAtual.salario ? proximoFuncionario : funcionarioAtual
        }

        let dadosFiltrados = response.data.filter(filtrarPaisChina).filter(filtrarGeneroFeminino).reduce(filtrarSalario)
        
        console.log(dadosFiltrados)
    })
}