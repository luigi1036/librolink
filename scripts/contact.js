document.addEventListener("DOMContentLoaded", () => {
    const formContacto = document.getElementById("formContacto");

    formContacto.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert("Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.");
        formContacto.reset();
    });
});
