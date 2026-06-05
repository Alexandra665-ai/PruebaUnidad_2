const express = require('express');
const path = require('path');
const contactosRoutes = require('./routes/contactosRoutes'); // rutas importadas

const app = express();
const PORT = 3000;

// Middlewares 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Conexion de rutas
app.use('/api/contactos', contactosRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});