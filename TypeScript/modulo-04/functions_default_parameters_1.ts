export = { }

// ==> Exemplo 01:
function descontoCompra (preco: number, desconto = 0.08) {
    return preco * (1 - desconto);

}

const valorDaCompra = 100;

console.log(`Valor da compra......: R$ ${valorDaCompra.toFixed(2)}`);
console.log(`Valor com desconto...: R$ ${descontoCompra(valorDaCompra).toFixed(2).replace('.', ',')}`);
console.log();

// ==> Exemplo 02:
function exibirMensagem (mensagem: string, saudar = 'Fala pessoal!') {
    return `${saudar} ${mensagem}`;
    
}

console.log(exibirMensagem('Sejam bem-vindos JavaScript Developers!'));
console.log();

// ==> Exemplo 03:
function exibirNome (nome: string, sobrenome = 'Grossi de Oliveira') {
    return `${nome} ${sobrenome};`
    
}

const resultado_1 = exibirNome('Hilário');
const resultado_2 = exibirNome("Hilário", undefined);
const resultado_3 = exibirNome('Hilário', 'de Oliveira');

console.log(resultado_1);
console.log();

console.log(resultado_2);
console.log();

console.log(resultado_3);
console.log();
