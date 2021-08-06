const fs = require('fs');
const productos = require('../database/models/productos');

let controller = {
    nuestrosProductos: (req, res) => {
        // consulta que me devuelve todos los productos
        //en 'documentos' tengo lo que me devuelve la consulta

        productos.find({}, (error, documentos) => {

            if (error)
                return res.status(500).json(error);

            if (documentos.length == 0)
                return res.render('listaProductos', { error: '¡No hay productos cargados!' });
            else
                return res.render('listaProductos', { listadoProductos: documentos });

        });
    },

    detalleProducto: async (req, res) => {
        let documento = await productos.findById({ _id: req.params.id });
        return res.render('detalleProducto', { objetoAmostrar: documento });

    },

    editarProducto: async (req, res) => {
        let objeto = await productos.findById({ _id: req.params.id });
        return res.render('editarProducto', { objetoAeditar: objeto });
    },

    editarYguardarProducto: async (req, res) => {
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

            //ME TRAIGO EL OBJETO QUE QUIERO EDITAR
            let obj = await productos.findById(req.params.id);
            //LO EDITO
            obj = {
                categoria: req.body.categoria,
                nombre: req.body.nombre,
                precio: req.body.precio,
                marca: req.body.marca,
                imagen: nombreImagenFinal
            }

            // findByIdAndUpdate recibe (EL ID DEL OBJETO PARA QUE LO UBIQUE, EL OBJETO CON EL QUE QUIERO EDITAR)


            await productos.findByIdAndUpdate(req.params.id, obj);

            return res.render('respuestaCreacionProducto', { msj: 'PRODUCTO EDITADO EXITOSAMENTE.', rta: 3 })

        }

        return res.render('respuestaCreacionProducto', { msj: 'ALGÚN CAMPO SE ENCUENTRA VACÍO.', rta: 0 })
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

            //console.log("ESTOY EN CONTROLLER - DESPUES: " + nombreImagenFinal);

            productos.create({
                "categoria": req.body.categoria,
                "nombre": req.body.nombre,
                "precio": req.body.precio,
                "marca": req.body.marca,
                "imagen": nombreImagenFinal
            });

            return res.render('respuestaCreacionProducto', { msj: 'PRODUCTO CREADO EXITOSAMENTE.', rta: 1 })

        }

        return res.render('respuestaCreacionProducto', { msj: 'ALGÚN CAMPO SE ENCUENTRA VACÍO.', rta: 0 })
    },
    borrarProducto: async (req, res) => {
        await productos.findByIdAndRemove({ _id: req.params.id });

        return res.render('respuestaCreacionProducto', { msj: 'PRODUCTO ELIMINADO EXITOSAMENTE.', rta: 2 })
    }

}

module.exports = controller;