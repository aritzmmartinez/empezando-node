/*
    En este caso es un proceso paralelo, ambos archivos se leen al mismo tiempo, de manera que 
    la respuesta de uno no depende de la respuesta del otro y sera más rápido que el proceso secuencial
*/

import {readFile} from 'node:fs/promises'

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')

]).then(([text, text2]) => {
    console.log("Primer texto: ", text)
    console.log("Segundo texto: ", text2)

})