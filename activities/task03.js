/*3. Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
*/
const prompt = require('prompt-sync')();

// Função para filtrar propriedades cujo valor seja maior que um limite
function filtrarPropriedades(objeto, valorLimite) {
    const novoObjeto = {};
    for (let propriedade in objeto) {
        if (typeof objeto[propriedade] === 'number' && objeto[propriedade] > valorLimite) {
            novoObjeto[propriedade] = objeto[propriedade];
        }
    }
    return novoObjeto;
}

// Função para cadastrar produtos com base no tipo e nome
function cadastrarProduto() {
    const tipoProduto = prompt("Digite o tipo de produto (ex: roupa, livro, carro): ").toLowerCase();
    let produto = {};

    if (tipoProduto === 'livro') {
        produto = {
            tipo: 'livro',
            nome: prompt("Digite o nome do livro: "),
            preco: parseFloat(prompt("Digite o preço do livro: ")),
            editora: prompt("Digite a editora do livro: ")
        };
    } else if (tipoProduto === 'carro') {
        produto = {
            tipo: 'carro',
            nome: prompt("Digite o nome do carro: "),
            preco: parseFloat(prompt("Digite o preço do carro: ")),
            marca: prompt("Digite a marca do carro: "),
            modelo: prompt("Digite o modelo do carro: ")
        };
    } else if (tipoProduto === 'roupa') {
        const tipoRoupa = prompt("Você deseja cadastrar uma camisa ou calça? ").toLowerCase();

        if (tipoRoupa === 'camisa') {
            produto = {
                tipo: 'roupa',
                subcategoria: 'camisa',
                nome: prompt("Digite o nome da camisa: "),
                preco: parseFloat(prompt("Digite o preço da camisa: ")),
                material: prompt("Digite a materia prima da camisa: ")
            };
        } else if (tipoRoupa === 'calça') {
            produto = {
                tipo: 'roupa',
                subcategoria: 'calça',
                nome: prompt("Digite o nome da calca: "),
                preco: parseFloat(prompt("Digite o preço da calça: ")),
                materia: prompt("Digite a materia da calca: ")
            };
        }
    }

    return produto;
}

// Função para listar produtos de forma organizada
function listarProdutos(produtos) {
    produtos.forEach((produto, index) => {
        console.log(`Produto ${index + 1}:`);
        for (let propriedade in produto) {
            console.log(`${propriedade}: ${produto[propriedade]}`);
        }
        console.log("-------------------");
    });
}

// Inicia uma lista de produtos
let produtos = [];

while (true) {
    const novoProduto = cadastrarProduto();
    produtos.push(novoProduto);

    const continuar = prompt("Deseja cadastrar outro produto? (S/N): ");
    if (continuar.toUpperCase() !== 'S') {
        break;
    }
}

// Filtrar produtos por preço mínimo
const valorMinimo = parseFloat(prompt("Digite o valor mínimo para filtrar: "));
const produtosFiltrados = produtos.filter(produto => filtrarPropriedades(produto, valorMinimo).preco);

// Listar produtos filtrados
console.log("Produtos com valor acima de", valorMinimo);
listarProdutos(produtosFiltrados);
