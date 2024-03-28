const prompt = require('prompt-sync')();

let numeros = [];

for (let i=0; i <5; i++){
    numeros.push((parseFloat(prompt("Informe numero: "))));
}

const soPares = numeros.filter(numeroAtual => {
    if (numeroAtual % 2 == 0) {
        return true
    }
})

console.log("Apenas números pares do array: " + soPares);