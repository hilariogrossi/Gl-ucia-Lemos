// ==> Exemplo 01: Funções
function logError(errorMeassage: string) {
    console.log(errorMeassage);
    
}

logError('Erro ao entrar no sistema');

// ==> Exemplo 02: Funções
const logErrorExample2 = (errorMessage: string) => {
    console.log(errorMessage);

}

logErrorExample2('Error no sistima. Alguém me desconfigurou...')

// ==> Exemplo 03: Uso do void em variáveis
let variavelExemploVoid: void;

/*variavelExemploVoid = 1;
console.log(variavelExemploVoid);*/

variavelExemploVoid = null;
console.log(variavelExemploVoid);

variavelExemploVoid = undefined;
console.log(variavelExemploVoid);

/*variavelExemploVoid = 'Oliveira';
console.log(variavelExemploVoid);*/
