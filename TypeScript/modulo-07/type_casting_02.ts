export = { };

// ==> Exemplo 01 - Type Casting 'as'
const nome: unknown = 'Hilário Grossi de Oliveira';
console.log((nome as string).toUpperCase());
console.log();

// ==> Exemplo 02 - Type Casting '< >'
const carro = 'Corolla';
const tamnhoString: number = (<string>carro).length;

console.log(`O tamnho da string (${carro}) é...: ${tamnhoString} caractere(s).`);
