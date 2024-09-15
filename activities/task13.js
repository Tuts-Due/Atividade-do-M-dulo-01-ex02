/*13. Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
 */
const prompt = require('prompt-sync')();

// Criando o objeto carrinho
const carrinho = {
    itens: []
};

// Função para adicionar um item ao carrinho
function adicionarItem() {
    const nome = prompt("Digite o nome do produto: ");
    const quantidade = parseInt(prompt("Digite a quantidade: "));
    const precoUnitario = parseFloat(prompt("Digite o preço unitário: "));

    const item = { nome, quantidade, precoUnitario };
    carrinho.itens.push(item);
    console.log(`${quantidade} ${nome}(s) adicionado(s) ao carrinho.`);
}

// Função para calcular o valor total do carrinho
function calcularValorTotal() {
    let valorTotal = 0;
    carrinho.itens.forEach(item => {
        valorTotal += item.quantidade * item.precoUnitario;
    });
    return valorTotal;
}

// Loop principal para interação com o usuário
while (true) {
    console.log("Opções:");
    console.log("1. Adicionar item");
    console.log("2. Calcular valor total");
    console.log("3. Sair");
    const opcao = parseInt(prompt("Digite a opção desejada: "));

    switch (opcao) {
        case 1:
            adicionarItem();
            break;
        case 2:
            const total = calcularValorTotal();
            console.log("O valor total do carrinho é: R$", total.toFixed(2));
            break;
        case 3:
            console.log("Saindo...");
            process.exit();
        default:
            console.log("Opção inválida.");
    }
}