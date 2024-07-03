// Intersection Types
interface IEndereco {
    rua: string;
    bairro: string;
    cidade: string;

}

interface IPessoa {
    nome: string;
    idade: number;
    profissao: string;

}

type IEnderecoPessoa = IEndereco & IPessoa;

const enderecoPessoa_1: IEnderecoPessoa = {
    nome: 'Hilário Grossi de Oliveira',
    idade: 53,
    profissao: 'Profissional de TI',
    rua: 'Rua Governador Bias Fortes, 210',
    bairro: 'Centro',
    cidade: 'Espera Feliz - MG',

}

function enderecoPessoa_2 (nome: string, idade: number, 
    profissao: string, rua: string, 
    bairro: string, cidade: string) {
    return `
    Nome........: ${enderecoPessoa_1.nome}
    Idade.......: ${enderecoPessoa_1.idade}
    Profissão...: ${enderecoPessoa_1.profissao}
    Rua.........: ${enderecoPessoa_1.rua}
    Bairro......: ${enderecoPessoa_1.bairro}
    Cidade......: ${enderecoPessoa_1.cidade}
    `;

}

console.log(enderecoPessoa_1);
console.log(enderecoPessoa_2(
    enderecoPessoa_1.nome, 
    enderecoPessoa_1.idade, enderecoPessoa_1.profissao, 
    enderecoPessoa_1.rua, enderecoPessoa_1.bairro, enderecoPessoa_1.cidade
));

