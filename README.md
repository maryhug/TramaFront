# Crear proyecto react
npx create-react-app tramafront

## ingresar a la carpeta del proyecto
cd tramafront

## Descargar librerias
npm install

## Instalar tailwindcss
npm install -D tailwindcss@3.4.3 postcss autoprefixer
npx tailwindcss init -p
Esto recreará correctamente tailwind.config.js y postcss.config.js.

## src/index.css
Este es el archivo de estilos principal. Reemplaza su contenido con:

@tailwind base;
@tailwind components;
@tailwind utilities;