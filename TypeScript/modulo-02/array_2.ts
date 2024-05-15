// ==> Exemplo 1 - Uso de Colchetes:
let frutas_3: string[] = ['🍍', '🍊', '🍎', '🍉', '🍓'];
console.log(frutas_3[2]);
console.log();

// ==> Exemplo 2 - Array Object (Objeto Array):
let frutas_4: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🍓'];
console.log(frutas_4[4]);
console.log();

// ==> Exemplo 3 - Adicionando mais strings com o método 'push:
let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
console.log();

idiomas.push('Mandarim');
console.log(idiomas);
console.log();

idiomas.push('Italiano');
console.log(idiomas);
console.log();

// ==> Exemplo 4 - Identificar o tamanho do array - Método 'length:
console.log(idiomas.length);
console.log();

// ==> Exemplo 5 - Exemplo de Array com Spread Operator:
let listaNumeros: Array<Number> = [1, 2 , 3, 4 , 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
console.log();

// ==> Exemplo 6 - Exemplo de Array com laço de interação:
// let linguagens: string[] = new Array('JavaScript', 'Python', 'PHP', 'C#')
let linguagensArray: Array<string> = ['JavaScript', 'Python', 'PHP', 'C#'];

function funcaoLinguagens (linguagens:string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        const element = linguagensArray[i];
        console.log(element);

    }

} 

funcaoLinguagens(linguagensArray);
