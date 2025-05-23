// Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
// La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo
// adicional al precio de cada evento.

class TicketManager {
  #precioBaseDeGanancia = 0.15;
  constructor() {
    this.eventos = [];
    // this.eventoId = 1
  }
  agregarEvento = function (
    nombre,
    lugar,
    precio,
    capacidad,
    eventoId,
    fecha = new Date()
  ) {
    const eventoNuevo = {
      nombre,
      id: eventoId,
      lugar,
      precio: precio + precio * this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [], // [32,41,22]
    };
    this.eventos.push(eventoNuevo);
  };

//   getEventos = function () {
//     return this.eventos;
//   };

}

TicketManager.prototype.getEventos = function () {
  return this.eventos;
};

// PARAMS
// nombre
// lugar
// precio (deberá agregarse un 0.15 del valor original)
// capacidad (50 por defecto)
// fecha (hoy por defecto)
// El método deberá crear además el campo id autoincrementable y el campo “participantes”
// que siempre iniciará con un arreglo vacío.
TicketManager.prototype.agregarUsuario = function (eventoId, userId) {
  const evento = this.eventos.find((e) => e.id === eventoId);
  if (!evento) {
    throw new Error("Error, no existe ese evento");
  }
  if (evento.participantes.includes(userId)) {
    throw new Error("Ese usuario ya está en la lista");
  }
  evento.participantes.push(userId);

};

// Debe contar con un método “agregarUsuario” El cual recibirá:
// id del evento (debe existir, agregar validaciones)
// id del usuario
// El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente
// (validación de fecha y capacidad se evitará para no alargar el reto)
// Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
TicketManager.prototype.ponerEventoEnGira = function () {};

//* Testeamos la clase creando instancias de la misma y llamando a los métodos

// Debe contar con un método “ponerEventoEnGira” El cual recibirá:
// id del evento
// nueva localidad
// nueva fecha
// El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y
// sus participantes vacíos (Usar spread operator para el resto de las propiedades)
