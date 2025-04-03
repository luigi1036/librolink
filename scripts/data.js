// Cargar libros desde el JSON centralizado
async function loadBooks() {
    try {
        const response = await fetch('../data/data.json');
        const books = await response.json();
        return books;
    } catch (error) {
        console.error("Error al cargar los libros:", error);
        return [];
    }
}

// Función para obtener un libro por ID
async function getBookById(id) {
    const books = await loadBooks();
    return books.find(book => book.id === parseInt(id));
}

// Exportamos las funciones para usarlas en otros scripts
export { loadBooks, getBookById };
