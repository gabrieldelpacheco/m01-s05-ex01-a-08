const prompt = require ("prompt-sync")();

let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Informe um número. "));
    numeros.push(numero);
}

 let soma = numeros.reduce(function(valInicial, valSeguin){
    return valInicial+valSeguin
 },0)
console.log(numeros);
console.log(soma);