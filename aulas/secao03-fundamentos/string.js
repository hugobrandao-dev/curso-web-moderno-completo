const escola = "cod3r"

// Pegará os caracteres a partir da posição INICIAL informada.
console.log(escola.substring(1))

// Pegará os caracteres a partir da posição INICIAL até a posição FINAL (não mostrará) informada.
console.log(escola.substring(2, 5))

// .concat faz a concatenação de strings
console.log("Escola ".concat(escola).concat("!"))

console.log(escola.indexOf(3))

// JavaScript faz a busca por números, mesmo que ele esteja dentro de um string
console.log(escola.replace(3, 'e'))