const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 5; i++){
    numeros.push(prompt("Informe um número: "));
}
console.log(numeros);

//spread_rest paa copiar o array numeros
const numerosOrdenados = [...numeros];

//ordenar
numerosOrdenados.sort((numero1, numero2) => numero1 - numero2);

console.log(numerosOrdenados);