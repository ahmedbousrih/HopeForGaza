let currentPage = 1;
const totalPages = 2; // Update this number when adding more pages

function changePage(direction) {
    // Hide current page
    document.getElementById(`gallery-page-${currentPage}`).classList.add('hidden');
    
    // Calculate new page
    if (direction === 'next') {
        currentPage = currentPage === totalPages ? 1 : currentPage + 1;
    } else {
        currentPage = currentPage === 1 ? totalPages : currentPage - 1;
    }
    
    // Show new page
    document.getElementById(`gallery-page-${currentPage}`).classList.remove('hidden');
    
    // Update dots
    updatePaginationDots();
}

function updatePaginationDots() {
    // Remove active class from all dots
    document.querySelectorAll('.page-dot').forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Add active class to current dot
    document.querySelector(`.page-dot[data-page="${currentPage}"]`).classList.add('active');
}

// Add click handlers to dots
document.querySelectorAll('.page-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const newPage = parseInt(dot.dataset.page);
        document.getElementById(`gallery-page-${currentPage}`).classList.add('hidden');
        document.getElementById(`gallery-page-${newPage}`).classList.remove('hidden');
        currentPage = newPage;
        updatePaginationDots();
    });
}); 