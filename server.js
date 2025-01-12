const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 4200;
const newLocal = process.env.PORT || 4200;

app.use(express.static(__dirname + '/dist/my-app'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '/dist/my-app', 'index.html')));

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on:http://localhost/:${port}`));