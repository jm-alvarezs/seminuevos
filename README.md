# Prueba Práctica Intelimotor

Objetivo: Usando datos fijos e input del usuario, publicar un anuncio de un auto en venta en seminuevos.com mediante un screen scraper con Puppeteer.

Estructura del Proyecto

back-end
Proyecto creado con Express.js + Typescript
- build (opcional): Front end compilado para producción
- controllers: Controladores con lógica
- data: Archivos con datos fijos como login y el auto
- functions: Lógica para interactuar con puppeteer
- routes: Definiciones de endpoints
- types: Interfaces de typescript
index.ts: Archivo de ejecución

¿Por qué elegí Typescript?
Al abstraer las funciones como login o postcar, quedaba incierto qué elementos debía incluir cada parámetro.

front-end
Proyecto creado con Vite + React Typescript
- public
- src
    - components: Componentes reutilizables clasificados en carpetas por vista o nombre de entidad
    - services: Llamadas al back end en funciones
    - types: Interfaces para typescript
    - views: Pantallas de aplicación con las que interactúa del usuario
    App.tsx: Archivo principal de ejecución

Ejecución

Opción 1: Ejecutar ambos proyectos en desarrollo

cd front-end && npm run dev
cd back-end && npm start

Opción 2: Ejecutar un sólo proyeto como producción
./production.sh
