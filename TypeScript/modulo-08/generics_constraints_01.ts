export = { };

interface Pessoa {
    nome: string;
    idade: number;

}

function obterPessoaIdadeMaiorQue<T extends Pessoa> (pessoas: T[], idade: number): T[] {
    return pessoas.filter(pessoa => pessoa.idade > idade);

}

const pessoas: Pessoa[] = [
    {nome: 'Hilário Grossi de Oliveira', idade: 53},
    {nome: 'Patrícia Minardi Mitre', idade: 56},
    {nome: 'Gabriel Minardi Mitre Grossi de Oliveira', idade: 24},
    {nome: 'Pedro Henrique Minardi Mitre Grossi de Oliveira', idade: 22},

];

const pessoasComIdadeMaiorQue25 = obterPessoaIdadeMaiorQue(pessoas, 25);

console.log(`A(s) pessoa(s) que tem/têm idade maior do que 25 anos é/são: `, pessoasComIdadeMaiorQue25);
