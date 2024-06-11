// ==> Exemplo 01 - functions (Named function)
function multiplicarNumeros (num_1: number, num_2: number): number {
    return num_1 * num_2
    
}

const resultado_2 = multiplicarNumeros(2, 2);

console.log();
console.log(resultado_2);
console.log();

// ==> Exemplo 02 - Função anônima  (function expression)
const saudar_1 = function (mensagem: string) {
    return mensagem;
    
}

console.log(saudar_1('Olá Hilário! Você é lindo e maravilhoso!'));
console.log();

// ==> Exemplo 03 - functions (Arrow function expression)
const saudar_02 = (mensagem: string) => {
    return mensagem;

}

console.log(saudar_02('Olá Hilário! Você é lindo e maravilhoso! E muito inteligente...'));
console.log();


// ==> Exemplo 04 - functions (function constructor)
const saudar_03 = new Function ('mensagem', 'return "Fala " + mensagem');

console.log(saudar_03('Galera!'));
