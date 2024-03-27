const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 5; i++){
    numeros.push(parseFloat(prompt("Informe um número: ")));
}
console.log(numeros);

//spread_rest paa copiar o array numeros
const numerosOrdenados = [...numeros];

//ordem crescente
numerosOrdenados.sort();

//orden decrescente
//numerosOrdenados.sort((numero1, numero2) => numero2 - numero1)


console.log("A lista dos números ordenados é "+ numerosOrdenados);