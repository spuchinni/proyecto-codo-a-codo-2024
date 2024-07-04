//SERVIDOR


const express = require("express");
const path = require("path");

const clientesRouter = require("./routes/clientesRouter");

const app = express();

// clases e imagenes
app.use('/img', express.static(path.join(__dirname, '../img')));
app.use('/styles.css', express.static(path.join(__dirname, '../styles.css')));
app.use('/pages', express.static(path.join(__dirname, '../pages')));

// rutas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/quienes-somos", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/quienes-somos.html"));
});

app.get("/catalogo", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/catalogo.html"));
});

app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/contacto.html"));
});

// clientess
app.use('/clientes', clientesRouter);


app.listen(3000, () => {
    console.log("Servidor corriendo en puerto", 3000);
});

