# Nombre del Proyecto

Teslo Shop es una tienda de ropa en línea inspirada en la estética y experiencia de compra de la tienda de Tesla. Ofrece prendas y accesorios de alta calidad a través de una interfaz moderna, minimalista y fácil de usar.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación y Uso en Entorno Local](#instalación-y-uso-en-entorno-local)
- [Uso con Docker](#uso-con-docker)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Variables de Entorno](#variables-de-entorno)
- [Scripts Disponibles](#scripts-disponibles)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## Requisitos

Antes de empezar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) v14 o superior (u otro runtime según tu proyecto)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) (opcional, solo si vas a usar contenedores)
- Base de datos local o servicio remoto (PostgreSQL, MySQL, MongoDB, etc.)

## Instalación y Uso en Entorno Local

1. Clona este repositorio:

   ```bash
   git clone https://github.com/b4dow/teslo-shop.git
   cd teslo-shop
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o si usas yarn
   yarn install
   # Si usas bun
   bun install
   ```

3. Crea un fichero de variables de entorno a partir del ejemplo:

   ```bash
   cp .env.template .env
   ```

   Y edita `.env` con tus claves y configuraciones.

4. Levanta la base de datos local (si aplica):

   - MySQL/PostgreSQL: asegúrate de tener el servicio corriendo y crea la base de datos.
   - MongoDB: ejecuta `mongod` o usa un contenedor Docker.

5. Corre migraciones o seeders (si tu proyecto lo requiere):

   ```bash
   npm run migrate
   npm run seed
   ```

   Ajusta según los scripts definidos.

6. Inicia la aplicación en modo desarrollo:

   ```bash
   npm run dev
   ```

7. Accede en tu navegador a `http://localhost:3000` o el puerto que uses.

## Uso con Docker

Si prefieres usar Docker para aislar el entorno, sigue estos pasos:

1. Construye la imagen:

   ```bash
   docker build -t b4dow/teslo-shop:latest .
   ```

2. (Opcional) Edita el fichero `docker-compose.yml` para ajustar puertos y volúmenes.

3. Levanta los contenedores:

   ```bash
   docker-compose up -d
   ```

4. Verifica que todo esté corriendo:

   ```bash
   docker-compose ps
   ```

5. Para detener y eliminar contenedores:

   ```bash
   docker-compose down
   ```

## Contribuir

¡Las contribuciones son bienvenidas! Para aportar:

1. Haz un Fork de este repositorio.
2. Crea una rama con tu feature o bugfix (`git checkout -b feature/nueva-funcion`).
3. Realiza tus cambios y haz commit (`git commit -m "feat: agrega nueva función"`).
4. Push a tu rama (`git push origin feature/nueva-funcion`).
5. Abre un Pull Request describiendo tu cambio.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
