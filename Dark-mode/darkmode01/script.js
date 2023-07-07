const body = document.querySelector('.body');
const main = document.querySelector('.main')
const swipe = document.querySelector('.swipe');

swipe.addEventListener('click', () => {

    swipe.classList.toggle('toggle')
    body.classList.toggle('dark')
    main.classList.toggle('dark')
    
})