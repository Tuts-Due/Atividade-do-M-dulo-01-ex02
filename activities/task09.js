/*9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/
const prompt = require('prompt-sync')();

// Cria um array vazio para armazenar os clientes
const clientes = [];

// Função para criar um objeto cliente
function criarCliente() {
  const nome = prompt("Digite o nome do cliente: ");
  const idade = parseInt(prompt("Digite a idade do cliente: "));
  const cidade = prompt("Digite a cidade do cliente: ");

  return {
    nome,
    idade,
    cidade
  };
}

// Loop para adicionar clientes ao array
while (true) {
  const cliente = criarCliente();
  clientes.push(cliente);

  const continuar = prompt("Deseja adicionar outro cliente? (S/N): ");
  if (continuar.toUpperCase() !== 'S') {
    break;
  }
}

// Contador para clientes com mais de 30 anos
let contadorMaiores30 = 0;

// Itera sobre os clientes e incrementa o contador se a idade for maior que 30
clientes.forEach(cliente => {
  if (cliente.idade > 30) {
    contadorMaiores30++;
  }
});

// Exibe o resultado
console.log(`Há ${contadorMaiores30} clientes com mais de 30 anos.`);