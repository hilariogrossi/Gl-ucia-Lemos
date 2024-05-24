// Função que não retorna nenhum valor - Void (Ausência de qualquer tipagem (tipo)). É o oposto de Any.
// Void melhora a clareza do código, garante a segurança de tipo.
// Não retorna nenhum dado ou valor.

/*function exemploFuncao(mensagem): void {
    return mensagem

}*/

function olaMundo_1(): void {
    console.log('Olá, Developers!!!');
    
}

olaMundo_1();

const olaMundo_2 = () => {
    console.log('Olá, Developers!!!');
    
}

olaMundo_2();

let variavelTeste: void = undefined;

// variavelTeste = 1; // Error massage
variavelTeste = null; // No error.