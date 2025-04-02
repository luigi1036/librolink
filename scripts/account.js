document.addEventListener("DOMContentLoaded", () => {
    const btnRegistro = document.getElementById("btnRegistro");
    const btnLogin = document.getElementById("btnLogin");
    const registro = document.getElementById("registro");
    const login = document.getElementById("login");
    const crearCuenta = document.getElementById("crearCuenta");
    const iniciarSesion = document.getElementById("iniciarSesion");

    // Cambiar entre pestañas de Registro/Login
    btnRegistro.addEventListener("click", () => {
        registro.classList.remove("hidden");
        login.classList.add("hidden");
        btnRegistro.classList.add("bg-blue-600", "text-white");
        btnLogin.classList.remove("bg-blue-600", "text-white");
    });

    btnLogin.addEventListener("click", () => {
        login.classList.remove("hidden");
        registro.classList.add("hidden");
        btnLogin.classList.add("bg-blue-600", "text-white");
        btnRegistro.classList.remove("bg-blue-600", "text-white");
    });

    // Crear cuenta (simulado con localStorage)
    crearCuenta.addEventListener("click", () => {
        const nombre = document.getElementById("nombreRegistro").value;
        const email = document.getElementById("emailRegistro").value;
        const password = document.getElementById("passwordRegistro").value;

        if (nombre && email && password) {
            const usuario = { nombre, email, password };
            localStorage.setItem("usuario", JSON.stringify(usuario));
            alert("Cuenta creada exitosamente. Ahora puedes iniciar sesión.");
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });

    // Iniciar sesión
    iniciarSesion.addEventListener("click", () => {
        const email = document.getElementById("emailLogin").value;
        const password = document.getElementById("passwordLogin").value;
        const usuario = JSON.parse(localStorage.getItem("usuario"));

        if (usuario && usuario.email === email && usuario.password === password) {
            alert(`Bienvenido, ${usuario.nombre}`);
        } else {
            alert("Credenciales incorrectas.");
        }
    });
});
