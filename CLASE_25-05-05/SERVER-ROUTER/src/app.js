const express = require("express");
const app = express();
const routes = require("./routes/index.js");

app.use(express.json()); // {} por body es de lectura

app.get("/", (req, res) => {
  res.json({ API: "BACKEND - ROUTER", break: "yaaaaaa" });
});

app.use("/api", routes)


module.exports = app;

/*
http://localhost:8080 

http://localhost:8080/api/products

http://localhost:8080/api/users   GET  ALL
http://localhost:8080/api/users   POST  ONE

http://localhost:8080/api/users/1234  GET UNO
http://localhost:8080/api/users/1234  DELETE UNO
http://localhost:8080/api/users/1234  PUT UNO

http://localhost:8080/api/users/all/male GET ALL MALE
*/