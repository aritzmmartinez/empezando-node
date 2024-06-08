const http = require('node:http')
const { findAvailablePort } = require('./free-port')

const PORT = process.env.PORT ?? 3000

/*
    Si se ven 2 mensajes de "Request received" al hacer una petición, es porque el navegador hace 2 peticiones automáticamente:
    - Una petición GET para obtener el recurso
    - Una petición GET para obtener el favicon.ico

    Sin embargo, si se hace una petición GET a través de Postman por ejemplo, solo se verá un mensaje de "Request received" 1 vez
*/
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
