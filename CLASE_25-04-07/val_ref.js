//* Tipos de Datos Primitivos
// str num bool null undf



console.log(global);

var nombre = "Manuel"

console.log(nombre)

//* THIS
const plantillaRegistro = {
    //* ESTE ES EL CONSTRUCTOR
    nombre: "",
    apellido: "",
    //* METODOS
    verNombreApellido: function(){
        console.log(this.nombre, " ", this.apellido)
        return this.nombre + " " + this.apellido
    },
    crearNombre: function(nombre, apellido){
        this.nombre = nombre 
        this.apellido = apellido
    }
}
//* Objeto y una function dentro del objeto a fin de los datos del objeto en sí
//*              METODO

console.log(plantillaRegistro)

const userA = {...plantillaRegistro} //* VALOR

userA.crearNombre("Mono", "Loco")
console.log(userA.verNombreApellido())
 
const userB = {...plantillaRegistro} 
userB.crearNombre("Mama", "Mima")
console.log(userB.verNombreApellido())

const userC = plantillaRegistro // referencia
userC.crearNombre("Pepe", "Diaz")
console.log(plantillaRegistro)
//----------------------------

// Objetos -> { objeto }  [ array ]  function  <- REFERENCIA





//* En bloques - function if while for --> let
//* Para OBJECT { }  [ ]  function  -->  const



//* Para espacios global o de mucho alcance -->  var

console.log(salude)
var salude = "chau"

var sali 
console.log(sali)

saludamos()
function saludamos(){
    console.log("alfo")
    if(true){
        function mimi(){
            console.log(salude)
            var variableInterna = "desde afuera no acceden"
        }
    }
    // console.log(variableInterna) //! variableInterna is not defined
    mimi()
}
// console.log(variableInterna) //! variableInterna is not defined


let textoNombre = "Holis"

console.log(textoNombre)

if(true){
    let textoNombre = "chau"
}
console.log(global)
