require('dotenv').config()
const server = require('./src/server')
const dbConnect = require('./src/lib/db')

// console.log(process.env)
const PORT = process.env.PORT || 8080

dbConnect()
    .then(() => {
        console.log('Database connected :D')
        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log('Error: ', error)
    })