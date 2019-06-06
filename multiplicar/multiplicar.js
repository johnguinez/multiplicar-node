//requires
var colors = require('colors/safe');
const fs = require('fs');
// const fs = require('express');
// const fs = require('./');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Los Valoes ${base} u ${limite} deben ser numericos`);
            return;

        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            let res = `${base} *${i} = ${base * i} \n`;
            data += res;
        }

        resolve(data);
    })


}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido en ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 0; i < limite; i++) {
            let res = `${base} *${i} = ${base * i} \n`;
            data += res;
        }


        fs.writeFile(`tablas/tabla${base}al${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(colors.red(`The file tabla${base}.txt has been saved!`));

        });


    });
}


module.exports = {
    crearArchivo,
    listarTabla

}




///************************************ */` ``
// let base = (base) => {
//     for (let i = 0; i < 10; i++) {
//         let res = base + ' * ' + i + ' = ' + 2 * i;
//         console.log(res);
//     }
// };

// base(1);
///************************************ */