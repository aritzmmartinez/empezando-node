/*
    Para que se hagan los cambios en el servidor al guardar, se puede usar:
    -- watch (node --watch http.js)
    
    O se puede instalar nodemon:
    npm init -y (para crear el package.json en el directorio)
    npm install nodemon -D

    Luego se puede crear un script en el package.json:
    "scripts": {
        "start-server": "nodemon http.js"
    }
    
    Y se puede ejecutar con:
    npm run start-server


    Al instalar dependencias, se puede usar:
    npm install <nombre-de-la-dependencia> -D (para dependencias de desarrollo)
    npm install <nombre-de-la-dependencia> -E (para dependencias de producción quitando el caret (^) que se agrega por defecto
*/
const http = require('node:http')
const fs = require('node:fs')

const port = process.env.PORT ?? 3000

const processRequest = (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('Página principal')

    }
    else if(req.url === '/contacto'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('Página de contacto')

    }
    else if(req.url === '/imagen.png'){
        fs.readFile('./imagen.png', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end('Error interno')
            } else {
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })
        

    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('Página no encontrada')
    }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`)
})

