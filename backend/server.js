const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para JSON

const usersRoute = require('./routes/users');
app.use('/api', usersRoute); // ruta de usuarios bajo /api

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
