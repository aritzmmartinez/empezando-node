/**
 * 
 * Esto se puede utilizar en modulos que no sean nativos y no tengan promesas nativas
 * const { promisify } = require('node:util')
 * const readFile = promisify(fs.readFile)
 * 
 * En este caso, se lee el contenido de dos archivos de texto de manera asíncrona pero usando promesas en lugar de callbacks
 */

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
    .then((texto) => {
        console.log('Primer texto: ', texto)
    })
    .catch((err) => {
        console.error('Error:', err)
    })

console.log('...... Haciendo cosas mientras se lee el archivo ......')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
    .then((texto) => {
        console.log('Segundo texto: ', texto)
    })
    .catch((err) => {
        console.error('Error:', err)
    })