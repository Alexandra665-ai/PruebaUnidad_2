const express = require('express');
const router = express.Router();
const contactosController = require('../controllers/contactosController');
const authMiddleware = require('../middlewares/auth');

// Rutas de la API
router.get('/', contactosController.listar);                 
router.get('/:id', contactosController.obtenerDetalle);       

// Endpoints de escritura/modificación protegidos con seguridad
router.post('/', authMiddleware, contactosController.crear);  
router.delete('/:id', authMiddleware, contactosController.eliminar); // ===== NUEVA RUTA AGREGADA =====

module.exports = router;