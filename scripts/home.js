
import {loadBooks} from "./data.js";

// Redirigir a la página de detalles
function showDetails(id) {
    console.log("este es el id" + id);
    window.location.href = `../pages/book.html?id=${id}&source=index`;
}

window.showDetails = showDetails;

document.addEventListener("DOMContentLoaded", async () =>  {
    const booksList = document.getElementById("booksList");
    const books = await loadBooks();

console.log(books);

    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("bg-white", "p-4", "shadow-lg");

        bookDiv.innerHTML = `
      <img src="${book.image}" alt="${book.title}" class="w-32 h-40 object-cover">
      <p class="text-center mt-2">${book.title}</p>
     <button class="mt-2 w-full text-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      onclick="showDetails(${book.id})">
                Ver Detalle</button>
    `;

        booksList.appendChild(bookDiv);
    });
});


