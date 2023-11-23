document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector('.carrossel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    function showSlide(index) {
        carrossel.style.transform = `translateX(-${index * 100}%)`;
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + 3) % 3;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 3;
        showSlide(currentIndex);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
});
