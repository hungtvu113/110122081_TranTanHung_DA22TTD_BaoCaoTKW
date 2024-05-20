document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.images img');
    const infoBox = document.querySelector('.info-box');

    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            const info = this.getAttribute('data-info');
            infoBox.textContent = info;
            infoBox.style.display = 'block';
        });

        image.addEventListener('mouseleave', function() {
            infoBox.style.display = 'none';
        });
    });
});
