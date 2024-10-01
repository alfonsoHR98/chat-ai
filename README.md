# Chatbot AI

Este proyecto es una plataforma de chatbot impulsada por inteligencia artificial, desarrollada con las siguientes tecnologías:

## Tecnologías

### TypeScript

Utilizado para crear una base de código tipada y segura.

### Next.js

Framework de React para crear una aplicación web con renderizado del lado del servidor y generación estática.

### Prisma

ORM que facilita la interacción con la base de datos PostgreSQL, permitiendo consultas eficientes y migraciones de esquema.

### PostgreSQL

Base de datos relacional utilizada para almacenar usuarios, conversaciones y otros datos importantes de la plataforma.

### Auth.js (anteriormente NextAuth.js)

Implementa autenticación segura, permitiendo inicio de sesión con Google y credenciales personalizadas.

## Características

- Chatbot impulsado por inteligencia artificial para conversaciones dinámicas.
- Autenticación segura mediante Google y credenciales personalizadas.
- Administración de usuarios y sesiones a través de Auth.js.
- Conexión eficiente a la base de datos PostgreSQL utilizando Prisma ORM.
- Escalabilidad y rendimiento optimizados con Next.js y TypeScript.

> [!IMPORTANT]
> Necesario el uso de Node.js (v18 o superior), PostgreSQL (v15 o superior) y Cuenta de Google para las credenciales OAuth (si se desea implementar autenticación mediante Google)

## Instalación y Configuración

1. Clona este repositorio

```bash
    git clone https://github.com/alfonsoHR98/chat-ai.git
    cd chat-ai
```

2. Instala las dependencias

```bash
    npm install
```

3. Configura las variables de entorno

Crea un archivo **_.env_** y **_.env.local_** agrega tus claves de Google, credenciales de base de datos y otras configuraciones necesarias

```.env
DATABASE_URL =
```

```.env.local
AUTH_SECRET =
AUTH_URL =
AUTH_GOOGLE_ID =
AUTH_GOOGLE_SECRET =
OPENAI_API_KEY =
```

4. Ejecuta las migraciones de base de datos

```bash
    npx prisma migrate dev
```

5. Inicia el servidor de desarrollo

```bash
    npm run dev
```

## Uso

Una vez que la aplicación esté en funcionamiento, los usuarios pueden autenticarse utilizando Google o sus credenciales personalizadas. El chatbot estará disponible para responder preguntas y mantener conversaciones automatizadas con los usuarios registrados.

## Scripts Disponibles

`npm run dev`: Inicia el servidor en modo de desarrollo.

`npm run build`: Construye la aplicación para producción.

`npm run start`: Inicia la aplicación en modo de producción.

`npx prisma migrate dev`: Ejecuta las migraciones de base de datos.

`npx prisma studio`: Abre Prisma Studio para gestionar la base de datos visualmente.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar en este proyecto, por favor sigue los pasos para realizar un pull request:

1. Haz un fork de este repositorio.
2. Crea una nueva rama `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz commit `git commit -m 'Agrega nueva funcionalidad'`.
4. Sube tus cambios a la rama `git push origin feature/nueva-funcionalidad`.
5. Abre un pull request para revisión.

## Authors

- [@alfonsoHR98](https://www.github.com/alfonsoHR98)
