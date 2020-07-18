//requires
//Hay tres tipos -> nativos de node, los que no son nativos (como express) y los que creamos nosotros

const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = '100'

//console.log(process.argv)

let argv = process.argv
let parametro = argv[2]
let base = parametro.split('=')[1]

console.log(base)

crearArchivo(base)
.then(res => console.log(`Archivo creado: ${res}`))
.catch(err => console.log(err))