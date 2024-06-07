const fs = require('node:fs')

fs.readdir('./', (err, files) => {
  if (err) {
    console.log('Error al leer el directorio: ', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})

/*
    En caso de usar una promesa en lugar de un callback, se puede hacer de la siguiente manera:
    const fs = require('node:fs/promises')

    fs.readdir('./')
        .then(files => {
            files.forEach(file => {
                console.log(file)
            })
        })
        .catch(err => {
            console.log('Error al leer el directorio: ', err)
        })
*/
