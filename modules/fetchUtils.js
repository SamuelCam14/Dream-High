// Función para construir la URL completa de las imágenes
export function getFullImageUrl(relativePath) {
    // Verifica si la ruta empieza con '../Assets/' y elimina '../'
    if (relativePath.startsWith('../Assets/')) {
        const cleanPath = relativePath.replace('../', '../../');
        return cleanPath;
    } else if (relativePath.startsWith("./Assets/")) {
        const cleanPath = relativePath.replace("./", "../../");
        return cleanPath;
    }
    return relativePath;
}

// Función para cargar un fragmento HTML y añadirlo a un elemento del DOM
export function loadFragment(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error al cargar ${url}:`, error));
}