/*
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.*/
const prompt = require('prompt-sync')();

// Cria um array vazio para armazenar os funcionários
const funcionarios = [];

// Função para criar um objeto funcionário
function criarFuncionario() {
  const nome = prompt("Digite o nome do funcionário: ");
  const cargo = prompt("Digite o cargo do funcionário: ");
  const salario = parseFloat(prompt("Digite o salário do funcionário: "));

  return {
    nome,
    cargo,
    salario
  };
}

// Loop para adicionar funcionários ao array
while (true) {
  const funcionario = criarFuncionario();
  funcionarios.push(funcionario);

  const continuar = prompt("Deseja adicionar outro funcionário? (S/N): ");
  if (continuar.toUpperCase() !== 'S') {
    break;
  }
}

// Solicita o salário mínimo para filtrar
const salarioMinimo = parseFloat(prompt("Digite o salário mínimo para filtrar: "));

// Filtra os funcionários e exibe os resultados
console.log("Funcionários com salário maior que", salarioMinimo);
for (const funcionario of funcionarios) {
  if (funcionario.salario > salarioMinimo) {
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
    console.log("-------------------");
  }
}