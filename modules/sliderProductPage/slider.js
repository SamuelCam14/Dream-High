export function slider(productoGlobal, getFullImageUrl) {
    const sliderContainer = document.querySelector('.slider-container');
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    productoGlobal.imagenes = productoGlobal.imagenes.map(imagen => getFullImageUrl(imagen));

    let currentIndex = 0;
    let startX, startY;
    let isDragging = false;
    let lastTapTime = 0;

    productoGlobal.imagenes.forEach((src, index) => {
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
        slider.style.transition = animate ? 'transform 0.3s ease-out' : 'none';
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function handleDragStart(e) {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        isDragging = true;
        slider.style.transition = 'none';
    }

    function handleDragMove(e) {
        if (!isDragging) return;
        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        // Detectar si el movimiento es más horizontal que vertical
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault(); // Prevenir scroll solo si el movimiento es más horizontal
            slider.style.transform = `translateX(calc(-${currentIndex * 100}% + ${deltaX}px))`;
        }
    }

    function handleDragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - startX;
        const threshold = sliderContainer.offsetWidth / 5; // Mantenemos el umbral reducido

        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0 && currentIndex > 0) {
                currentIndex--;
            } else if (deltaX < 0 && currentIndex < productoGlobal.imagenes.length - 1) {
                currentIndex++;
            }
        }
        updateSlider();
    }

    function handleDoubleTap(e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTapTime;
        if (tapLength < 300 && tapLength > 0) {
            e.preventDefault();
            // Aquí puedes agregar alguna acción para el doble toque si lo deseas
        }
        lastTapTime = currentTime;
    }

    sliderContainer.addEventListener('touchstart', handleDragStart, { passive: true });
    sliderContainer.addEventListener('touchmove', handleDragMove, { passive: false });
    sliderContainer.addEventListener('touchend', handleDragEnd);

    sliderContainer.addEventListener('touchend', handleDoubleTap);

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + productoGlobal.imagenes.length) % productoGlobal.imagenes.length;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % productoGlobal.imagenes.length;
        updateSlider();
    });

    window.addEventListener('resize', () => {
        updateSlider(false);
    });

    updateSlider();
}