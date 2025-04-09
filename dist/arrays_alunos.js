"use strict";

var alunos = ['Renan', 'Rafa', 'Matheus', 'Alexandre'];
var alunos2 = alunos.map(function (itemAtual) {
  return itemAtual = {
    nome: itemAtual,
    nota: 6
  };
});
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var notaMinima = numeros.map(function (numeroAtual) {
  return numeroAtual >= 6;
});
console.log(notaMinima);
alunos2.push({
  nome: 'Sebastião',
  nota: 4
});
var todosOsAlunosTemSeis = alunos2.every(function (item) {
  return item.nota === 6;
});
console.log(todosOsAlunosTemSeis);
var existeAlgumAlunoDe4 = alunos2.some(function (item) {
  return item.nota === 4 && item.nota === 6;
});
console.log(existeAlgumAlunoDe4);
function filtraAlunosComQuatro(aluno) {
  return aluno.nota === 4;
}
var alunosDe4 = alunos2.filter(filtraAlunosComQuatro);
console.log(alunosDe4);