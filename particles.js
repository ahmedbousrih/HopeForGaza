document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('particle-container');
    let currentParticle = null;
    let isClicked = false;

    // Create the particle once
    currentParticle = document.createElement('div');
    currentParticle.className = 'particle';
    const size = 6;
    currentParticle.style.width = `${size}px`;
    currentParticle.style.height = `${size}px`;
    container.appendChild(currentParticle);

    // Track mouse position
    function updatePosition(e) {
        requestAnimationFrame(() => {
            currentParticle.style.left = `${e.clientX}px`;
            currentParticle.style.top = `${e.clientY}px`;
        });
    }

    // Handle mouse movement with debounce
    let lastMove = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastMove >= 16) { // Approximately 60fps
            updatePosition(e);
            lastMove = now;
        }
    }, { passive: true });

    // Handle mouse click
    document.addEventListener('mousedown', () => {
        isClicked = true;
        currentParticle.classList.add('expand');
    });

    document.addEventListener('mouseup', () => {
        isClicked = false;
        currentParticle.classList.remove('expand');
    });
}); 