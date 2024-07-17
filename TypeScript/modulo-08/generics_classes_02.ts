export { };

class Estudante<T, U> {
    private ID: T;
    private Nome: U;

    setValor(ID: T, Nome: U): void {
        this.ID = ID;
        this.Nome = Nome;

    }

    retornarValor(): void {
        console.log(`Identificação do Estudante...: ${this.ID} -> Nome do Estudante...: ${this.Nome}`);
        
    }

}

const estudante_1 = new Estudante<number, string>();
const estudante_2 = new Estudante<string, string>();

estudante_1.setValor(1, 'Hilário Grossi de Oliveira.');
estudante_1.retornarValor();

estudante_2.setValor('001', 'Gabriel Minardi Mitre Grossi de Oliveira.');
estudante_2.retornarValor();
