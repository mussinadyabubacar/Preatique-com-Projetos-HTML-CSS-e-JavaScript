const body = document.querySelector('.body');
const swipe = document.querySelector('.swipe');

swipe.addEventListener('click', () => {

    swipe.classList.toggle('toggle')
    body.classList.toggle('dark')
    
})