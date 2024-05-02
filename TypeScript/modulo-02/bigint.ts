// let nome Variavel: bigint = valor (seguido com 'n');
// obs: Alterar no tsconfig o target para 'esnext'

let big_1: bigint = 9007199254740991n;                                  // number
let big_2: bigint = 0b100000000000000000000000000000000000000000011n;   // binary
let big_3: bigint = 0x200000000000000000003n;                           // hexadecimal
let big_4: bigint = 0o400000000000000000000003n;                        // octal

console.log('Bigint:', big_1);
console.log('Bigint:', big_2);
console.log('Bigint:', big_3);
console.log('Bigint:', big_4);
