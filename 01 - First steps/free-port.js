const net = require('node:net')

function findAvailablePort(port) {
    return new Promise((resolve, reject) => {
        const server = net.createServer()

        server.listen(port, () => {
            const { port } = server.address()
            server.close(() => {
                resolve(port)
            })
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                // Tambien se podria hacer un port + 1
                findAvailablePort(0).then(port => resolve(port))
            } else {
                reject(err)
            }
        })
    })
}

module.exports = { findAvailablePort }