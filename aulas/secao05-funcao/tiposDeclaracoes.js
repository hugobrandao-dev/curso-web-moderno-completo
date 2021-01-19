// Function declaration
console.log(somar(10,3)) // Se coloca antes somente na function declaration
function somar(x, y) {
    return x + y
}

// Function expression
const subtrair = function(x, y) {
    return x - y
}
console.log(subtrair(5,4))

// Named function expression
const multiplicar = function multiplicar(x, y) {
    return x * y
}
console.log(multiplicar(4,7))