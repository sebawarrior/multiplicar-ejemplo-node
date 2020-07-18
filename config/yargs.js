
const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias:'l',
        default: 10
    }
}

let argv = require('yargs') // command(nombre de la flag, descripción de flag, objeto con características)
.command('listar', 'Imprime en consola la tabla de multiplicar', options)
.command('crear', 'Genera un nuevo archivo con la tabla para multiplicar', options)
.argv;

module.exports = {
    argv
}