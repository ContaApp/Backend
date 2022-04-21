// Guardará la definción de mi servidor
// configurar los middlewares
// montar los routers

const express = require('express')
const usersRouter = require('./routers/users')
const logbooksRouter = require('./routers/logbooks')
const tablesISRRouter = require('./routers/tablesISR')
const rootRouter = require('./routers/root')


const server = express()


// middlewares
server.use(express.json())


// routers
server.use('',rootRouter)
server.use('/users', usersRouter);
server.use('/logbooks', logbooksRouter);
server.use('/tables-isr', tablesISRRouter);




module.exports = server