const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");

const PORT = 3000;

//* WEB-SOCKET INIT
const { Server } = require("socket.io");

//* VIEW CONFIG - HANDLEBARS

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//* Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//* Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* ROUTE
app.get("/", (req, res) => {
  res.render("index");
});

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//* WEB-SOCKET CONFIG SERVER
const http = require("http");
const serverInit = http.createServer(app);

serverInit.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

//* WEB-SOCKET CONFIG SOCKET

const io = new Server(serverInit);

//* io => { socket <-> server }

//* EVENT
// const miLista = [{},{}]
const messages = [];

io.on("connection", (socket) => {
  console.log(`Usuario ID: ${socket.id} Conectado!!!`);

  //   socket.on("pepeHola", (data) => {
  //     console.log(data);

  //     if(data.code === 1234){
  //         io.emit("ahiTeVa", miLista)
  //     } else {
  //         io.emit("ahiNoTeVaNada", "Descanso hasta las 21:53")
  //     }
  //   });

  socket.on("userConnect", (data) => {
    let message = {
      id: socket.id,
      info: "connection",
      name: data.user,
      message: `usuario: ${data.user} - id: ${data.id} - Conectado`,
    };
    messages.push(message);
    io.emit("serverUserMessage", messages)
  });

    socket.on("userMessage", (data)=>{
    console.log("::::data:::::", data)
    const message = {
      id: socket.id,
      info: "message",
      name: data.user,
      message: data.message
    }
    messages.push(message)
    io.emit("serverUserMessage", messages)
  })

  socket.on("disconnect", (data) => {
    console.log("----> ", data); // transport close
    console.log("Cliente desconectado:", socket.id);
  });
});

/*

messages -> [{connection}{message}]

messageConnect {
     id -> socket.id
     info -> "connection"
     name: data.user,
     message: `usuario: ${data.user} - id: ${data.id} - Conectado`,
}


messageMessage{
     id -> socket.id
     info -> "message"
     name: data.user
     message: "hola como va"
}


*/
