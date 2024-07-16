// Definición de la clase Producto
class Producto {
  constructor(id, nombre, imagen, stock = 1) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.stock = stock;
  }
}

// Función para ver el producto
function viewProduct(id) {
  window.location.href = `./Products/product.html?id=${id}`;
}

// Array de productos utilizando la clase Producto
const productos = [
  new Producto(16, "SINNER LOVER", "./Assets/High Stakes/Sinner Lover/FullSizeRender_(17)-transformed.webp"),
  new Producto(17, "BIPOLAR", "./Assets/High Stakes/Bipolar/FullSizeRender_(15)-transformed.webp"),
  new Producto(18, "RISK RICH", "./Assets/High Stakes/Risk Rich/FullSizeRender_(16)-transformed.webp"),
  new Producto(1, "ALL EYEZ ON ME - BROWN", "./Assets/High Stakes/Café/FullSizeRender-_9_-transformed.webp"),
  new Producto(2, "JGL - 701", "./Assets/High Stakes/JGL/FullSizeRender-_8_-transformed.webp"),
  new Producto(15, "ALL EYEZ ON ME - BLACK", "./Assets/High Stakes/All Eyez On Me - Black/FullSizeRender_(14)-transformed.webp"),
  new Producto(4, "SPEND MONEY CAMO", "./Assets/JC Hats/Born to Spend Camuflage/FullSizeRender-_7_-transformed.webp"),
  new Producto(7, "SPEND MONEY GREEN", "./Assets/JC Hats/Spend Money Green/FullSizeRender-_11_-transformed.webp"),
  new Producto(6, "SPEND MONEY BLACK", "./Assets/JC Hats/Born to Spend Negra c Rojo/FullSizeRender-_12_-transformed.webp"),
  new Producto(8, "SPEND MONEY GRAY BLUE", "./Assets/JC Hats/Spend Money Gray Blue/FullSizeRender_(1)-transformed.webp"),
  new Producto(5, "SPEND MONEY BLACK MESH", "./Assets/JC Hats/Born to Spend Malla Negra/FullSizeRender-_13_-transformed.webp"),
  new Producto(9, "SPEND MONEY BEIGE GREEN", "./Assets/JC Hats/Spend Money Beige Green/FullSizeRender-_10_-transformed.webp"),
  new Producto(10, "Oracle Red Bull Racing Checo Pérez 9FORTY Snapback", "./Assets/New Era/Checo Perez/FullSizeRender_(6)-transformed.webp"),
  new Producto(3, "BLACK PANTHER", "./Assets/High Stakes/Pantera Negra/FullSizeRender_(5)-transformed.webp"),
  new Producto(11, "Los Angeles Dodgers MLB Classics 39THIRTY Elástica", "./Assets/New Era/Dodgers/FullSizeRender_(4)-transformed.webp"),
  new Producto(13, "New York Yankees MLB Classics 59FIFTY Cerrada Roja", "./Assets/New Era/NY Yankees/Red/FullSizeRender_(3)-transformed.webp"),
  new Producto(12, "New York Yankees Black on Black 59FIFTY Cerrada", "./Assets/New Era/NY Yankees/Black/FullSizeRender_(2)-transformed.webp"),
  new Producto(14, "Texas Rangers Authentic Collection 59FIFTY Cerrada", "./Assets/New Era/Texas Rangers/FullSizeRender-transformed.webp"),
];

// Función para generar el HTML de un producto
function generarProductoHTML(producto) {
  return `
    <div class="col">
      <div class="card shadow-sm">
        <img src="${producto.imagen}" alt="${producto.nombre}" onclick="viewProduct(${producto.id})"/>
        <div class="card-body">
          <p class="card-text">${producto.nombre}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button onclick="viewProduct(${producto.id})" type="button" class="btn btn-sm btn-outline-secondary">
                Ver más
              </button>
            </div>
            <small class="text-body-secondary">${producto.stock} Stock</small>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Variables para la carga progresiva
let productosVisibles = 6;
const incremento = 6;

// Función para cargar productos
function cargarProductos() {
  const galeria = document.querySelector(".row-cols-1.row-cols-sm-2.row-cols-md-3.g-3");
  galeria.innerHTML = ''; // Limpiamos la galería antes de cargar

  for (let i = 0; i < Math.min(productosVisibles, productos.length); i++) {
    galeria.innerHTML += generarProductoHTML(productos[i]);
  }
}

// Función para detectar si estamos cerca del final de la página
function isNearBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
}

// Event listener para el scroll
window.addEventListener('scroll', () => {
  if (isNearBottom() && productosVisibles < productos.length) {
    productosVisibles += incremento;
    cargarProductos();
  }
});

// Evento que se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  cargarProductos();
});
