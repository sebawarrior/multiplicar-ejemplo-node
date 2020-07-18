const {argv} = require('./config/yargs')

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log(argv)

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(res => console.log(`Archivo creado: ${res}`))
        .catch(err => console.log(err))        
        break

    default:
        console.log('Comando no reconocido');
        
}

//let argv2 = process.argv

//       console.log(argv)
//console.log(argv2)

//console.log(argv.base)
//       console.log('Límite', argv.limite)

