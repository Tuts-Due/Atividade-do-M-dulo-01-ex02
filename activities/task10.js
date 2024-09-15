/*10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */
const prompt = require('prompt-sync')();

// Cria um array vazio para armazenar as vendas
const vendas = [];

// Função para criar um objeto venda
function criarVenda() {
  const produto = prompt("Digite o nome do produto: ");
  const quantidade = parseInt(prompt("Digite a quantidade vendida: "));
  const valorUnitario = parseFloat(prompt("Digite o valor unitário do produto: "));

  return {
    produto,
    quantidade,
    valorUnitario
  };
}

// Loop para adicionar vendas ao array
while (true) {
  const venda = criarVenda();
  vendas.push(venda);

  const continuar = prompt("Deseja adicionar outra venda? (S/N): ");
  if (continuar.toUpperCase() !== 'S') {
    break;
  }
}

// Inicializa o valor total das vendas
let valorTotal = 0;

// Calcula o valor total utilizando forEach
vendas.forEach(venda => {
  valorTotal += venda.quantidade * venda.valorUnitario;
});

// Exibe o valor total das vendas
console.log("O valor total das vendas é: R$", valorTotal.toFixed(2));