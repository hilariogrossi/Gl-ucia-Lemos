export { };

// Exemplo 01 - Uso do switch ... case
let flor: string = 'Tulipa';

switch (flor) {
    case 'Rosa':
        console.log('Rosas são vermelhas!');
        break;
    
    case 'Violeta':
        console.log('Violetas são azuis!');
        break;
    
    case 'Tulipa':
        console.log('Tulipas são brancas!');
        break;
    
    default:
        console.log('Por favor, selecione uma outra flor.');

}

console.log();

// Exemplo 02 - Uso do switch ... case
let diaUtilSemana: number = 2;

switch (diaUtilSemana) {
    case 1:
        console.log('Hoje é domingo! Domingo NÃO é dia útil.');
        break;
    
    case 2:
        console.log('Hoje é segunda-feira! Dia útil.');
        break;
    
    case 3:
        console.log('Hoje é terça-feira! Dia útil.');
        break;
    
    case 4:
        console.log('Hoje é quarta-feira! Dia útil.');
        break;
    case 5:
        console.log('Hoje é quinta-feira! Dia útil.');
        break;
    case 6:
        console.log('Hoje é sexta-feira! Dia útil.');
        break;
    case 7:
        console.log('Hoje é sábado! Sábado NÃO é dia útil.');
        break;
    
    default:
        console.log('NÃO existe esse dia na semana.');

}

console.log();
