// ==> Exemplo 01: throw exception
function error_1(message: string): never {
    throw new Error(message);

}

console.log(error_1('Erro de Mensagem - 01'));

// ==> Exemplo 02: never inferido automaticamente
function rejectMessage() {
    return error_1('Erro de Mensagem - 02');

}

console.log(rejectMessage());

// ==> Exemplo 03: função que contém loop infinito retorna o tipo "never"
const loopInfinito = () => {
    while (true) {
        console.log('Oi, Developers!');
        
    }

}

// ==> Exemplo 04: Diferença entre os tipos: "never" e "void"
const algumaCoisaVoid: void = null;
const algumaCoisaNever: never = null; // Algo que nunca vai retornar alguma coisa, por isso dá erro na variável.

console.log(algumaCoisaVoid);
console.log(algumaCoisaNever);
