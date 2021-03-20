export class Produto {
    nome: string;
    email: string;
    valor: number;
    desconto: number;
    fabricacao: string;

    constructor(nome:string, email:string, valor:number, desconto: number, fabricacao:string){
        this.nome = nome;
        this.email = email;
        this.valor = valor;
        this.desconto = desconto;
        this.fabricacao = fabricacao;
    }
}
