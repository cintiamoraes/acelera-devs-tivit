console.log("Trabalhando com listas");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push=(`Curitiba`); //adicionando um item na lista após de declarada
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//removendo um item da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);

