let prompt = require("prompt-sync")();

let frutas = ["banana", "maçã", "pera"];

console.log(`Fruta da segunda posição ${frutas[1]}`);

let condition = 1;

while (condition <=3) {
    frutas.push(prompt("Informe o nome de uma fruta"));
    condition++;
}

console.log(frutas);