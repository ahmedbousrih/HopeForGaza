// Check for saved theme preference, otherwise use system preference
const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Function to set theme
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update toggle button icon
    const toggleIcon = document.querySelector('#theme-toggle i');
    toggleIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
};

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const toggleIcon = document.querySelector('.toggle-icon');

    // Check for saved theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        toggleIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        
        console.log('Theme switched to:', newTheme); // Debug log
    });
}); 