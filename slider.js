document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-image');
    const textContents = document.querySelectorAll('.text-content');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all slides and text content
        slides.forEach(slide => slide.classList.remove('active'));
        textContents.forEach(content => content.classList.remove('active'));

        // Show current slide and text content
        slides[index].classList.add('active');
        textContents[index].classList.add('active');

        // Update content background size
        const contentBackground = document.querySelector('.content-background');
        contentBackground.style.width = 'fit-content';
        contentBackground.style.height = 'fit-content';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide every 10 seconds
    setInterval(nextSlide, 10000);

    // Show initial slide
    showSlide(0);
}); 