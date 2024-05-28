export = { };

// ==> Exemplo 01: Exemplo básico de uso do type Object
const pessoa_01 = {
    Nome: 'Hilário',
    NomeDoMeio: 'Grossi de',
    Sobrenome: 'Oliveira',
    Idade: 53,
    Profissão: 'Programador',

};

console.log(pessoa_01);
console.log();

// ==> Exemplo 02: Object como parâmetros de função (eles podem ser anônimos)
function onBoarding_01 (funcionario: { Nome: string }) {
    return `Seja bem-vindo(a) ${funcionario.Nome}!`;

}

console.log(onBoarding_01({ Nome: pessoa_01.Nome + ' ' + pessoa_01.Sobrenome }));
console.log();

// ==> Exemplo 03: Object nomeados (usando interface)
interface Pessoa_02 {
    Nome: string;
    Função: string;

}

function onBoarding_02 (pessoa: Pessoa_02) {
    return (

        `Seja bem-vindo ${pessoa.Nome}! Sua função aqui na empresa é ${pessoa.Função}.`

    );

}

console.log(onBoarding_02( { Nome: 'Hilário', Função: 'Programador' }));
console.log();

// ==> Exemplo 04: Object como type alias (usando interface)
type Pessoa_03 = {
    Nome: string;
    Função: string;
    Linguagem: string;

}

function onBoarding_03 (pessoa: Pessoa_03) {
    return (

        `Seja bem-vindo ${pessoa.Nome}! Sua função aqui na empresa é ${pessoa.Função}, usando a linguagem ${pessoa.Linguagem}.`

    );

}

console.log(onBoarding_03( { Nome: 'Hilário', Função: 'Programador', Linguagem: 'TypeScript' }));
console.log();

// ==> Exemplo 05: Usando optional no Object
interface Pessoa_04 {
    Nome: string;
    Função: string;
    Linguagem: string;
    Email ?: string;

}

function onBoarding_04 (pessoa: Pessoa_04) {
    return (

        `Seja bem-vindo ${pessoa.Nome}! Sua função aqui na empresa é ${pessoa.Função}, usando a linguagem ${pessoa.Linguagem} e seu email é ${pessoa.Email}.`

    );

}

console.log(onBoarding_04( { Nome: 'Hilário', Função: 'Programador', Linguagem: 'TypeScript', Email: 'hilariogrossi@yahoo.com.br' }));
console.log();

// ==> Exemplo 06: Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado
    // objeto use o readonly
    interface Pessoa_05 {
        Nome: string;
        Função: string;
        Linguagem: string;
        readonly Email: string;
    
    }
    
    function onBoarding_05 (pessoa: Pessoa_05) {
        return (
    
            `Seja bem-vindo ${pessoa.Nome}! Sua função aqui na empresa é ${pessoa.Função}, usando a linguagem ${pessoa.Linguagem} e seu email é ${pessoa.Email}.`
    
        );
    
    }
    
    console.log(onBoarding_05( { Nome: 'Hilário', Função: 'Programador', Linguagem: 'TypeScript', Email: 'hilariogrossi@yahoo.com.br' }));
    console.log();

// ==> Exemplo 07: Tipos de extensões (heranças)
interface Mãe {
    Nome: string;

}

interface Pai {
    Sobrenome: string;

}

interface Filho extends Mãe, Pai {
    Idade: number;

}

const filho: Filho = {
    Nome: 'Hilário',
    Sobrenome: 'Oliveira',
    Idade: 53,

}

console.log(filho);
console.log();

// ==> Exemplo 08: Tipos de interseções
interface Cachorro {
    Tipo: string;

}

interface Gato {
    Tipo: string;

}

type Animal = Cachorro & Gato;

// ==> Exemplo 09: Generics Objects
type Usuário = {
    Nome: string;
    Email: string;

}

type Admin = {
    Nome: string;
    Email: string;
    Admin: boolean;

}

const usuário: Usuário = {
    Nome: 'Hilário',
    Email: 'hilariogrossi@yahoo.com.br',

}

const admin: Admin = {
    Nome: 'Hilário',
    Email: 'hilariogrossi@yahoo.com.br',
    Admin: true,

}


function acessarSistema<T> (usuário: T) {
    return usuário;

}

console.log(acessarSistema<Usuário>(usuário));
console.log(acessarSistema<Admin>(admin));


/*function acessarSistema (usuário: Usuário) {
    return usuário;
    
}

console.log(acessarSistema(usuário));
console.log();*/
