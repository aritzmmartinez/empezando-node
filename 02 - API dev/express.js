/*
    Este ejemplo es exactamente igual que routing.js, pero con hecho con el framework Express.js
*/

const express = require('express')
const dittoJSON = require('./pokemon/ditto.json')
const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3000
/*
    Que es un middleware?
    Es una función que se ejecuta antes de que se ejecute la función de la ruta, se ejecuta en el orden en el que se declaran
    Los middleware se ejecutan entre la petición del cliente y la respuesta del servidor
    Se puede determinar a que url se aplica el middleware, si no se especifica se aplica a todas las rutas
    Por ejemplo : app.use(('/pokemon/*', req, res, next) -> se aplica a todas las rutas que empiecen con /pokemon
*/

/*
app.use((req, res, next) => {
    console.log('Middleware')
    if (req.method !== 'POST') return next()
    if (req.headers['content-type'] !== 'application/json') return next()

    // solo llegan aquí las peticiones POST con content-type: application/json
    let body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        // mutar la request para que el siguiente middleware tenga acceso a los datos
        // El objeto req es unico para cada petición, por lo que se puede modificar sin problemas
        req.body = data
        next()
    })
})*/

// Middleware para que express pueda interpretar los datos que vienen en formato JSON
app.use(express.json())

app.get('/pokemon/ditto', (req, res) => {
    //res.status(200).send('<h1>Página principal</h1>')
    //res.json({message: 'Página principal'})
    res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
    // Guardar el pokemon en la base de datos
    res.status(201).json(req.body)
})

// Para todas las acciones que no se encuentren en las rutas anteriores se ejecutará esta función, es la ultima ruta que se ejecuta
app.use((req, res) => { 
    res.status(404).send('<h1>Página no encontrada</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})