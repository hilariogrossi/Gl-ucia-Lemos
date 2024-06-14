export = { }

// ==> Exemplo 01:
function somarNumeros (...numeros: number[]) {
    let total = 0;

    numeros.forEach((numero) => (total += numero));

    return total;

}

console.log(`O valor da soma dos número(s) é: ${somarNumeros(30, 50)}`);
console.log();
console.log(`O valor da soma dos número(s) é: ${somarNumeros(70, 30, 50, 30, 20)}`);
console.log();

// ==> Exemplo 02:
function listarFrutas (frase: string, ...frutas: string[]) {
    return `${frase} ${frutas.join(', ')}`;

}

console.log(listarFrutas('Hilário, você precisa ir à feira e comprar...: ', '🥥', '🍓', '🍌', '🥑.'));
console.log();

// ==> Exemplo 03:
class Produtos {
    public exibirProdutos (...produtos: string[]): void {
        for (const produto of produtos) {
            console.log(produto);
        
        }
    
    }

}

const departamentoInformatica: Produtos = new Produtos();

console.log('Todos os produtos do departamento de informática disponíveis no estoque...: ');

departamentoInformatica.exibirProdutos (
    'Mouse',
    'NoteBook',
    'USB',
    'Monitor',
    'Teclado',
    'Webcan',

);

