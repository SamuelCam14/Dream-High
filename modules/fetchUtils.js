// Función para cargar un fragmento HTML y añadirlo a un elemento del DOM
export function loadFragment(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error al cargar ${url}:`, error));
}