// Arrays são ESTRUTURA INDEXADAS
const valores = [8.9, 7.6, 9.5, 4.1]
// A modificação abaixo NÃO funcinará
// valores = [9.8, 6.7, 5.9, 1.4]

// Podemos modificar, um a um, os valores de uma CONSTANTE ARRAY (???).
valores[0] = 9.8
valores[1] = 6.7
valores[2] = 5.9
valores[3] = 1.4

// Retorna "undefined"
console.log(valores[4])

// Podemos adicionar novos valores a uma constante Array (???)
valores.push(3.2, 2.1)

// Vai deletar o item e indicará que sua posição é um ITEM VAZIO.
delete valores [0]
/*
    Podemos adicionar um novo valor, até mesmo de outro tipo, embora não seja
    recomendado. Nesse caso, ele indicará que há posições vazias, antes do index 10.
*/
valores[10] = 'Hugo'
console.log(valores)