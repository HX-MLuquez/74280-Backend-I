const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();
const logger = require("morgan");

const MONGO_URI = process.env.MONGO_URI;

const routes = require("./routes/index");

const app = express();

//* CONNECT APP con DB-ATLAS mediante MONGOOSE
// MONGO_URI_modelo=mongodb+srv://mauuuricio:1234@cluster0.mongodb.net/meme
// mongodb+srv://mauuuricio:1234@cluster101.iw1d3lh.mongodb.net/escuela?retryWrites=true&w=majority&appName=Cluster101

// MONGO_URI=mongodb+srv://mauuuricio:1234@cluster101.iw1d3lh.mongodb.net/dbUsers?retryWrites=true&w=majority&appName=Cluster101
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error(err));

//* MIDDELWARES
app.use(logger("dev"));
app.use(express.json()); // <- {}
app.use(express.urlencoded({ extended: true })); // FORM <- {}

// Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Configurar la carpeta 'files' para servir archivos estáticos
app.use("/files", express.static(path.join(__dirname, "files")));

app.use("/api", routes);

app.get("/home", async (req, res) => {
  return res.send("Este es mi home")
  res.render("home", { products: [] });
});

// app.get("/", (req, res) => {
//   res.send("Hola mundo");
// });

// Implementar en '/' una vista html con estilos incluidos y un bttn que redirija a '/api' que brinda la lista de todos los usuarios

app.get("/", (req, res) => {
  try {
    const styles = `
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin-top: 50px;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
      }
    </style>
  `;
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Inicio</title>
      ${styles}
    </head>
    <body>
      <h1>Bienvenido a la API de Usuarios</h1>
      <button onclick="window.location.href='/api/users'">Ver Usuarios</button>
    </body>
    </html>
  `;
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al cargar la página");
  }
});

module.exports = app;

/*
http://localhost:3000/api/users

objeto usuario ejemplo:
{
  "firstName": "Juan",
  "lastName": "Perez",
  "age": 30,
  "dni": "12345678",
  "course": "Fullstack",
  "grade": 10
},
{
  "firstName": "Maria",
  "lastName": "Gomez",
  "age": 25,
  "dni": "87654321",
  "course": "Backend",
  "grade": 9
}

* Test POST http://localhost:3000/api/users 
body:
{
  "firstName": "Cami",
  "lastName": "Diaz",
  "age": 30,
  "dni": "12345888",
  "course": "Fullstack",
  "grade": 10
}

* Test POST http://localhost:3000/api/users/add-image/6834eb76ba9c2790a84df781
body: FormData con campo 'image' que contenga un archivo de imagen
Nota: Asegúrate de que el usuario con ID 6834eb76ba9c2790a84df781 exista en la base de datos antes de probar este endpoint


* MODEL - SCHEMA (modelo o esquema)

{
  "firstName": <- de tipo string
  "lastName": <- de tipo string
  "age": <- de tipo number
  "dni": <- de tipo string
  "course": <- de tipo string
  "grade": <- de tipo number
},

*/
