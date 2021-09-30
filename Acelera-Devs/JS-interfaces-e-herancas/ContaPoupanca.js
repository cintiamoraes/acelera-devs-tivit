import { Conta } from "./Conta.js";

//Herança
export class ContaPoupanca extends Conta{
    constructor (saldoInicial, cliente, agencia){
        super(saldoInicial,cliente,agencia);
        
    }

}
   