/*11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente */
const prompt = require('prompt-sync')();

// Cria um array vazio para armazenar os pedidos
const pedidos = [];

// Função para criar um objeto pedido
function criarPedido() {
  const cliente = prompt("Digite o nome do cliente: ");
  const produto = prompt("Digite o nome do produto: ");
  const quantidade = parseInt(prompt("Digite a quantidade: "));

  return {
    cliente,
    produto,
    quantidade
  };
}

// Loop para adicionar pedidos ao array
while (true) {
  const pedido = criarPedido();
  pedidos.push(pedido);

  const continuar = prompt("Deseja adicionar outro pedido? (S/N): ");
  if (continuar.toUpperCase() !== 'S') {
    break;
  }
}

// Objeto para armazenar a quantidade total de produtos por cliente
const quantidadePorCliente = {};

// Agrupando os pedidos por cliente
pedidos.forEach(pedido => {
  if (!quantidadePorCliente[pedido.cliente]) {
    quantidadePorCliente[pedido.cliente] = 0;
  }
  quantidadePorCliente[pedido.cliente] += pedido.quantidade;
});

// Exibindo o resultado
console.log("Quantidade de produtos por cliente:");
for (const cliente in quantidadePorCliente) {
  console.log(`${cliente}: ${quantidadePorCliente[cliente]} produtos`);
}