import { loadBooks, getBookById } from "./data.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Obtengo el ID de la URL
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id");

    console.log("id recibido" + bookId);

    if (bookId == null) {
        document.getElementById("bookDetail").innerHTML = "<p>Libro no encontrado.</p>";
        return;
    }

    // Cargo los libros desde data.js
    const book = await getBookById(bookId);

    if (book == null) {
        document.getElementById("bookDetail").innerHTML = "<p>Libro no encontrado.</p>";
        return;
    }

    document.getElementById("bookDetail").innerHTML = `
        <div class="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex justify-center">
                    <img src="${book.image}" alt="${book.title}" class="w-72 h-auto rounded-lg shadow-md">
                </div>

                <div>
                    <h2 class="text-4xl font-bold text-gray-800">${book.title}</h2>
                    <p class="text-gray-600 text-lg mt-2"><strong>Autor:</strong> ${book.author}</p>

                    <p class="text-gray-500 mt-4"><strong>Género:</strong> ${book.gender}</p>
                    <p class="text-gray-500"><strong>Año:</strong> ${book.year}</p>
                   <!-- <p class="text-gray-500"><strong>Editorial:</strong> ${book.publisher}</p> -->

                    <p class="mt-4 text-gray-700">${book.synopsis}</p>

                    <p class="mt-4 text-lg font-semibold ${book.available ? 'text-green-600' : 'text-red-600'}">
                        <strong>Estado:</strong> ${book.available ? ' Disponible' : ' No Disponible'}
                    </p>

                    <button onclick="getLoan(${book.id})" 
                        class="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md 
                               hover:bg-red-700 transition duration-300 ease-in-out disabled:opacity-50"
                        ${book.available ? '' : 'disabled'}>
                         Solicitar Préstamo
                    </button>
                </div>
            </div>
        </div>
    `;
});

// Función para solicitar un préstamo
function getLoan(bookId) {
    alert(`Has solicitado el libro con ID: ${bookId}`);
}
