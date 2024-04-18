const http = require("http");

const server = http.createServer((request, response) => {
  const pagina = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div>Hola mundo desde backend</div>
      </body>
    </html>`;
  response.end(pagina);
});

server.listen(8080, () => {
  console.log("Servidor corriendo en puerto 8080");
});
