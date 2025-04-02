document.addEventListener("DOMContentLoaded", () => {
    // Simulación de datos (Se pueden cargar desde una API)
    const estadisticas = {
        totalLibros: 150,
        usuariosActivos: 34,
        prestamosActivos: 20,
        prestamosVencidos: 5
    };

    const libros = [
        { id: 1, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", disponible: "Sí" },
        { id: 2, titulo: "1984", autor: "George Orwell", disponible: "No" },
        { id: 3, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", disponible: "Sí" }
    ];

    // Insertar estadísticas en el DOM
    document.getElementById("totalLibros").textContent = estadisticas.totalLibros;
    document.getElementById("usuariosActivos").textContent = estadisticas.usuariosActivos;
    document.getElementById("prestamosActivos").textContent = estadisticas.prestamosActivos;
    document.getElementById("prestamosVencidos").textContent = estadisticas.prestamosVencidos;

    // Cargar libros en la tabla
    const tablaLibros = document.getElementById("tablaLibros");
    libros.forEach(libro => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td class="p-2">${libro.id}</td>
            <td class="p-2">${libro.titulo}</td>
            <td class="p-2">${libro.autor}</td>
            <td class="p-2">${libro.disponible}</td>
            <td class="p-2">
                <button class="bg-blue-500 text-white px-2 py-1 rounded edit-btn">Editar</button>
                <button class="bg-red-500 text-white px-2 py-1 rounded delete-btn">Eliminar</button>
            </td>
        `;
        tablaLibros.appendChild(fila);
    });

    // Cerrar sesión
    document.getElementById("logoutBtn").addEventListener("click", () => {
        alert("Cerrando sesión...");
        window.location.href = "index.html"; // Redirige a la página principal
    });
});
