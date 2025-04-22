//* HANDS 2

const fs = require("fs").promises;
const path = require("path");

class UsersManager {
  constructor() {
    this.filePath = path.join(__dirname, "Usuarios.json");
    // C:\Users\... ...\CLASE_25-04-21\HANS-2\Usuarios.json
  }
  async crearUsuario(usuario) {
    try {
      //* Pasar a un método propio
      const data = await fs.readFile(this.filePath, "utf8");
      console.log(`--data--> ${data}`);
      const usuarios = JSON.parse(data);
      //* Leer usuarios existentes
      // let usuarios = await this.consultarUsuarios();
      //* -------------------------
      usuarios.push(usuario);
      console.log(`--usuarios--> ${usuarios}`);
      await fs.writeFile(this.filePath, JSON.stringify(usuarios, null, 2));
      console.log("Usuario creado exitosamente.");
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  }
  async consultarUsuarios() {
    try {
    } catch (error) {}
  }
  // const packageContent = await fs.readFile(packagePath, "utf8");
  // JSON.parse(packageContent)
}

async function main() {
  const instanciaUsuarios = new UsersManager();
  const nuevoUsuario = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    curso: "Programación Avanzada",
  };
  await instanciaUsuarios.crearUsuario(nuevoUsuario);
}

main();
// proyecto

/*
  
  C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\74280-CLASE\CLASE_25-04-21\HANS-2\hans_2.js
  
  muchaDataSSSSSS -> []
  
  mesassssss -> [] <- RECORRERLA - para ello el dato + importante es el ID
  mesaA -> {id   - fechaCreated - active: true}  <- No eliminar - Baneo
  
  if(mesaA.active){
  
  }
  */
