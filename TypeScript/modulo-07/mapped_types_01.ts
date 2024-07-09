export = { };

interface Pessoa {
    nome: string;
    idade: number;
    email: string;

}

type PessoaOpcional = {
    [P in keyof Pessoa]?: Pessoa[P];

};

const pessoa: Pessoa = {
    nome: 'Hilário Grossi de Oliveira',
    idade: 53,
    email: 'hilariogrossi@yahoo.com.br',

};

const pessoaOpcional: PessoaOpcional = {
    nome: 'Gabriel M M G de Oliveira',

};

console.log(pessoa);
console.log();
console.log(pessoaOpcional);
