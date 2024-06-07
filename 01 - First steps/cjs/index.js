/*
    La variable global de Node es global o globalThis, no window (unicamente en el navegador)
*/

// CommonJS require module
const { sum } = require('./sum')

console.log(sum(1, 2))