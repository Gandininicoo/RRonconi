const menuBtn = document.getElementById('menuBtn');
const menuResponsive = document.getElementById('menuResponsive')
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('flipped');
    menuResponsive.classList.toggle('menuShow')
}, false);