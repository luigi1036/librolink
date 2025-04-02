document.addEventListener("DOMContentLoaded", () => {
    const nombreUsuario = document.getElementById("nombreUsuario");
    const emailUsuario = document.getElementById("emailUsuario");
    const listaPrestamos = document.getElementById("listaPrestamos");
    const btnNuevoPrestamo = document.getElementById("btnNuevoPrestamo");

    // Simulación de usuario autenticado
    const usuario = JSON.parse(localStorage.getItem("usuario")) || { nombre: "Invitado", email: "invitado@email.com" };
    nombreUsuario.textContent = usuario.nombre;
    emailUsuario.textContent = usuario.email;

    // Simulación de préstamos guardados en localStorage
    let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];

    function cargarPrestamos() {
        listaPrestamos.innerHTML = "";
        if (prestamos.length === 0) {
            listaPrestamos.innerHTML = '<tr><td colspan="4" class="text-center p-4">No hay préstamos registrados</td></tr>';
            return;
        }

        prestamos.forEach((prestamo, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td class="border p-2">${prestamo.titulo}</td>
                <td class="border p-2">${prestamo.fechaPrestamo}</td>
                <td class="border p-2">${prestamo.fechaDevolucion}</td>
                <td class="border p-2">${prestamo.estado}</td>
            `;
            listaPrestamos.appendChild(row);
        });
    }

    // Cargar préstamos al iniciar
    cargarPrestamos();

    // Evento para solicitar un nuevo préstamo (simulación)
    btnNuevoPrestamo.addEventListener("click", () => {
        const nuevoPrestamo = {
            titulo: "El Principito",
            fechaPrestamo: new Date().toISOString().split("T")[0],
            fechaDevolucion: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().split("T")[0],
            estado: "En curso"
        };

        prestamos.push(nuevoPrestamo);
        localStorage.setItem("prestamos", JSON.stringify(prestamos));
        cargarPrestamos();
        alert("Nuevo préstamo registrado con éxito.");
    });
});
