
//aqui estou criando uma instância do meu molde (criando os meus objetos a partir do molde), ou seja, da minha classe

import{Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo",1234567988);


//os meus clientes são meus objetos

const contaCorrenteRicardo = new ContaCorrente(0,cliente1, 1001);
contaCorrenteRicardo.depositar=500;
contaCorrenteRicardo.sacar(100);

const ContaPoupanca = new ContaPoupanca(50, cliente1, 1001);
ContaPoupanca.sacar(10);

const conta = new Conta(0, cliente1, 1001);

console.log(conta);
