export = { }

// ==> Exemplo 01: 
function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
    console.log(`Id Funcionário...: ${idPessoa}`);
    console.log(`Nome.............: ${nome}`);
    

    if (email != undefined) console.log('Email............:', email);

    console.log();

}

informarDadosPessoa(1, 'Hilário Grossi de Oliveira');
informarDadosPessoa(2, 'Gabriel Minardi Mitre Grossi de Oliveira', 'gabrielminardi@gmail.com')

// ==> Exemplo 02: 
function mensagemLog(mensagem: string, usuarioId?: number) {
    const horaLog = new Date().toLocaleTimeString();

    console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)!');

}

mensagemLog('Atualizar Página!');
console.log();
mensagemLog('Usuário(a) logado(a) com sucesso! Id do Usuário:', 3);
console.log();

// ==> Exemplo 03:
type Pessoa = {
    idFuncionario: number;
    Nome: string;
    Idade?: number;
    Email?: string;

};

let pessoa_1: Pessoa;
let pessoa_2: Pessoa;
let pessoa_3: Pessoa;

pessoa_1 = {
    idFuncionario: 1,
    Nome: 'Hilário Grossi de Oliveira',

};

pessoa_2 = {
    idFuncionario: 2,
    Nome: 'Gabriel Minardi Mitre Grossi de Oliveira',
    Idade: 24,

};

pessoa_3 = {
    idFuncionario: 3,
    Nome: 'Pedro Henrique Minardi Mitre Grossi de Oliveira',
    Idade: 22,
    Email: 'pedrominardi@gmail.com'

};

console.log(pessoa_1);
console.log();
console.log(pessoa_2);
console.log();
console.log(pessoa_3);
