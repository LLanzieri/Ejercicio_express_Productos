const fs = require('fs');

//aca tengo el archivo en formato JSON - con el readFileSync se considera la ruta desde la raíz del proyecto para decirle a donde esta el archivo
const archivoJSON = fs.readFileSync('./src/data/productos.json', 'utf8');
const archivoTransformado = JSON.parse(archivoJSON);

let controller = {
    nuestrosProductos: (req, res) => {
        if (archivoTransformado.length == 0)
            return res.render('listaProductos', { error: '¡No hay productos cargados!' });
        else
            return res.render('listaProductos', { listadoProductos: archivoTransformado });
    },

    detalleProducto: (req, res) => {
        let i = req.params.id;
        console.log(archivoTransformado[i]);
        return res.render('detalleProducto', { objetoAmostrar: archivoTransformado[i] });
    },

    nuevoProducto: (req, res) => {
        return res.render('crearProducto');
    },
    guardarProducto: (req, res) => {
        let nombreImg;
        let nombreImagenFinal;
        if (req.body.nombre != '' && req.body.precio != '' && req.body.marca != '' && req.file) {
            nombreImg = req.file.filename;
            //reemplazo espacios
            if (nombreImg.includes(' ')) {
                nombreImg = nombreImg.split(' ');
                nombreImg = nombreImg.join('_');
                console.log(nombreImg);
            }

            nombreImagenFinal = '/img/' + nombreImg;

            console.log("ESTOY EN CONTROLLER - DESPUES: " + nombreImagenFinal);
            let nuevoProducto = {
                "categoria": req.body.categoria,
                "nombre": req.body.nombre,
                "precio": req.body.precio,
                "marca": req.body.marca,
                "imagen": nombreImagenFinal
            }

            archivoTransformado.push(nuevoProducto);

            fs.writeFileSync('./src/data/productos.json', JSON.stringify(archivoTransformado, null, ' '));
            return res.render('respuestaCreacionProducto', { msj: 'PRODUCTO CREADO EXITOSAMENTE.', rta: 1 })

        }

        return res.render('respuestaCreacionProducto', { msj: 'ALGÚN CAMPO SE ENCUENTRA VACÍO.', rta: 0 })

    },
    borrarProducto: (req, res) => {
        let i = req.params.id;
        // con SPLICE puedo sacar elementos del array, splice(INDICE,CANTIDAD DE ELEMENTOS QUE QUIERO ELIMINAR)
        archivoTransformado.splice(i, 1);

        console.log(archivoTransformado)
        fs.writeFileSync('./src/data/productos.json', JSON.stringify(archivoTransformado, null, ' '));
        return res.render('respuestaCreacionProducto', { msj: 'PRODUCTO ELIMINADO EXITOSAMENTE.', rta: 2 })

    }

}

module.exports = controller;