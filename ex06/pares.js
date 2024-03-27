const prompt = require('prompt-sync')();

let numeros = [];

for (let i=0; i <5; i++){
    numeros.push((parseFloat(prompt("Informe numero: "))));
}

console.log(numeros);