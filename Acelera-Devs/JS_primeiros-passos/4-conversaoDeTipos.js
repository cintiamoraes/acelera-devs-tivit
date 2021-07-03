console.log("Conversão de tipos")

console.log("ano" + 2020);

//apenas concatenou as strings
console.log("2" + "2");

//ele está convertendo o formato texto para o fomrato numérico e calculando
console.log(parseInt("2") + parseInt("2")); 

//neste caso eu não utilizo o parseUnt porque o interpretador do JS verifica que só faz sentido executar como número e não como texto uma operação com a divisão (/)
console.log("10" / "2")

//Neste caso o JS não consegue efetur a operação, então ele é como resposta um tipo especial que ele entende como um número, mas não é  ++> Not A Number -NaN 
console.log("cintia" / "2")