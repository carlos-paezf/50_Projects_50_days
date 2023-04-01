const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');


openBtn.addEventListener('click', () => {
    nav.forEach(navElement => navElement.classList.add('visible'));
});


closeBtn.addEventListener('click', () => {
    nav.forEach(navElement => navElement.classList.remove('visible'));
});