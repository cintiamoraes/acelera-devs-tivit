import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia
    _cliente;

     //private field
    _saldo=0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente= novoValor;
        }       
    }
    
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(cliente,agencia){
        this.agencia=agencia;
        this.cliente=cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {//encapsulei dentro do método a minha função
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;//tenho que ter um retorno dentro de um método para ele não retornar undefined
        }
    }

    depositar(valor){
        if (valor <= 0){
          return;
        }
        this._saldo += valor;
    }

    transferir(valor,conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}
