# Newsletter App Dashboard

Este proyecto front-end, desarrollado con Angular CLI, proporciona un panel de control para administrar boletines informativos. Los administradores pueden crear boletines, adjuntar archivos PDF e imágenes, y enviar correos personalizados en formato HTML a suscriptores.

## Ejecución con Docker

Este proyecto incluye un archivo Dockerfile para facilitar la creación de un contenedor.

```bash
docker build -t newsletter-app-frontend .
docker run -p 4200:4200 --env-file .env newsletter-app-frontend
```
