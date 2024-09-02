// Configuración base para las URLs
const BASE_URL = 'https://raw.githubusercontent.com/SamuelCam14/products-dreamhigh/main';
const API_URL = `${BASE_URL}/products.json`;

// IMPORTACIONES

//NAV LOAD
import { loadFragment } from "./modules/fetchUtils.js";
loadFragment('./modules/navFooter/nav.html', 'main-nav');


// Función para construir la URL completa de las imágenes
function getFullImageUrl(relativePath) {
  // Verifica si la ruta empieza con '../Assets/' y elimina '../'
  if (relativePath.startsWith('../Assets/')) {
    const cleanPath = relativePath.replace('../', './');
    return cleanPath;
  }
  return relativePath;
}

// Definición de la clase Producto
class Producto {
  constructor(id, nombre, imagen, stock = 1) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = getFullImageUrl(imagen);
    this.stock = stock;
  }
}

// Función para ver el producto
function viewProduct(id) {
  window.location.href = `./Products/product.html?id=${id}`;
}

// Array para almacenar los productos
let productos = [];

// Función para cargar productos desde la API
async function cargarProductosDesdeAPI() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    productos = data.map(item => new Producto(item.id, item.nombre, item.imagen, item.stock));
    cargarProductos(); // Llamamos a cargarProductos después de obtener los datos
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
}


// generar HTML de cada producto
function generarProductoHTML(producto) {
  const agotadoOverlay = producto.stock === 0 ? '<div class="agotado-overlay">Sold Out!</div>' : '';

  return `
    <div>
      <div class="card">
        <div class="product-image-container">
          <img src="${producto.imagen}" alt="${producto.nombre}" onclick="viewProduct(${producto.id})"/>
          ${agotadoOverlay}
        </div>
        <div class="card-body">
          <p class="card-text">${producto.nombre}</p>
          <div class="card-button">
            <div class="btn-group">
              <button onclick="viewProduct(${producto.id})" type="button" class="btn">
                Ver fotos
              </button>
            </div>
            <!-- <small class="text-body-secondary">${producto.stock} Stock</small> -->
          </div>
        </div>
      </div>
    </div>
  `;
}

function cargarProductos() {
  const galeria = document.querySelector(".products-grid");
  galeria.innerHTML = ''; // Limpiamos la galería antes de cargar

  productos.forEach(producto => {
    galeria.innerHTML += generarProductoHTML(producto);
  });
}

// Evento que se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  cargarProductosDesdeAPI(); // Cargamos los productos desde la API
});

