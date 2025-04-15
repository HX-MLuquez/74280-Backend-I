//* POO - Programación Orientada a Objetos / Clases (CLASS)
// class Persona
class Persona {
  // Props - data - valores
  constructor(nombre, apellido) {
    //* son solicitados al instanciar
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = null;
    // this.apellido = 0
    //  KEY  -  VALUE
  }
  // Metodos
  getUserName() {
    return `${this.nombre} ${this.apellido}`;
  }
  insertId(id) {
    this.id = id;
    return `ID: ${this.id} - Username: ${this.nombre} ${this.apellido}`;
  }
}

//* Su fundamento es ser una plantilla que al instanciar tenemos un OBJETO con METODOS

//* INSTANCIA - COPIA
console.log(Persona);
const userA = new Persona("Pepe", "Lopez");
console.log(userA);

const userB = new Persona("Mano", "Man");
console.log(userB);

userA.insertId(101);
console.log(userA);
console.log(userB);
//--- Func constructor

function Auto(marca, velocidad) {
  this.marca = marca;
  this.velocidad = velocidad;

  this.verAuto = function () {
    return this.marca;
  };
}

Auto.prototype.ver = function () {
  return this.marca;
};

//----------------------------------------------------------

class ListaPorActividad {
  constructor(nombre) {
    this.nombre = nombre;
    this.integrantes = [];
  }
  addIntegrante(nuevo) {
    this.integrantes.push(nuevo);
    return "nuevo integrante agregado";
  }
  getLista() {
    return this.integrantes;
  }
  getActividad() {
    return this.nombre;
  }
}

console.log(ListaPorActividad);

const basquet = new ListaPorActividad("Basquet");
const voley = new ListaPorActividad("Voley");

console.log(basquet.getActividad);
console.log(basquet);

basquet.addIntegrante("Pepe");
basquet.addIntegrante("Juan");
console.log(basquet.getLista());
console.log(basquet.getActividad());

console.log(voley);

/*
¿Cómo lo hacemos? Se creará una clase que permitirá llevar cuentas individuales según cada responsable.

Definir clase Contador
La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.

Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
Realizar prueba de individualidad entre las instancias.

*/

class Contador {
  //* Props - Datos - atributos
  static contadorGlobal = 0;

  constructor(nombre) {
    this.nombre = nombre; // Nombre del responsable
    this.contadorIndividual = 0; // Contador individual inicializado en 0
    Contador.contadorGlobal++; // Incrementa el total de instancias creadas
  }

  // Método para incrementar el contador individual
  contar() {
    this.contadorIndividual++;
    Contador.contadorGlobal++; // en caso de querer aquí Incrementa el contador global
    return "ok";
  }
  getResponsable() {
    return `El responsable es ${this.nombre}`;
  }

  getCuentaIndividual() {
    return this.contadorIndividual;
  }

  static getCuentaGlobal() {
    return Contador.contadorGlobal;
  }
}
console.log(Contador.contadorGlobal);

//* Lo del Constructor siempre con el THIS

const contadorUno = new Contador("Pedro");
/*
Contador { nombre: 'Pedro', contadorIndividual: 0  // Métodos contar -  getCuentaIndividual - etc}
*/
console.log(contadorUno);
console.log(Contador.contadorGlobal);
console.log(contadorUno.contar());
console.log(contadorUno.contar());
console.log(contadorUno.getCuentaIndividual());
console.log(Contador.contadorGlobal);
console.log(contadorUno);

const contadorDos = new Contador("Jose");
console.log(contadorDos);
console.log(Contador.contadorGlobal);

//* STATIC es el nombre de la clase punto la prop static

class Contador {
  static contadorGlobal = 0;
  constructor(responsable) {}
  static getCuentaGlobal() {
    return Contador.contadorGlobal;
  }
}

//* Lo del Constructor siempre con el THIS

//* INPUT -> [{}{}{}{}{}]

// console - print

//* OUTPUT -> value -> num -> 2
//* OUTPUT -> lista -> array -> [{color:"rojo"}{color:"rojo"}]


class Auto {
  constructor(a,b,c="hola"){
    this.nombre=a
    //.....
  }
}

const autito1 = new Auto("1", "2")

class Perro {
  constructor(){
    this.nombre=null
    //.....
  }
}

const perrito1 = new Auto()

//--------


const obj1 = {
  a: "",
  b: ""
}

const obj2 = {
  a: "",
  b: "",
  a: 88998
}

var a = ""

var a = 0 

