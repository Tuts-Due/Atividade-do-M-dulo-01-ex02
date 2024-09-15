/*7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
 */
const prompt = require('prompt-sync')();

// Cria um array vazio para armazenar os produtos
const produtos = [];

// Função para criar um objeto produto
function criarProduto() {
  const nome = prompt("Digite o nome do produto: ");
  const preco = parseFloat(prompt("Digite o preço do produto: "));
  const desconto = parseFloat(prompt("Digite o desconto inicial do produto (em %): "));

  return {
    nome,
    preco,
    desconto
  };
}

// Loop para adicionar produtos ao array
while (true) {
  const produto = criarProduto();
  produtos.push(produto);

  const continuar = prompt("Deseja adicionar outro produto? (S/N): ");
  if (continuar.toUpperCase() !== 'S') {
    break;
  }
}

// Aplicar um desconto adicional de 10% em todos os produtos
produtos.forEach(produto => {
  produto.preco *= (1 - 0.1); // Aplica o desconto de 10%
});

// Exibir os produtos com o novo preço
console.log("Produtos com desconto aplicado:");
produtos.forEach(produto => {
  console.log(`Nome: ${produto.nome}`);
  console.log(`Preço com desconto: R$ ${produto.preco.toFixed(2)}`);
  console.log("-------------------");
});