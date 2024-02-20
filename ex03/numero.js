const prompt = require("prompt-sync")();
//array com valores fixos, mostrando um por um.
/* let numeros = [5,6,7,8,10];

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    console.log(element);
} */

// Add no array as respostas do usuario.
let numeros = [];

for (let i = 1; i <= 5; i++) {
    let numero = prompt("Informe um número. ");
    numeros.push(numero);

}
console.log(numeros);