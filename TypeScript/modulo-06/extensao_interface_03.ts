export = { };

// Exemplo 01 - Interfaces com extends
interface Animal {
    nome: string;
    idade: number;
    porte: string;

}

interface Cachorro extends Animal {
    raca: string;

}

const cachorro: Cachorro = {
    nome: 'Price',
    idade: 2,
    porte: 'Médio',
    raca: 'Spitz Alemão',

};

console.log(cachorro);

// Exemplo 03 - Uso do Omit
interface Funcionario {
    id: number;
    nome: string;
    salario: number;

}

interface Desenvolvedor extends Omit<Funcionario, 'id'> {
    id: string;
    linguagemProgramacao: string;

}

const desenvolvedor: Desenvolvedor = {
    id: 'js-123',
    nome: 'Hilário Grossi de Oliveira',
    salario: 10000,
    linguagemProgramacao: 'JavaScript',

}

console.log(desenvolvedor);
