class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;

    }

    getItem() {
        return this.item;
        
    }

    setItem(item: T) {
        this.item = item;

    }

}

const boxString = new Box<string>('Hilário Grossi de Oliveira');
const boxNumber = new Box<number>(53);

console.log(`Nome...: ${boxString.getItem()}`);
console.log(`Idade..: ${boxNumber.getItem()}`);
