const express = require('express');

const dotenv = require('dotenv').config(); // eslint-disable-line
const http = require('http');
const morgan = require('morgan'); // eslint-disable-line
const path = require('path');

const env = process.env.APP_ENV; // eslint-disable-line
const httpHost = 'localhost';
const httpPort = 5000;

const expressServer = express();

expressServer.use(express.static(path.join(__dirname, 'dist')));

const server = http.createServer(expressServer);

server.timeout = parseInt(process.env.HTTP_TIMEOUT, 10);

server.listen(httpPort, httpHost, () => {
  process.stdout.write(`Servicio iniciado en el puerto ${ httpPort } `);
});
