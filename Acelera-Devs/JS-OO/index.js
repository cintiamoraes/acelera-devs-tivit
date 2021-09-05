
//aqui estou criando uma instância do meu molde (criando os meus objetos a partir do molde), ou seja, da minha classe
import{Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",1234567988);
const cliente2 = new Cliente("Alice", 88899977755);

//os meus clientes são meus objetos

const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);
contaCorrenteRicardo.depositar=500;
contaCorrenteRicardo.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log(contaCorrenteRicardo)
