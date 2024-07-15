// Funções Genéricas
export = { };

function exibirElementos<T> (elementos: T[]): void {
    elementos.forEach((elemento) => {
        console.log(elemento);
        
    });

}

let number: number[] = [1, 2, 3, 4, 5];
let states: string[] = ['Minas Gerais', 'Rio de Janeiro', 'São Paulo'];

exibirElementos<number>(number);
console.log();
exibirElementos<string>(states);