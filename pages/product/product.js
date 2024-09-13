// Nav Load
import { loadFragment } from "../../modules/fetchUtils.js";
loadFragment('../../modules/navFooter/nav.html', 'main-nav')

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
            document.title = `Dream High - ${productoGlobal.nombre}`;
            document.querySelector(".title-name").textContent = productoGlobal.nombre;
            document.querySelector(".product-name").textContent = productoGlobal.nombre;
            document.querySelector(".product-price").textContent = productoGlobal.precio;
            document.querySelector(".product-description").textContent = productoGlobal.descripcion;
            document.querySelector(".product-stock").textContent = productoGlobal.stock
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

        slider(productoGlobal, getFullImageUrl);
    }
}

// Iniciar el proceso
initializeProduct();


// --- STRIPE CHECKOUT FRONTEND ---

document.querySelector('.buy-btn').addEventListener('click', handlePurchase);

async function handlePurchase() {
    if (productoGlobal) {
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: productoGlobal.nombre,
                    price: productoGlobal.precio * 100, // Convertir a centavos
                    quantity: 1, // O la cantidad que desees
                }),
            });

            const { id: sessionId } = await response.json();

            // Usar la clave pública de Stripe definida globalmente
            const stripe = Stripe(window.STRIPE_PUBLIC_KEY);
            const { error } = await stripe.redirectToCheckout({ sessionId });

            if (error) {
                console.error('Error al redirigir a Checkout:', error);
            }
        } catch (error) {
            console.error('Error al crear la sesión de pago:', error);
        }
    }
}