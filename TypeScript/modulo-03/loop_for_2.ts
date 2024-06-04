// ==> Exemplo 01: loop for
for (let i = 0; i <= 10; i++) {
    console.log(i);
    
}
console.log();

// ==> Exemplo 02: loop for of (retorna uma coleção de matriz, lista ou tupla)
const arrayNumeros_1 = [10, 20, 30, 40, 50];

for (const i of arrayNumeros_1) {
    console.log(i);

}

console.log();

// ==> Exemplo 03: loop for in (retorna uma coleção de matriz, lista ou tupla)
const arrayNumeros_2 = [5, 4, 3, 2, 1, 0];

for (const i in arrayNumeros_2) {
    console.log(i);
    
}

console.log();

// sort()

const ordemNumerica: number[] = arrayNumeros_2.sort();

console.log(ordemNumerica);
console.log();
