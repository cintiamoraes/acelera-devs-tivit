
import { Conta } from "./Conta.js";


//Herdo da classe Conta todos os serviços(métodos) e propriedades
export class ContaCorrente extends Conta{
    
    static numeroDeContas = 0;
    constructor(cliente,agencia){
        super(0,cliente,agencia);
        ContaCorrente.numeroDeContas += 1;
    }    

    // a classe contaCorrente está especificando o comportamento dela no método sacar, enquanto a classe ContaPoupanca está utilizando só os métodos padrão da Conta

    //o método sacar está sobrescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor,taxa);
       
    }
}


