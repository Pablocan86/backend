import express from "express";

import handlebars from "express-handlebars";
import __dirname from "./utils.js";
const app = express();
const PORT = 8080;

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

// const users = [
//   {
//     nombre: "Pablo",
//     apellido: "Cantarin",
//     edad: 37,
//     correo: "a@a.com",
//     telefono: "4553-8753",
//   },
//   {
//     nombre: "Fabio",
//     apellido: "Gonzalez",
//     edad: 37,
//     correo: "a@a.com",
//     telefono: "4553-8753",
//   },
//   {
//     nombre: "Ramiro",
//     apellido: "Fuentes",
//     edad: 37,
//     correo: "a@a.com",
//     telefono: "4553-8753",
//   },
//   {
//     nombre: "Maria",
//     apellido: "Brenda",
//     edad: 37,
//     correo: "a@a.com",
//     telefono: "4553-8753",
//   },
//   {
//     nombre: "Soledad",
//     apellido: "Ibañez",
//     edad: 50,
//     correo: "a@a.com",
//     telefono: "4553-8753",
//   },
//   {
//     nombre: "Judith",
//     apellido: "Gozasola",
//     edad: 40,
//     correo: "a@a.com",
//     telefono: "4553-8753",
//   },
// ];

// app.get("/", (req, res) => {
//   let numero = Math.floor(Math.random() * 5);
//   res.render("index", users[numero]);
//   return console.log(numero);
// });

// app.get("/", (req, res) => {
//   let user = { nombre: "Coder", edad: "25" };
//   res.render("index", user);
// });

app.listen(PORT, () => {
  console.log(`Serving is running on ${PORT}`);
});
