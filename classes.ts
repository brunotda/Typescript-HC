class Data {
    // public dia: number;
    // private mes: number;
    // ano: number;

    constructor(public dia: number, public mes: number, public ano: number = 1970) {
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
}

const data = new Data(1, 1, 2021);
console.log(data.dia);

const data2 = new Data(1, 1);
console.log(data2.ano);

/*Modificadores de acesso*/

class Carro {

    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { }

    alterarVelocidade(delta: number) {
        // Validar aceleração e frenagem
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
            this.velocidadeAtual += delta;
        }
        console.log(this.velocidadeAtual);
    }

    acelerar() {
        this.alterarVelocidade(5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro(`Chevrolet`, `Prisma`, 250);
carro.acelerar();
carro.acelerar();
carro.acelerar();

/*Herança*/
class Camaro extends Carro {
    
    private turbo: boolean = false;

    constructor() {
        super(`chevrolet`,`camaro`,500);
    }

    ligarTurbo(){
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();