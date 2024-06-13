function somarNumeros (...numeros: number[]) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));

    return total;
    
}

console.log(somarNumeros(30, 20));
console.log(somarNumeros(40, 50, 50, 40, 20));
