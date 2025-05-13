console.log("Estamos en nuestro SCRIPT");

const socket = io("http://localhost:3000");

// console.log("socket -> ", socket);

// socket.emit("pepeHola", { message: "holitis", code: 12345 });

// socket.on("ahiTeVa", (esaData) => {
//   console.log("lista -> ", esaData);
// });

// socket.on("ahiNoTeVaNada", (esaData) => {
//   console.log("string -> ", esaData);
// });

const userName = document.querySelector(".userName");
const chatMessage = document.querySelector(".chatMessage");
var uuid = "";

var messages = [];

//* Función para actualizar los mensajes en el chat
const updateMessagges = (newMessages) => {
  messages = [...newMessages];
  chatMessage.innerHTML = messages
    .map((message) => {
      if (message.info === "connection") {
        return `<p class="connection">${message.message}</p>`;
      } else {
        return `
        <div class="messageUser">
          <h5>Nombre: ${message.name}</h5>
          <p>ID - ${message.id}</p>
          <p>${message.message}</p>
        </div>
      `;
      }
    })
    .join("");
};

Swal.fire({
  title: "Ingrese su información",
  html: `
        <input type="text" id="swal-input-name" class="swal2-input" placeholder="Nombre">
        <input type="text" id="swal-input-id" class="swal2-input" placeholder="ID">
      `,
  focusConfirm: false,
  showCancelButton: true,
  confirmButtonText: "Ingresar",
  preConfirm: () => {
    const name = Swal.getPopup().querySelector("#swal-input-name").value;
    const id = Swal.getPopup().querySelector("#swal-input-id").value;
    if (!name || !id) {
      Swal.showValidationMessage(`Por favor ingrese ambos campos`);
    }
    return { name: name, id: id };
  },
}).then((result) => {
  console.log("-->", result);
  const { name, id } = result.value;
  uuid = id;
  if (result.isConfirmed) {
    userName.textContent = name;
    socket.emit(`userConnect`, { user: name, id });
  }
});

//* Evento de conexión con el servidor
socket.on("serverUserMessage", (data) => {
  chatMessage.innerHTML = "";
  updateMessagges(data);
});


//* Enlace de eventos de los botones de la interfaz - al DOM
const btnMessage = document.getElementById("btnMessage");
const inputMessage = document.getElementById("inputMessage");

//* Función para enviar un mensaje al servidor
btnMessage.addEventListener("click", (e) => {
  e.preventDefault();
  const message = inputMessage.value;
  socket.emit("userMessage", { message, user: userName.innerHTML });
});