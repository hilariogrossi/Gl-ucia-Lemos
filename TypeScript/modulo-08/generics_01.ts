// Funções Genéricas
export = { };

function retornarNumerosRandomicos(items: number[]): number {
    let numeroRandomico = Math.floor(Math.random() * items.length);
    return items[numeroRandomico];

}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(retornarNumerosRandomicos(numeros));
