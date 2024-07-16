export = { };

function juntarObjetos_1<U, V> (objeto_1: U, objeto_2:V) {
    return {
        ...objeto_1,
        ...objeto_2,

    };

}

const pessoa_1 = juntarObjetos_1(
    { nome: 'Hilário' },
    { idade: 53 },

);

console.log(pessoa_1);

const pessoa_2 = juntarObjetos_1(
    { nome: 'Gabriel' },
    24,

);

console.log(pessoa_2); // O typescript não dá erro, mas não imprime a idade. Tem como evitar esse erro seguindo abaixo:

function juntarObjetos_2<U extends object, V extends object> (objeto_1: U, objeto_2:V) {
    return {
        ...objeto_1,
        ...objeto_2,

    };

}

const pessoa_3 = juntarObjetos_2(
    { nome: 'Gabriel' },
    // 24,  nesse caso ele acusa Argument of type 'number' is not assignable to parameter of type 'object'.
    { idade: 24}, // Quando se colocar na função 'extends object' funciona sem dar erros e sem deixar que imprima no console.log

);

console.log(pessoa_3);
