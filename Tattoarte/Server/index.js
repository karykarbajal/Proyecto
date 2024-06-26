const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tattoarte'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Ruta para insertar datos en la tabla viewers
app.post('/api/viewers', (req, res) => {
    const { nombre, apellido, telefono, correo, contrasena } = req.body;
    const query = 'INSERT INTO viewers (nombre, apellido, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    db.query(query, [nombre, apellido, telefono, correo, contrasena], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send('Registro exitoso');
    });
});

// Ruta para obtener datos de la tabla tatuadores
app.get('/api/data', (req, res) => {
    const sql = 'SELECT * FROM tatuadores';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});