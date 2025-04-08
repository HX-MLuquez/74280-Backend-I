//* fs.promises

const fs = require("fs");
// o const fs = require("fs").promises
// 1. readFile
// Para obtener el contenido de un archivo de manera asíncrona:



// 2. appendFile
// Para añadir contenido a un archivo sin sobreescribirlo:

async function agregarContenido() {}

// 3. unlink
// Para eliminar un archivo de manera asíncrona:

async function eliminarArchivo() {}

// 4. exists
// Para verificar si un archivo existe de manera asíncrona:

async function verificarExistencia() {
  const filePath = "";
}

// 5. writeFile
// Para crear y escribir contenido en un archivo de manera asíncrona:



// Función principal para ejecutar las operaciones
async function main() {
  // await escribirArchivo();
  // await leerArchivo();
  // // await agregarContenido();
  // // await verificarExistencia();
  // // await eliminarArchivo();
}

// Llamar a la función principal
main();

//! escribirArchivo();
//! leerArchivo();
//! agregarContenido();
//! verificarExistencia();
//! eliminarArchivo();
