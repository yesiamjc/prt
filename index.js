// Scroll

document.addEventListener('DOMContentLoaded', function() {
    const footerRightBtn = document.querySelector('.footerRightBtn');
    
    if (footerRightBtn) {
        footerRightBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// hamburger


document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburgerBtn');
    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const closeBtn = document.querySelector('.closeBtn');

    hamburgerBtn.addEventListener('click', function() {
        hamburgerMenu.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        hamburgerMenu.style.display = 'none';
    });
});