// Guardará la definción de mi servidor
// configurar los middlewares
// montar los routers

const express = require('express')
const usersRouter = require('./routers/users')
const logbooksRouter = require('./routers/logbooks')


const server = express()


// middlewares
server.use(express.json())


// routers
server.use('/users', usersRouter);
server.use('/logbooks', logbooksRouter);




module.exports = server