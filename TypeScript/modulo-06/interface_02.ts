export = { };

// ==> Exemplo 01: Inteface Simples
interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;

}

function exibirNome (pessoa: Pessoa) {
    return `
    Nome........: ${pessoa.nome}
    Sobrenome...: ${pessoa.sobrenome}
    Idade.......: ${pessoa.idade}
    `;

}

const hilario = {
    nome: 'Hilário',
    sobrenome: 'Grossi de Oliveira',
    idade: 53,

}

console.log(exibirNome(hilario));
console.log();

// ==> Exemplo 02: Inteface com Propriedades Opcionais
interface Livro {
    titulo: string;
    autor: string;
    paginas?: number;

}

const livro: Livro = {
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
    paginas: 358,

}

function exibirLivro (livro: Livro) {
    return `
    Nome do Livro....: ${livro.titulo}
    Autor do Livro...: ${livro.autor}
    Páginas..........: ${livro.paginas}
    `;

}

console.log(exibirLivro(livro));
console.log();

// ==> Exemplo 03: Inteface com Propriedades de Somente Leitura e Opcionais
interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;

}

const carro: Carro = {
    modelo: 'Fusca',
    ano: 1969,

}

// carro.modelo = 'Fusca 2.0' Cannot assign to 'modelo' because it is a read-only property.

console.log(carro);
console.log();

// ==> Exemplo 04: Inteface com implements Class
interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer (tipoComida: string): void;

}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor (nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;

    }

    comer (tipoComida: string) {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}.`);

    }

}

const gato = new Gato ('Mingau', 10, true);

console.log(gato);

gato.comer('Ração');

console.log();
