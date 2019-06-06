const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
var colors = require('colors');

let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data.blue))
            .catch(e => console.log(e))
            //console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(e => console.log(e))
            //console.log('crear');
        break;

    default:
        console.log('comando no reconocido');

}

//console.log('limite ', argv.limite);

//console.log(process.argv);
// let param = argv[2];
// let base = param.split('=')[1]