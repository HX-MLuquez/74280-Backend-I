const express = require("express");
const path = require("path");

const app = express();

//* MIDDELWARE
app.use(express.urlencoded({ extended: true })); //* FORM
app.use(express.json()); //* body {}

//* static/    public/   assets/
app.use(express.static(path.join(__dirname, "public")));
//* A partir de este MIDDELWARE si en la carpeta public/ tenemos un index.html
//* va a responder al GET http://localhost:3000 con ese index


app.get("/", (req, res) => {
  res.status(200).send("Hola desde el servidor Express!");
});

module.exports = app;
