const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/contactos.json');

const leerArchivo = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

const escribirArchivo = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

const contactosService = {
    getAll: () => {
        return leerArchivo();
    },
    
    getById: (id) => {
        const contactos = leerArchivo();
        return contactos.find(c => c.id === parseInt(id));
    },
    
    create: (nuevoContacto) => {
        const contactos = leerArchivo();
        const nuevoId = contactos.length > 0 ? Math.max(...contactos.map(c => c.id)) + 1 : 1;
        
        const contactoFinal = { id: nuevoId, ...nuevoContacto };
        contactos.push(contactoFinal);
        
        escribirArchivo(contactos);
        return contactoFinal;
    },

    
    delete: (id) => {
        const contactos = leerArchivo();
        const index = contactos.findIndex(c => c.id === parseInt(id));
        
        if (index === -1) return false;         
        contactos.splice(index, 1); 
        escribirArchivo(contactos); 
        return true;
    }
};

module.exports = contactosService;