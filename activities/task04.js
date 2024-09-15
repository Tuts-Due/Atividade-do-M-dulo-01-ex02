/*4. Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
*/
const prompt = require('prompt-sync')();

// Cria um array vazio para armazenar as pessoas
const pessoas = [];

// Função para criar um objeto pessoa
function criarPessoa() {
  const nome = prompt("Digite o nome da pessoa: ");
  const idade = parseInt(prompt("Digite a idade da pessoa: "));
  const cidade = prompt("Digite a cidade da pessoa: ");

  return {
    nome,
    idade,
    cidade
  };
}

// Loop para adicionar pessoas ao array
while (true) {
  const pessoa = criarPessoa();
  pessoas.push(pessoa);

  const continuar = prompt("Deseja adicionar outra pessoa? (S/N): ");
  if (continuar.toUpperCase() !== 'S') {
    break;
  }
}

// Exibir as informações das pessoas usando for...of
console.log("Informações das pessoas:");
for (const pessoa of pessoas) {
  console.log(`Nome: ${pessoa.nome}`);
  console.log(`Idade: ${pessoa.idade}`);
  console.log(`Cidade: ${pessoa.cidade}`);
  console.log("---------------");
}