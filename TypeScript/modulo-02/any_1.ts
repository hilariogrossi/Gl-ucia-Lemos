// let nomeVariavel: any = 'valor';

const a: any = 888;
const b: any = ['Perigo'];

const c = a + b; // Aqui deveria dar erro, pois soma 2 tipagem (tipos diferentes), mas NÃO deu.

console.log(c); // Resposta no console ==> 888Perigo
