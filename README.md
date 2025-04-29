# LibroLink

LibroLink es una aplicación web para la gestión de una biblioteca online. Permite a los usuarios explorar un catálogo de libros, solicitar préstamos, gestionar su perfil y a los administradores controlar libros, usuarios y préstamos.

## Estructura del Proyecto

```
.
├── index.html
├── script.js
├── styles.css
├── data/
│   ├── data.json
│   ├── loan.json
│   └── users.json
├── img/
│   └── ... (imágenes de portadas de libros)
├── pages/
│   ├── admin.html
│   ├── book.html
│   ├── catalog.html
│   ├── contact.html
│   ├── home.html
│   ├── loan.html
│   └── profile.html
├── scripts/
│   ├── admin.js
│   ├── book.js
│   ├── catalog.js
│   ├── contact.js
│   ├── data.js
│   ├── detail.js
│   ├── home.js
│   ├── loan.js
│   └── utils.js
└── .idea/
```

## Instalación y Uso

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/luigi1036/librolink.git
   cd librolink
   ```

2. **Abre el archivo `index.html` en tu navegador.**  
   No requiere backend, todo funciona con archivos estáticos y localStorage.

## Funcionalidades

- **Catálogo de Libros:**  
  Explora, filtra y busca libros disponibles en la biblioteca.

- **Detalle de Libro:**  
  Visualiza información detallada de cada libro y solicita préstamos.

- **Gestión de Préstamos:**  
  Consulta tus préstamos activos e historial.

- **Perfil de Usuario:**  
  Edita tus datos, cambia tu contraseña y gestiona notificaciones.

- **Panel de Administración:**  
  Administra libros, usuarios y préstamos (solo para usuarios con rol de administrador).

- **Notificaciones:**  
  Sistema de notificaciones tipo toast para informar acciones y errores.

## Datos de Prueba

- Los usuarios y libros de prueba se encuentran en los archivos [`data/users.json`](data/users.json) y [`data/data.json`](data/data.json).
- El login se valida contra los usuarios definidos en `users.json`.

## Scripts Principales

- [`scripts/utils.js`](scripts/utils.js): Funciones utilitarias (notificaciones, autenticación, navbar, etc).
- [`scripts/data.js`](scripts/data.js): Carga y consulta de libros.
- [`scripts/home.js`](scripts/home.js): Lógica de la página principal.
- [`scripts/catalog.js`](scripts/catalog.js): Búsqueda, filtrado y paginación del catálogo.
- [`scripts/book.js`](scripts/book.js): Detalle de libro y solicitud de préstamo.
- [`scripts/loan.js`](scripts/loan.js): Gestión de préstamos del usuario.
- [`scripts/admin.js`](scripts/admin.js): Panel de administración.
- [`scripts/contact.js`](scripts/contact.js): Envío de formulario de contacto.

## Tecnologías Utilizadas

- **HTML5, CSS3, JavaScript ES6**
- **TailwindCSS** (CDN)
- **LocalStorage** para autenticación y persistencia de datos en el navegador

## Créditos

Desarrollado por [luigi1036](https://github.com/luigi1036).  y https://github.com/dairon2 

---

**Nota:** Este proyecto es una demo educativa y no incluye backend ni persistencia real de datos.
