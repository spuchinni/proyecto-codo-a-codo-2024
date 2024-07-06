const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Ruta para actualizar un usuario por ID
router.put('/usuarios/:id', usersController.updateUser);

module.exports = router;