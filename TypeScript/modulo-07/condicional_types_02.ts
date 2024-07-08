export = { };

// ==> Exemplo 01 - Condicional Types
type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;

};

type Empresa = {
    nome: string;
    cnpj: number;

};

type EnderecoPessoa = {
    enderecoSecundario: string;
    cidade: string;
    pais: string;

};

type EnderecoEmpresa = {
    localizacao: 'Rua' | 'Avenida' | 'Praça';

};

type EnderecoFinal<T> = T extends { endereco: string } ? EnderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
    enderecoSecundario: 'Rua: Governador Bias Fortes, 210',
    cidade: 'Espera Feliz - MG',
    pais: 'Brasil',

};

const enderecoEmpresa: EnderecoFinal<Empresa> = {
    localizacao: 'Rua',

};

console.log(enderecoPessoa);
console.log(enderecoEmpresa);
console.log();

// ==> Exemplo 02 - Condicional Types (utilizando o 'extends')
type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3';

type FiltrarArquivoMidia<T> = T extends 'mp4' | 'mp3' ? T : never;

type ArquivoAudio = FiltrarArquivoMidia<FormatoArquivos>;

const arquivoAudio: ArquivoAudio = 'mp4';
console.log(arquivoAudio);
