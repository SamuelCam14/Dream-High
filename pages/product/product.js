// Nav Load
import { loadFragment } from "../../modules/fetchUtils.js";
loadFragment('../../modules/navFooter/nav.html', 'main-nav');

// Image URL
import { getFullImageUrl } from "../../modules/fetchUtils.js";
import { slider } from "../../modules/sliderProductPage/slider.js";

// Configuración base para las URLs
const BASE_URL = 'https://raw.githubusercontent.com/SamuelCam14/products-dreamhigh/main';
const API_URL = `${BASE_URL}/products.json`;

let productoGlobal = null;

// ID del producto de la URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'), 10);
}

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
            document.title = `Dream High - ${productoGlobal.nombre}`;
            document.querySelector(".title-name").textContent = productoGlobal.nombre;
            document.querySelector(".product-name").textContent = productoGlobal.nombre;
            document.querySelector(".product-price").textContent = productoGlobal.precio;
            document.querySelector(".product-description").textContent = productoGlobal.descripcion;
            document.querySelector(".product-stock").textContent = productoGlobal.stock;

            // Funciones cuando se encuentre el producto
            updateUI();
            setupBuyButton(); // Configura el botón de compra
        } else {
            console.log('Producto no encontrado');
        }
    } else {
        console.log('No se pudieron obtener los productos');
    }
}

// Actualiza la UI con el producto
function updateUI() {
    if (productoGlobal) {
        console.log('Actualizando UI con:', productoGlobal.nombre);
        slider(productoGlobal, getFullImageUrl);
    }
}

// Configura el botón de compra
function setupBuyButton() {
    const buyButton = document.querySelector('.buy-btn');
    if (buyButton) {
        buyButton.onclick = async () => {
            // Enviar los detalles del producto al backend
            const response = await fetch('../../api/create-checkout-session.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: productoGlobal.nombre,
                    price: productoGlobal.precio * 100, // precio en centavos (2000 = $20)
                    quantity: 1 // cantidad por defecto
                })
            });

            if (!response.ok) {
                console.error('Error al crear la sesión de checkout:', response.statusText);
                return;
            }

            const session = await response.json();

            // Redirigir a Stripe Checkout
            const stripe = Stripe('pk_live_51PxuePDi40eM1lxIWdp5P4bycN4AKqFJu3hm8aEpQCIpdDW5TmeSEfHzbNzhRZhZJdrAozomP70f3DjiEqoWbYQh00YEBqzaeI'); // Usa la clave pública
            const result = await stripe.redirectToCheckout({ sessionId: session.id });

            if (result.error) {
                console.error('Error al redirigir a Checkout:', result.error.message);
            }
        };
    }
}

// Iniciar el proceso
initializeProduct();
