//* DECLARAMOS FUNCIONES

//* Función básica (declarativa) 
function sumar(a, b) {
  return a + b;
}

//* Func por params (callback)
function sumar(a, b, callback) {
  const result = a + b;
  callback(result);
}
function mostrarResultado(resultado) {
  console.log(`El resultado es ${resultado}`);
}
sumar(2, 3, mostrarResultado);

//* Function Expresivas - se asignan a una variable

const dividir = function (a, b) {
  return a / b;
};


//* Arrow Func - ()=>
// En una línea el return es IMPLICITO
const sumar = (a) => a;
// const sumar = function(a){ return a }

// + de una línea el return es si lo debo escribir
const sumarB = (a, b) => {
  const result = a + b;
  return result;
};


//* Comillas invertidas (``) - Template String
var nombre = "Manuel";
var apellido = "Man";

console.log(
  `Hola este mensaje alterna texto con variable ${nombre} y ${apellido}`
);

//* Arrow function
const mostrarLista = (lista) => {};

//* Objeto literal
function messagge(inicio, fin) {
  const objResult = {
    inicio,
    fin,
  };
  return objResult;
}
console.log(messagge("hi", "bye"));
/*
* ESTO
function messagge(inicio, fin) {
  const objResult = {
    inicio,
    fin,
  };
  return objResult;
}
* ES IGUAL a
function messagge(inicio, fin) {
  const objResult = {
*    inicio: inicio, <---
*    fin: fin,       <---
  };
  return objResult;
}
*/
