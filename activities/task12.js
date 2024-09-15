/*12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades. */
const prompt = require('prompt-sync')();

// Cria um array vazio para armazenar os produtos em estoque
const estoque = [];

// Função para criar um objeto produto
function criarProduto() {
  const produto = prompt("Digite o nome do produto: ");
  const quantidade = parseInt(prompt("Digite a quantidade em estoque: "));
  const minimo = parseInt(prompt("Digite a quantidade mínima em estoque: "));

  return {
    produto,
    quantidade,
    minimo
  };
}

// Loop para adicionar produtos ao array
while (true) {
  const produto = criarProduto();
  estoque.push(produto);

  const continuar = prompt("Deseja adicionar outro produto? (S/N): ");
  if (continuar.toUpperCase() !== 'S') {
    break;
  }
}

// Atualizando a quantidade dos produtos abaixo do mínimo
estoque.forEach(item => {
  if (item.quantidade < item.minimo) {
    item.quantidade *= 2;
    console.log(`A quantidade de ${item.produto} foi duplicada para ${item.quantidade}.`);
  }
});

// Exibindo o estoque atualizado (opcional)
console.log("Estoque atualizado:");
estoque.forEach(item => {
  console.log(`${item.produto}: ${item.quantidade}`);
});