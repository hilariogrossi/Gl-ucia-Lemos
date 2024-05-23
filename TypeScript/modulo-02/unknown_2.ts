// ==> Exemplo 01: unknown
let variavelUnknown_2: unknown;

variavelUnknown_2 = true;
console.log(variavelUnknown_2);

variavelUnknown_2 = 123;
console.log(variavelUnknown_2);

variavelUnknown_2 = [];
console.log(variavelUnknown_2);

variavelUnknown_2 = 'Oi! Tudo bem?';
console.log(variavelUnknown_2);


// ==> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos
/*let variavelUnknown_3: unknown;

variavelUnknown_3: boolean = true;
console.log(variavelUnknown_3);*/ // Dá erro atribuir outra tipagem a uma tipagem já declarada.

// ==> Exemplo 03: Diferença entre: any e unknown
let variavelUnknown_4: any;
let variavelUnknown_5: unknown;

variavelUnknown_5 = 123;

// console.log(variavelUnknown_4.toFixed(2)); Dá erro de execução, pois a variável não é um number e o any aceitou errado.

if (typeof variavelUnknown_5 === 'number') {
    console.log(variavelUnknown_5.toFixed(2));

} else {
    console.log('Não se pode ter toFixed() em não number!');
    
}


