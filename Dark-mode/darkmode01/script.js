const body = document.querySelector('.body');
const main = document.querySelector('.main')
const swipe = document.querySelector('.swipe');
const title = document.querySelector('.title')

swipe.addEventListener('click', () => {

    swipe.classList.toggle('toggle')
    body.classList.toggle('dark')
    main.classList.toggle('dark')
    title.classList.toggle('dark')
    
})