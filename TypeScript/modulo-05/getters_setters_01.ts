export = { };

class Quadrado {
    private _largura = 6;
    private _altura = 12;

    get calcularQuadrado() {
        return this._largura * this._altura;
    
    }

}

console.log(new Quadrado().calcularQuadrado);


class Pessoa {
    nome: string;

    retornarNome(setNome: string) {
        this.nome = setNome;
    
    }

}

const pessoa = new Pessoa();

pessoa.retornarNome('Hilário Oliveira.');

console.log('Meu nome é ...: ' + pessoa.nome);
