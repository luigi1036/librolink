document.addEventListener("DOMContentLoaded", function () {
    const libros = [
        { id: 1, titulo: "El Principito", imagen: "https://via.placeholder.com/100" },
        { id: 2, titulo: "Cien Años de Soledad", imagen: "https://via.placeholder.com/100" },
        { id: 3, titulo: "1984", imagen: "https://via.placeholder.com/100" }
    ];

    const contenedorLibros = document.getElementById("librosDestacados");

    libros.forEach(libro => {
        const libroDiv = document.createElement("div");
        libroDiv.classList.add("bg-white", "p-4", "shadow-lg");

        libroDiv.innerHTML = `
      <img src="${libro.imagen}" alt="${libro.titulo}" class="w-32 h-40 object-cover">
      <p class="text-center mt-2">${libro.titulo}</p>
    `;

        contenedorLibros.appendChild(libroDiv);
    });
});
