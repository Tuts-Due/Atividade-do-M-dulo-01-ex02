/*1. Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/

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