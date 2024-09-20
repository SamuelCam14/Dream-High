// Configuración base para las URLs
const BASE_URL = 'https://raw.githubusercontent.com/SamuelCam14/products-dreamhigh/main';
const API_URL = `${BASE_URL}/products.json`;

// IMPORTACIONES
////NavLoader
import { loadFragment } from "../../modules/fetchUtils.js";
loadFragment('../../modules/navFooter/nav.html', 'main-nav');

////IMG LOADER
import { getFullImageUrl } from "../../modules/fetchUtils.js";


// REDIRECCION PRODUCTOS
function viewProduct(id) {
  window.location.href = `../product/product.html?id=${id}`;
}


// Definición de la clase Producto
class Producto {
  constructor(id, nombre, imagen, stock = 1, precio) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = getFullImageUrl(imagen);
    this.stock = stock;
    this.precio = precio;
  }
}

// Array para almacenar los productos
let productos = [];

// Función para cargar productos desde la API
async function cargarProductosDesdeAPI() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    productos = data.map(item => new Producto(item.id, item.nombre, item.imagen, item.stock, item.precio));
    cargarProductos(); // Llamamos a cargarProductos después de obtener los datos
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
}


function generarProductoHTML(producto) {
  const agotadoOverlay = producto.stock === 0 ? '<div class="agotado-overlay">Sold Out!</div>' : '';

  return `
    <div>
      <div class="card">
        <div class="product-image-container">
          <img src="${producto.imagen}" alt="${producto.nombre}" data-id="${producto.id}" class="product-image"/>
          ${agotadoOverlay}
        </div>
        <div class="card-body">
          <p class="card-text">${producto.nombre}</p>
          <p class="card-price">${producto.precio}</p>
        </div>
      </div>
    </div>
  `;
}

function cargarProductos() {
  const galeria = document.querySelector(".products-grid");
  galeria.innerHTML = ''; // Limpiamos la galería antes de cargar

  // Iterar sobre los productos y generar el HTML
  productos.forEach(producto => {
    galeria.innerHTML += generarProductoHTML(producto);
  });

  // Agregar el event listener a las imágenes
  galeria.addEventListener("click", function (event) {
    const target = event.target;

    // Comprobar si se hizo clic en una imagen del producto
    if (target.classList.contains("product-image")) {
      const id = target.getAttribute("data-id"); // Obtener el ID desde el data-id de la imagen
      viewProduct(id); // Llamar a la función viewProduct con el ID del producto
    }
  });
}



// Evento que se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  cargarProductosDesdeAPI(); // Cargamos los productos desde la API
});


