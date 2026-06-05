document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactoForm');
    const listaDiv = document.getElementById('listaContactos');
    
    const API_URL = '/api/contactos';
    const API_KEY = 'Admin123'; 

    // 1. Cargar contactos (GET)
    const cargarContactos = async () => {
        try {
            const res = await fetch(API_URL);
            const contactos = await res.json();
            
            listaDiv.innerHTML = ''; 
            
            if (contactos.length === 0) {
                listaDiv.innerHTML = '<p style="color: #888;">No hay contactos registrados aún.</p>';
                return;
            }

            contactos.forEach(c => {
                const card = document.createElement('div');
                card.className = 'contacto-card';
                card.innerHTML = `
                    <div class="contacto-info">
                        <strong>${c.nombre}</strong>
                        <p>📧 Email: ${c.email}</p>
                        <p>📞 Teléfono: ${c.telefono || 'No especificado'}</p>
                    </div>
                    <button class="btn-eliminar" onclick="eliminarContacto(${c.id})">Eliminar</button>
                `;
                listaDiv.appendChild(card);
            });
        } catch (error) {
            console.error('Error al cargar contactos:', error);
            listaDiv.innerHTML = '<p style="color: red;">Error al conectar con el servidor.</p>';
        }
    };

    // 2. FUNCIÓN PARA ELIMINAR UN CONTACTO (CON CONTRASEÑA)
    window.eliminarContacto = async (id) => {
        const passwordIngresada = prompt('¡Atención! Para eliminar este contacto, ingresa la contraseña de administrador:');

        if (passwordIngresada === null) return; 

        if (passwordIngresada !== 'token-secreto-123') {
            alert('❌ Contraseña incorrecta. No tienes permisos para eliminar contactos.');
            return; 
        }

        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'x-api-key': API_KEY 
                }
            });

            const resultado = await res.json();

            if (res.status === 200) {
                alert(' Contacto eliminado con éxito.');
                cargarContactos(); 
            } else {
                alert(`Error ${res.status}: ${resultado.error}`);
            }
        } catch (error) {
            alert('Error al intentar comunicar el borrado con el servidor.');
        }
    };

    // 3. Crear un contacto (POST)
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY
                },
                body: JSON.stringify({ nombre, email, telefono })
            });

            const resultado = await res.json();

            if (res.status === 201) {
                alert('¡Contacto guardado exitosamente!');
                form.reset();       
                cargarContactos();  
            } else {
                alert(`Error ${res.status}: ${resultado.error || resultado.mensaje}`);
            }
        } catch (error) {
            alert('Error crítico de comunicación con el servidor backend.');
        }
    });

    // Carga inicial
    cargarContactos();
});
