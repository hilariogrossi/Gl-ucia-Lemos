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

class FuncionarioPJ extends Funcionario {
    constructor (Nome: string, Sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
        super (Nome, Sobrenome);

    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
        
    }

}

const funcionarioCLT = new FuncionarioCLT ('Hilário', 'Grossi de Oliveira', 10000);
const funcionarioPJ = new FuncionarioPJ ('Hilário', 'Grossi de Oliveira', 120, 160);

console.log(`${funcionarioCLT.retornarNomeCompleto}`);
console.log(`Salário CLT Final R$ ${funcionarioCLT.retornarSalario()},00`);

console.log();

console.log(funcionarioPJ.retornarNomeCompleto);
console.log(`Recebimento PJ Final: R$ ${funcionarioPJ.retornarSalario()},00`);

console.log();

console.log(funcionarioCLT.emitirContraCheque());
console.log();

console.log(funcionarioPJ.emitirContraCheque());
console.log();
