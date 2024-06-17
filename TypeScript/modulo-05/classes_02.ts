export = { };

// ==> Exemplo 01 - Classes
class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    
    }

    nomeCompleto (): string {
        return `${this.nome} ${this.sobrenome}`;
    
    }

}

const pessoa = new Pessoa ('Gabriel', 'Oliveira');

console.log();
console.log(pessoa.nomeCompleto());
console.log();

// ==> Exemplo 02 - Classes (sem contrutor)
class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;

}

const estudante = new Estudante ();

estudante.codigoEstudante = 1;
estudante.nomeEstudante = 'Hilário Grossi de Oliveira';

console.log('Código do Estudante...: ' + estudante.codigoEstudante);
console.log('Nome do Estudante.....: ' + estudante.nomeEstudante);
console.log();

// ==> Exemplo 03 - Classes (com contrutor)
class Estudante_1 {
    codigoEstudante: number;
    nomeEstudante: string;

    constructor (codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    
    }

    /*listarEstudante (): void {
        console.log('Código do Estudante...: ' + this.codigoEstudante);
        console.log('Nome do Estudante.....: ' + this.nomeEstudante);
        console.log();
    
    }*/
 
}

const estudante_1 = new Estudante_1 (2, 'Gabriel Oliveira');

console.log('Código do Estudante...: ' + estudante_1.codigoEstudante);
console.log('Nome do Estudante.....: ' + estudante_1.nomeEstudante);
