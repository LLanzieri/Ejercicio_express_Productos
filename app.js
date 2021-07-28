const express = require('express');
const app = express();

//inicio sv
app.listen(5000, () =>
    console.log("Servidor iniciado correctamente")
);

// set the view engine to ejs
app.set('view engine', 'ejs');

// INDICO DONDE IR A BUSCAR RECURSOS DE LA CARPETA PUBLICA
app.use(express.static(__dirname + '/public'));

// MIDDLEWARES PARA EL TRATAMIENTO DE DATOS ENVIADOS POR EL FORM
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* ------------------------- RUTAS ---------------------------------*/

//Ruta principal
app.get('/', (req, res) => {
    return res.render('principal');
});

/* ------------------------- RUTAS DINAMICAS ---------------------------------*/

// BUSCO MIS RUTAS DINAMICAS
const rutasDinamicasProductos = require('./src/routes/productos');

// ACTIVO MIS RUTAS DINAMICAS PARA USAR - (cuando haga /productos que utilice las rutas de rutasDinamicasProductos)
app.use('/productos', rutasDinamicasProductos);

/* ------------- MIDDLEWARES ----------------------- */

//Ruta error en caso de no existir donde quiere ir el cliente
const mw_error404 = require('./src/middlewares/mw_error404');
app.use(mw_error404);