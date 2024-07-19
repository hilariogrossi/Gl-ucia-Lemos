export function somar (x: number, y: number): number {
    return x + y;

}

export function subtrair (x: number, y: number): number {
    return x - y;

}

export function multiplicar (x: number, y: number): number {
    return x * y;

}

export function dividir (x: number, y: number): number {
    if (y === 0) {
        console.log('Não se pode dividir um número por zero. Tente novamente.');
        
    } else {
        return x / y;

    }

}
