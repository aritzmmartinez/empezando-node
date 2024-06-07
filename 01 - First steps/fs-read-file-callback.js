const fs = require('node:fs')
/*
    ReadFileSync es la forma sincrónica de leer un archivo

    console.log('Leyendo el primer archivo...')
    const texto = fs.readFileSync('./archivo.txt', 'utf-8')
    console.log(texto)

    Mientras que readFile es la forma asincrónica de leer un archivo
*/

console.log('Leyendo el primer archivo...')
// Un callback es una función que se ejecuta después de que una función asíncrona ha terminado de ejecutarse
fs.readFile('./archivo.txt', 'utf-8', (err, texto) => {
    if (err) {
        console.error('Error:', err)
        return
    }
    console.log('Primer texto: ', texto)
})

console.log('...... Haciendo cosas mientras se lee el archivo ......')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, texto) => {
    if (err) {
        console.error('Error:', err)
        return
    }
    console.log('Segundo texto: ', texto)
})