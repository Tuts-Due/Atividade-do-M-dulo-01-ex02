/*5. Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.*/
const prompt = require('prompt-sync')();

const alunos = [];

// Função para criar um objeto aluno
function criarAluno() {
  const nome = prompt("Digite o nome do aluno: ");
  const nota1 = parseFloat(prompt("Digite a primeira nota: "));
  const nota2 = parseFloat(prompt("Digite a segunda nota: "));

  return {
    nome,
    nota1,
    nota2
  };
}

// Loop para adicionar alunos ao array
while (true) {
  const aluno = criarAluno();
  alunos.push(aluno);

  const continuar = prompt("Deseja adicionar outro aluno? (S/N): ");
  if (continuar.toUpperCase() !== 'S') {
    break;
  }
}

// Calcula e exibe a média de cada aluno
console.log("Médias dos alunos:");
for (const aluno of alunos) {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  console.log(`${aluno.nome}: ${media.toFixed(2)}`);
}