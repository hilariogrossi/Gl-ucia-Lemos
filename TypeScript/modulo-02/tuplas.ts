// Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa_1: [string, string, number];
pessoa_1 = ['Hilário Grossi de Oliveira', 'Ciêntista de Dados', 54];
console.log(pessoa_1);
console.log();

// Exemplo 02 - Acesssando o valor da Tuplas em TypeScript
let pessoa_2: [string, string, number];
pessoa_2 = ['Hilário Grossi de Oliveira', 'Ciêntista de Dados', 54];
console.log(`A idade da pessoa ${pessoa_2[0]} é ${pessoa_2[2]}.`);
console.log();

// Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)
let pessoa_3: [Nome: string, Posição: string, Idade: number] = ['Hilário Grossi de Oliveira', 'Ciêntista de Dados', 54];
console.log(`A idade da pessoa ${pessoa_3[0]} é ${pessoa_3[2]}.`);
console.log();

// Exemplo 04 - Usando Tuplas com Sread Operator em TypeScript
let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🍓'];
console.log(...listaFrutas);
console.log();

// Exemplo 05 - Lista heterogênia de Tuplas em TypeScript
// Exemplo 06 - Uso de função com Tuplas em TypeScript
// Exemplo 07 - Labeled Tuples com Spread Operator numa função em TypeScript