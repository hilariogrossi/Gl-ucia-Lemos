export { };

// ==> Exemplo 01 - Uso do if
const numeroMaximo = 100;
let contador = 100;

if (contador < numeroMaximo) {
    contador++;

}

console.log(contador);
console.log();

// ==> Exemplo 02 - Uso do if-else
const permissaoIdadeDirigir_1 = 18;
let idade_1 = 18;

if (idade_1 >= permissaoIdadeDirigir_1) {
    console.log(`Com a idade de ${idade_1} anos você pode dirigir!`);

} else {
    console.log(`Com a idade de ${idade_1} anos você NÃO pode dirigir!`);
    
}

// ==> Exemplo 03 - Uso do if-else
const permissaoIdadeDirigir_2 = 18;
let idade_2 = 17;

if (idade_2 >= permissaoIdadeDirigir_2) {
    console.log(`Com a idade de ${idade_2} anos você pode dirigir!`);

} else {
    console.log(`Com a idade de ${idade_2} anos você NÃO pode dirigir!`);
    
}

console.log();

// ==> Exemplo 04 - if ... else if (cálculo do IMC)
let desconto: number;
let itemContador: number = 5;

if (itemContador > 0 && itemContador <= 5) {
    desconto = 5;
    
} else if (itemContador > 5 && itemContador <= 10) {
    desconto = 10;

} else {
    desconto = 15;

}

console.log(`Você obteve desconto de ${desconto} %.`);
console.log();

// ==> Exemplo 05 - Ternário (? :)
const idadeVotacao = 17;

/*if (idadeVotacao >= 18) {
    console.log('Você é elegível para votar!');
    
} else {
    console.log('Você NÃO é elegível para votar!');

}*/

const podeVotar = (idadeVotacao >= 18) ? 'Você é elegível para votar!' : 'Você NÃO é elegível para votar!';

console.log(podeVotar);
console.log();
