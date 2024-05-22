// ==> Exemplo 01: Tipo Any
const variavelA: any = 53;
const variavelB: any = ['Hilário'];
const result = variavelA + variavelB;

console.log(result);
console.log();

// ==> Exemplo 02: Quando o Tipo Any é inferido implicitamente
let frase;
frase = 'Hilário Grossi de Oliveira lindo e gostosão!';

console.log(frase);
console.log();

// ==> Exemplo 01: Quando devemos usar o Tipo Any?
const formulario: { [campoFormulario: string]: any } = {
    Nome: 'Hilário',
    Sobrenome: 'Oliveira',
    Idade: 53,

};

console.log(formulario);
