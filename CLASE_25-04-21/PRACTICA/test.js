const fs = require("fs"); //* ---> { }  fileSystem

console.log(fs);

const fecha = new Date(); //* una INSTANCIA ---> { }

console.log(fecha); // 2025-04-21T23:43:22.672Z

const moment = require("moment");

console.log("--->", moment);
const fechita = moment()
console.log("--->", fechita); // Moment<2025-04-21T20:50:44-03:00>

const {saludar} = require("./practica.js")