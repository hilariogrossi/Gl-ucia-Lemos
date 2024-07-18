export { };

interface Pair<T, U> {
    first: T;
    second: U;

}

const myPair: Pair<number, string> = {
    first: 53,
    second: 'Hilário Grossi de Oliveira'

};

console.log(myPair);
