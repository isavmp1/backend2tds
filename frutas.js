// Listas ordenadas de valores
const frutas = ["Maça", "Banana","Uva","Manga"];
//Índice =        0         1      2      3

console.log(frutas[0]);
console.log(frutas[3]);
//console.log(frutas.length);// Faz a contagem dos elementos dentro do array


frutas[1]= "Morango";
frutas[3]= " Laranja";
console.log(frutas);

frutas.push("Pessêgo");
frutas.unshift("Abacate");
frutas.unshift("Abacaxi");
console.log(frutas);
