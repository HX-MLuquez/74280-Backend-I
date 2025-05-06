const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const path = require("path");

//* SETEO handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//* Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // DATA FORM {} {...}

//* Static
//* Todos nuestros archivos ESTATICOS (html, css, img, etc)
// que se encuentran en la carpeta 'public' sen van a servir en /static
app.use("/public", express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  return res.render("pages/home", {});
});


//* http://localhost:8080/user?nombre=Pepe&id=1234
app.get("/user", (req, res) => {
  const { nombre, id } = req.query;
  const user = {
    nombre,
    id,
    bebe: "nanana",
  };
  let isValidate = id === "1234";
  if (isValidate) return res.render("pages/user", user);
  else res.send("Error de validación");
});

// app.get("/header", (req, res) => {
//   return res.render("partials/header", {});
// });

module.exports = app;
