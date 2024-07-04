export = { };

// ==> Exemplo 01 - Type Guards: typeof
type alfanumerico = string | number;

function exibirTipo (a: alfanumerico, b: alfanumerico) {
    if (typeof a === 'number' && typeof b === 'number' ) {
        return a + b;

    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);

    } else {
        throw new Error("Argumentos inválidos! Ambos os argumentos devem ser númericos ou strings!");
        
    }

}

console.log(exibirTipo(10, 20));
console.log(exibirTipo('Hilário ', 'Grossi de Oliveira'));
//console.log(exibirTipo(10, '5'));
console.log();

// ==> Exemplo 02 - Type Guards: instanceof
class Carro {
    nome: string;
    marca: string;

    constructor (nome: string, marca: string) {
        this.nome = nome;
        this.marca = marca;

    }

}

class Moto {
    nome: string;
    ano: number;

    constructor (nome: string, ano: number) {
        this.nome = nome;
        this.ano = ano;

    }

}

function detalhesVeiculo (veiculo: Carro | Moto) {
    if (veiculo instanceof Carro) {
        return `O nome do carro é ${veiculo.nome} e a marca é ${veiculo.marca}.`;

    } else if (veiculo instanceof Moto) {
        return `O nome da moto é ${veiculo.nome} e o ano é ${veiculo.ano}.`;

    }

}

const carro = new Carro ('Gol', 'Volks');
console.log(carro);
console.log(detalhesVeiculo(carro));
console.log();

const moto = new Moto ('CBR', 2020);
console.log(moto);
console.log(detalhesVeiculo(moto));
console.log();

// ==> Exemplo 03 - Type Guards: in
interface Animal {
    grupo: string;

}

class Peixe implements Animal {
    grupo: string;
    corPeixe: string;

    constructor (grupo: string, corPeixe: string) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;

    }

}

class Passaro implements Animal {
    grupo: string;
    corPena: string;

    constructor (grupo: string, corPena: string) {
        this.grupo = grupo;
        this.corPena = corPena;

    }

}

function nadar (grupo: string, corPeixe: string){
    console.log(`O ${grupo} ${corPeixe} está nadando...`);
    
}

function voar (grupo: string, corPena: string) {
    console.log(`O ${grupo} ${corPena} está voando...`);
    
}

function mover (animal: Animal, cor: string) {
    if ('corPeixe' in animal) {
        nadar((animal as Peixe).grupo, cor);

    } else if ('corPena' in animal) {
        voar((animal as Passaro).grupo, cor);

    }

}

mover(new Peixe ('Peixe', 'Azul'), 'Azul');
mover(new Passaro ('Pássaro', 'Preto'), 'Preto');
