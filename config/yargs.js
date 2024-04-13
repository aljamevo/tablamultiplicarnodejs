const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de tabla Multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra tabla en pantalla'
                })
                .option('h', {
                    alias: 'h',
                    type: 'number',
                    demandOption: true,
                    describe: 'Fin de tabla Multiplicar'
                })
                .check((argv, options)=> {
                    console.log('yargs', argv)
                    if(isNaN(argv.b)){
                        throw 'La base debe ser Numerica.'
                    }
                    return true;
                })
                .argv;

module.exports = argv;