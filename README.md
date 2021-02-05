########################################################
PLATAFORMA DE ENSINO: Udemy
NOME DO CURSO: Curso web moderno completo com JavaScript 2020 + Projetos
PROFESSOR: Leonardo Leitão
########################################################

-> Quanto as aulas:
Nessa pasta ESTÃO CONTIDAS boa parte das aulas feitas no curso.
NÃO ESTÃO CONTIDAS aulas cujo conhecimento passado eu já possuía.
Podem existir PEQUENAS DIFERENÇAS entre os exemplos feitos em sala e o que eu fiz.

-> Quanto aos exercícios das listas:
A MAIORIA ESTÁ FEITO, os que não fiz estão marcados com "NÃO FEITO"

-> OBSERVAÇÕES

- 19/01/2021
Problema: Quando se copiam os paths pelo Visual Studio Code dos 
arquivos ou pastas a serem excluidos, eles vem o "\", separando a 
hierarquia de pasta/arquivo, o gitignore só aceita o "/".
Solução: Apenas subistitui "\" por "/".

- 25/01/2021
Problema: Na saída de dados utilizando o process.stdio.write, quando 
se fazia o tratamento de dados (para evitar que a 'enter' viesse junto 
com a resposta do usuário), ao tentarmos subitituir \n para por '',
ocorria um bug onde a primeira letra era suprimida.
Solução: No windows a quebra de linha é \r\n, ao invés de somente \n, 
sendo assim, só fiz a substituição, ficando replace('\r\n', '').

- 05/02/2021
Problema: Na aula 162, o professor faz um exemplo de Promise utilizando
setTimeout, para simular o tempo de resposta de uma requisição, na
função que retorna uma promise temos um parâmetro com seu valor 
padrão, que é o tempo que será usado no setTimeout, porém, quando 
queremos executar essa função mais de uma vez, somente a chamada dessa 
função aceita um novo valor de tempo que seja diferente do valor que 
colocamos como padrão. Esse problema também foi relatado por outros
alunos na parte de "Perguntas e resposta" da Udemy.
Solução: AINDA NÃO HÁ.