const express = require('express');
const logger = require('./middleware/logger');
const helmet = require('helmet');


const actionRouter = require('./routes/actionRouter');
const projectRouter = require('./routes/projectRouter');

const server = express();


server.use(express.json(), helmet(), logger);

server.get('/', (req, res) => {
    res.send(`<h1>Welcome to the API app.</h1>`)
});

server.use('/api/actions', actionRouter)
server.use('./api/projects', projectRouter)

server.use((req, res) => {
    return res.status(404).json({ message: "Wrong turn this page does not exist. Try again!"})
  })
  
  server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
      message: "An error occurred, please try again later."
    })
  })
  
  module.exports = server;