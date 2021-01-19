const variavel = "Global"

function fora() {
    const variavel = "Local"

    function dentro() {
        return variavel
    }

    /**
     * Ao retornarmos uma função, quando colocamos parênteses ela é
     * EXECUTADA, porém, quando NÃO colocamos, retornamos a função em
     * sí ("seu escopo"), sendo necessário criar uma function
     * expression (armazena esse escopo em uma variável/constante).
     */
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())