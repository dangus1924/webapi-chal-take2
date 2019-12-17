const express = require('express');
const logger = require('./middleware/logger')
const helmet = require('helmet')


const server = express();


server.use(express.json(), helmet(), logger)

server.get('/', (req, res) => {
    res.send(`<h1>Welcome to the API app.</h1>`)
});
