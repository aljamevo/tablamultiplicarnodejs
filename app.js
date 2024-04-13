
const {crearArchivo } = require('./helper/multiplicar.js');
const argv = require('./config/yargs.js');

console.clear();

//const base = 6;

console.log(argv);
//console.log('base: yargs', argv.base);


crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo=>console.log(nombreArchivo, 'Creado'))
    .catch(err=>console.log(err));




