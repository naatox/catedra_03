JSON Server Example
Este es un ejemplo de cómo usar JSON Server para simular una API REST con datos JSON. En este caso, hemos creado un conjunto de datos simulados con posts, comentarios y un perfil.

Requisitos previos
Asegúrate de tener Node.js instalado en tu máquina.

Instalación
Clona este repositorio o descarga el código.

git clone https://github.com/rickyurvinaUCN/Prueba3IWM
Navega al directorio del proyecto.

cd Prueba3IWM
Instala las dependencias.

npm install
Uso
Inicia JSON Server.

json-server --watch posts.json
JSON Server se ejecutará en http://localhost:3000.

Rutas disponibles
Posts: http://localhost:3000/posts
Comentarios: http://localhost:3000/comments
Puedes realizar solicitudes GET, POST, PUT y DELETE a estas rutas para interactuar con los datos simulados.

Ejemplo de solicitud
# Obtener todos los posts
http://localhost:3000/posts

# Obtener un post específico (reemplaza {postId} con el ID del post)
http://localhost:3000/posts/{postId}

Mas documentación
https://github.com/typicode/json-server

## Frontend Mobile
En una nueva termina ejecuta:
```bash

npm install -g @ionic/cli

```
Luego
```bash
cd frontendMobileH

npm install 

ionic serve --o
```
La aplicación se abrira en el navegador, para que esta se pueda visualizar de mejor manera, ingrese a inspecionar elemento y ponga la página en dispositivo móvil.

