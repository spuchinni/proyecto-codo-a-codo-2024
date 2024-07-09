// CONSULTAS HTTP


const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const conexion = require('../conexion.js');

router.use(bodyParser.json()); // para parsear json
router.use(bodyParser.urlencoded({ extended: true }));

// consulta mostrar
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM contacto', (error, results) => {  //obtenemos los datos de la base de datos
        if (error) {
            console.error('Error al obtener clientes: ' + error.message);
            res.status(500).send('¡ERROR al obtener clientes de la base de datos!');
            return;
        }
        res.status(200).json(results);
    });
});

// consulta subir un cliente a la base de datos
router.post('/', (req, res) => {
    const { apellidos, nombres, correo } = req.body;

    const newCliente = {
        apellidos: apellidos,
        nombres: nombres,
        correo: correo
    };

    conexion.query('INSERT INTO contacto SET ?', newCliente, (error, results, fields) => {
        if (error) {
            console.error('ERROR al insertar cliente: ' + error.message);
            res.status(500).send('¡ERROR al guardar el cliente en la base de datos!'); //en el caso de error interno en el servidor
            return;
        }

        newCliente.id_contacto = results.insertId; // asigna ID
        res.status(201).json(newCliente);//creacion
    });
});

//consulta actualizar
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { apellidos, nombres, correo } = req.body;

    const sql = `UPDATE contacto SET apellidos = ?, nombres = ?, correo = ? WHERE id_contacto = ?`;
    const values = [apellidos, nombres, correo, id];

    conexion.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            res.status(500).send('Error al actualizar usuario');
            return;
        }
        res.send(`Usuario actualizado correctamente con ID ${id}`);
    });
});

//consulta delete

router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    const sql = `DELETE FROM contacto WHERE id_contacto = ?`;
    const values = [id];

    conexion.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error al borrar usuario:', err);
            res.status(500).send('Error al borrar usuario');
            return;
        }
        res.send(`Usuario eliminador correctamente con ID ${id}`);
    });
});


module.exports = router;