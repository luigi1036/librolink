import { loadBooks, getBookById } from "./data.js";

function showDetails(id) {
    console.log("este es el id" + id);
    window.location.href = `../pages/book.html?id=${id}&source=index`;
}

window.showDetails = showDetails;
document.addEventListener("DOMContentLoaded", async function () {
    const books = await loadBooks();

    const bookList = document.getElementById("bookList");
    const searcher = document.getElementById("searcher");
    const categoryFilter = document.getElementById("categoryFilter");
    const availabilityFilter = document.getElementById("availabilityFilter");
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");
    const pageNumber = document.getElementById("pageNumber");

    let currentPage = 1;
    const booksXPage = 3;

    function showBooks() {
        bookList.innerHTML = "";

        let FilteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(searcher.value.toLowerCase()) ||
            book.author.toLowerCase().includes(searcher.value.toLowerCase())
        );

        if (categoryFilter.value) {
            FilteredBooks = FilteredBooks.filter(book => book.gender === categoryFilter.value);
        }

        if (availabilityFilter.value === "Disponible") {
            FilteredBooks = FilteredBooks.filter(book => book.available);
        }
        const totalPages = Math.ceil(FilteredBooks.length / booksXPage);
        const start = (currentPage - 1) * booksXPage;
        const paginatedBooks = FilteredBooks.slice(start, start + booksXPage);

        paginatedBooks.forEach(book => {
            bookList.innerHTML += `
        <div class="bg-white p-4 shadow-lg text-center">
          <img src="${book.image}" class="w-32 h-40 mx-auto object-cover">
          <p class="mt-2 font-bold">${book.title}</p>
          <p class="text-sm text-gray-500">${book.author}</p>
           <button class="mt-2 w-full text-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      onclick="showDetails(${book.id})">
                Ver Detalle</button>
    \`;
        </div>
      `;
        });
        pageNumber.textContent = `Página ${currentPage} de ${totalPages}`;
    }

    searcher.addEventListener("input", showBooks);
    categoryFilter.addEventListener("change", showBooks);
    availabilityFilter.addEventListener("change", showBooks);

    prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) { currentPage--; showBooks();
        } });
    nextPageBtn.addEventListener("click", () => { currentPage++; showBooks(); });

    showBooks();
});
