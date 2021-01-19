/*
    O var PERMITE que uma variável seja redeclarada, o LET NÃO. Recomenda-se utilizar mais o LET
*/
var a = 3
let b = 4
const c = 5

var a = 30
/*
    As próximas duas linhas abaixo gerará um erro
    let b = 40
    c = 50
*/

b = 40