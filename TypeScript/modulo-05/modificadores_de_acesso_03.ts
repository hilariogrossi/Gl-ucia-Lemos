export = { };

// ==> Exemplo 01 - Modificador: public
class Estudante_01 {
    codigoEstudante: number;
    nomeEstudante: string;

}

const estudante_1 = new Estudante_01 ();

estudante_1.codigoEstudante = 5;
estudante_1.nomeEstudante = 'Cremilda';

console.log(estudante_1.codigoEstudante);
console.log(estudante_1.nomeEstudante);
console.log();

// ==> Exemplo 02 - Modificador: private
class Estudante_02 {
    codigoEstudante: number;
    nomeEstudante: string;
    private idade: number;

    constructor (codigoEstudante: number, nomeEstudante: string, idade: number) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    
    }

    retornarDadosEstudante () {
        return `
        Código do Aluno...: ${this.codigoEstudante},
        Nome do Aluno.....: ${this.nomeEstudante},
        Idade do Aluno....: ${this.idade}.
        `;
    
    }

}

const estudande_02 = new Estudante_02 (123, 'Joana D´ark', 25);

console.log(estudande_02.retornarDadosEstudante ());
console.log();

// ==> Exemplo 03 - Modificador: private

// ==> Exemplo 04 - Modificador: protected
class Estudante_03 {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor (codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    
    }

}

class Pessoa extends Estudante_03 {
    private curso: string;

    constructor (codigoEstudante: number, nomeEstudante: string, curso: string) {
        super (codigoEstudante, nomeEstudante);
        this.curso = curso;
    
    }

    returnarDadosAlunos () {
        return `
        Código do Aluno...: ${this.codigoEstudante},
        Nome do Aluno.....: ${this.nomeEstudante},
        Matéria...........: ${this.curso}.
        `;
    
    }

}

const estudande_03 = new Pessoa (321, 'João Carlos de Almeida', 'Matemática');

console.log(estudande_03.returnarDadosAlunos());

// ==> Exemplo 05 - Modificador: readonly
class Funcionario_01 {
    readonly dataNascimento: Date;

    constructor (dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    
    }

}

const funcionario_01 = new Funcionario_01 (new Date(1970, 10, 21));

// funcionario.dataNascimento = new Date (1970, 10, 22); Cannot assign to 'dataNascimento' because it is a read-only property.

console.log(funcionario_01);
console.log();

// ==> Exemplo 06 - Modificador: readonly
class Funcionario_02 {
    constructor (readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    
    }

}

const funcionario_02 = new Funcionario_02 (new Date(1970, 10, 21));

console.log(funcionario_02);
console.log();

// ==> Exemplo 07 - Modificador: readonly
class Funcionario_03 {
    nome: string;
    readonly codigoFuncionario: number;

    constructor (nome: string, codigo: number) {
        this.codigoFuncionario = codigo;
        this.nome = nome;
    
    }

}

const funcionario_03 = new Funcionario_03 ('Hilário Grossi de Oliveira', 1);

console.log(funcionario_03);
console.log();

// ==> Exemplo 07 - Modificador: readonly Interface
interface IFuncionario {
    codigoFuncionario: number;
    nomeEmpregado: string;

}

const funcionario_04: Readonly<IFuncionario> = {
    codigoFuncionario: 5,
    nomeEmpregado: 'Thiago Grossi de Oliveira',

};

// funcionario_04.codigoFuncionario = 6; Cannot assign to 'codigoFuncionario' because it is a read-only property.
// funcionario_04.nomeEmpregado = 'Gustavo Grossi de Oliveira'; Cannot assign to 'codigoFuncionario' because it is a read-only property.

console.log(funcionario_04);
console.log();

const funcionario_05: IFuncionario = {
    codigoFuncionario: 5,
    nomeEmpregado: 'Thiago Grossi de Oliveira',

};

funcionario_05.codigoFuncionario = 6;
funcionario_05.nomeEmpregado = 'Gustavo Grossi de Oliveira';

console.log(funcionario_05);
console.log();
