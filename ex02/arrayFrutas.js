let prompt = require("prompt-sync")();
let frutas = [];
console.log(frutas);

let condition = 1;

while (condition <=3) {
    frutas.push(prompt("Informe o nome de uma fruta: "));
    condition++;
}
console.log(frutas);

frutas.push(prompt("Mais uma fruta. "));
frutas.shift();
console.log(frutas);