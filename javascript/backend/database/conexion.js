let mysql = require("mysql");

const conexion = mysql.createConnection({
    host: "localhost",
    database: "mini_agenda",
    user: "root",
    password: "LasBulas0303"
});

conexion.connect((err) => {
    if (err) {
        console.error('Error en la conexión con la base de datos ' + err.message);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

module.exports = conexion;


