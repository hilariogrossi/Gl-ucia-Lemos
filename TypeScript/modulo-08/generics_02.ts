// Funções Genéricas
export = { };

function retornarNumerosRandomicos(items: string[]): string {
    let itemRandomico = Math.floor(Math.random() * items.length);
    return items[itemRandomico];

}

let paises = ['Brasil', 'EUA', 'Japão', 'China', 'Canadá'];

console.log(retornarNumerosRandomicos(paises));
