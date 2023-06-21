
let navbarList = document.querySelector('.navbar-list')
let icon = document.getElementById('icon')

navbarList.addEventListener('click', Clicou)
icon.addEventListener('click', Clicou)

function Clicou() {
    navbarList.classList.toggle('navbar-list--show-links')
    icon.classList.toggle('fa-xmark')
}