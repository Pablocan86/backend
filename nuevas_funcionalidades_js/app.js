// const numeros = [1, 4, 7, 10, 24];

// const objetos = [
//   {
//     manzanas: 3,
//     peras: 2,
//     carne: 1,
//     jugos: 5,
//     dulces: 2,
//   },
//   {
//     manzanas: 1,
//     sandias: 1,
//     huevos: 6,
//     jugos: 1,
//     panes: 4,
//   },
// ];

//HANDS ON LABS
class TicketManager {
  constructor() {
    this.eventos = [];
    this.precioBaseDeGanancia = 0;
  }

  getEventos() {
    return this.eventos;
  }
  agregarEventos(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    precio += precio * 0.15;
    const evento_id = this.eventos.length + 1;
    const participantes = [];
    const evento = {
      id: evento_id,
      nombre,
      lugar,
      precio,
      capacidad,
      fecha,
      participantes,
    };
    this.eventos.push(evento);
  }
  agregarUsuario(evento_id, usuario_id) {
    const evento_encontrado = this.eventos.find(
      (evento) => evento.id === evento_id
    );
    if (!evento_encontrado) {
      console.log("El evento no fue encontrado");
      return;
    }
    const participantes = evento_encontrado.participantes;
    const usuarioRegistrado = participantes.includes(usuario_id);
    if (usuarioRegistrado) {
      console.log("El usuario ya estar registrado en este evento");
      return;
    }
    participantes.push(usuario_id);
    console.log("El usuario ha sido agregado al evento");
  }

  ponerEventoEnGira(evento_id, nueva_localidad, nueva_fecha) {
    const evento_encontrado = this.eventos.find(
      (evento) => evento.id === evento_id
    );
    if (!evento_encontrado) {
      console.log("El evento con el ID proporcionado no existe");
      return;
    }

    const evento_copiado = { ...evento_encontrado };
    evento_copiado.id = this.eventos.length + 1;
    evento_copiado.lugar = nueva_localidad;
    evento_copiado.fecha = nueva_fecha;
    evento_copiado.participantes = [];

    this.eventos.push(evento_copiado);
    console.log("El evento ha sido puesto en gira correctamente");
  }
}

const ticketManager = new TicketManager();

//Agregar eventos

ticketManager.agregarEventos(
  "Concierto de Rock",
  "Estadio River Play",
  100,
  2000,
  new Date("2024-07-20")
);
ticketManager.agregarEventos(
  "Concierto de Pop",
  "Estadio San Lorenzo",
  200,
  3000,
  new Date("2024-10-20")
);

const eventos = ticketManager.getEventos();

console.log(eventos);

//Agregar usuario

ticketManager.agregarUsuario(1, "usuario 1");
ticketManager.agregarUsuario(2, "usuario 2");
ticketManager.agregarUsuario(1, "usuario 3");

//Poner envento en gira

ticketManager.ponerEventoEnGira(
  1,
  "Estadio Boca Juniors",
  new Date("2024-12-20")
);

const eventosActualizados = ticketManager.getEventos();

console.log(eventosActualizados);
