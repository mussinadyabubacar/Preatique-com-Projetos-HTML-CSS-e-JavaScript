const confirmBtn = document.querySelector('#confirm')
const cookieBox = document.querySelector('#cookie-box')


if (localStorage.msgCookie !== 'yes') {

    cookieBox.classList.add('show')

} else {

    cookieBox.classList.remove('show')

}


confirmBtn.addEventListener('click', () => {

    localStorage.msgCookie = 'yes'

    cookieBox.classList.remove('show')
    
})