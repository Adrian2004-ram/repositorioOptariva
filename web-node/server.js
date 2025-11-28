// server.js
const http = require('http');
const port = 3000;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({ mensaje: 'Hola desde Node y Docker 🐳' }));
}).listen(port);
console.log('Servidor escuchando en puerto', port);