//Importacion de archivos, librerias

// const fs = require("fs"); //solo en funciona sincronas
const fs = require("fs").promises; //funciones asincronas

/*
readFileSync = lectura de un archivo en forma sincrónica
witeFileSync = escritura de un archivo en forma sincrónica 
appendFileSync = actualiza un archivo de forma sincrónica
unlinkFileSync = borrar un archivo de forma sincrónica
mkdirSync = creación de un directorio
*/
// const data = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div>HOLA MUNDO</div>
// </body>
// </html>`;

// CREAR UN ARCHIVO
// try {
//   fs.writeFileSync("MiArchivo.html", data);
//   console.log("Archivo creado correctamente");
// } catch (error) {
//   console.error("Error al crear el archivo", error);
// }

//LEE ARCHIVO
// try {
//   const data = fs.readFileSync("MiArchivo.txt", "utf8");
//   console.log("Contenido a mostar: ", data);
// } catch (error) {
//   console.error("Error al leer el archivo", error);
// }

//ELIMINA ARCHIVO
// try {
//   fs.unlinkSync("MiArchivo.html");
//   console.log("Archivo eliminado");
// } catch (error) {
//   console.error("No pudo eliminarse el archivo", error);
// }

//CREAR DIRECTORIO

// try {
//   fs.mkdirSync("MiCarpeta");
//   console.log("Directorio creado correctamente");
// } catch (error) {
//   console.error("No se pudo crear el directorio", error);
// }

//ELIMINA DIRECTORIO
// try {
//   fs.rmdirSync("MiCarpeta");
//   console.log("Directorio eliminado correctamente");
// } catch (error) {
//   console.error("No se pudo eliminar el directorio", error);
// }
