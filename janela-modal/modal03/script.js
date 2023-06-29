const btn = document.querySelector('#btn')
const modal = document.querySelector('#modal-box')
const ok = document.querySelector('#ok')
const del = document.querySelector('#del')

ok.addEventListener('click', Close)
del.addEventListener('click', Close)

btn.addEventListener('click', () => {

    modal.classList.add('show')

})

function Close() {

    modal.classList.remove('show')

}