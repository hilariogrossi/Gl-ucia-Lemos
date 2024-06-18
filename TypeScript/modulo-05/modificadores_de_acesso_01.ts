export = { };

class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
    private idade: number;

    constructor (codigoEstudante: number, nomeEstudante: string, idade: number) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;

    }

    retornarDadosAlunos () {
        return `
        Código do Aluno...: ${this.codigoEstudante},
        Nome do Aluno.....: ${this.nomeEstudante},
        Idade do Aluno....: ${this.idade}.
        `;
    
    }

}

const estudade = new Estudante (3, 'Pedro Henrique Oliveira', 22);

// console.log(estudade.idade); Property 'idade' is private and only accessible within class 'Estudante'.

console.log(estudade.retornarDadosAlunos ());
