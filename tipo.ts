//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 18;
const avaliacao: number = 1.9;

//String
const nome: string = `Bruno`;

//Array
const idades: number[] = [23,10,20];
const idades2: Array<number> = [23,10,20];

//Tuple
let jogadores: [string, number, boolean];
jogadores = [`Vitor`, 23, true];

//Enum
enum StatusAprovacao {
    Aprovado = `001`,
    Pendente = `002`,
    Rejeitado = `003`
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornDaApi: any[] = [123, `Registro`, false];
const retornDaApi2: any = {
    //...
}

//Void
function printNaTela(msg: string):void {
    console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Objeto
function criar(objeto: object) {
    //...
}

criar({
    nome: `bruno`,
});

type Contato = {
    nome: string;
    telefone: number;
}

const contato: Contato = {
    nome: `Bruno`,
    telefone: 11000000,
}

const input = document.getElementById("numero1") as HTMLInputElement; /*Informa que é um elemento html - forma1*/
const input2 = <HTMLInputElement>document.getElementById("numero1"); /*Informa que é um elemento html - forma2*/
console.log(input.value);