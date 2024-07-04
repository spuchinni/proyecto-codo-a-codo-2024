// CONSULTAS HTTP


const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const conexion = require('../conexion.js');

router.use(bodyParser.json()); // para parsear json
router.use(bodyParser.urlencoded({ extended: true }));

let clientes = [
    { id_contacto: 1, apellidos: "Gomez", nombres: "Juan", correo: "gj@gmail.com"},
];

/*router.get('/', (req, res) => {
    res.json({
        mensaje: 'Hola desde la ruta de clientes'
    });
});*/



router.post('/', (req, res) => {
    const { apellidos, nombres, correo } = req.body;

    const newCliente = {
        apellidos: apellidos,
        nombres: nombres,
        correo: correo
    };

    conexion.query('INSERT INTO contacto SET ?', newCliente, (error, results, fields) => {
        if (error) {
            console.error('Error al insertar cliente: ' + error.message);
            res.status(500).send('Error al guardar el cliente en la base de datos.');
            return;
        }

        newCliente.id_contacto = results.insertId; // asigna ID
        res.status(201).json(newCliente);
    });
});


module.exports = router;
