/*
Tenemos una app de libros 'BOOKS' que tiene un array de libros. Cada libro tiene un id, titulo, autor y año de publicación.
Crear un servidor con express que tenga los siguientes endpoints:
GET '/books' => devuelve un array con todos los libros.

* PARAMS:
GET '/books/:id' => devuelve el libro con el id especificado.
* QUERY:
DELETE '/books/delete-book' => recibe un id y elimina el libro con el id especificado.
* BODY:
POST '/books' => recibe un libro y lo agrega al array de libros. Devuelve el libro con el id asignado.
* QUERY y BODY:
PUT '/books/update-book' => recibe un id y los datos de un libro y actualiza el libro con ese id.
*/

const express = require("express");
const app = express(); // <- Server <- {}

var logger = require("morgan");

const fs = require("fs").promises;
const path = require("path");

const BOOKS_FILE = path.join(__dirname, "db/books.json");
console.log(BOOKS_FILE);

//* Funciones auxiliares
const readBooks = async () => {
  try {
    const data = await fs.readFile(BOOKS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error al leer los libros:", error);
    return [];
  }
};

const writeBooks = async (books) => {
  try {
    await fs.writeFile(BOOKS_FILE, JSON.stringify(books, null, 2));
  } catch (error) {
    console.error("Error al guardar los libros:", error);
    throw error;
  }
};

// MIDDELWARES
app.use(express.json()); //* data por BODY
app.use(express.urlencoded({ extended: true })); //* data por FORM
app.use(logger("dev"));

// CORS CONFIG - DOMINIOS que pueden acceder a esta API

//* Políticas de seguridad - Dominios cruzados
// Desde donde si pueden acceder - desde que o cuales dominios
// Ejemplo: http://localhost:5173 <- vite

//* ROUTES sin Modular - Implementamos ASYN/AWAIT + TRY/CATCH + VALIDACIONES
app.get("/", (req, res) => {
  const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Amazonas Book</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #e0f7fa;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          h1 {
            font-size: 48px;
            color: #00796b;
            margin-bottom: 40px;
          }
          a {
            text-decoration: none;
          }
          button {
            padding: 15px 30px;
            font-size: 18px;
            color: white;
            background-color: #00796b;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          button:hover {
            background-color: #004d40;
          }
        </style>
      </head>
      <body>
        <h1>AMAZONAS BOOK</h1>
        <a href="/api/books">
          <button>Ver lista de libros</button>
        </a>
      </body>
      </html>
    `;
  res.status(200).send(html);
});

// app.get("/api/books", async (req, res) => {
//   try {
//     const books = await readBooks();
//     res.status(200).json(books);
//   } catch (error) {
//     res.status(500).send("Error interno del servidor");
//   }
// });
app.get("/api/books", async (req, res) => {
  try {
    const books = await readBooks();
    let html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Lista de Libros</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f5f5f5;
              margin: 0;
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            h1 {
              color: #00796b;
            }
            table {
              margin-top: 20px;
              border-collapse: collapse;
              width: 80%;
              max-width: 800px;
              background-color: white;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            th, td {
              padding: 12px 20px;
              border: 1px solid #ddd;
              text-align: center;
            }
            th {
              background-color: #00796b;
              color: white;
            }
            tr:nth-child(even) {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <h1>Lista de Libros</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Año</th>
              </tr>
            </thead>
            <tbody>
              ${books
                .map(
                  (book) => `
                <tr>
                  <td>${book.id}</td>
                  <td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.year}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </body>
        </html>
      `;
    res.status(200).send(html);
  } catch (error) {
    console.error("Error al obtener los libros:", error);
    res.status(500).send("Error interno del servidor");
  }
});

//* GET '/books/:id' => Obtener libro por ID
app.get("/api/books/:id", async (req, res) => {
  try {
    const { id } = req.params; //* id que viene por params es un STRING
    const books = await readBooks();
    const book = books.find((book) => book.id === parseInt(id));
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).send("Libro no encontrado");
    }
  } catch (error) {
    res.status(500).send("Error interno del servidor");
  }
});

//* POST '/books' => Agregar nuevo libro
app.post("/api/books", async (req, res) => {
  try {
    const { title, author, year, id } = req.body;

    if (!title || !author || !year || !id) {
      return res
        .status(400)
        .send("Faltan datos: title, author, id y year son requeridos");
    }

    const books = await readBooks();
    const existingBook = books.find((book) => book.id === parseInt(id));
    if (existingBook) {
      return res.status(400).send("ID ya existe");
    }
    const newBook = {
      id,
      title,
      author,
      year: parseInt(year),
    };

    books.push(newBook);
    await writeBooks(books);

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).send("Error interno del servidor");
  }
});

//* PUT '/books/update-book' => Actualizar libro (ID por query)
app.put("/api/books/update-book", async (req, res) => {
  try {
    const { id } = req.query;
    const { title, author, year } = req.body;
    console.log(":::query:::", req.query);
    console.log(":::body:::", req.body);
    res.status(200).send("mensaje de prueba");
  } catch (error) {}
});
//* PUT http://localhost:3000/api/books/update-book?id=2, {title, author, year} <- POSTMAN

//* DELETE '/books/delete-book' => Eliminar libro por ID (query)
app.delete("/api/books/delete-book", async (req, res) => {
  try {
    const { id } = req.query;
    console.log("::::::", req.query);
    res.status(200).send("mensaje de prueba");
  } catch (error) {}
});

//* DELETE http://localhost:3000/api/books/delete-book?id=3 <- POSTMAN

//*
//* Route not found
app.use((req, res) => {
  return res.status(404).send(
    `<div style='text-align: center; font-family: Arial;'>
            <h1>404 Not Found</h1>
            <p>La ruta solicitada no existe</p>
          </div>`
  );
});

module.exports = app;

/*
GET http://localhost:3000/user/token

app.get("/user/:id") <- va a entrar aquí 

app.get("/user/token") <- va a entrar aquí 


---


app.get("/user/token") -> app.get("/user/code/token")
*/
