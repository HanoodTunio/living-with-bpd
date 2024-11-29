
require('dotenv').config()
const app = require('./configs/serverConfig');
const http = require('http');

const port = process.env.port || 9000;

const server = http.createServer(app);

server.listen(port, () => console.log("Server is listening on port ", port))