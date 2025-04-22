//* HANDS 1
/*
¿Cómo lo hacemos? Se creará una clase “UsersManager” que permitirá guardar usuarios en un atributo estático. 
El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. 
Utilizar el módulo nativo crypto.
El manager debe contar con los siguientes métodos:
El método “Crear usuario” debe recibir un objeto con los campos:
Nombre
Apellido
Nombre de usuario
Contraseña
El método debe guardar un usuario en un atributo estático llamado “Usuarios”, recordando que la 
contraseña debe estar hasheada por seguridad


El método “Mostrar Usuarios” imprimirá en consola todos los usuarios almacenados.
El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  
debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, 
Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el 
usuario no existe, o si la contraseña no coincide.


*/

// const path = require('path')
// const fs = require('fs')
const crypto = require("crypto");

//* nvm  -> v20.17.0    v18.17.0    v16.1.0
// console.log(crypto)

class UsersManager {
  static usuarios = [];
  static crearUsuarios({ nombre, apellido, nombreUsuario, contrasenia }) {
    const hash = crypto.createHash("sha256");
    // console.log("01 - ", hash);
    hash.update(contrasenia);
    // console.log("02 - ", hash);
    const passEncrypt = hash.digest("hex");
    console.log("03 - ", passEncrypt); //* -> bd94dcda26fccb4e68d6a31f9b5aac0b571ae266d822620e901ef7ebe3a11d4f
    const newUser = {
      nombre,
      apellido,
      nombreUsuario,
      contrasenia: passEncrypt,
    };
    UsersManager.usuarios.push(newUser);
    return "usuario registrado";
  }
  static mostrarUsuarios() {
    console.log(UsersManager.usuarios);
  }
  static validarUsuario(nombreUsuario, contrasenia) {
    try {
      const usuario = UsersManager.usuarios.find(
        (u) => u.nombreUsuario === nombreUsuario
      );
      if (!usuario) {
        console.log("usuario no encontrado");
        return;
      }
      const hash = crypto.createHash("sha256");
      hash.update(contrasenia);
      const encryptPassword = hash.digest("hex");
      if (encryptPassword === usuario.contrasenia) {
        console.log("Si es igual");
      } else {
        console.log("contraseña incorrecta");
      }
      console.log("usuario encontrado");
      return "usuario encontrado";
    } catch (error) {
      console.log(`Error en validarUsuario, con ERROR: ${error}`);
    }
  }
}

console.log(UsersManager.usuarios);
UsersManager.crearUsuarios({
  nombre: "Pepe",
  apellido: "Lopez",
  nombreUsuario: "pepepe",
  contrasenia: "pass1234",
});

UsersManager.crearUsuarios({
  nombre: "Ana",
  apellido: "Lopez",
  nombreUsuario: "dededed",
  contrasenia: "3333333",
});

UsersManager.crearUsuarios({
  nombre: "Juan",
  apellido: "Lopez",
  nombreUsuario: "vevevev",
  contrasenia: "222222",
});
console.log(UsersManager.mostrarUsuarios());

UsersManager.validarUsuario("vevevev", "222222");
