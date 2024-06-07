const path = require('node:path')

// barra separadora de carpeas dependiendo del sistema operativo
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// obtener nombre del archivo + extensión
const base = path.basename('/content/subfolder/test.txt')
console.log(base)

// obtener nombre del archivo sin extensión
const filename = path.basename('/content/subfolder/test.txt', '.txt')
console.log(filename)

// obtener extensión del archivo
const extension = path.extname('/content/subfolder/test.txt')
console.log(extension)
