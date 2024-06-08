/*
    Este ejemplo se hará sin el uso de Express.js, se hará con el módulo http de Node.js
    Es decir, en nativo
*/

const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

const procceRequest = (req, res) => {
    // Se obtiene el método y la url de la petición
    const {method, url} = req

    switch (method) {
        case 'GET':
            switch (url){
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end(JSON.stringify(dittoJSON))

                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>Página no encontrada</h1>')
            
            }

        case 'POST': 
            switch (url){
                case '/pokemon': {
                    let body = ''
                    // Recibir los datos del cliente, en este caso un JSON, chunk por chunk y se convierte a string ya que viene en formato buffer (binario)
                    req.on('data', chunk => {
                        body += chunk.toString()
                    })

                    req.on('end', () => {
                        const data = JSON.parse(body)
                        // Guardar el pokemon en la base de datos
                        // writeHead es igual que setHeader pero además de agregar el header, también agrega el status code
                        res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8'})
                        // Agregar la fecha de creación para ver que se guardó correctamente
                        data.timestamp = Date.now()
                        return res.end(JSON.stringify(data))
                    })
                    break
                }
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>Página no encontrada</h1>')
            }
    }
}

const server = http.createServer(procceRequest)

server.listen(3000, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`)
})