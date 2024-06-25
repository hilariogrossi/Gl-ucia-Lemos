export = { };

type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro {
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static QTD_CACHORRO_VENDIDO = 0;

    constructor(nome: string, idade: number, racas: Raca[]) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;

        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
        
    }

    public exibirInformacao(): void {
        console.log(`O Cachorro ${this.nome} tem ${this.idade} anos.`);
        
    }

}

const cachorro_01 = new Cachorro('Pipoca', 4, ['Spitz Alemão']);
console.log(cachorro_01.exibirInformacao());

const cachorro_02 = new Cachorro('Farofa', 6, ['Yorkshire']);
console.log(cachorro_02.exibirInformacao());
