/*enum TypeName {
    constant_1,
    constant_2,

}*/

/*enum Idioma_1 {
    Português,
    Espanhol,
    Inglês,
    Francês,

}

console.log(Idioma_1);

enum Idioma_2 {
    Português = 'PT-BR',
    Espanhol = 'ES',
    Inglês = 'EN',
    Francês = 'FR',

}

console.log(Idioma_2.Português);*/

// ==> Exemplo 01: Numeric Enums (Enums Numéricos)
enum Idioma_1 {
    Português,
    Espanhol,
    Inglês,
    Francês,

}

console.log(Idioma_1);
console.log();

// ==> Exemplo 02: String Enums (Enums Numéricos)
enum Dia {
    Segunda = 'SEG',
    Terça = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sábado = 'SAB',
    Domingo = 'DOM',

}

console.log(Dia);
console.log(Dia.Segunda);
console.log();

// ==> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave (usando o const)
const enum Comida {
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco',

}
function comida (c: Comida) {
    return 'Comidas muito apetitosas!';

}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
// console.log(comida(5)); NÃO ACEITA NUMERAÇÃO
console.log();

// ==> Exemplo 04: Quando usar enum?
enum Tarefa {
    ToDo,
    Progress,
    Done,

}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    Descrição: 'Parabéns! Tarefa concluída com sucesso!',

};

if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluída!');

} else {
    console.log('Enviar e-mail: Tarefa NÃO Concluída!');
    
}

console.log();
