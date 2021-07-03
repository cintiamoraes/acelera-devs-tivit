console.log("Atribuição de variáveis");

let nome="cintia";
const sobrenome="moraes";

console.log(nome, sobrenome);

//é uma maneira melhor de escrever evitando a concatenação,principalmetne quando temos grandes textos. 
console.log(`O meu nome é ${nome} ${sobrenome}`);

let contador =0;
contador=contador +1;

//estou sobrescrevendo a variável nome, porém a const não pode ser alterada
const nomeCompleto = nome+sobrenome;
console.log(nome);

let idade; // declarando variável
idade =40;//atribuindo valor à variável
idade = idade+1;
console.log(idade)
