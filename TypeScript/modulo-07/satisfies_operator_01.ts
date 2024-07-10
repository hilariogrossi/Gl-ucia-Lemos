export = { };

type Cidade = NomeCidade | CidadeCoordenadas;

type NomeCidade = 'Rio de Janeiro - RJ' | 'São Paulo - SP' | 'Salvador - BA' | 'Belo Horizonte - MG' | 'Governador Valadares - MG';

type CidadeCoordenadas = {
    x: number;
    y: number;

};

type Pessoa = {
    localNascimento: Cidade;
    residenciaAtual: Cidade;

};

const pessoa = {
    localNascimento: 'Governador Valadares - MG',
    residenciaAtual: { x: 9, y: 10},

} satisfies Pessoa;

console.log(pessoa.localNascimento.toUpperCase());
console.log(pessoa.residenciaAtual);
