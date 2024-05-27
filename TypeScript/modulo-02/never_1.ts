// Never não contém valores, não podemos atribuir nenhum valor a ele: never. Para retorno de função que 
// sempre gera um erro. São as exceções de erro.

function error(message: string): never {
    throw new Error(message);

}

console.log(error('Erro de Mensagem!'));
