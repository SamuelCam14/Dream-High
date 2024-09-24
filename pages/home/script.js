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

// Extraer productos con stock disponible
const availableProducts = products.filter(product => product.stock > 0);

const dynamicProductContainer = document.querySelector('.carousel-container');
const selectedProducts = [];

// Seleccionamos 5 productos al azar
while (selectedProducts.length < 5 && availableProducts.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableProducts.length);
    const randomProduct = availableProducts.splice(randomIndex, 1)[0];
    selectedProducts.push(randomProduct);
}

// Insertamos cada producto dentro de un <li>
selectedProducts.forEach(product => {
    const productCard = `
        <li class="splide__slide">
            <div class="card">
                <div class="product-image-container">
                    <img src="${product.imagen}" alt="${product.nombre}" data-id="${product.id}" class="product-image"/>
                </div>
                <div class="card-body">
                    <p class="card-text">${product.nombre}</p>
                    <p class="card-price">${product.precio}</p>
                </div>
            </div>
        </li>
    `;
    dynamicProductContainer.innerHTML += productCard;
});

// Inicializamos Splide después de cargar los productos
new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    breakpoints: {
        768: {
            perPage: 2,
            gap: '1rem',
            autoWidth: false,
        }
    },
    focus: 'center',
    gap: '2rem',
    autoWidth: true,
    classes: {
        arrows: 'splide__arrows',
        arrow: 'splide__arrow',
        prev: 'splide__arrow--prev',
        next: 'splide__arrow--next',
    },
    pagination: false,
}).mount(window.splide.Extensions);