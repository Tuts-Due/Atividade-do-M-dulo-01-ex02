/*8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes. */
const prompt = require('prompt-sync')();

// Cria um array vazio para armazenar os filmes
const filmes = [];

// Função para criar um objeto filme
function criarFilme() {
  const titulo = prompt("Digite o título do filme: ");
  const diretor = prompt("Digite o diretor do filme: ");
  const anoLancamento = parseInt(prompt("Digite o ano de lançamento do filme: "));

  return {
    titulo,
    diretor,
    anoLancamento
  };
}

// Loop para adicionar filmes ao array
while (true) {
  const filme = criarFilme();
  filmes.push(filme);

  const continuar = prompt("Deseja adicionar outro filme? (S/N): ");
  if (continuar.toUpperCase() !== 'S') {
    break;
  }
}

// Cria um novo array com apenas os títulos dos filmes
const titulosFilmes = [];
filmes.forEach(filme => {
  titulosFilmes.push(filme.titulo);
});

// Exibe os títulos dos filmes
console.log("Títulos dos filmes:");
console.log(titulosFilmes);