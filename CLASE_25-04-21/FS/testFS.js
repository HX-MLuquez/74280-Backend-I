//* fs.promises

// const fs = require("fs");
const fs = require("fs").promises;
// 1. readFile
// Para obtener el contenido de un archivo de manera asíncrona:

async function leerSimple() {
  var result = await fs.readFile("plumplum.txt", "utf8");
  console.log(result); // Promise - undefined
  // await fs.writeFile("plumplum.txt", `${result} \n y algo mas`)
}

// 2. appendFile
// Para añadir contenido a un archivo sin sobreescribirlo:

async function agregarContenido() { //* si no existe lo crea al archivo
  try {
    await fs.appendFile("plumplumhh.txt", "\nnuevo contenido");
    console.log("Contenido añadido al archivo.");
  } catch (error) {
    console.error("Error al añadir contenido:", error);
  }
}

// 3. unlink
// Para eliminar un archivo de manera asíncrona:

async function eliminarArchivo() {
  try {
    await fs.unlink("plumplumzzz.txt");
    console.log("Archivo eliminado exitosamente.");
  } catch (error) {
    console.error("Error al eliminar el archivo:", error);
  }
}

// 4. exists
// Para verificar si un archivo existe de manera asíncrona:

async function verificarExistencia() {
  const filePath = "";
}

// 5. writeFile
// Para crear y escribir contenido en un archivo de manera asíncrona:
async function crearEscribirArchivo() {
  try {
    await fs.writeFile("plumplum.txt", "Hola soy yo\ny estamos bien biennnnn");
    console.log("archivo escrito");
  } catch (error) {
    console.log(error);
  }
}

// Función principal para ejecutar las operaciones
async function main() {
  await crearEscribirArchivo();
  await leerSimple();
  await agregarContenido();
  await eliminarArchivo()
}

// Llamar a la función principal
main();

//! escribirArchivo();
//! leerArchivo();
//! agregarContenido();
//! verificarExistencia();
//! eliminarArchivo();
