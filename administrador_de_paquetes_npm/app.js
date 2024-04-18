/* function generarNroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const CANT_NROS = 10000;
const numeros = {};
for (let i = 0; i < CANT_NROS; i++) {
    const nro = generarNroAleatorio(1, 20);
    if (numeros[nro]) {
        numeros[nro]++;
    } else {
        numeros[nro] = 1;
    }
}
for (const numero in numeros) {
    console.log(`Número ${numero}: ${numeros[numero]} veces`);
} */

// function generarNroAleatorio(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// // const CANT_NROS = 10000;
// // const numeros = {};
// // for (let i = 0; i < CANT_NROS; i++) {
// //   const nro = generarNroAleatorio(1, 20);
// //   if (numeros[nro]) {
// //     numeros[nro]++;
// //   } else {
// //     numeros[nro] = 1;
// //   }
// // }
// // for (const numero in numeros) {
// //   console.log(`Número ${numero}: ${numeros[numero]} veces`);
// // }

// // const numeros = {};

// // for (let i = 0; i < 50; i++) {
// //   const nro = generarNroAleatorio(1, 20);
// //   if (numeros[nro]) {
// //     numeros[nro]++;
// //   } else {
// //     numeros[nro] = 1;
// //   }
// // }

// // for (const numero in numeros) {
// //   console.log(`Números ${numero}: ${numeros[numero]} veces`);
// // }
// const fs = require("fs/promises");
// const crypto = require("crypto");

// class UseManager {
//   constructor() {
//     this.filePath = "./administrador_de_paquetes_npm/Usuarios.json";
//   }
//   async createUser(user) {
//     const { nombre, apellido, username, password } = user;

//     const hashedPassword = crypto
//       .createHash("sha256")
//       .update(password)
//       .digest("hex");

//     try {
//       let users = [];
//       if (
//         await fs
//           .access(this.filePath)
//           .then(() => true)
//           .catch(() => false)
//       ) {
//         const fileContent = await fs.readFile(this.filePath, "utf8");
//         users = JSON.parse(fileContent);
//       }
//       users.push({ nombre, apellido, username, password: hashedPassword });

//       await fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
//     } catch (error) {
//       console.error("Error al cargar el usuario ", error);
//     }
//   }

//   async validateUser(username, password) {
//     try {
//       let users = [];
//       if (
//         await fs
//           .access(this.filePath)
//           .then(() => true)
//           .catch(() => false)
//       ) {
//         const fileContent = await fs.readFile(this.filePath, "utf8");
//         users = JSON.parse(fileContent);

//         const user = users.find((u) => u.username === username);

//         if (user) {
//           const hashedPassword = crypto
//             .createHash("sha256")
//             .update(password)
//             .digest("hex");
//           if (hashedPassword === user.password) {
//             console.log("Usuario logueado con exito");
//           } else {
//             console.log("Contraseña incorrecta");
//           }
//         } else {
//           console.log("El usuario no fue encontrado");
//         }
//       } else {
//         console.log("No hay usuario registrado");
//       }
//     } catch (error) {
//       console.error("Error de validación ", error);
//     }
//   }
// }

// const userManager = new UseManager();

// userManager
//   .createUser({
//     nombre: "Pablo",
//     apellido: "Cantarin",
//     username: "pablocan86",
//     password: "tateti",
//   })
//   .then(() => {
//     userManager.validateUser("pablocan86", "tateti");
//   });

// console.log(userManager);

const moment = require("moment");

function diasDeVida(fecha) {
  const fechaNacimiento = moment(fecha, "DD-MM-YYYY", true);
  if (fechaNacimiento.isValid()) {
    const fechaActual = moment();
    const fechaNacimiento = fecha;
    const dias = fechaActual.diff(
      moment(fechaNacimiento, "DD-MM-YYYY"),
      "days"
    );
    const edad = fechaActual.diff(
      moment(fechaNacimiento, "DD-MM-YYYY"),
      "years"
    );
    console.log(`Usted tiene ${edad} años y vivió ${dias} dias.`);
  } else {
    console.log(
      "Formato de fecha incorrecto, debe ingresar la fecha DD-MM-YYYY"
    );
  }
}

diasDeVida("05-04-1947");
