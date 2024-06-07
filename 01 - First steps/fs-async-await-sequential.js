/*
    En este caso el proceso es secuencial, primero se lee el archivo archivo.txt y luego el archivo archivo2.txt
    Por lo que el segundo archivo no se lee hasta que el primero ha terminado de leerse.
    Este proceso es util cuando la respuesta de un archivo depende de la respuesta de otro archivo
*/

const {readFile} = require('node:fs/promises')

async function init() {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log("Primer texto: ", text)
    
    console.log('...... Haciendo cosas mientras se lee el archivo ......')
    
    console.log('Leyendo el segundo archivo...')
    const text2 = await readFile('./archivo2.txt', 'utf-8')
    console.log("Segundo texto: ", text2)
}

init()

/**
    IIFE (Immediately Invoked Function Expression) es una función que se ejecuta inmediatamente después de ser definida, igual que en el ejemplo de arriba

    ;(
        async () => {
            console.log('Leyendo el primer archivo...')
            const text = await readFile('./archivo.txt', 'utf-8')
            console.log("Primer texto: ", text)
            
            console.log('...... Haciendo cosas mientras se lee el archivo ......')
            
            console.log('Leyendo el segundo archivo...')
            const text2 = await readFile('./archivo2.txt', 'utf-8')
            console.log("Segundo texto: ", text2)
        }
    )()
 */

