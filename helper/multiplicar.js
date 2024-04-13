const fs = require('fs');
const colors = require('colors');




const crearArchivo = async( base = 5, l=false, h=1 ) => {
    try {
        
        
        let salida, m, consola = '';
       
        for ( m = base; m <= h; m++ ) {
                
                for (let step = 1; step <= 10 ; step++) {  
                    salida += `${m} X ${step} = ${m*step}\n`; 
                    consola += `${m} ${'X'.red} ${step} ${'='.yellow} ${m*step}\n`;       
                }

            if (l==true) {
                console.log(colors.green('************************'));
                console.log(colors.rainbow(`      Tabla del ${m}       `));
                console.log(colors.green('************************'));
                console.log(`${consola}`);
            }
        }
          
        

        const nombreArchivo = `tabla-${base}.txt`;
        fs.writeFileSync(`./salida/${nombreArchivo}`, salida);
        console.log(`¡Archivo de tabla de multiplicar del ${base} Creado exitosamente!`);
        return nombreArchivo;
        
    } catch (err) {
        throw err;
    }
}

/*

function crearArchivo(base){

    return new Promise((resolve,reject) => {


        console.log('************************');
        console.log(`      Tabla del ${base}       `);
        console.log('************************');
        
        let salida = '';

        for (let step = 1; step <= 10 ; step++) {        
            salida += `${base} x ${step} = ${base*step}\n`;        
        }

        console.log(salida);
        const nombreArchivo = `tabla-${base}.txt`;
        //fs.writeFileSync(nombreArchivo, salida);
        fs.writeFile(nombreArchivo, salida, (err) => {
            if (err) {
                reject('Error al crear el archivo.');
            } else {
                resolve(nombreArchivo);
            }
        });

        console.log(`¡Archivo de tabla de multiplicar del ${base} Creado exitosamente!`);
    });   

}

*/

module.exports = {crearArchivo}