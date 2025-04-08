/*
Actividad
¿Cómo lo hacemos? Definiremos la función “mostrarLista”, la cual recibirá un arreglo 
con elementos como parámetro.

- Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
- Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso 
devolviendo la longitud de la lista (Utilizar template strings)
- Invocar la función con los casos de prueba.

*/

const mostrarLista = (lista) => {
  if (lista.length === 0) {
    return "Lista vacía";
  } else {
    lista.forEach((elemento) => {
      console.log(elemento);
    });
    return `La longitud de la lista es ${lista.length}`;
  }
};

const lista1 = [1, 2, 3, 4, 5];

console.log(mostrarLista(lista1)); // Debería mostrar los elementos y la longitud de la lista

const lista2 = [];
console.log(mostrarLista(lista2)); // Debería mostrar "Lista vacía"
