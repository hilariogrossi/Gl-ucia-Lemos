export = { };

class Funcionario {
    static contratacoes = 0;

    constructor (
        private nome: string,
        private sobrenome: string,
        private titulo: string,

    ) {
        Funcionario.contratacoes++;

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

console.log(Funcionario.contratacoes);
