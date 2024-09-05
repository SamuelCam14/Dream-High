// Nav Load
import { loadFragment } from "../../modules/fetchUtils.js";
loadFragment('../../modules/navFooter/nav.html', 'main-nav')

// Configuración base para las URLs
const BASE_URL = 'https://raw.githubusercontent.com/SamuelCam14/products-dreamhigh/main';
const API_URL = `${BASE_URL}/products.json`;

let productoGlobal = null;

// ID del producto de la URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'), 10);
}
console.log(getProductIdFromUrl());


// Datos de la API
async function fetchProductsData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching product data:', error);
        return null;
    }
}

// Producto por ID
function findById(products, id) {
    return products.find(p => p.id === id);
}

// Función principal
async function initializeProduct() {
    const productId = getProductIdFromUrl();
    const products = await fetchProductsData();

    if (products) {
        productoGlobal = findById(products, productId);
        if (productoGlobal) {
            console.log('Producto encontrado:', productoGlobal);
            // Funciones cuando se encuentre el producto
            updateUI();
        } else {
            console.log('Producto no encontrado');
        }
    } else {
        console.log('No se pudieron obtener los productos');
    }
}

function updateUI() {
    if (productoGlobal) {
        console.log('Actualizando UI con:', productoGlobal.nombre);
        document.title = `Dream High - ${productoGlobal.nombre}`;
        document.querySelector(".title-name").textContent = productoGlobal.nombre;
        document.querySelector(".product-name").textContent = productoGlobal.nombre;
        document.querySelector(".product-price").textContent = productoGlobal.precio;
        document.querySelector(".product-description").textContent = productoGlobal.descripcion;
        document.querySelector(".product-stock").textContent = productoGlobal.stock
    }
}

// Iniciar el proceso
initializeProduct();