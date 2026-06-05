# Prueba Unidad II - Programación Web

## Objetivo

Desarrollar una aplicación web utilizando Node.js y Express para gestionar contactos mediante una arquitectura por capas, integrando rutas, controladores, servicios, validaciones, seguridad y una interfaz web.

## Evidencias

El repositorio incluye capturas de:

* Estructura del proyecto.
* Servidor en ejecución.
* Pruebas de endpoints.
* Funcionamiento del formulario.

## Tecnologías utilizadas

* Node.js
* Express
* HTML
* JavaScript
* JSON

## Instalación

Instalar dependencias:

```bash
npm install
```

## Ejecución

Iniciar el servidor:

```bash
node server.js
```

Abrir en el navegador:

```text
http://localhost:3000
```
## Ejemplos de uso

### Listar todos los contactos
GET http://localhost:3000/api/contactos

### Obtener contacto por ID
GET http://localhost:3000/api/contactos/2

### Crear un contacto (requiere API Key)
POST http://localhost:3000/api/contactos
Header: x-api-key: Admin123
Body:
{
  "nombre": "Alexandra Sanchez",
  "email": "ale123@gmail.com",
  "telefono": "912345678"
}

### Eliminar un contacto (requiere API Key)
DELETE http://localhost:3000/api/contactos/2
Header: x-api-key: Admin123

## Endpoints

```http
GET /api/contactos
GET /api/contactos/:id
POST /api/contactos
DELETE /api/contactos/:id
```

## Seguridad

Se implementó una API Key para proteger los endpoints de creación y eliminación de contactos.

## Manejo de errores

El sistema utiliza códigos HTTP:

* 200: Operación exitosa
* 201: Recurso creado
* 400: Solicitud incorrecta
* 401: No autorizado
* 404: Recurso no encontrado
* 500: Error interno

## HTTPS

HTTPS protege la información intercambiada entre el cliente y el servidor mediante cifrado, evitando que terceros puedan interceptar los datos en la red. En esta aplicación protege principalmente el header x-api-key que se envía en cada solicitud POST y DELETE, además de los datos ingresados en el formulario. Sin HTTPS, cualquier persona en la misma red podría ver esa clave y utilizarla sin autorización.

