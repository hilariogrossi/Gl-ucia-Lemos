export = { };

class Estudante {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor (codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    
    }

}

class Pessoa extends Estudante {
    private curso: string;

    constructor (codigoEstudante: number, nomeEstudante: string, curso: string) {
        super (codigoEstudante, nomeEstudante);
        this.curso = curso;
    
    }

    retornaDados () {
        return `
        Código do Aluno...: ${this.codigoEstudante},
        Nome do Aluno.....: ${this.nomeEstudante},
        Matéria...........: ${this.curso}.
        `;
    
    }

}

const estudade = new Pessoa (4, 'Patrícia', 'Farmácia');

console.log(estudade.retornaDados()); //urn globalThis(f, seed, [])

