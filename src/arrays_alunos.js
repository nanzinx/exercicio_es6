const alunos = [
    { nome: 'Renan', nota: 10},
    { nome: 'Rafa', nota: 4},
    { nome: 'Matheus', nota: 8},
    { nome: 'Alexandre', nota: 6}
]

function filtraAlunosComSeis(aluno) {
    return aluno.nota >= 6;
}

const alunosDe6 = alunos.filter (filtraAlunosComSeis)

console.log(alunosDe6);

