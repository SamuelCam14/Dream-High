// Nav Load
import { loadFragment } from "../../modules/fetchUtils.js";
loadFragment('../../modules/navFooter/nav.html', 'main-nav')

// Image URL
import { getFullImageUrl } from "../../modules/fetchUtils.js";


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


// Slider JS - Crear modulo cuanto ANTES! 
function updateUI() {
    if (productoGlobal) {
        console.log('Actualizando UI con:', productoGlobal.nombre);


        // Slider JS
        const slider = document.querySelector('.slider');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const dotsContainer = document.querySelector('.dots');

        productoGlobal.imagenes.forEach((imagen, index) => {
            const fullImageUrl = getFullImageUrl(imagen);  // Aplicamos la función a cada ruta
            productoGlobal.imagenes[index] = fullImageUrl;  // Actualizamos la ruta en el array
        });

        const images = productoGlobal.imagenes;
        console.log(images);


        let currentIndex = 0;
        let startX;
        let isSwiping = false;
        let slideWidth;

        // Crear elementos de imagen y puntos
        images.forEach((src, index) => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Imagen de producto ${index + 1}`;
            slide.appendChild(img);
            slider.appendChild(slide);

            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        function updateSlider(animate = true) {
            if (animate) {
                slider.style.transition = 'transform 0.3s ease-out';
            } else {
                slider.style.transition = 'none';
            }
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        });

        // Manejo de eventos táctiles
        let touchStartTime;
        let touchEndTime;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            touchStartTime = new Date().getTime();
            isSwiping = true;
            slideWidth = slider.clientWidth;
            slider.style.transition = 'none';
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;
            const currentX = e.touches[0].clientX;
            const diff = startX - currentX;
            const translateX = -currentIndex * slideWidth - diff;
            slider.style.transform = `translateX(${translateX}px)`;
        });

        slider.addEventListener('touchend', (e) => {
            if (!isSwiping) return;
            isSwiping = false;
            touchEndTime = new Date().getTime();

            const touchDuration = touchEndTime - touchStartTime;
            const diff = startX - e.changedTouches[0].clientX;
            const swipeSpeed = Math.abs(diff) / touchDuration;

            const sensitivityThreshold = 0.2;
            const speedThreshold = 0.3;

            if (Math.abs(diff) > slideWidth * sensitivityThreshold || swipeSpeed > speedThreshold) {
                if (diff > 0) {
                    currentIndex = (currentIndex + 1) % images.length;
                } else {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                }
            }

            updateSlider();
        });

        // Ajustar el slider cuando cambia el tamaño de la ventana
        window.addEventListener('resize', () => {
            updateSlider(false);
        });

        // Inicializar el slider
        updateSlider();
    }
}

// Iniciar el proceso
initializeProduct();