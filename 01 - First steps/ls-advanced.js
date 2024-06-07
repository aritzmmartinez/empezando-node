const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')

// Obtenemos el directorio a listar, el 2 es porque el 0 es node y el 1 es el archivo y el 2 es el directorio
const folder = process.argv[2] ?? './'

async function ls(folder){

    // Leemos el directorio para obtener los archivos, se hace uso de try/catch para manejar errores que puedan surgir al leer
    let files
    try {
        // Se obtienen los archivos del directorio junto con await ya que hasta que no se lea el directorio no se puede continuar
        files = await fs.readdir(folder)
    } catch {
        console.error(picocolors.red(`❌ Error al leer el directorio ${folder}`))
        process.exit(1)
    }

    // Se crea un mapa con todos los archivos con una funcion asincrona en paralelo para obtener toda la informacion de una vez
    // El map se hace con async para que se ejecute en paralelo y no secuencial
    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
        try {
            stats = await fs.stat(filePath)
        } catch {
            console.log(`Error al leer el archivo ${filePath}`)
            process.exit(1)
        }

        // Se obtiene la información del archivo
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? '[Directorio]' : '[Archivo]'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        // Se retorna la información del archivo
        // .padEnd(20) es para que la columa de los archivos tenga un tamaño de 20 caracteres
        return `${picocolors.white(fileType)} ${picocolors.blue(file.padEnd(20))} ${fileSize.toString()} Bytes - ${fileModified}`
    })

    // Se obtiene la información de todos los archivos y se imprime
    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)