// Nav Import

import { loadFragment } from "../../modules/fetchUtils.js";
loadFragment("/modules/navFooter/nav.html", "main-nav");

// Carga dinamica de productos carousel
const API_URL = "https://raw.githubusercontent.com/SamuelCam14/products-dreamhigh/main/products.json";

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

const products = await fetchProductsData();


// Extraer productos gorra con stock
const availableProducts = products.filter(product => product.stock > 0);

const dynamicProductContainer = document.querySelector('.carousel-track');
const selectedProducts = [];

while (selectedProducts.length < 5 && availableProducts.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableProducts.length);
    const randomProduct = availableProducts.splice(randomIndex, 1)[0];
    selectedProducts.push(randomProduct);
}

selectedProducts.forEach(product => {
    const productCard = `
        <div>
            <div class="card">
                <div class="product-image-container">
                    <img src="${product.imagen}" alt="${product.nombre}" data-id="${product.id}" class="product-image"/>
                </div>
                <div class="card-body">
                    <p class="card-text">${product.nombre}</p>
                    <p class="card-price">${product.precio}</p>
                </div>
            </div>
        </div>
    `;
    dynamicProductContainer.innerHTML += productCard;
});