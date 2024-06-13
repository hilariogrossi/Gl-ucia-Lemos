function descontoCompra (preco: number, desconto = 0.08) {
    return preco * (1 - desconto);

}

console.log(`Valor da compra: R$ 100,00`);
console.log(`Valor com desconto: R$ ${descontoCompra(100).toFixed(2).replace('.', ',')}`);
