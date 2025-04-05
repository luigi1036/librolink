document.addEventListener("DOMContentLoaded", () => {
    const buttonFirst = document.querySelector(".tab");
    showContent(buttonFirst.dataset.tab, buttonFirst);

    document.querySelectorAll(".tab").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const tabId = e.currentTarget.dataset.tab;
            showContent(tabId, e.currentTarget);
        });
    });
});

function showContent(tabId, boton) {

    // Oculto todas las secciones
    document.querySelectorAll('.contenido-tab').forEach(div => div.classList.add('hidden'));

    // Muestro la sección activa
    const tabContent = document.getElementById(tabId);
    if (tabContent) tabContent.classList.remove('hidden');

    // Estilos para el boton activo
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('bg-purple-900', 'text-white');
        tab.classList.add('bg-gray-200', 'text-gray-700');
    });
    boton.classList.remove('bg-gray-200', 'text-gray-700');
    boton.classList.add('bg-purple-900', 'text-white');

    // Carga los datos
    loadData(tabId);
}

async function loadData(tab) {
    const ruta = `../data/${tab}.json`;
    console.log(ruta);
    try {
        const response = await fetch(ruta);
        if (!response.ok) throw new Error(`No se pudo cargar el archivo ${tab}.json`);

        const data = await response.json();

        const table = document.querySelector(`#${tab} table tbody`);
        if (!table) return;

        table.innerHTML = "";

        data.forEach(item => {
            const row = document.createElement("tr");

            if (tab === "data") {
                row.innerHTML = `
                    <td class="p-2">${item.id}</td>
                    <td class="p-2">${item.title}</td>
                    <td class="p-2">${item.author}</td>
                    <td class="p-2">
                        ${item.available
                    ? '<span class="text-green-600 font-semibold">Disponible</span>'
                    : '<span class="text-red-600 font-semibold">No disponible</span>'}
                    </td>
                `;
            } else if (tab === "users") {
                row.innerHTML = `
                    <td class="p-2">${item.name}</td>
                    <td class="p-2">${item.email}</td>
                    <td class="p-2">${item.role}</td>
                `;
            } else if (tab === "loan") {
                row.innerHTML = `
                    <td class="p-2">${item.id}</td>
                    <td class="p-2">${item.usuario}</td>
                    <td class="p-2">${item.libro}</td>
                    <td class="p-2">${item.fecha}</td>
                    <td class="p-2">${item.estado}</td>
                `;
            }

            table.appendChild(row);
        });

        updateCounters(tab, data.length);

    } catch (error) {
        console.error(`Error al cargar ${tab}:`, error);
    }
}

function updateCounters(tab, total) {
    if (tab === "data") {
        document.getElementById("totalBooks").textContent = total;
    } else if (tab === "users") {
        document.getElementById("usersActives").textContent = total;
    } else if (tab === "loan") {
        document.getElementById("loanActives").textContent = total;
    }
}
