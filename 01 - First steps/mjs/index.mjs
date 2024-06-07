/*
    .js => por defecto utiliza CommonJS
    .cjs => por defecto utiliza CommonJS
    .mjs => por defecto utiliza ES Modules
*/

import { sum, substract, multiply } from './sum.mjs'

console.log(sum(1, 2))
console.log(substract(1, 2))
console.log(multiply(1, 2))