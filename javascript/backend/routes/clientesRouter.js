
const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const conexion = require('../database/conexion.js');

router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', (req, res) => {
    conexion.query('SELECT * FROM contacto', (error, results) => {  
        if (error) {
            console.error('Error al obtener clientes: ' + error.message);
            res.status(500).send('¡ERROR al obtener clientes de la base de datos!');
            return;
        }
        res.status(200).json(results);
    });
});

router.post('/', (req, res) => {
    const { apellidos, nombres, correo, pedido_id } = req.body;

    const newCliente = {
        apellidos: apellidos,
        nombres: nombres,
        correo: correo,
        pedido_id: pedido_id
    };

    conexion.query('INSERT INTO contacto SET ?', newCliente, (error, results, fields) => {
        if (error) {
            console.error('ERROR al insertar cliente: ' + error.message);
            res.status(500).send('¡ERROR al guardar el cliente en la base de datos!'); 
            return;
        }

        newCliente.id_contacto = results.insertId; 
        res.status(201).json(newCliente);
    });
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { apellidos, nombres, correo, pedido_id } = req.body;

    const sql = `UPDATE contacto SET apellidos = ?, nombres = ?, correo = ?, pedido_id = ? WHERE id_contacto = ?`;
    const values = [apellidos, nombres, correo, pedido_id, id];

    conexion.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            res.status(500).send('Error al actualizar usuario');
            return;
        }
        res.send(`Usuario actualizado correctamente con ID ${id}`);
    });
});


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
