export = { };

// ==> Exemplo 01: Get
class Quadrado {
    private _largura = 6;
    private _altura = 12;

    get calcularQuadrado() {
        return this._largura * this._altura;
    
    }

}

console.log(new Quadrado().calcularQuadrado);
console.log();

// ==> Exemplo 02: Set
class Pessoa {
    nome: string;

    retornarNome(setNome: string) {
        this.nome = setNome;
    
    }

}

const pessoa = new Pessoa();

pessoa.retornarNome('Hilário Oliveira.');

console.log('Meu nome é ...: ' + pessoa.nome);
console.log();

// ==> Exemplo 03: Get [Explicação mais densa]
class Estudante_01 {
    private _nome = 'Hilário Grossi de Oliveira';
    private _semestre: number;
    private _curso: string;

    public get nomeEstudante() {
        return this._nome;

    }

}

const estudante_01 = new Estudante_01();
const resultado_01 = estudante_01.nomeEstudante;

console.log(resultado_01);
console.log();

// ==> Exemplo 04: Set/Get [Explicação mais densa]

class Estudante_02 {
    nome: string;
    semestre: number;
    curso: string;

    constructor(nomeEstudante: string, semestreEstudante: number, cursoEstudante: string) {
        this.nome = nomeEstudante;
        this.semestre = semestreEstudante;
        this.curso = cursoEstudante;

    }

    public get cursos() {
        return this.curso;

    }

    public set cursos(setCurso: string) {
        this.curso = setCurso;

    }

}

const estudante_02 = new Estudante_02('Hilário Grossi de Oliveira', 6, 'Farmácia');

console.log(estudante_02);
console.log();

estudante_02.curso = 'Análise e Desenvolvimento de Sistemas';
estudante_02.semestre = 1;
console.log(estudante_02);
console.log();
