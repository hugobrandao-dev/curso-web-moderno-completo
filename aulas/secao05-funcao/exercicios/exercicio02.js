/**
 * Os triângulos podem ser classificados em 3 tipo quanto ao tamanho
 * de seus lados:
 * Equilátero - Os três lados são iguais;
 * Isósceles: Dois lados iguais;
 * Escaleno: Todos os lados diferentes.
 * Crie uma função que recebe os comprimentos dos três lados
*/

function retornarTipoTriangulo(a, b, c) {
    let tipo = ''
    if (a === b && b === c && a === c) {
        tipo = 'Equilátero'
    } else if (a === b || b === c || a === c) {
        tipo = 'Isósceles'
    } else {
        tipo = 'Escaleno'
    }
    return tipo
}

console.log(retornarTipoTriangulo(1,2,3))
console.log(retornarTipoTriangulo(1,2,2))
console.log(retornarTipoTriangulo(3,3,3))