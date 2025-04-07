const basePath = window.location.pathname.includes('/librolink') ? '/librolink/' : '/';

document.addEventListener("DOMContentLoaded", () => {
    const btnRegister = document.getElementById("btnRegister");
    const btnLogin = document.getElementById("btnLogin");
    const register = document.getElementById("register");
    const login = document.getElementById("login");
    const createAccount = document.getElementById("createAccount");
    const loginS = document.getElementById("loginS");

    // Cambiar entre pestañas de Register/Login
    btnRegister.addEventListener("click", () => {
        register.classList.remove("hidden");
        login.classList.add("hidden");
        btnRegister.classList.add("bg-blue-600", "text-white");
        btnLogin.classList.remove("bg-blue-600", "text-white");
    });

    btnLogin.addEventListener("click", () => {
        login.classList.remove("hidden");
        register.classList.add("hidden");
        btnLogin.classList.add("bg-blue-600", "text-white");
        btnRegister.classList.remove("bg-blue-600", "text-white");
    });

    // Crear cuenta
    createAccount.addEventListener("click", () => {
        const name = document.getElementById("nameRegister").value;
        const email = document.getElementById("emailRegister").value;
        const password = document.getElementById("passwordRegister").value;

        if (name && email && password) {
            const user = { name, email, password };
            localStorage.setItem("user", JSON.stringify(user));
            alert("Cuenta creada exitosamente. Ahora puedes iniciar sesión.");
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });

    // Iniciar sesión validando contra el archivo users.json
    loginS.addEventListener("click", async () => {
        const email = document.getElementById("emailLogin").value;
        const password = document.getElementById("passwordLogin").value;

        try {
            const response = await fetch(`${basePath}data/users.json`);
            const users = await response.json();

            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                alert(`Bienvenido, ${user.name} (${user.role})`);
                localStorage.setItem("userLogin", JSON.stringify(user));
                window.location.href = "pages/home.html";
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        } catch (error) {
            console.error("Error al cargar usuarios:", error);
            alert("Hubo un problema al intentar iniciar sesión.");
        }
    });
    
    
    // Cargar y mostrar libros desde data.json
    fetch(`${basePath}data/data.json`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('booksContainer'); // Contenedor donde se mostrarán los libros

            data.forEach(book => {
                // Crear un contenedor para cada libro
                const bookCard = document.createElement('div');
                bookCard.classList.add('book-card', 'p-4', 'border', 'rounded', 'shadow-md', 'bg-white');

                // Crear la etiqueta <img> para la imagen del libro
                const bookImage = document.createElement('img');
                bookImage.src = book.image; // Ruta de la imagen desde el JSON
                bookImage.alt = book.title; // Texto alternativo
                bookImage.classList.add('w-full', 'h-auto', 'mb-2');

                // Crear un título para el libro
                const bookTitle = document.createElement('h3');
                bookTitle.textContent = book.title;
                bookTitle.classList.add('text-lg', 'font-bold', 'mb-2');

                // Crear un botón para ver detalles
                const bookButton = document.createElement('button');
                bookButton.textContent = 'Ver Detalle';
                bookButton.classList.add('bg-red-500', 'text-white', 'px-4', 'py-2', 'rounded');
                bookButton.addEventListener('click', () => {
                    alert(`Detalles del libro:\n\nTítulo: ${book.title}\nAutor: ${book.author}\nSinopsis: ${book.synopsis}`);
                });

                // Agregar la imagen, el título y el botón al contenedor del libro
                bookCard.appendChild(bookImage);
                bookCard.appendChild(bookTitle);
                bookCard.appendChild(bookButton);

                // Agregar el contenedor del libro al contenedor principal
                container.appendChild(bookCard);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
