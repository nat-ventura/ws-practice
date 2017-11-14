const ws = require('ws');

// setup
const ServerSocket = require('./serverSocket');

// instantiates ServerSocket
const wss = new ws.Server({ port: 2000 });
serverSocket = new ServerSocket(wss, ws);
