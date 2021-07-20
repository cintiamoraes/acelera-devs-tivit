console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Comprador maior de idade");

} else {
    console.log("Não é maior de idade e não posso vender \n");
}

console.log('Embarque: \n');

if(idadeComprador > 18 && temPassagemComprada){
console.log('Boa viagem');
} else{
    console.log('Você não pode embarcar');
}