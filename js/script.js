// const swiper = document.querySelector('.swiper').swiper;
const openSearchBtn = document.getElementById('open-search');
const searchArea = document.querySelector('.nav__search');
const navItems = document.querySelector('.nav__items');
const closeSearchBtn = document.getElementById('close-search-btn');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

openSearchBtn.addEventListener('click', () => {
    openSearchBtn.style.display = 'none';
    navItems.style.display = 'none';
    searchArea.style.display = 'block';
});

closeSearchBtn.addEventListener('click', (e) => {
    openSearchBtn.style.display = 'block';
    navItems.style.display = 'flex';
    searchArea.style.display = 'none';
    e.preventDefault();
})