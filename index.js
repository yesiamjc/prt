document.addEventListener('DOMContentLoaded', function() {
    const footerRightBtn = document.querySelector('.footerRightBtn');
    
    if (footerRightBtn) {
        footerRightBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});