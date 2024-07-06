const mysql = require('mysql');

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 's3b1t4cr34t3',
  database: 'proyecto_codo_a_codo_2024'
});

// Función para actualizar un usuario por ID
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nombre, email, contraseña } = req.body;

  const sql = `UPDATE usuario SET nombre = ?, email = ?, contraseña = ? WHERE id = ?`;
  const values = [nombre, email, contraseña, id];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar usuario:', err);
      res.status(500).send('Error al actualizar usuario');
      return;
    }
    res.send(`Usuario actualizado correctamente con ID ${id}`);
  });
};
