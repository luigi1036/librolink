document.addEventListener("DOMContentLoaded", function () {
    const libros = [
        { id: 1, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", categoria: "Infantil", disponible: true, imagen: "https://via.placeholder.com/150" },
        { id: 2, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", categoria: "Novela", disponible: false, imagen: "https://via.placeholder.com/150" },
        { id: 3, titulo: "Breve Historia del Tiempo", autor: "Stephen Hawking", categoria: "Ciencia", disponible: true, imagen: "https://via.placeholder.com/150" },
        { id: 4, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", categoria: "Historia", disponible: true, imagen: "https://via.placeholder.com/150" },
        { id: 5, titulo: "Orgullo y Prejuicio", autor: "Jane Austen", categoria: "Novela", disponible: true, imagen: "https://via.placeholder.com/150" }
    ];

    const listaLibros = document.getElementById("listaLibros");
    const buscador = document.getElementById("buscador");
    const categoriaFiltro = document.getElementById("categoriaFiltro");
    const disponibilidadFiltro = document.getElementById("disponibilidadFiltro");
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");
    const pageNumber = document.getElementById("pageNumber");

    let paginaActual = 1;
    const librosPorPagina = 3;

    function mostrarLibros() {
        listaLibros.innerHTML = "";

        let librosFiltrados = libros.filter(libro =>
            libro.titulo.toLowerCase().includes(buscador.value.toLowerCase()) ||
            libro.autor.toLowerCase().includes(buscador.value.toLowerCase())
        );

        if (categoriaFiltro.value) {
            librosFiltrados = librosFiltrados.filter(libro => libro.categoria === categoriaFiltro.value);
        }

        if (disponibilidadFiltro.value === "Disponible") {
            librosFiltrados = librosFiltrados.filter(libro => libro.disponible);
        }

        const inicio = (paginaActual - 1) * librosPorPagina;
        const librosPaginados = librosFiltrados.slice(inicio, inicio + librosPorPagina);

        librosPaginados.forEach(libro => {
            listaLibros.innerHTML += `
        <div class="bg-white p-4 shadow-lg text-center">
          <img src="${libro.imagen}" class="w-32 h-40 mx-auto object-cover">
          <p class="mt-2 font-bold">${libro.titulo}</p>
          <p class="text-sm text-gray-500">${libro.autor}</p>
        </div>
      `;
        });
    }

    buscador.addEventListener("input", mostrarLibros);
    categoriaFiltro.addEventListener("change", mostrarLibros);
    disponibilidadFiltro.addEventListener("change", mostrarLibros);

    prevPageBtn.addEventListener("click", () => { if (paginaActual > 1) { paginaActual--; mostrarLibros(); } });
    nextPageBtn.addEventListener("click", () => { paginaActual++; mostrarLibros(); });

    mostrarLibros();
});
