export = {};

// Exemplo 02 - Extensão de Múltiplas Interfaces
interface Cachorro {
    nome: string;

}

interface Gato {
    nome: string;

}

interface Animal extends Cachorro, Gato {
    idade: number;

}

const animal: Animal = {
    nome: 'Farofa',
    idade: 5,

};

console.log(animal);
