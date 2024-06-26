export = { };

abstract class Funcionario {
    constructor (private nome: string, private sobrenome: string) {

    }

    abstract retornarSalario (): number;
    get retornarNomeCompleto (): string {
        return `${this.nome} ${this.sobrenome}`;

    }

    emitirContraCheque (): string {
        return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;

    }

}

// let funcionario = new Funcionario ('Hilário', 'Grossi de Oliveira'); ==> Cannot create an instance of an abstract class.

class FuncionarioCLT extends Funcionario {
    constructor (Nome: string, Sobrenome: string, private Salário: number) {
        super (Nome, Sobrenome);

    }

    retornarSalario(): number {
        return this.Salário;
        
    }

}

const funcionarioCLT = new FuncionarioCLT ('Hilário', 'Grossi de Oliveira', 10000);

console.log(funcionarioCLT);
