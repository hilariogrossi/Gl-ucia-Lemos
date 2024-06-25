export = { };

class Funcionario {
    private static contratacoes = 0;

    constructor (
        private nome: string,
        private sobrenome: string,
        private titulo: string,

    ) {
        Funcionario.contratacoes++;

    }

    public static retornarContratacoes () {
        return Funcionario.contratacoes;

    }

}

const funcionario_01 = new Funcionario (
    'Hilário', 
    'Grossi de Oliveira',
    'Developer'

);

const funcionario_02 = new Funcionario (
    'Gabriel', 
    'Minardi Mitre Grossi de Oliveira',
    'Atendente'

);

console.log(Funcionario.retornarContratacoes());
