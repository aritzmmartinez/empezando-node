const http = require('node:http')
const { findAvailablePort } = require('./free-port')

const PORT = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('Request received')
    res.end('Hello World')
})

// el puerto 0 indica que el sistema operativo asignará un puerto aleatorio que no esté en uso
// Evidentemente, no es recomendable usarlo en producción, ya que el puerto podría cambiar en cada reinicio del servidor
findAvailablePort(PORT).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${server.address().port}`)
    })
})
