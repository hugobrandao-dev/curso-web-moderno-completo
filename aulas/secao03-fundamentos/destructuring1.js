const pessoa = {
    nome: 'Hugo',
    idade: 21,
    altura: 1.69,
    cpf: 12345678911,
    endereco: {
        rua: 'Fulano de tal',
        bairro: 'Ciclano',
        numero: 1234,
    }
}

/**
 * Nesse caso, o uso de chaves significa que estamos utilizando a desestruturação.
 * Onde, dentro delas, colocamos os nomes do atributos ou métodos que queremos obter,
 * seguido do nome do objeto que queremos fazer a extração, neste caso do objeto "pessoa".
 */
const { nome, cpf } = pessoa
console.log(`O CPF de ${ nome } é ${cpf}.`)

/**
 * Podemos ainda renomear as variáveis no contexto léxico onde estão sendo extraídas,
 * fazendo uso dos dois pontos, seguindo da sua renomeação.
 */
const { idade: i, altura: a } = pessoa
console.log(`${ nome } tem ${ i } anos e ${ a }m de altura.`)

/**
 * Podemos colocar VALORES PADRÕES, para caso não esteja presente, dentro do objeto, 
 * as variáveis que desejamos extrair. Caso não haja a variável e nem um valor padrão para
 * caso não for encontrada, o JavaScript retornará "undefined" para a mesma.
 */
const { peso = 0, sobrenome} = pessoa
console.log(`${ nome } tem sobrenome ${ sobrenome } e pesa ${ peso }kg.`)

/**
 * Para buscar campos dentro de objetos aninhados:
 */
const { endereco: { bairro, rua }} = pessoa
console.log(`${ nome } mora no bairro ${ bairro } e na rua ${ rua }.`)