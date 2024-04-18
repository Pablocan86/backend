const ManagerUsuarios = require("./managerUsuarios");

const manager = new ManagerUsuarios();

//Crear un nuevo usuario

manager.crearUsuario({
  Nombre: "Pablo",
  Apellido: "Cantarin",
  Edad: 37,
  Curso: "Programacion Backend",
});

//Consultar usuarios

manager
  .consultarUsuarios()
  .then((usuarios) => console.log("Usuarios", usuarios))
  .catch((error) => console.error("Error al consultar usuarios", error));
