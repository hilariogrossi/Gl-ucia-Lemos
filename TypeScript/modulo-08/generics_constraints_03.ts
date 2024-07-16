export = { };

/*function prop<T, K> (objeto: T, chave: K) {
    return objeto[chave];

}*/ // Dessa maneira dá erro no retorno de: Type 'K' cannot be used to index type 'T'.

// Para evitar esse erro: K extends keyof T

function prop<T, K extends keyof T> (objeto: T, chave: K) {
    return objeto[chave];

}

const pessoa_4 = prop(
    { nome: 'Hilário' }, 'nome',

);

console.log(pessoa_4);

const pessoa_5 = prop(
    // { nome: 'Hilário' }, 'idade', // Argument of type '"idade"' is not assignable to parameter of type '"nome"'.
    { nome: 'Hilário', idade: 53 }, 'idade',

);

console.log(pessoa_5);