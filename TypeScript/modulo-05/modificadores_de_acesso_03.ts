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