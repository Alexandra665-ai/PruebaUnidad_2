
module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    
    if (req.method === 'GET') {
        return next();
    }

    
    if (!apiKey || apiKey !== 'Admin123') { 
        return res.status(401).json({ 
            error: 'No autorizado', 
            mensaje: 'Falta la API Key o es incorrecta. Acceso denegado.' 
        });
    }
    
    next();
};