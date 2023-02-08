const openButton = document.getElementById('open')
const closeButton = document.getElementById('close')
const container = document.querySelector('.container')

openButton.addEventListener('click', () => {
    container.classList.add('show-nav')
})

closeButton.addEventListener('click', () => {
    container.classList.remove('show-nav')
})