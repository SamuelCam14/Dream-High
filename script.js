// Configuración base para las URLs
const BASE_URL = 'https://raw.githubusercontent.com/SamuelCam14/products-dreamhigh/main';
const API_URL = `${BASE_URL}/products.json`;

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

// Función para generar el HTML de cada producto
function generarProductoHTML(producto) {
  const agotadoOverlay = producto.stock === 0 ? '<div class="agotado-overlay">Sold Out!</div>' : '';

  return `
    <div class="col">
      <div class="card shadow-sm">
        <div class="product-image-container">
          <img src="${producto.imagen}" alt="${producto.nombre}" onclick="viewProduct(${producto.id})"/>
          ${agotadoOverlay}
        </div>
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
  cargarProductosDesdeAPI(); // Cargamos los productos desde la API
});


// ----- ESTETICOS -----

// FUNCION STICKY NAVBAR
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById('main-nav');
  const hero = document.querySelector('.hero-container');
  const navbarSpacer = document.getElementById('navbar-spacer');
  let navbarOffset = navbar.offsetTop;
  let navbarHeight = navbar.offsetHeight;

  function handleScroll() {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition >= navbarOffset) {
      navbar.classList.add('sticky');
      navbarSpacer.style.height = `${navbarHeight}px`;
    } else {
      navbar.classList.remove('sticky');
      navbarSpacer.style.height = '0px';
    }
  }

  function updateMeasurements() {
    navbarOffset = hero.offsetHeight;
    navbarHeight = navbar.offsetHeight;
    handleScroll();
  }

  window.addEventListener('load', updateMeasurements);
  window.addEventListener('resize', updateMeasurements);
  window.addEventListener('scroll', handleScroll);
});

// HERO CONTAINER
document.addEventListener("DOMContentLoaded", function () {
  const letters = document.querySelectorAll('.heading .letter');

  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.transition = `opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease`;
      letter.style.opacity = 1;
      letter.style.transform = 'translateX(0) translateY(0)';
      letter.style.filter = 'blur(0)';
    }, index * 70);
  });
});