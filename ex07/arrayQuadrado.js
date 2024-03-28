const prompt = require('prompt-sync')();

let numeros = [];

for (let i=0; i <5; i++) {
    numeros.push(parseFloat(prompt("Informe um número: ")));
}

console.log(numeros);

const quadrados = numeros.map(numeroAtual => numeroAtual * numeroAtual)

console.log(quadrados);