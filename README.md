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

HTTPS protege la información intercambiada entre cliente y servidor mediante cifrado, evitando accesos no autorizados y aumentando la seguridad de la aplicación.


