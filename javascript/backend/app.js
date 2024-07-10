const express = require("express");
const path = require("path");

const clientesRouter = require("./routes/clientesRouter");

const app = express();

app.use('/img', express.static(path.join(__dirname, '../../img')));
app.use('/styles.css', express.static(path.join(__dirname, '../../styles.css')));
app.use('/pages', express.static(path.join(__dirname, '../../pages')));
app.use('/javascript', express.static(path.join(__dirname, '../frontend')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/quienes-somos", (req, res) => {
    res.sendFile(path.join(__dirname, "../../pages/quienes-somos.html"));
});

app.get("/catalogo", (req, res) => {
    res.sendFile(path.join(__dirname, "../../pages/catalogo.html"));
});

app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "../../pages/contacto.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../../pages/login.html"));
});


app.use('/clientes', clientesRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto", PORT);
});


