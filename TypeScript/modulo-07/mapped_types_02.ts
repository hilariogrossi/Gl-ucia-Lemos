export { };

// Exemplo 01 - Mapped Types
type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;

};

/*type UsuarioOpcional = {
    nome?: string;
    endereco?: string;
    telefone?: string;
    idade?: number;

};

type UsuarioSomenteLeitura = {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly idade: number;

};*/ // Pode ser substituído por mapped type ==> Vide abaixo...

type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P];

};

const usuarioMapped: UsuarioMappedType = {
    nome: 'Hilário Grossi de Oliveira',
    endereco: 'Rua Governador Bias Fortes, 210 - Centro - Espera Feliz - MG',

};

console.log(usuarioMapped);

// Exemplo 02 - Outros Types Avançados
interface Livro {
    titulo: string;
    autor: string | null;
    preco: number;
    numeroPaginas: number;

}

type Artigo = Omit<Livro, 'numeroPaginas'>;

type LivroModelo = Readonly<Livro>;

const livroModelo: LivroModelo = {
    titulo: 'Programming TypeScript: Making Your JavaScript Applications Scale',
    autor: 'Boris Cherny',
    preco: 19.99,
    numeroPaginas: 324,

};

// livroModelo.preco = 19; Não se pode trocar já que a propriedade é de somente leitura...

console.log(livroModelo);
