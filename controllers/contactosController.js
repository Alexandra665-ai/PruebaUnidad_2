const contactosService = require('../services/contactosService');

const contactosController = {
    listar: (req, res) => {
        try {
            const lista = contactosService.getAll();
            res.status(200).json(lista);
        } catch (error) {
            res.status(500).json({ error: 'Error interno al leer los datos' });
        }
    },
    
    obtenerDetalle: (req, res) => {
        const contacto = contactosService.getById(req.params.id);
        if (!contacto) {
            return res.status(404).json({ error: 'Contacto no encontrado' });
        }
        res.status(200).json(contacto);
    },
    
    crear: (req, res) => {
        const { nombre, email, telefono } = req.body;
        
        if (!nombre || !email) {
            return res.status(400).json({ error: 'Faltan campos obligatorios (nombre y email)' });
        }
        
        const nuevo = contactosService.create({ nombre, email, telefono: telefono || '' });
        res.status(201).json({ mensaje: 'Contacto creado con éxito', data: nuevo });
    },

    // ===== NUEVA FUNCIÓN AGREGADA =====
    eliminar: (req, res) => {
        try {
            const eliminado = contactosService.delete(req.params.id);
            
            if (!eliminado) {
                return res.status(404).json({ error: 'Contacto no encontrado para eliminar' });
            }
            
            res.status(200).json({ mensaje: 'Contacto eliminado con éxito' });
        } catch (error) {
            res.status(500).json({ error: 'Error interno al eliminar datos' });
        }
    }
};

module.exports = contactosController;