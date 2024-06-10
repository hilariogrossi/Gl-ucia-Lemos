// ==> Exemplo 01 - while
let contador_3 = 0;

while (contador_3 < 5) {
    console.log(contador_3);

    contador_3++

}

console.log();

// ==> Exemplo 02 - while
let numero = 1;

while (numero <= 20) {
    if (numero % 5 == 0) {
        console.log('O primeiro número múltiplo de 5 entre 1 a 20 é: ', numero, '!');
        break;
        
    }

    numero++

}

console.log();

// ==> Exemplo 03 - Exemplo mais prático de while
let contadorUsuario = 0;
const usuario: string[] = ['Hilário', 'Patrícia', 'Gabriel', 'Pedro Henrique'];

while (usuario[contadorUsuario]) {
    console.log('Usuário...: ', usuario[contadorUsuario]);

    contadorUsuario++;
    
}

console.log();

// ==> Exemplo 01 - do... while
let contador_4 = 0;

do {
    console.log(contador_4);

    contador_4++;
    
} while (contador_4 <= 5)
