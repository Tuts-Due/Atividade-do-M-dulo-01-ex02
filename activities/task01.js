const prompt = require('prompt-sync')();
let carros = [];

while (true) {
    const carro = {
        marca: prompt("Digite a marca do carro:"),
        modelo: prompt("Digite o modelo do carro:"),
        ano: parseInt(prompt("Digite o ano do carro:")),
        cor: prompt("Digite a cor do carro:")
    };

    carros.push(carro);

    const continuar = prompt("Deseja cadastrar outro carro? (S/N):");
    if (continuar.toUpperCase() !== 'S') {
        break;
    }
}


for (let i = 0; i < carros.length; i++) {
    console.log(`Carro ${i + 1}:`);
    for (let propriedade in carros[i]) {
        console.log(propriedade + ": " + carros[i][propriedade]);
    }
    console.log("-------------------");
}