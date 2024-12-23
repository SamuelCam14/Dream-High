const stripe = Stripe(window.STRIPE_PUBLIC_KEY);

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
            setupBuyButton();
            sizeDisplay();
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
            try {
                // Convertir el precio a un número con decimales (no centavos)
                const priceInDecimal = convertPriceToDecimal(productoGlobal.precio);

                if (isNaN(priceInDecimal)) {
                    throw new Error('Precio inválido');
                }

                const response = await fetch('/api/create-checkout-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: productoGlobal.nombre,
                        price: priceInDecimal,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error al crear la sesión de checkout');
                }

                const { id: sessionId } = await response.json();

                const stripe = Stripe(window.STRIPE_PUBLIC_KEY);
                const { error } = await stripe.redirectToCheckout({ sessionId });

                if (error) {
                    console.error('Error:', error);
                    alert('Hubo un error al procesar tu pago. Por favor, intenta de nuevo.');
                }

            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error al procesar tu pago. Por favor, intenta de nuevo.');
            }
        };
    }
}

function convertPriceToDecimal(priceString) {
    // Eliminar el signo de dólar y las comas
    const cleanPrice = priceString.replace(/[$,]/g, '');
    // Convertir a float
    return parseFloat(cleanPrice);
}

// Iniciar el proceso
initializeProduct();

// Tallas para Sneakers
const sizeDisplay = () => {
    const sizes = productoGlobal.infoAdicional;
    const sizeContainer = document.querySelector('.size-selector');

    if (sizes.length >= 1) {
        const label = document.createElement('label');
        label.setAttribute('for', 'sizes');
        label.textContent = 'Selecciona tu talla:';
        sizeContainer.appendChild(label);

        const select = document.createElement('select');
        select.id = 'sizes';
        select.className = 'size-dropdown';
        sizeContainer.appendChild(select);

        for (const size of sizes) {
            console.log(size);

            const option = document.createElement('option');
            option.value = size.talla;
            option.textContent = size.talla;
            document.querySelector('.size-dropdown').appendChild(option);
        };
    }

};