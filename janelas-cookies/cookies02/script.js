const cookieBox = document.querySelector('#cookie-box')
const btnCancelar = document.querySelector('#cancelar')
const btnConfirm = document.querySelector('#confirm')

if (localStorage.msgCookie !== 'No' && localStorage.msgCookie !== 'Yes') {

    cookieBox.classList.add('show')

}


window.addEventListener('load', () => {

    if (localStorage.msgCookie == 'No') {

        cookieBox.classList.add('show')

    }

})

btnCancelar.addEventListener('click', () => {

    localStorage.msgCookie = 'No'

    cookieBox.classList.remove('show')

})

btnConfirm.addEventListener('click', () => {

    localStorage.msgCookie = 'Yes'

    cookieBox.classList.remove('show')

})

