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


# Estructura típica de carpetas y archivos para React + Tailwind CSS
my-react-tailwind-project/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/                 # Imágenes, fuentes, íconos, etc.
│   ├── components/             # Componentes React reutilizables
│   │   ├── Button.jsx
│   │   ├── header.jsx
│   │   └── ...
│   ├── pages/                  # Vistas o páginas (si usas React Router)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── ...
│   ├── hooks/                  # Custom hooks (opcional)
│   ├── context/                # Context API o Providers (opcional)
│   ├── utils/                  # Funciones utilitarias
│   ├── styles/                 # Archivos CSS / Tailwind personalizados
│   │   ├── index.css           # Importa Tailwind base, componentes, utilidades
│   │   └── tailwind.css        # Archivo para agregar clases personalizadas (opcional)
│   ├── App.jsx
│   ├── main.jsx                # Punto de entrada (React 18+) o index.jsx
│   └── tailwind.config.js      # Configuración de Tailwind (normalmente en raíz)
├── .gitignore
├── package.json
├── postcss.config.js           # Configuración PostCSS para Tailwind
├── tailwind.config.js          # Configuración Tailwind
└── vite.config.js / webpack.config.js (según el bundler que uses)
