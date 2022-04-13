// Guardará la definción de mi servidor
// configurar los middlewares
// montar los routers

const express = require('express')
const usersRouter = require('./routers/users')
const logbooksRouter = require('./routers/logbooks')
const tablesISRRouter = require('./routers/tablesISR')


const server = express()


// middlewares
server.use(express.json())


// routers
server.use('/users', usersRouter);
server.use('/logbooks', logbooksRouter);
server.use('/tablesISR', tablesISRRouter);




module.exports = server