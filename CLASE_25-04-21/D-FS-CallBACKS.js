// 1. writeFile
// Para escribir contenido en un archivo, creándolo o sobreescribiéndolo si ya existe:


const fs = require('fs');

const content = 'Hola, mundo!';




// 2. readFile
// Para obtener el contenido de un archivo usando un callback que recibe el error y el contenido del archivo:



// 3. appendFile
// Para añadir contenido a un archivo sin sobreescribirlo:

const additionalContent = '\nEste es un texto adicional.';



// 4. unlink
// Para eliminar un archivo usando un callback que maneja errores:

