export = { };

interface Animal {
    nome: string;
    idade: number;
    tamamho: string;

}

interface Cachorro extends Animal {
    raca: string;

}

const cachorro: Cachorro = {
    nome: 'Price',
    idade: 2,
    tamamho: 'Médio',
    raca: 'Spitz Alemão',

}

console.log(cachorro);
