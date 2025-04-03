document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id");

    if (!bookId) {
        document.getElementById("bookDetails").innerHTML = "<p class='text-red-500'>No se encontró el libro.</p>";
        return;
    }

    const books = await cargarLibros();
    const book = books.find(b => b.id == bookId);

    if (!book) {
        document.getElementById("bookDetails").innerHTML = "<p class='text-red-500'>Libro no encontrado.</p>";
        return;
    }

    document.getElementById("bookDetails").innerHTML = `
        <div class="flex flex-col md:flex-row items-center">
            <img src="${book.image}" alt="${book.title}" class="w-48 h-64 object-cover">
            <div class="ml-4">
                <h2 class="text-xl font-bold">${book.title}</h2>
                <p class="text-gray-600">${book.author}</p>
                <p class="mt-2">${book.synopsis}</p>
                <button class="bg-red-500 text-white px-4 py-2 mt-4 rounded">
                    Solicitar Préstamo
                </button>
            </div>
        </div>
    `;
});
