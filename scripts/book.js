document.addEventListener("DOMContentLoaded", function () {
    // Base de datos de libros (simulada)
    const libros = [
        { id: 1, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", calificacion: 4.8, sinopsis: "Un niño que viaja por planetas y aprende lecciones de vida.", editorial: "Gallimard", anio: 1943, genero: "Infantil", disponible: true, imagen: "https://via.placeholder.com/200" },
        { id: 2, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", calificacion: 4.7, sinopsis: "La historia de la familia Buendía en Macondo.", editorial: "Sudamericana", anio: 1967, genero: "Novela", disponible: false, imagen: "https://via.placeholder.com/200" },
        { id: 3, titulo: "Breve Historia del Tiempo", autor: "Stephen Hawking", calificacion: 4.6, sinopsis: "Un viaje fascinante por el universo y el tiempo.", editorial: "Bantam Books", anio: 1988, genero: "Ciencia", disponible: true, imagen: "https://via.placeholder.com/200" }
    ];

    // Obtener ID del libro desde la URL
    const params = new URLSearchParams(window.location.search);
    const libroId = parseInt(params.get("id"));

    // Buscar el libro en la base de datos
    const libro = libros.find(l => l.id === libroId);

    if (!libro) {
        document.body.innerHTML = "<h1 class='text-center text-red-500 mt-10'>Libro no encontrado</h1>";
        return;
    }

    // Insertar datos en la página
    document.getElementById("imagenLibro").src = libro.imagen;
    document.getElementById("tituloLibro").textContent = libro.titulo;
    document.getElementById("autorLibro").textContent = `Autor: ${libro.autor}`;
    document.getElementById("calificacion").textContent = "⭐".repeat(Math.round(libro.calificacion));
    document.getElementById("valoracion").textContent = `(${libro.calificacion} de 5)`;
    document.getElementById("sinopsisLibro").textContent = libro.sinopsis;
    document.getElementById("editorialLibro").textContent = libro.editorial;
    document.getElementById("anioLibro").textContent = libro.anio;
    document.getElementById("generoLibro").textContent = libro.genero;
    document.getElementById("estadoLibro").textContent = libro.disponible ? "Disponible" : "No disponible";

    // Configurar botón de préstamo
    const botonPrestamo = document.getElementById("botonPrestamo");
    if (libro.disponible) {
        botonPrestamo.classList.add("bg-red-500", "hover:bg-red-700");
        botonPrestamo.addEventListener("click", () => alert("Préstamo solicitado"));
    } else {
        botonPrestamo.classList.add("bg-gray-400", "cursor-not-allowed");
        botonPrestamo.disabled = true;
    }
});
