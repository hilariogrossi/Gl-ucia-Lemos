export { };

// Condicional Types

type DataNascimento = string;
type Idade = number;

type InformacaoPessoa<T> = T extends number ? number : string; // T é um argumento genérico.

const dataNascimento: InformacaoPessoa<DataNascimento> = '21/10/1970';
console.log(`Minha da de nascimento é ${dataNascimento}.`);
console.log();

const idade: InformacaoPessoa<Idade> = 53;
console.log(`Minha idade é ${idade} anos.`);
