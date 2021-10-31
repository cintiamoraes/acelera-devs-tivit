
//aqui estou criando uma instância do meu molde (criando os meus objetos a partir do molde), ou seja, da minha classe

import{Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente"
import { ContaPoupanca } from "./Conta/ContaPoupanca";
import { ContaSalario } from "./Conta/ContaSalario";

const cliente1 = new Cliente("Ricardo",1234567988);


//os meus clientes são meus objetos
const contaCorrenteRicardo = new ContaCorrente( cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);