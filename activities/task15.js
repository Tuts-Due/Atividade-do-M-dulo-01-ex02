/*15. Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.*/
const prompt = require('prompt-sync')();

// Criando o array de transações
const transacoes = [];

// Função para adicionar uma transação
function adicionarTransacao() {
  const tipo = prompt("Digite o tipo da transação (entrada ou saída): ");
  const valor = parseFloat(prompt("Digite o valor da transação: "));

  transacoes.push({ tipo, valor });
}

// Função para calcular o saldo final
function calcularSaldoFinal() {
  let saldo = 0;
  transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
      saldo += transacao.valor;
    } else {
      saldo -= transacao.valor;
    }
  });
  return saldo;
}

// Loop principal para interação com o usuário
while (true) {
  console.log("Opções:");
  console.log("1. Adicionar transação");
  console.log("2. Calcular saldo final");
  console.log("3. Sair");
  const opcao = parseInt(prompt("Digite a opção desejada: "));

  switch (opcao) {
    case 1:
      adicionarTransacao();
      break;
    case 2:
      const saldoFinal = calcularSaldoFinal();
      console.log("O saldo final é: R$", saldoFinal.toFixed(2));
      break;
    case 3:
      console.log("Saindo...");
      process.exit();
    default:
      console.log("Opção inválida.");
  }
}