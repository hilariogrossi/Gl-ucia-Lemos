export = { };

function detalhesFuncionarios (funcionario: string | number) {
    if (typeof funcionario == 'string') {
        return `O nome do funcionário é: ${funcionario}.`;

    } else if (typeof funcionario == 'number') {
        return `O Id do funcionário é: ${funcionario}.`;

    }

}

const funcionario_01 = detalhesFuncionarios ('Hilário Grossi de Oliveira');
console.log(funcionario_01);

console.log();

const funcionario_02 = detalhesFuncionarios (8916);
console.log(funcionario_02);
console.log();

// ================================================================

const formatoData = (valor: Date | string) => {
    if (valor instanceof Date) {
        return valor.toUTCString();

    }

    return new Date (valor).toUTCString();

}

console.log(formatoData(new Date('2024-07-04')));
console.log();
console.log(formatoData('2024-10-21'));

// ================================================================

interface Humano {
    falar: () => void;

}

interface Animal {
    voz: () => void;

}

const dizerAlgo = (som: Humano | Animal) => {
    if ('falar' in som) {
        return som.falar();

    }

    return som.voz();

};

