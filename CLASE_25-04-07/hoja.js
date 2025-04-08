//* Comentarios
var valueA = 12;
var valueB = 11;
var result;
//* DECLARATIVA
function sumar(a, b) {
  result = a + b;
}
//* EXPRESIVA
const restar = function (a, b) {
  console.log(a);
  return a - b;
};
restar(347777,21)

console.log("----> ", valueA);
console.log("--sumar--> ", sumar);
console.log("--sumar--> ", sumar(valueA, valueB)); //* Obtenemos su return
console.log("--result--> ", result); //* Obtenemos su return
/*
Muchos comentarios
*/
