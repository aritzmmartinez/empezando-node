/*
    OS es un módulo que nos permite acceder a información del sistema operativo

    En caso de usar ES Module, se debe importar de la siguiente manera:
    import os from 'node:os'
*/

const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('------------------')

console.log('Nombre del sistema operativo: ' + os.platform())
console.log('Versión del sistema operativo: ' + os.release())
console.log('Arquitectura del sistema: ' + os.arch())
console.log('CPUs: ', os.cpus())
console.log('Memoria total: ' + os.totalmem() / 1024 / 1024 + ' MB')
console.log('Memoria libre: ' + os.freemem() / 1024 / 1024 + ' MB')
console.log('Uptime: ', os.uptime() / 60 / 60 + ' horas')
