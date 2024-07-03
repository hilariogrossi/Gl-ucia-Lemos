export = { };

// Exemplo - Intersection Types
interface DadosBancarios {
    conta: number;
    agencia: number;
    banco: string;

}

interface Cliente {
    nome: string;
    email: string;

}

interface DadosPessoaFisica {
    cpf: number;

}

type DadosClientePessoaFisica = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosClientePessoaFisica_1: DadosClientePessoaFisica = {
    conta: 123456,
    agencia: 123,
    banco: 'Inter',
    nome: 'Hilário Grossi de Oliveira',
    email: 'hilariogrossi@yahoo.com.br',
    cpf: 73319805649,

}

function dadosClientePessoaFisica_2 (dadosCliente: DadosClientePessoaFisica) {
    return `
    Conta.....: ${dadosCliente.conta}
    Agência...: ${dadosCliente.agencia}
    Banco.....: ${dadosCliente.banco}
    Nome......: ${dadosCliente.nome}
    Email.....: ${dadosCliente.email}
    CPF.......: ${dadosCliente.cpf}`;

}

console.log(dadosClientePessoaFisica_2(dadosClientePessoaFisica_1));
