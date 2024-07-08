export { };

// ==> Exemplo 01 - Type Assertion (as / <>)
function exibirPrecoFinal (preco: number, desconto: number, formato: boolean): number | string {
    const precoComDesconto = preco * (1 - desconto);

    return formato ? `R$ ${precoComDesconto},00` : precoComDesconto.toFixed(2);

}

const descontoFinal_1 = exibirPrecoFinal(100, 0.05, true) as string;
const descontoFinal_2 = <number>exibirPrecoFinal(100, 0.05, false);

console.log(descontoFinal_1);
console.log();
console.log(descontoFinal_2);
console.log();

/* // Exemplo 02 - Type Assertion
type Humano = {
    nome: string;
    idade: number;
    idioma: string;

};

const humano_1 = {
    idade: 36,
    idioma: 'Português',

};

// const humano_2 = humano_1 as Humano; ==> Dá erro de compilação, mas permite a execução.

// const humano_2: Humano = humano_1; // Property 'nome' is missing in type '{ idade: number; idioma: string; }' but required in type 'Humano'.ts(2741)
// type_assertions_01.ts(21, 5): 'nome' is declared here.
// Nesse caso não permite a execução mostrando o erro e o porque do erro.


console.log(humano_2.nome.toUpperCase());

//'Hilário Grossi de Oliveira'*/
