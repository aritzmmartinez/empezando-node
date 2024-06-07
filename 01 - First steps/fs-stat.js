const fs = require('node:fs') // A partir de Node 16, se recomienda usar el prefijo node: para acceder a los módulos nativos

const stats = fs.statSync('./archivo.txt')

console.log('Información del archivo:')
console.log('------------------')
console.log(
    stats.isFile() ? 'Es un archivo\n' : 'No es un archivo\n',
    stats.isDirectory() ? 'Es un directorio\n' : 'No es un directorio\n',
    stats.isSymbolicLink() ? 'Es un enlace simbólico\n' : 'No es un enlace simbólico\n',
    stats.size + ' bytes\n',
)