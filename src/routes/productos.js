const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img');
    },
    filename: function (req, file, cb) {
        let nombreImg = file.originalname;
        //reemplazo espacios
        if (nombreImg.includes(' ')) {

            nombreImg = nombreImg.split(' ');
            nombreImg = nombreImg.join('_');
        }
        cb(null, file.fieldname + '-' + nombreImg);
    }
});

const upload = multer({ storage: storage });

// IMPORTO CONTROLADORES
const controller_productos = require('../controllers/controller_productos');

// localhost:5000/productos
router.get('/', controller_productos.nuestrosProductos);

//localhost:5000/productos/detalle/:id
router.get('/detalle/:id', controller_productos.detalleProducto);

//localhost:5000/productos/borrar/:id
router.get('/borrar/:id', controller_productos.borrarProducto)

// localhost:5000/productos/crear
router.get('/crear', controller_productos.nuevoProducto);

//Método a utilizar cuando mando información desde el formulario
router.post('/crear', upload.single('imagen'), controller_productos.guardarProducto);



module.exports = router;