// Funções Genéricas
export = { };

function retornarElementosRandomicos<T> (items: T[]): T {
    let itemRandomico = Math.floor(Math.random() * items.length);
    return items[itemRandomico];

}

//--------------------------------------------------------------------
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosRandomicos = retornarElementosRandomicos<number>(numeros);

console.log(numerosRandomicos);

//---------------------------------------------------------------------
let paises = ['Brasil', 'EUA', 'Japão', 'China', 'Canadá'];
let elementosRandomicos = retornarElementosRandomicos<string>(paises);

console.log(elementosRandomicos);

//---------------------------------------------------------------------
let vF = [true, false];
let verdadeiroFalso = retornarElementosRandomicos<boolean>(vF);

console.log(verdadeiroFalso);
