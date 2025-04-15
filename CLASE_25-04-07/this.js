//* THIS
var nombre = "Manuel"

console.log(nombre)

//* THIS
const plantillaRegistro = {
    //* ESTE ES EL CONSTRUCTOR
    nombre: "",
    apellido: "",
    apellido:"---",
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