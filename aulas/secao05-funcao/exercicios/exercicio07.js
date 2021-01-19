/**
 * Elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
 */

function calcularBhaskara(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c
    if (delta < 0) {
        return 'Delta negativo'
    } else {
        let x1 = ( - b + Math.sqrt(delta)) / 2 * a
        let x2 = ( - b - Math.sqrt(delta)) / 2 * a
        return {x1, x2}
    }
}

console.log(calcularBhaskara(1,-9,14))
console.log(calcularBhaskara(1,-3,2))