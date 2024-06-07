/*
    Proccess es una variable global de Node.js que provee información y control sobre el proceso actual
    Como es una variable global, no es necesario requerirla, simplemente se puede usar en cualquier parte del código.
*/

// argumentos de entrada, es decir, los argumentos que se pasan en la linea de comandos de la terminal
/*
    Por ejemplo, si se ejecuta el siguiente comando en la terminal:
    node process.js arg1 arg2 arg3

    process.argv contendrá lo siguiente:
    [
        '/usr/bin/node',
        '/path/to/your/file/process.js',
        'arg1',
        'arg2',
        'arg3'
    ]
*/
// console.log(process.argv)

// controlar el proceso y su salida, codigos de salida:
/*
    0: El proceso terminó sin errores
    1: El proceso terminó con errores
    2: El proceso terminó con errores en la ejecución
    3: El proceso terminó con errores en la ejecución y errores en la salida

*/
// process.exit(0)

// controlar eventos del proceso
process.on('exit', () => {
//  Este evento se ejecuta cuando el proceso termina
})

// devolver el directorio actual
console.log(process.cwd())

// variables de entorno
console.log(process.env.PACO)
