/*
Estructurar un servidor basado en express, el cual escuche peticiones en el puerto 8080
Realizar una función para el método GET en la ruta ‘/saludo’, el cual responderá con “¡Hola a todos, pero ahora desde express!”
Ejecutar con nodemon y probar en el navegador el endpoint generado
*/

// Paso 1: Inicializar un proyecto de Node.js con npm init -y
// Paso 2: Instalar nodemon de forma global con npm install -g nodemon
// Paso 3: Crear un archivo app.js y escribir el siguiente código
// Paso 4: editar el package.json y agregar el script "start": "nodemon app.js"
// Paso 5: Correr el servidor con npm start

const express = require("express");
const app = express();

//* app <- es un objeto <- { ... } <- es nuestro servidor
function decirHI(req, res, next) {
  const dateNow = new Date();
  console.log("HI", dateNow);
  next();
}
// MIDELLWARE
// app.use   -    next()
app.use(express.json()); //* la data por BODY pase de undefined a ser un {}
app.use(express.urlencoded({ extended: true })); //* es para específica de FORM sea {}
// app.use(decirHI);
// CORS

// Metodo  ROUTES   cb

//* Método GET   PATH '/'
app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      success: true,
      message: "Hello World! este es mi primer server con EXPRESS",
    });
});

//* Estructura de una ROUTE con express (en protocolo HTTP)
//*                             cb        cb
app.get("/saludo/:username", decirHI, (req, res) => {
  console.log("--params->", req.params); //* la data viene en STRING
  console.log("--query->", req.query); //* la data viene en STRING
  console.log("--body->", req.body); //* la data viene en JSON
  const dataUserName = req.params.username;

  res.status(200).json({ success: true, data: dataUserName });
});
/*

REQ

PARAMS {username: undefined}
QUERY {}
BODY {}

*/

module.exports = app;
