### Ejercicio de creación, modificación, eliminación y listado de productos. 

![NodeJS](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

Parte de la práctica integradora acerca de Node y Express para crear un servicio backend que administre una base de datos sencilla utilizando MongoDB.

Se permite ABM de productos especificando "categoría", "nombre", "precio", "marca" e imágen del producto, así como también la visualización de los mismos.

*Se implementan:*
- Rutas dinámicas.
- Controllers.
- Middlewares.
- Models.
- Dependencias FileSystem y Multer para tratamiento de archivos y recursos que se almacenan en el servidor.
- EJS para la implementación de vistas, utilizando el patrón MVC.
- HTML y CSS para el estilo desplegado por las vistas.
- Base de datos y colección en MongoDB.

> Instrucciones para ejecutar

1) Abrir la consola de comando dentro de la carpeta descargada.
2) Ejecutar por consola el comando: 
`$ npm install` - 
 el cual instalará y actualizará todas las dependencias necesarias para la ejecución.
3) Ejecutar por consola el comando: `$ node ./app.js` o también `$ nodemon ./app.js`
4) Establecer conexión con el servidor a través de cualquier navegador ingresando a la dirección: `http://localhost:5000`

###### ALGUNAS IMÁGENES :tw-1f4f7:

![imágen formulario de creación de producto.](https://raw.githubusercontent.com/LLanzieri/ejercicio_express_Productos/master/assets/crearProducto.png)
![imágen listado de productos guardados en la base de datos](https://raw.githubusercontent.com/LLanzieri/ejercicio_express_Productos/master/assets/listado.png)
![imágen de como se ve un producto en el listado](https://raw.githubusercontent.com/LLanzieri/ejercicio_express_Productos/master/assets/producto1.png)
![imágen de como se ve el detalle de un producto seleccionado](https://raw.githubusercontent.com/LLanzieri/ejercicio_express_Productos/master/assets/detalle.png)