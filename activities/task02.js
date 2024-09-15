/*2. Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

const prompt = require('prompt-sync')();

let livros = [];

while (true) {
    const livro = {
        titulo: prompt("Digite o título do livro:"),
        autor: prompt("Digite o autor do livro:"),
        anoPublicacao: parseInt(prompt("Digite o ano de publicação:")),
        genero: prompt("Digite o gênero do livro:")
    };

    // Verificando se a propriedade 'editora' existe
    let editoraExiste = false;
    for (let propriedade in livro) {
        if (propriedade === 'editora') {
            editoraExiste = true;
            break;
        }
    }

    // Se não existir, adicionando a propriedade
    if (!editoraExiste) {
        livro.editora = prompt("Digite a editora do livro:");
    }

    livros.push(livro);

    const continuar = prompt("Deseja cadastrar outro livro? (S/N):");
    if (continuar.toUpperCase() !== 'S') {
        break;
    }
}

// Exibindo os livros cadastrados
console.log("Livros cadastrados:");
for (let i = 0; i < livros.length; i++) {
    console.log(`Livro ${i + 1}:`);
    for (let propriedade in livros[i]) {
        console.log(propriedade + ": " + livros[i][propriedade]);
    }
    console.log("-------------------");
}